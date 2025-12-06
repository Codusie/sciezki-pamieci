"""
Bydgoszcz LLM-Powered Tour Guide API
A Flask application providing personalized landmark explanations based on user personas
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from typing import Dict, Any
import logging
from datetime import datetime

from config.config import config
from src.document_store import document_store
from src.session_manager import session_manager
from src.llm_client import generate_landmark_response, LLMClient
from src.sample_documents import SAMPLE_DOCUMENTS


# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def create_app():
    """Factory function to create and configure Flask app"""
    
    app = Flask(__name__)
    CORS(app)
    
    # Initialize LLM client with configured provider
    try:
        LLMClient.initialize()
        logger.info(f"Initialized LLM client with provider: {config.LLM_PROVIDER} (model: {config.LLM_MODEL})")
    except Exception as e:
        logger.error(f"Failed to initialize LLM client: {str(e)}")
        raise
    
    # Load sample documents on startup
    document_store.add_documents(SAMPLE_DOCUMENTS)
    logger.info(f"Loaded {len(SAMPLE_DOCUMENTS)} landmark documents")
    
    # ==================== ROUTES ====================
    
    @app.route('/health', methods=['GET'])
    def health_check():
        """Health check endpoint"""
        return jsonify({
            "status": "healthy",
            "timestamp": datetime.now().isoformat(),
            "active_sessions": session_manager.get_active_sessions_count()
        }), 200
    
    
    @app.route('/landmarks', methods=['GET'])
    def get_landmarks():
        """Get list of available landmarks"""
        landmarks = list(SAMPLE_DOCUMENTS.keys())
        return jsonify({
            "landmarks": landmarks,
            "count": len(landmarks)
        }), 200
    
    
    @app.route('/chat', methods=['POST'])
    def chat():
        """
        Main chat endpoint for landmark explanation
        
        Expected JSON payload:
        {
            "session_id": "optional-session-id",
            "persona": "tourist type/interests",
            "landmark": "landmark name",
            "query": "user's question"
        }
        """
        try:
            data = request.get_json()
            
            # Validate required fields
            if not data:
                return jsonify({"error": "No JSON data provided"}), 400
            
            persona = data.get("persona")
            landmark = data.get("landmark")
            query = data.get("query")
            session_id = data.get("session_id")
            
            if not all([persona, landmark, query]):
                return jsonify({
                    "error": "Missing required fields: persona, landmark, query"
                }), 400
            
            # Check if landmark exists in our documents
            if landmark not in SAMPLE_DOCUMENTS:
                return jsonify({
                    "error": f"Landmark '{landmark}' not found. Available landmarks: {list(SAMPLE_DOCUMENTS.keys())}"
                }), 404
            
            # Create or retrieve session
            session = session_manager.create_session(session_id, persona, landmark)
            
            # Retrieve relevant context from documents
            relevant_context = document_store.retrieve_relevant_context(query, top_k=2)
            
            if not relevant_context:
                # Fallback to landmark document if no relevant context found
                landmark_doc = document_store.get_document(landmark)
                relevant_context = [(landmark, landmark_doc, 1.0)] if landmark_doc else []
            
            # Get conversation history
            conversation_history = session.get_history()
            
            # Generate response
            response_text = generate_landmark_response(
                session_data={
                    "persona": persona,
                    "landmark": landmark
                },
                user_query=query,
                relevant_context=relevant_context,
                conversation_history=conversation_history
            )
            
            # Store messages in session
            session.add_message("user", query)
            session.add_message("assistant", response_text)
            
            return jsonify({
                "session_id": session.session_id,
                "landmark": landmark,
                "persona": persona,
                "query": query,
                "response": response_text,
                "timestamp": datetime.now().isoformat(),
                "conversation_length": len(session.conversation_history)
            }), 200
        
        except ValueError as e:
            logger.error(f"Configuration error: {str(e)}")
            return jsonify({"error": f"Configuration error: {str(e)}"}), 500
        except Exception as e:
            logger.error(f"Error processing chat request: {str(e)}", exc_info=True)
            return jsonify({"error": f"Internal server error: {str(e)}"}), 500
    
    
    @app.route('/session/<session_id>', methods=['GET'])
    def get_session(session_id):
        """Get conversation history for a session"""
        try:
            session = session_manager.get_session(session_id)
            
            if not session:
                return jsonify({"error": f"Session {session_id} not found"}), 404
            
            return jsonify({
                "session_id": session.session_id,
                "persona": session.persona,
                "landmark": session.landmark,
                "created_at": session.created_at.isoformat(),
                "last_activity": session.last_activity.isoformat(),
                "conversation_history": session.get_history(),
                "message_count": len(session.conversation_history)
            }), 200
        
        except Exception as e:
            logger.error(f"Error retrieving session: {str(e)}")
            return jsonify({"error": f"Error retrieving session: {str(e)}"}), 500
    
    
    @app.route('/session/<session_id>', methods=['DELETE'])
    def delete_session(session_id):
        """Delete a session"""
        try:
            if session_manager.remove_session(session_id):
                return jsonify({
                    "message": f"Session {session_id} deleted successfully"
                }), 200
            else:
                return jsonify({
                    "error": f"Session {session_id} not found"
                }), 404
        
        except Exception as e:
            logger.error(f"Error deleting session: {str(e)}")
            return jsonify({"error": f"Error deleting session: {str(e)}"}), 500
    
    
    @app.route('/sessions/cleanup', methods=['POST'])
    def cleanup_sessions():
        """Clean up inactive sessions"""
        try:
            timeout = request.json.get("timeout_minutes", 30) if request.json else 30
            removed_count = session_manager.cleanup_inactive_sessions(timeout)
            
            return jsonify({
                "message": f"Cleaned up {removed_count} inactive sessions",
                "timeout_minutes": timeout,
                "active_sessions_remaining": session_manager.get_active_sessions_count()
            }), 200
        
        except Exception as e:
            logger.error(f"Error cleaning up sessions: {str(e)}")
            return jsonify({"error": f"Error cleaning up sessions: {str(e)}"}), 500
    
    
    @app.route('/stats', methods=['GET'])
    def get_stats():
        """Get API statistics"""
        return jsonify({
            "active_sessions": session_manager.get_active_sessions_count(),
            "total_landmarks": len(SAMPLE_DOCUMENTS),
            "available_landmarks": list(SAMPLE_DOCUMENTS.keys()),
            "api_version": "1.0.0",
            "timestamp": datetime.now().isoformat()
        }), 200
    
    
    # Error handlers
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({"error": "Endpoint not found"}), 404
    
    @app.errorhandler(500)
    def internal_error(error):
        logger.error(f"Internal server error: {str(error)}")
        return jsonify({"error": "Internal server error"}), 500
    
    
    return app

# Expose a module-level WSGI `app` for Gunicorn / other WSGI servers
# This will create the app at import time (which is fine for containerized runs).
app = create_app()


if __name__ == '__main__':
    # Only call run when invoked directly. Gunicorn will import the module
    # and use the module-level `app` created above.
    debug_mode = config.DEBUG or config.FLASK_ENV == "development"
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=debug_mode
    )
