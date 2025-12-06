import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Application configuration"""
    DEBUG = os.getenv("DEBUG", False)
    FLASK_ENV = os.getenv("FLASK_ENV", "development")
    
    # LLM Provider Configuration
    # Options: openai, gpt, gemini, claude, ollama
    LLM_PROVIDER = os.getenv("LLM_PROVIDER", "openai")
    LLM_MODEL = os.getenv("LLM_MODEL", "gpt-4")
    
    # API Keys for different providers
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
    CLAUDE_API_KEY = os.getenv("CLAUDE_API_KEY")
    
    # Ollama Configuration
    OLLAMA_BASE_URL = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
    
    # Common LLM Settings
    MAX_TOKENS = int(os.getenv("MAX_TOKENS", 500))
    TEMPERATURE = float(os.getenv("TEMPERATURE", 0.5))
    
config = Config()
