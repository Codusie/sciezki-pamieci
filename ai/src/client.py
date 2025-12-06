#!/usr/bin/env python3
"""
Example client for testing the Bydgoszcz LLM Tour Guide API
Demonstrates how to interact with the API
"""

import requests
import json
import sys
from typing import Optional


class BydgoszczTourGuideClient:
    """Client for interacting with the tour guide API"""
    
    def __init__(self, base_url: str = "http://localhost:5000"):
        self.base_url = base_url
        self.session_id: Optional[str] = None
    
    def health_check(self) -> bool:
        """Check if API is healthy"""
        try:
            response = requests.get(f"{self.base_url}/health")
            return response.status_code == 200
        except Exception as e:
            print(f"❌ Health check failed: {e}")
            return False
    
    def get_landmarks(self) -> list:
        """Get list of available landmarks"""
        try:
            response = requests.get(f"{self.base_url}/landmarks")
            if response.status_code == 200:
                return response.json().get('landmarks', [])
            else:
                print(f"❌ Error: {response.json()}")
                return []
        except Exception as e:
            print(f"❌ Failed to get landmarks: {e}")
            return []
    
    def chat(self, persona: str, landmark: str, query: str) -> Optional[str]:
        """Send a chat query and get response"""
        try:
            payload = {
                "persona": persona,
                "landmark": landmark,
                "query": query
            }
            
            if self.session_id:
                payload["session_id"] = self.session_id
            
            response = requests.post(
                f"{self.base_url}/chat",
                json=payload
            )
            
            if response.status_code == 200:
                data = response.json()
                self.session_id = data.get('session_id')
                return data.get('response')
            else:
                print(f"❌ Error: {response.json()}")
                return None
        except Exception as e:
            print(f"❌ Chat request failed: {e}")
            return None
    
    def get_session(self) -> Optional[dict]:
        """Get current session history"""
        if not self.session_id:
            print("❌ No active session")
            return None
        
        try:
            response = requests.get(f"{self.base_url}/session/{self.session_id}")
            if response.status_code == 200:
                return response.json()
            else:
                print(f"❌ Error: {response.json()}")
                return None
        except Exception as e:
            print(f"❌ Failed to get session: {e}")
            return None
    
    def get_stats(self) -> Optional[dict]:
        """Get API statistics"""
        try:
            response = requests.get(f"{self.base_url}/stats")
            if response.status_code == 200:
                return response.json()
            else:
                print(f"❌ Error: {response.json()}")
                return None
        except Exception as e:
            print(f"❌ Failed to get stats: {e}")
            return None


def interactive_mode():
    """Run interactive chat session"""
    
    print("\n🏛️  Bydgoszcz LLM Tour Guide API - Interactive Mode")
    print("=" * 50)
    
    client = BydgoszczTourGuideClient()
    
    # Check API health
    if not client.health_check():
        print("❌ API is not available. Make sure the server is running.")
        sys.exit(1)
    
    print("✅ Connected to API")
    
    # Get available landmarks
    landmarks = client.get_landmarks()
    if not landmarks:
        print("❌ No landmarks available")
        sys.exit(1)
    
    print(f"\n📍 Available Landmarks:")
    for i, landmark in enumerate(landmarks, 1):
        print(f"   {i}. {landmark}")
    
    # Get user input
    print("\n👤 Enter your information:")
    persona = input("Persona (e.g., history enthusiast, architect, tourist): ").strip()
    if not persona:
        persona = "general tourist"
    
    landmark_idx = input(f"Choose landmark (1-{len(landmarks)}): ").strip()
    try:
        landmark = landmarks[int(landmark_idx) - 1]
    except (ValueError, IndexError):
        landmark = landmarks[0]
    
    print(f"\n💬 Chatting about: {landmark} as {persona}")
    print("-" * 50)
    
    # Interactive conversation loop
    while True:
        query = input("\n📝 Your question (or 'quit' to exit): ").strip()
        
        if query.lower() in ['quit', 'exit', 'q']:
            print("\n👋 Goodbye!")
            break
        
        if not query:
            continue
        
        print("\n🤔 Thinking...")
        response = client.chat(persona, landmark, query)
        
        if response:
            print(f"\n🎯 Guide says:")
            print("-" * 50)
            print(response)
            print("-" * 50)
        else:
            print("❌ No response received")
    
    # Show session summary
    session = client.get_session()
    if session:
        print(f"\n📊 Session Summary:")
        print(f"   Messages: {session.get('message_count', 0)}")
        print(f"   Duration: {session.get('created_at')} to {session.get('last_activity')}")


def demo_mode():
    """Run demo with predefined queries"""
    
    print("\n🏛️  Bydgoszcz LLM Tour Guide API - Demo Mode")
    print("=" * 50)
    
    client = BydgoszczTourGuideClient()
    
    # Check API health
    if not client.health_check():
        print("❌ API is not available")
        return
    
    print("✅ API is healthy\n")
    
    # Show stats
    stats = client.get_stats()
    if stats:
        print(f"📊 API Stats:")
        print(f"   Active Sessions: {stats.get('active_sessions', 0)}")
        print(f"   Total Landmarks: {stats.get('total_landmarks', 0)}\n")
    
    # Demo queries
    demo_queries = [
        {
            "persona": "history enthusiast",
            "landmark": "Cathedral Basilica of Our Lady",
            "query": "What is the historical significance of this cathedral?"
        },
        {
            "persona": "architect",
            "landmark": "Leandro's Mill",
            "query": "Tell me about the architectural style and design"
        },
        {
            "persona": "student",
            "landmark": "Water Canal",
            "query": "Why was the canal built and what was its importance?"
        }
    ]
    
    for i, query_data in enumerate(demo_queries, 1):
        print(f"\n📍 Demo Query {i}:")
        print(f"   Persona: {query_data['persona']}")
        print(f"   Landmark: {query_data['landmark']}")
        print(f"   Question: {query_data['query']}")
        print("   " + "-" * 40)
        
        response = client.chat(
            query_data['persona'],
            query_data['landmark'],
            query_data['query']
        )
        
        if response:
            # Truncate long responses for demo
            if len(response) > 200:
                print(f"   Response: {response[:200]}...\n")
            else:
                print(f"   Response: {response}\n")
        else:
            print("   ❌ No response\n")


if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Bydgoszcz Tour Guide API Client")
    parser.add_argument("--mode", choices=["interactive", "demo"], default="interactive",
                       help="Operation mode (default: interactive)")
    parser.add_argument("--url", default="http://localhost:5000",
                       help="API base URL (default: http://localhost:5000)")
    
    args = parser.parse_args()
    
    if args.mode == "demo":
        demo_mode()
    else:
        interactive_mode()
