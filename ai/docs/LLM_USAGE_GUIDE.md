# Model Agnostic LLM Client - Usage Examples

This document shows how to use the model-agnostic LLM client with different providers.

## Quick Configuration Examples

### 1. Using OpenAI GPT-4

**File: `.env`**
```env
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-proj-your-key-here
OPENAI_MODEL=gpt-4
TEMPERATURE=0.7
MAX_TOKENS=500
```

**Usage:**
```python
from llm_client import LLMClient, PromptEngineering

# Initialize with config
LLMClient.initialize()

# Generate response
response = LLMClient.generate_response(
    system_prompt="You are a helpful assistant",
    user_message="Explain Bydgoszcz history",
    conversation_history=[]
)
print(response)
```

### 2. Using Google Gemini

**File: `.env`**
```env
LLM_PROVIDER=gemini
GEMINI_API_KEY=AIzaSy-your-key-here
LLM_MODEL=gemini-1.5-pro
TEMPERATURE=0.7
MAX_TOKENS=500
```

**Usage:**
```python
from llm_client import LLMClient

# Initialize - automatically uses Gemini
LLMClient.initialize()

# Same API - provider is abstracted
response = LLMClient.generate_response(
    system_prompt="You are a tour guide",
    user_message="Tell me about landmarks",
    conversation_history=[]
)
```

### 3. Using Anthropic Claude

**File: `.env`**
```env
LLM_PROVIDER=claude
CLAUDE_API_KEY=sk-ant-your-key-here
LLM_MODEL=claude-3-sonnet
TEMPERATURE=0.7
MAX_TOKENS=500
```

**Usage:**
```python
from llm_client import LLMClient

LLMClient.initialize()

response = LLMClient.generate_response(
    system_prompt="You are knowledgeable about history",
    user_message="What is special about Cathedral in Bydgoszcz?",
    conversation_history=[]
)
```

### 4. Using Local Ollama

**Prerequisites:**
```bash
# Download and install Ollama from https://ollama.ai
# Start Ollama
ollama serve

# In another terminal, pull a model
ollama pull mistral
# or
ollama pull llama2
```

**File: `.env`**
```env
LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434
LLM_MODEL=mistral
TEMPERATURE=0.7
MAX_TOKENS=500
```

**Usage:**
```python
from llm_client import LLMClient

# No API key needed for local Ollama
LLMClient.initialize()

response = LLMClient.generate_response(
    system_prompt="You are a local tour guide",
    user_message="Describe local landmarks",
    conversation_history=[]
)
```

## Programmatic Provider Selection

Instead of using `.env`, you can create providers directly in code:

```python
from llm_client import LLMClientFactory, LLMClient

# Create OpenAI provider
provider = LLMClientFactory.create_provider(
    provider_type="openai",
    model="gpt-4-turbo",
    temperature=0.7,
    max_tokens=500,
    api_key="sk-..."
)
LLMClient.initialize(provider)

# Or create Gemini provider
provider = LLMClientFactory.create_provider(
    provider_type="gemini",
    model="gemini-1.5-pro",
    temperature=0.7,
    max_tokens=500,
    api_key="AIzaSy-..."
)
LLMClient.initialize(provider)

# Or create local Ollama provider
provider = LLMClientFactory.create_provider(
    provider_type="ollama",
    model="mistral",
    temperature=0.7,
    max_tokens=500,
    base_url="http://localhost:11434"
)
LLMClient.initialize(provider)
```

## Runtime Provider Switching

Switch providers without restarting:

```python
from llm_client import LLMClient

# Use default provider from .env
response1 = LLMClient.generate_response(
    system_prompt="System",
    user_message="Question",
    conversation_history=[]
)

# Override model at runtime
response2 = LLMClient.generate_response(
    system_prompt="System",
    user_message="Different question",
    conversation_history=[],
    model="gpt-3.5-turbo",  # Override
    temperature=0.5         # Override
)
```

## Using With Session Manager

Example: Using model-agnostic LLM with multi-user sessions

```python
from llm_client import generate_landmark_response
from session_manager import session_manager
from document_store import document_store

# Create/retrieve session (works with any LLM provider)
session = session_manager.create_session(
    session_id=None,
    persona="history enthusiast",
    landmark="Cathedral Basilica"
)

# Get relevant documents
context = document_store.retrieve_relevant_context(
    query="Tell me about history",
    top_k=3
)

# Generate response (uses configured LLM provider)
response = generate_landmark_response(
    session_data={
        "persona": "history enthusiast",
        "landmark": "Cathedral Basilica"
    },
    user_query="What is the significance?",
    relevant_context=context,
    conversation_history=session.get_history()
)

# Store in session
session.add_message("user", "What is the significance?")
session.add_message("assistant", response)

print(response)
```

## Complete Flask App Example

```python
from flask import Flask, request, jsonify
from llm_client import LLMClient, generate_landmark_response
from config import config

app = Flask(__name__)

# Initialize LLM on startup
@app.before_request
def init_llm():
    if not hasattr(app, 'llm_initialized'):
        LLMClient.initialize()
        app.llm_initialized = True
        print(f"LLM Provider: {config.LLM_PROVIDER}")
        print(f"Model: {config.LLM_MODEL}")

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    
    response = generate_landmark_response(
        session_data={
            "persona": data["persona"],
            "landmark": data["landmark"]
        },
        user_query=data["query"],
        relevant_context=[],
        conversation_history=[]
    )
    
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
```

## Comparing Providers in Code

```python
from llm_client import LLMClientFactory

# Test different providers with same prompt
system_prompt = "You are a helpful tour guide"
user_message = "Tell me 3 facts about Bydgoszcz"

providers = [
    ("openai", "gpt-3.5-turbo", "sk-..."),
    ("gemini", "gemini-1.5-pro", "AIzaSy-..."),
    ("claude", "claude-3-sonnet", "sk-ant-..."),
]

for provider_type, model, api_key in providers:
    try:
        provider = LLMClientFactory.create_provider(
            provider_type=provider_type,
            model=model,
            temperature=0.7,
            max_tokens=500,
            api_key=api_key
        )
        
        response = provider.generate_response(
            system_prompt,
            user_message,
            []
        )
        
        print(f"\n{provider_type.upper()} ({model}):")
        print(response)
    except Exception as e:
        print(f"Error with {provider_type}: {e}")
```

## Adding Custom Provider

To add a new LLM provider:

```python
# In llm_client.py
from llm_client import BaseLLMProvider, LLMClientFactory

class CustomLLMProvider(BaseLLMProvider):
    """Custom LLM provider for your service"""
    
    def __init__(self, model: str, temperature: float, max_tokens: int, api_key: str):
        super().__init__(model, temperature, max_tokens)
        self.api_key = api_key
    
    def generate_response(
        self,
        system_prompt: str,
        user_message: str,
        conversation_history: List[Dict[str, str]]
    ) -> str:
        """Implement your custom API call here"""
        messages = self._prepare_messages(
            system_prompt,
            user_message,
            conversation_history
        )
        
        # Call your API
        response = your_custom_api_call(
            messages=messages,
            model=self.model,
            temperature=self.temperature,
            max_tokens=self.max_tokens
        )
        
        return response

# Register the provider
LLMClientFactory._providers["custom"] = CustomLLMProvider

# Use it
from llm_client import LLMClientFactory
provider = LLMClientFactory.create_provider(
    provider_type="custom",
    model="your-model",
    temperature=0.7,
    max_tokens=500,
    api_key="your-api-key"
)
```

## Environment Setup for Each Provider

### OpenAI Setup
```bash
# 1. Get API key from https://platform.openai.com/api-keys
# 2. Install package
pip install openai

# 3. Create .env
cat > .env << EOF
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-proj-your-key
OPENAI_MODEL=gpt-4
EOF
```

### Gemini Setup
```bash
# 1. Get API key from https://makersuite.google.com/app/apikey
# 2. Install package
pip install google-generativeai

# 3. Create .env
cat > .env << EOF
LLM_PROVIDER=gemini
GEMINI_API_KEY=AIzaSy-your-key
LLM_MODEL=gemini-1.5-pro
EOF
```

### Claude Setup
```bash
# 1. Get API key from https://console.anthropic.com
# 2. Install package
pip install anthropic

# 3. Create .env
cat > .env << EOF
LLM_PROVIDER=claude
CLAUDE_API_KEY=sk-ant-your-key
LLM_MODEL=claude-3-sonnet
EOF
```

### Ollama Setup
```bash
# 1. Install Ollama from https://ollama.ai
# 2. Start Ollama
ollama serve

# 3. Pull model in another terminal
ollama pull mistral

# 4. Create .env (no API key needed)
cat > .env << EOF
LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434
LLM_MODEL=mistral
EOF
```

## Troubleshooting Provider Issues

### Provider Not Recognized
```python
# Check available providers
from llm_client import LLMClientFactory
print(LLMClientFactory._providers.keys())
# Output: dict_keys(['openai', 'gpt', 'gpt-3.5', 'gpt-4', 'gemini', 'claude', 'ollama'])
```

### Module Import Error
```python
# Install missing provider
# For OpenAI
pip install openai

# For Gemini
pip install google-generativeai

# For Claude
pip install anthropic

# For Ollama (no pip package needed, uses HTTP)
```

### API Key Issues
```python
# Verify API key is loaded
from config import config
print(config.OPENAI_API_KEY)  # Should not be None
print(config.LLM_PROVIDER)    # Should be 'openai'
```

### Connection Errors
```python
# For Ollama, ensure it's running
# In terminal: ollama serve
# Then test: curl http://localhost:11434/api/tags

# For API-based providers, check internet connection
```

## Performance Comparison

Test response time for different providers:

```python
import time
from llm_client import LLMClientFactory

test_message = "Tell me 5 facts about Bydgoszcz in one sentence"

for provider_type in ["openai", "gemini", "claude", "ollama"]:
    try:
        provider = LLMClientFactory.create_provider(...)
        
        start = time.time()
        response = provider.generate_response(
            "You are helpful",
            test_message,
            []
        )
        elapsed = time.time() - start
        
        print(f"{provider_type}: {elapsed:.2f}s")
    except Exception as e:
        print(f"{provider_type}: Error - {e}")
```

## Cost Estimation

**Approximate costs per 1000 requests (2000 tokens each):**
- OpenAI GPT-3.5: $0.50
- OpenAI GPT-4: $3.00
- Gemini: $0.10-0.50 (with free tier)
- Claude: $0.50-1.00
- Ollama: $0.00 (free, local)

See [MODEL_PROVIDERS.md](MODEL_PROVIDERS.md) for detailed pricing information.
