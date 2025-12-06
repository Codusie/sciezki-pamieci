# Bydgoszcz LLM Tour Guide API

A Flask-based API that serves as an intelligent, personalized tour guide for the city of Bydgoszcz. The system uses LLM (Large Language Model) technology to provide engaging landmark explanations tailored to individual users.

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

All datasets are stored in "data"

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

Copy `.env.example` (in config) to `.env` and add your API keys:

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
    "persona": "Jan Kazimierz", (or "Luczniczka", "Kazimierz Wielki", "Marian Rejewski", "Pan Twardowski")
    "landmark": "Wyspa Młyńska",
    "query": "Powiedz mi o architekturze wyspy młyńskiej"
}
```

**Response:**
```json
{
    "session_id": "uuid",
    "landmark": "Wyspa Młyńska",
    "persona": "Jan Kazimierz",
    "query": "Powiedz mi o architekturze wyspy młyńskiej",
    "response": "Architektura wyspy młyńskiej jest NIESAMOWITA",
    "timestamp": "2025-01-15T10:30:00",
    "conversation_length": 2
}
```

### 4. Get Session History
```
GET /session/<session_id>
```
Returns complete conversation history for a session.

### 5. Get Statistics
```
GET /stats
```
Returns API statistics including active sessions and available landmarks.

## Adding Your Documents

Edit files in the `data directory`

The system will automatically vectorize and index these documents for semantic search.

## Supported Personas

The system works with any persona string. Common examples:

- "Jan Kazimierz"
- "Luczniczka"
- "Marian Rejewski", 
- "Pan Twardowski"

## Example Usage

### Using cURL

```bash
# Start a new conversation
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{
    "persona": "Jan Kazimierz",
    "landmark": "Wyspa Młyńska",
    "query": "Powiedz mi o architekturze wyspy młyńskiej"
  }'
```

### Continuing a Conversation

```bash
# Get the session_id from the previous response
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "the-returned-session-id",
    "persona": "Jan Kazimierz",
    "landmark": "Wyspa Młyńska",
    "query": "Powiedz mi o architekturze wyspy młyńskiej"
  }'
```

## Configuration Options

In `.env`:

- `LLM_PROVIDER` - openai/gemini/claude/ollama
- `LLM_MODEL` - Model to use 
- `OPENAI_API_KEY` - Your OpenAI API key (if used)
- `GEMINI_API_KEY` - Your Gemini API key (if used)
- `CLAUDE_API_KEY` - Your Claude API key (if used)
- `DEBUG` - Enable debug mode (default: false)
- `FLASK_ENV` - Environment type (development/production)
- `MAX_TOKENS` - Maximum response length (default: 1000)
- `TEMPERATURE` - Response creativity (0-1, default: 0.2)

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



## Contact & Support

For issues or questions about the API, refer to the project documentation or contact the development team.
