# Model Provider Configuration Guide

This API supports multiple LLM providers, allowing you to use different models based on your needs. The system is completely model-agnostic.

## Supported Providers

### 1. OpenAI (GPT Models)
**Best for:** Production, advanced reasoning, highest quality
**Cost:** Paid API access required

#### Setup:
```bash
# 1. Get API key from: https://platform.openai.com/api-keys
# 2. Install requirements
pip install openai

# 3. Set environment variables in .env:
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-...your-api-key...
OPENAI_MODEL=gpt-4  # or gpt-3.5-turbo, gpt-4-turbo, etc.
```

#### Available Models:
- `gpt-3.5-turbo` - Fast and affordable
- `gpt-4` - Most capable
- `gpt-4-turbo` - Latest version with larger context
- `gpt-4o` - Optimized version

#### Example Configuration:
```env
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-proj-xxxx
OPENAI_MODEL=gpt-4-turbo
TEMPERATURE=0.7
MAX_TOKENS=500
```

---

### 2. Google Gemini
**Best for:** Multimodal capabilities, competitive pricing
**Cost:** Free tier available + paid for higher usage

#### Setup:
```bash
# 1. Get API key from: https://makersuite.google.com/app/apikey
# 2. Install requirements
pip install google-generativeai

# 3. Set environment variables in .env:
LLM_PROVIDER=gemini
GEMINI_API_KEY=AIzaSy...your-api-key...
LLM_MODEL=gemini-pro  # or gemini-1.5-pro, etc.
```

#### Available Models:
- `gemini-pro` - Standard Gemini model
- `gemini-1.5-pro` - Latest version with improved capabilities
- `gemini-1.5-flash` - Faster alternative

#### Example Configuration:
```env
LLM_PROVIDER=gemini
GEMINI_API_KEY=AIzaSy...
LLM_MODEL=gemini-1.5-pro
TEMPERATURE=0.7
MAX_TOKENS=500
```

---

### 3. Anthropic Claude
**Best for:** Safety, harmlessness, strong reasoning
**Cost:** Paid API access required

#### Setup:
```bash
# 1. Get API key from: https://console.anthropic.com/
# 2. Install requirements
pip install anthropic

# 3. Set environment variables in .env:
LLM_PROVIDER=claude
CLAUDE_API_KEY=sk-ant-...your-api-key...
LLM_MODEL=claude-3-sonnet  # or claude-3-opus, claude-3-haiku
```

#### Available Models:
- `claude-3-haiku` - Fast and compact
- `claude-3-sonnet` - Balanced performance and speed
- `claude-3-opus` - Most capable model

#### Example Configuration:
```env
LLM_PROVIDER=claude
CLAUDE_API_KEY=sk-ant-...
LLM_MODEL=claude-3-sonnet
TEMPERATURE=0.7
MAX_TOKENS=500
```

---

### 4. Ollama (Local Models)
**Best for:** Privacy, no API costs, offline usage
**Cost:** Free, but requires local hardware

#### Prerequisites:
1. Download and install Ollama from: https://ollama.ai
2. Start Ollama service:
   ```bash
   ollama serve
   ```
3. Pull a model:
   ```bash
   ollama pull llama2
   ollama pull mistral
   ollama pull neural-chat
   ```

#### Setup:
```bash
# 1. No API key needed - runs locally
# 2. Ensure requests library is installed (already in requirements.txt)

# 3. Set environment variables in .env:
LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434
LLM_MODEL=llama2  # or mistral, neural-chat, etc.
```

#### Available Models:
- `llama2` - Meta's Llama 2 model
- `mistral` - Mistral AI's model
- `neural-chat` - Intel's neural chat model
- `dolphin-mixtral` - Dolphin/Mixtral
- Many more available via `ollama pull <model>`

#### Example Configuration:
```env
LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434
LLM_MODEL=mistral
TEMPERATURE=0.7
MAX_TOKENS=500
```

#### Running Ollama in Docker:
```bash
# Pull and run Ollama in Docker
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama

# Pull a model
docker exec ollama ollama pull mistral

# Test the API
curl http://localhost:11434/api/chat -d '{
  "model": "mistral",
  "messages": [{"role": "user", "content": "Hello"}],
  "stream": false
}'
```

---

## Switching Providers

To switch from one provider to another:

1. **Update .env file** with new provider details:
   ```env
   LLM_PROVIDER=gemini
   GEMINI_API_KEY=AIzaSy...
   LLM_MODEL=gemini-1.5-pro
   ```

2. **Install required package** (if not already installed):
   ```bash
   pip install -r requirements.txt
   ```

3. **Restart the application**:
   ```bash
   python app.py
   ```

The application will automatically reinitialize with the new provider on startup.

---

## Configuration Comparison

| Provider | Cost | Setup Complexity | Speed | Quality | Best For |
|----------|------|-----------------|-------|---------|----------|
| OpenAI | Paid | Simple | Fast | Excellent | Production, reasoning |
| Gemini | Free tier | Simple | Fast | Very Good | Multimodal, cost-effective |
| Claude | Paid | Simple | Fast | Excellent | Safety, reasoning |
| Ollama | Free | Medium | Depends | Good | Privacy, offline, no costs |

---

## Environment Variables Reference

### Global Settings
```env
DEBUG=false                    # Debug mode
FLASK_ENV=development         # Flask environment
MAX_TOKENS=500               # Maximum tokens to generate
TEMPERATURE=0.7              # Sampling temperature (0-2)
LLM_PROVIDER=openai          # Provider selection
LLM_MODEL=gpt-4              # Model name
```

### Provider-Specific
```env
# OpenAI
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4

# Gemini
GEMINI_API_KEY=AIzaSy...

# Claude
CLAUDE_API_KEY=sk-ant-...

# Ollama
OLLAMA_BASE_URL=http://localhost:11434
```

---

## Troubleshooting

### "Unknown provider type" Error
- Check `LLM_PROVIDER` environment variable is set correctly
- Supported values: `openai`, `gpt`, `gemini`, `claude`, `ollama`

### API Key not recognized
- Verify API key is correct and not expired
- For OpenAI: Use full key starting with `sk-proj-`
- For Gemini: Use full key starting with `AIzaSy`
- For Claude: Use full key starting with `sk-ant-`

### Ollama connection refused
- Ensure Ollama is running: `ollama serve`
- Check `OLLAMA_BASE_URL` matches your setup (default: http://localhost:11434)
- Verify model is pulled: `ollama list`

### Import errors for provider packages
- Install all optional dependencies: `pip install -r requirements.txt`
- Or install specific provider: `pip install openai` or `pip install google-generativeai` etc.

---

## Code Examples

### Using Different Providers in Code

```python
from llm_client import LLMClientFactory

# Method 1: Create provider directly
provider = LLMClientFactory.create_provider(
    provider_type="gemini",
    model="gemini-1.5-pro",
    temperature=0.7,
    max_tokens=500,
    api_key="AIzaSy..."
)

# Method 2: Use configured provider
from llm_client import LLMClient
LLMClient.initialize()  # Uses config from .env
response = LLMClient.generate_response(system_prompt, user_message, history)

# Method 3: Override at runtime
response = LLMClient.generate_response(
    system_prompt,
    user_message,
    history,
    model="gpt-4-turbo",
    temperature=0.5
)
```

---

## Performance Tips

1. **For Production:** Use OpenAI GPT-4 for best quality or GPT-3.5-turbo for cost savings
2. **For Development:** Use Ollama locally to avoid API costs
3. **For Cost Optimization:** Use Gemini free tier or Claude 3 Haiku
4. **For Speed:** Use GPT-3.5-turbo or Gemini 1.5 Flash
5. **For Privacy:** Use Ollama with local models

---

## Adding Custom Providers

To add a new provider (e.g., custom LLM service):

1. Create a new provider class inheriting from `BaseLLMProvider`
2. Implement the `generate_response` method
3. Register it in `LLMClientFactory._providers`

See `llm_client.py` for examples of implementing providers.
