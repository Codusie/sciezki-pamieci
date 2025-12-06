# Quick Start Guide

## 1. Installation (One-time setup)

```bash
cd /home/hanna/Documents/projects/hacknation/ai

# Make setup script executable
chmod +x setup.sh

# Run setup
./setup.sh
```

## 2. Configure OpenAI API Key

Edit the `.env` file:

```bash
nano .env
```

Add your OpenAI API key:
```
OPENAI_API_KEY=sk-your-actual-api-key-here
OPENAI_MODEL=gpt-3.5-turbo
```

## 3. Run the API Server

```bash
# Activate virtual environment (if not already active)
source venv/bin/activate

# Start the Flask server
python app.py
```

You should see:
```
 * Running on http://0.0.0.0:5000
```

## 4. Test the API

In a new terminal, test with curl:

```bash
# Check health
curl http://localhost:5000/health

# Get landmarks
curl http://localhost:5000/landmarks

# Send a chat request
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{
    "persona": "history enthusiast",
    "landmark": "Cathedral Basilica of Our Lady",
    "query": "Tell me about the history of this cathedral"
  }'
```

Or use the interactive client:

```bash
python client.py --mode interactive
```

Or run a demo:

```bash
python client.py --mode demo
```

## 5. Running Tests

```bash
# Run all tests
python -m pytest test_api.py -v

# Or with unittest
python -m unittest test_api.py -v
```

## Project Structure

```
ai/
├── app.py                    # Main Flask application
├── llm_client.py            # OpenAI integration & prompt engineering
├── document_store.py        # Document vectorization & retrieval
├── session_manager.py       # Multi-user session management
├── config.py                # Configuration management
├── sample_documents.py      # Landmark documents (edit this with your data)
├── test_api.py              # Unit tests
├── client.py                # Example client
├── requirements.txt         # Python dependencies
├── .env                     # Configuration (create from .env.example)
├── .env.example             # Example configuration
├── setup.sh                 # Setup script
└── README.md                # Full documentation
```

## Next Steps

### Add Your Landmark Documents

Edit `sample_documents.py` and add your historical information:

```python
SAMPLE_DOCUMENTS = {
    "Your Landmark Name": """
    Historical information about your landmark...
    Include dates, architectural details, cultural significance, etc.
    """,
    "Another Landmark": """
    More information...
    """
}
```

The API will automatically vectorize and index these documents.

### Integrate with Your Frontend

The API is ready for integration with:
- React/Vue frontend
- Mobile app
- Web interface
- Discord bot
- Telegram bot
- Other services

### Customize Personas

Use any persona string that makes sense for your use case:
- `history professor` - For educational settings
- `architecture student` - For design-focused learners
- `family with children` - For kid-friendly explanations
- `elderly tourist` - For accessibility-focused responses
- Custom personas based on your data

## API Response Example

```json
{
    "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "landmark": "Cathedral Basilica of Our Lady",
    "persona": "history enthusiast",
    "query": "Tell me about the history",
    "response": "The Cathedral Basilica of Our Lady in Bydgoszcz...",
    "timestamp": "2025-01-15T10:30:45.123456",
    "conversation_length": 2
}
```

## Troubleshooting

### "Connection refused"
- Make sure Flask server is running: `python app.py`
- Check it's listening on localhost:5000

### "OPENAI_API_KEY not configured"
- Edit `.env` and add your actual OpenAI API key
- Restart the Flask server

### "ModuleNotFoundError"
- Activate virtual environment: `source venv/bin/activate`
- Install dependencies: `pip install -r requirements.txt`

### "Landmark not found"
- Check spelling matches `SAMPLE_DOCUMENTS` exactly
- Use `/landmarks` endpoint to see available options
- Make sure you've added documents to `sample_documents.py`

## Environment Variables

Key configuration options in `.env`:

| Variable | Default | Purpose |
|----------|---------|---------|
| OPENAI_API_KEY | (none) | Your OpenAI API key (required) |
| OPENAI_MODEL | gpt-3.5-turbo | Model to use |
| DEBUG | false | Enable debug mode |
| FLASK_ENV | development | development or production |
| MAX_TOKENS | 500 | Max response length |
| TEMPERATURE | 0.7 | Response creativity (0-1) |

## Example Integration

### Python Backend Integration

```python
import requests

def get_landmark_info(persona, landmark, question):
    response = requests.post(
        "http://localhost:5000/chat",
        json={
            "persona": persona,
            "landmark": landmark,
            "query": question
        }
    )
    return response.json()
```

### JavaScript/Frontend Integration

```javascript
async function chat(persona, landmark, question) {
    const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            persona,
            landmark,
            query: question
        })
    });
    return response.json();
}
```

## Performance Tips

1. **Use faster model** for demos: `gpt-3.5-turbo` instead of `gpt-4`
2. **Adjust temperature** for speed: Lower values respond faster
3. **Reduce max_tokens** if responses are too long
4. **Cache responses** for repeated queries
5. **Batch requests** when possible

## Getting Help

- Check `README.md` for detailed API documentation
- Review `test_api.py` for usage examples
- Use `client.py --mode demo` to see working examples
- Check Flask logs for error messages

## Production Deployment

For production use:

1. Use a production WSGI server (Gunicorn, uWSGI)
2. Set up proper error logging
3. Implement request rate limiting
4. Use database for session persistence
5. Add authentication/authorization
6. Set up HTTPS
7. Configure CORS properly
8. Monitor API usage and costs

Example production run:
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

Enjoy your Bydgoszcz Tour Guide API! 🏛️
