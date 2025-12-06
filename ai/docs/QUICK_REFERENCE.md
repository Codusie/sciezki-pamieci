# Quick Reference: Model Provider Cheat Sheet

## 🚀 Quick Setup (Choose One)

### OpenAI (GPT-4)
```bash
# 1. Get API key: https://platform.openai.com/api-keys
pip install openai

# 2. .env
echo "LLM_PROVIDER=openai
OPENAI_API_KEY=sk-proj-...
LLM_MODEL=gpt-4" > .env

# 3. Run
python app.py
```

### Google Gemini
```bash
# 1. Get API key: https://makersuite.google.com/app/apikey
pip install google-generativeai

# 2. .env
echo "LLM_PROVIDER=gemini
GEMINI_API_KEY=AIzaSy-...
LLM_MODEL=gemini-1.5-pro" > .env

# 3. Run
python app.py
```

### Anthropic Claude
```bash
# 1. Get API key: https://console.anthropic.com
pip install anthropic

# 2. .env
echo "LLM_PROVIDER=claude
CLAUDE_API_KEY=sk-ant-...
LLM_MODEL=claude-3-sonnet" > .env

# 3. Run
python app.py
```

### Ollama (Local, Free)
```bash
# 1. Download: https://ollama.ai
# 2. Pull model
ollama pull mistral

# 3. Start in terminal 1
ollama serve

# 4. .env in terminal 2
echo "LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434
LLM_MODEL=mistral" > .env

# 5. Run API
python app.py
```

## 📊 Provider Comparison

| Provider | Cost | Speed | Quality | Setup |
|----------|------|-------|---------|-------|
| OpenAI | 💰💰 | ⚡⚡ | ⭐⭐⭐⭐⭐ | ✅ |
| Gemini | 💰 | ⚡⚡ | ⭐⭐⭐⭐ | ✅ |
| Claude | 💰💰 | ⚡⚡ | ⭐⭐⭐⭐⭐ | ✅ |
| Ollama | 💰 | ⚡ | ⭐⭐⭐ | ⚠️ |

## 🔄 Environment Variables

### All Providers
```env
DEBUG=false
FLASK_ENV=development
MAX_TOKENS=500
TEMPERATURE=0.7
```

### Provider Selection
```env
LLM_PROVIDER=openai  # or: gemini, claude, ollama
LLM_MODEL=gpt-4      # Depends on provider
```

### API Keys (Use only the one you selected)
```env
OPENAI_API_KEY=sk-proj-...           # For GPT
GEMINI_API_KEY=AIzaSy-...            # For Gemini
CLAUDE_API_KEY=sk-ant-...            # For Claude
OLLAMA_BASE_URL=http://localhost:11434  # For Ollama
```

## 💻 Code Usage

### Initialize Once
```python
from llm_client import LLMClient

# Automatically uses LLM_PROVIDER from .env
LLMClient.initialize()
```

### Generate Response (Same for all providers)
```python
from llm_client import generate_landmark_response

response = generate_landmark_response(
    session_data={
        "persona": "history enthusiast",
        "landmark": "Cathedral Basilica"
    },
    user_query="Tell me about history",
    relevant_context=[...],
    conversation_history=[...]
)
print(response)
```

### Runtime Override
```python
from llm_client import LLMClient

# Use different model without restarting
response = LLMClient.generate_response(
    system_prompt="...",
    user_message="...",
    conversation_history=[],
    model="gpt-3.5-turbo",  # Override model
    temperature=0.5         # Override temperature
)
```

## 🎯 Recommended Choices

### For Production
- **OpenAI GPT-4**: Best quality, reliable
- **Alternative**: Google Gemini (cheaper)

### For Development
- **Ollama (Local)**: Free, fast iteration, no API keys
- **Alternative**: GPT-3.5-turbo (cheaper)

### For Cost Optimization
- **Google Gemini**: Free tier available
- **Alternative**: Ollama (completely free)

### For Privacy
- **Ollama**: Runs locally, no data sent anywhere

## 📋 Model Recommendations

### For General Use
- OpenAI: `gpt-4` or `gpt-4-turbo`
- Gemini: `gemini-1.5-pro`
- Claude: `claude-3-sonnet`
- Ollama: `mistral`

### For Speed (Faster, cheaper)
- OpenAI: `gpt-3.5-turbo`
- Gemini: `gemini-1.5-flash`
- Claude: `claude-3-haiku`
- Ollama: `neural-chat`

### For Quality (Best output)
- OpenAI: `gpt-4`
- Gemini: `gemini-1.5-pro`
- Claude: `claude-3-opus`
- Ollama: `llama2`

## 🐛 Troubleshooting

| Error | Solution |
|-------|----------|
| "Unknown provider type" | Check LLM_PROVIDER value in .env |
| "API key not configured" | Verify API key set for your provider |
| "Module not found" | Run `pip install -r requirements.txt` |
| "Connection refused" | For Ollama: Start with `ollama serve` |
| "Ollama not running" | Terminal 1: `ollama serve`, Terminal 2: run app |

## 🔗 API Endpoints (Same for all providers)

```bash
# Health check
curl http://localhost:5000/health

# Get landmarks
curl http://localhost:5000/landmarks

# Chat with landmark
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{
    "persona": "history enthusiast",
    "landmark": "Cathedral Basilica",
    "query": "Tell me about history"
  }'

# Get session
curl http://localhost:5000/session/SESSION_ID

# Delete session
curl -X DELETE http://localhost:5000/session/SESSION_ID
```

## 📦 Installation Sizes

- OpenAI package: ~10MB
- Gemini package: ~8MB
- Claude package: ~5MB
- Ollama: ~500MB (downloaded models can be 4-7GB each)

## 🎓 Learning Resources

- **OpenAI**: https://platform.openai.com/docs
- **Gemini**: https://ai.google.dev/docs
- **Claude**: https://docs.anthropic.com
- **Ollama**: https://ollama.ai

## ⏱️ Typical Response Times

- **OpenAI/Gemini/Claude**: 1-2 seconds (network latency)
- **Ollama**: 3-30 seconds (depends on model & CPU)

## 💡 Pro Tips

1. **Development**: Use Ollama locally for instant iteration
2. **Production**: Use OpenAI/Gemini/Claude for reliability
3. **Cost Saving**: Use Gemini free tier or claude-3-haiku
4. **Hybrid**: Use Ollama for non-critical tasks, OpenAI for important ones
5. **Fallback**: Set up multiple providers as fallback

## 🚀 Switch Providers

To switch from OpenAI to Gemini:

```bash
# Update .env
sed -i 's/LLM_PROVIDER=openai/LLM_PROVIDER=gemini/' .env
sed -i 's/OPENAI_API_KEY=.*/GEMINI_API_KEY=AIzaSy-.../' .env

# Restart app
python app.py
```

## 📞 Support Resources

| Issue | Resource |
|-------|----------|
| General questions | See MODEL_PROVIDERS.md |
| Code examples | See LLM_USAGE_GUIDE.md |
| Before/After | See BEFORE_AFTER_COMPARISON.md |
| Architecture | See MODEL_AGNOSTIC_SUMMARY.md |

## ✅ Verification Checklist

- [ ] Provider installed: `pip list | grep openai` (or gemini, anthropic)
- [ ] API key obtained from provider website
- [ ] .env file created with provider config
- [ ] Dependencies installed: `pip install -r requirements.txt`
- [ ] Python virtual environment active: `source venv/bin/activate`
- [ ] App starts without errors: `python app.py`
- [ ] Can test with curl: `curl http://localhost:5000/health`
- [ ] Chat endpoint responds: `curl http://localhost:5000/chat` (POST)

---

**Documentation**:
- 📖 Full details: `MODEL_PROVIDERS.md`
- 💻 Code examples: `LLM_USAGE_GUIDE.md`
- 📊 Architecture: `MODEL_AGNOSTIC_SUMMARY.md`
- 🔄 Changes: `BEFORE_AFTER_COMPARISON.md`
