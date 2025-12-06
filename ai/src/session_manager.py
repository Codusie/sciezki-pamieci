"""
Session management for tracking user conversations
Supports multiple concurrent users with different personae
"""

from typing import Dict, List, Optional
from datetime import datetime
import uuid
import logging

logger = logging.getLogger(__name__)


class UserSession:
    """Represents a single user's conversation session"""
    
    def __init__(self, session_id: str, persona: str, landmark: str):
        self.session_id = session_id
        self.persona = persona
        self.landmark = landmark
        self.created_at = datetime.now()
        self.last_activity = datetime.now()
        self.conversation_history: List[Dict[str, str]] = []
        
    def add_message(self, role: str, content: str) -> None:
        """Add a message to the conversation history"""
        self.conversation_history.append({
            "role": role,
            "content": content,
            "timestamp": datetime.now().isoformat()
        })
        self.last_activity = datetime.now()
        
    def get_history(self) -> List[Dict[str, str]]:
        """Get conversation history"""
        return self.conversation_history
    
    def get_recent_context(self, last_n: int = 5) -> str:
        """Get recent conversation for context (last n messages)"""
        recent = self.conversation_history[-last_n:] if self.conversation_history else []
        context = ""
        for msg in recent:
            context += f"{msg['role']}: {msg['content']}\n"
        return context

# TODO autoremove old sessions after inactivity
class SessionManager:
    """Manages all active user sessions"""
    
    def __init__(self):
        self.sessions: Dict[str, UserSession] = {}
        
    def create_session(self, session_id: Optional[str], persona: str, landmark: str) -> UserSession:
        """Create a new session or return existing one"""
        if not session_id:
            session_id = str(uuid.uuid4())
            
        if session_id not in self.sessions:
            self.sessions[session_id] = UserSession(session_id, persona, landmark)
        else:
            # Update persona and landmark if provided for existing session
            self.sessions[session_id].persona = persona
            self.sessions[session_id].landmark = landmark
            
        return self.sessions[session_id]
    
    def get_session(self, session_id: str) -> Optional[UserSession]:
        """Get an existing session"""
        return self.sessions.get(session_id)
    
    def session_exists(self, session_id: str) -> bool:
        """Check if a session exists"""
        return session_id in self.sessions
    
    def remove_session(self, session_id: str) -> bool:
        """Remove a session"""
        if session_id in self.sessions:
            del self.sessions[session_id]
            return True
        return False
    
    def get_active_sessions_count(self) -> int:
        """Get number of active sessions"""
        return len(self.sessions)
    
    def cleanup_inactive_sessions(self, timeout_minutes: int = 30) -> int:
        """Remove sessions inactive for more than timeout_minutes"""
        from datetime import timedelta
        timeout = timedelta(minutes=timeout_minutes)
        now = datetime.now()
        
        inactive_sessions = [
            sid for sid, session in self.sessions.items()
            if (now - session.last_activity) > timeout
        ]
        
        for sid in inactive_sessions:
            del self.sessions[sid]
            
        return len(inactive_sessions)


# Global session manager instance
session_manager = SessionManager()
