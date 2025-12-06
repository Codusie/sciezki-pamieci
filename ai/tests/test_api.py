"""
Test suite for Bydgoszcz LLM Tour Guide API
Tests core functionality without requiring OpenAI API calls
"""

import unittest
import json
from unittest.mock import patch, MagicMock
import pandas as pd

from src.document_store import DocumentStore
from src.session_manager import SessionManager
from app import create_app


class TestDocumentStore(unittest.TestCase):
    """Test document storage and retrieval"""
    
    def setUp(self):
        self.store = DocumentStore()
        self.store.add_documents('data/landmarks.csv')

    def test_add_documents(self):
        """Test adding documents"""
        no_docs = len(pd.read_csv('data/landmarks.csv'))
        self.assertIn("Test Landmark", self.store.documents)
        self.assertEqual(len(self.store.documents), no_docs)
    
    def test_get_document(self):
        """Test retrieving a document"""
        doc = self.store.get_document("Test Landmark")
        self.assertIn("architecture", doc)
    
    def test_retrieve_relevant_context(self):
        """Test semantic search"""
        results = self.store.retrieve_relevant_context("architecture and design")
        self.assertGreater(len(results), 0)
        self.assertGreater(results[0][2], 0)  # Score should be positive
    
    def test_retrieve_no_matches(self):
        """Test with empty store"""
        empty_store = DocumentStore()
        results = empty_store.retrieve_relevant_context("anything")
        self.assertEqual(len(results), 0)


class TestSessionManager(unittest.TestCase):
    """Test session management"""
    
    def setUp(self):
        self.manager = SessionManager()
    
    def test_create_session(self):
        """Test creating a new session"""
        session = self.manager.create_session(None, "history enthusiast", "Test Landmark")
        self.assertIsNotNone(session.session_id)
        self.assertEqual(session.persona, "history enthusiast")
        self.assertEqual(session.landmark, "Test Landmark")
    
    def test_create_session_with_id(self):
        """Test creating session with specific ID"""
        session = self.manager.create_session("test-123", "tourist", "Landmark")
        self.assertEqual(session.session_id, "test-123")
    
    def test_session_exists(self):
        """Test checking session existence"""
        self.manager.create_session("test-456", "tourist", "Landmark")
        self.assertTrue(self.manager.session_exists("test-456"))
        self.assertFalse(self.manager.session_exists("nonexistent"))
    
    def test_add_message(self):
        """Test adding messages to session"""
        session = self.manager.create_session(None, "tourist", "Landmark")
        session.add_message("user", "Tell me about this place")
        session.add_message("assistant", "This is a famous landmark...")
        
        self.assertEqual(len(session.conversation_history), 2)
        self.assertEqual(session.conversation_history[0]["role"], "user")
    
    def test_remove_session(self):
        """Test removing a session"""
        self.manager.create_session("test-789", "tourist", "Landmark")
        removed = self.manager.remove_session("test-789")
        self.assertTrue(removed)
        self.assertFalse(self.manager.session_exists("test-789"))
    
    def test_get_active_sessions_count(self):
        """Test counting active sessions"""
        self.manager.create_session("s1", "tourist", "L1")
        self.manager.create_session("s2", "student", "L2")
        self.assertEqual(self.manager.get_active_sessions_count(), 2)


class TestFlaskApp(unittest.TestCase):
    """Test Flask application endpoints"""
    
    def setUp(self):
        self.app = create_app()
        self.client = self.app.test_client()
    
    def test_health_check(self):
        """Test health check endpoint"""
        response = self.client.get('/health')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['status'], 'healthy')
    
    def test_get_landmarks(self):
        """Test landmarks endpoint"""
        response = self.client.get('/landmarks')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertIn('landmarks', data)
        self.assertGreater(data['count'], 0)
    
    def test_chat_missing_fields(self):
        """Test chat endpoint with missing required fields"""
        response = self.client.post(
            '/chat',
            data=json.dumps({"persona": "tourist"}),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 400)
    
    def test_chat_invalid_landmark(self):
        """Test chat endpoint with invalid landmark"""
        response = self.client.post(
            '/chat',
            data=json.dumps({
                "persona": "tourist",
                "landmark": "NonexistentPlace",
                "query": "Tell me about it"
            }),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 404)
    
    @patch('src.llm_client.LLMClient.generate_response')
    def test_chat_successful(self, mock_generate):
        """Test successful chat request"""
        mock_generate.return_value = "This is a test response"
        
        response = self.client.post(
            '/chat',
            data=json.dumps({
                "persona": "tourist",
                "landmark": "Cathedral Basilica of Our Lady",
                "query": "Tell me about the history"
            }),
            content_type='application/json'
        )
        
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertIn('session_id', data)
        self.assertIn('response', data)
    
    def test_session_history(self):
        """Test getting session history"""
        # First create a session by making a chat request
        with patch('src.llm_client.LLMClient.generate_response') as mock:
            mock.return_value = "Test response"
            chat_response = self.client.post(
                '/chat',
                data=json.dumps({
                    "persona": "tourist",
                    "landmark": "Cathedral Basilica of Our Lady",
                    "query": "Tell me about it"
                }),
                content_type='application/json'
            )
            session_id = json.loads(chat_response.data)['session_id']
        
        # Now retrieve the session
        response = self.client.get(f'/session/{session_id}')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['session_id'], session_id)
        self.assertGreater(data['message_count'], 0)
    
    def test_delete_session(self):
        """Test deleting a session"""
        # Create a session first
        with patch('src.llm_client.LLMClient.generate_response') as mock:
            mock.return_value = "Test"
            chat_response = self.client.post(
                '/chat',
                data=json.dumps({
                    "persona": "tourist",
                    "landmark": "Cathedral Basilica of Our Lady",
                    "query": "Tell me"
                }),
                content_type='application/json'
            )
            session_id = json.loads(chat_response.data)['session_id']
        
        # Delete it
        response = self.client.delete(f'/session/{session_id}')
        self.assertEqual(response.status_code, 200)
        
        # Verify it's gone
        response = self.client.get(f'/session/{session_id}')
        self.assertEqual(response.status_code, 404)
    
    def test_stats_endpoint(self):
        """Test stats endpoint"""
        response = self.client.get('/stats')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertIn('active_sessions', data)
        self.assertIn('total_landmarks', data)
        self.assertIn('available_landmarks', data)
    
    def test_404_not_found(self):
        """Test 404 error handling"""
        response = self.client.get('/nonexistent')
        self.assertEqual(response.status_code, 404)


if __name__ == '__main__':
    unittest.main()
