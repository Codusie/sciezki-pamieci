# Bydgoszcz LLM Tour Guide API

A Flask-based API that serves as an intelligent, personalized tour guide for the city of Bydgoszcz. The system uses LLM (Large Language Model) technology to provide engaging landmark explanations tailored to individual user personas.

## Features

- **Persona-Aware Responses**: Customize explanations based on visitor interests (history enthusiast, architect, general tourist, etc.)
- **Document Vectorization**: Uses TF-IDF vectors for semantic search across landmark documents
- **Multi-User Sessions**: Track separate conversations for multiple users with session persistence
- **Landmark Context**: Retrieves relevant historical information for accurate, informative responses
- **Engaging Questions**: Automatically generates follow-up questions to deepen user engagement
- **Conversation History**: Maintains context across multiple exchanges within a session

## Architecture

### Core Modules

1. **app.py** - Main Flask application with REST endpoints
2. **llm_client.py** - LLM models integration and prompt engineering
3. **document_store.py** - Document vectorization and semantic search
4. **session_manager.py** - Multi-user session management
5. **config.py** - Configuration management
6. **sample_documents.py** - Sample landmark documents (your data goes here)

## Installation

### 1. Set Up Environment

```bash
cd /home/hanna/Documents/projects/hacknation/ai
python3 -m venv venv
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure API Key

Copy `.env.example` to `.env` and add your API keys:

```bash
cp .env.example .env
```

Edit `.env` and set:
```
OPENAI_API_KEY=sk-your-api-key-here
OPENAI_MODEL=gpt-3.5-turbo  # or gpt-4
```

## Running the Server

```bash
python app.py
```

Server will start on `http://localhost:5000`

## API Endpoints

### 1. Health Check
```
GET /health
```
Returns API status and active sessions count.

### 2. Get Available Landmarks
```
GET /landmarks
```
Returns list of all available landmarks.

### 3. Chat (Main Endpoint)
```
POST /chat
Content-Type: application/json

{
    "session_id": "optional-uuid",
    "persona": "history enthusiast",
    "landmark": "Cathedral Basilica of Our Lady",
    "query": "Tell me about the architecture"
}
```

**Response:**
```json
{
    "session_id": "uuid",
    "landmark": "Cathedral Basilica of Our Lady",
    "persona": "history enthusiast",
    "query": "Tell me about the architecture",
    "response": "The Cathedral's architecture reflects...",
    "timestamp": "2025-01-15T10:30:00",
    "conversation_length": 2
}
```

### 4. Get Session History
```
GET /session/<session_id>
```
Returns complete conversation history for a session.

### 5. Delete Session
```
DELETE /session/<session_id>
```
Removes a session from memory.

### 6. Clean Up Inactive Sessions
```
POST /sessions/cleanup
Content-Type: application/json

{
    "timeout_minutes": 30
}
```
Removes sessions inactive for longer than specified time.

### 7. Get Statistics
```
GET /stats
```
Returns API statistics including active sessions and available landmarks.

## Adding Your Documents

Edit `sample_documents.py` and add your landmark information:

```python
SAMPLE_DOCUMENTS = {
    "Landmark Name": """
    Historical information about the landmark...
    Multiple paragraphs describing history, architecture,
    cultural significance, etc.
    """,
    "Another Landmark": """
    More landmark information...
    """
}
```

The system will automatically vectorize and index these documents for semantic search.

## Supported Personas

The system works with any persona string. Common examples:

- `history enthusiast` - Interested in historical facts and dates
- `architect` - Focused on architectural styles and design
- `art lover` - Interested in cultural and artistic aspects
- `student` - Looking for educational information
- `general tourist` - Seeking basic information and highlights
- `family with children` - Wanting kid-friendly explanations

## Example Usage

### Using cURL

```bash
# Start a new conversation
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{
    "persona": "history enthusiast",
    "landmark": "Cathedral Basilica of Our Lady",
    "query": "What is the historical significance of this cathedral?"
  }'
```

### Using Python

```python
import requests
import json

url = "http://localhost:5000/chat"
payload = {
    "persona": "architect",
    "landmark": "Leandro's Mill",
    "query": "Tell me about the architectural style"
}

response = requests.post(url, json=payload)
result = response.json()
print(result['response'])
```

### Continuing a Conversation

```bash
# Get the session_id from the previous response
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "the-returned-session-id",
    "persona": "history enthusiast",
    "landmark": "Cathedral Basilica of Our Lady",
    "query": "What happened to it during World War II?"
  }'
```

## Configuration Options

In `.env`:

- `OPENAI_API_KEY` - Your OpenAI API key (required)
- `OPENAI_MODEL` - Model to use (default: gpt-3.5-turbo, can use gpt-4)
- `DEBUG` - Enable debug mode (default: false)
- `FLASK_ENV` - Environment type (development/production)
- `MAX_TOKENS` - Maximum response length (default: 500)
- `TEMPERATURE` - Response creativity (0-1, default: 0.7)

## How It Works

1. **User Request**: API receives persona, landmark, and query
2. **Session Management**: Creates or retrieves existing session for the user
3. **Document Retrieval**: Uses TF-IDF vectorization to find relevant landmark information
4. **Prompt Engineering**: Builds context-aware prompt based on persona and landmark
5. **LLM Generation**: Calls OpenAI API with system instructions and context
6. **Response Storage**: Saves both user query and assistant response in session
7. **Response Return**: Returns personalized response with session tracking

## Performance Considerations

- Sessions are stored in memory (suitable for development)
- For production, consider implementing session persistence (Redis, database)
- Document vectorization is performed in-memory using TF-IDF
- For larger document sets, consider using more sophisticated embedding methods (e.g., OpenAI embeddings)

## Future Enhancements

- [ ] Database persistence for sessions
- [ ] Advanced embedding models (OpenAI embeddings, sentence-transformers)
- [ ] Multi-language support
- [ ] User feedback collection
- [ ] Analytics and usage tracking
- [ ] Caching for common queries
- [ ] Integration with mapping/routing APIs
- [ ] Image and video integration for landmarks

## Troubleshooting

### "OPENAI_API_KEY not configured"
- Ensure `.env` file exists with valid API key
- Restart the application after updating `.env`

### "Landmark not found"
- Check spelling in request matches SAMPLE_DOCUMENTS keys
- Use `/landmarks` endpoint to see available landmarks

### Slow responses
- Check OpenAI API rate limits
- Consider using a faster model (gpt-3.5-turbo vs gpt-4)
- Increase TEMPERATURE for faster, less deterministic responses

## License

Part of the Hacknation project.

## Contact & Support

For issues or questions about the API, refer to the project documentation or contact the development team.
