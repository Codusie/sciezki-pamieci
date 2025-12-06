# System Architecture

## Component Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT APPLICATIONS                       │
│  (Web Frontend, Mobile App, CLI, Discord Bot, etc.)         │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTP/REST
                     │
┌────────────────────▼────────────────────────────────────────┐
│                   FLASK API SERVER                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              API Endpoints (app.py)                  │  │
│  │  • POST /chat          - Main chat endpoint         │  │
│  │  • GET /landmarks      - List available landmarks   │  │
│  │  • GET /session/<id>   - Get conversation history   │  │
│  │  • DELETE /session/<id>- Remove session             │  │
│  │  • GET /health         - Health check               │  │
│  │  • GET /stats          - Statistics                 │  │
│  └──────────────────────────────────────────────────────┘  │
│                     │                                        │
│  ┌──────────────────┼──────────────────────────────────┐   │
│  │                  │                                  │    │
│  ▼                  ▼                                  ▼    │
│ ┌─────────────┐ ┌──────────────┐ ┌──────────────────┐    │
│ │   Session   │ │ LLM Client   │ │  Document Store  │    │
│ │  Manager    │ │ (llm_client) │ │ (document_store) │    │
│ │             │ │              │ │                  │    │
│ │ • Sessions  │ │ • Prompt     │ │ • TF-IDF vectors │    │
│ │ • History   │ │   engineering│ │ • Semantic search│    │
│ │ • Cleanup   │ │ • OpenAI API │ │ • Retrieval      │    │
│ └─────────────┘ │   calls      │ └──────────────────┘    │
│                 │              │                         │
│                 │ • Context    │                         │
│                 │   building   │                         │
│                 └──────────────┘                         │
│                     │                                    │
└─────────────────────┼────────────────────────────────────┘
                      │
                      │ OpenAI API Calls
                      │
         ┌────────────▼─────────────┐
         │    OpenAI API Services   │
         │  • GPT-3.5-turbo         │
         │  • GPT-4 (optional)      │
         │  • Text completions      │
         └──────────────────────────┘
```

## Data Flow Diagram

```
User Request
    │
    ├─ Session ID
    ├─ Persona ("history enthusiast")
    ├─ Landmark ("Cathedral Basilica")
    └─ Query ("Tell me about the history")
    │
    ▼
[Session Manager]
    ├─ Get or create session
    └─ Retrieve conversation history
    │
    ▼
[Document Store]
    ├─ Vectorize query using TF-IDF
    ├─ Search similar documents
    └─ Retrieve top-k relevant landmarks
    │
    ▼
[Prompt Engineering]
    ├─ Build system prompt with persona
    ├─ Add landmark context
    ├─ Include relevant documents
    └─ Format conversation history
    │
    ▼
[LLM Client - OpenAI API]
    ├─ Send system prompt
    ├─ Send context
    ├─ Send conversation history
    └─ Get response
    │
    ▼
[Session Manager]
    ├─ Store user query
    ├─ Store assistant response
    └─ Update timestamp
    │
    ▼
Response to Client
    ├─ Session ID
    ├─ Response text
    ├─ Metadata
    └─ Timestamp
```

## Module Relationships

```
app.py (Main Flask Application)
    │
    ├─ imports ──> config.py (Configuration)
    ├─ imports ──> session_manager.py (Session Management)
    ├─ imports ──> document_store.py (Document Retrieval)
    ├─ imports ──> llm_client.py (LLM Integration)
    └─ imports ──> sample_documents.py (Landmark Data)
    │
    ├──> llm_client.py
    │    ├─ imports ──> config.py
    │    ├─ imports ──> openai (External)
    │    └─ Uses: PromptEngineering class
    │
    ├──> session_manager.py
    │    └─ Manages: UserSession objects
    │
    ├──> document_store.py
    │    ├─ Uses: TfidfVectorizer (scikit-learn)
    │    ├─ Uses: cosine_similarity
    │    └─ Uses: numpy
    │
    └──> sample_documents.py
         └─ Defines: Landmark documents
```

## Request Processing Pipeline

```
1. HTTP POST /chat Request Arrives
   │
   ├─ Extract: persona, landmark, query, session_id
   ├─ Validate required fields
   └─ Check landmark exists in documents
   │
2. Session Management
   │
   ├─ Create new session OR retrieve existing
   ├─ Store session metadata (persona, landmark)
   └─ Prepare to log conversation
   │
3. Document Retrieval
   │
   ├─ Vectorize user query using TF-IDF
   ├─ Calculate cosine similarity with all landmarks
   ├─ Return top-2 most relevant documents
   └─ Include similarity scores
   │
4. Prompt Construction
   │
   ├─ Build system prompt with persona
   ├─ Include landmark information
   ├─ Add recent conversation context
   ├─ Format retrieved documents
   └─ Combine with user query
   │
5. LLM Generation
   │
   ├─ Call OpenAI API with full prompt
   ├─ Wait for response (with timeout)
   ├─ Extract response text
   └─ Handle errors gracefully
   │
6. Session Storage
   │
   ├─ Store user message in history
   ├─ Store assistant response
   ├─ Update last_activity timestamp
   └─ Maintain conversation context
   │
7. Response Formation
   │
   ├─ Create JSON response
   ├─ Include session_id
   ├─ Include response text
   ├─ Add metadata (landmark, persona, timestamp)
   └─ Send to client (200 OK)
```

## Session Management Architecture

```
Session Manager
    │
    ├─ Active Sessions Dictionary
    │   ├─ Session ID → UserSession object
    │   ├─ Session ID → UserSession object
    │   └─ ...
    │
    └─ UserSession Objects
        ├─ session_id (UUID)
        ├─ persona (string)
        ├─ landmark (string)
        ├─ created_at (datetime)
        ├─ last_activity (datetime)
        └─ conversation_history (list)
            ├─ {role: "user", content: "...", timestamp: "..."}
            ├─ {role: "assistant", content: "...", timestamp: "..."}
            └─ ...
```

## Document Retrieval System

```
DocumentStore
    │
    ├─ Raw Documents Dictionary
    │   ├─ "Cathedral Basilica" → full text
    │   ├─ "Leandro's Mill" → full text
    │   └─ ...
    │
    ├─ TF-IDF Vectorizer
    │   ├─ Vocabulary (500 features max)
    │   └─ Feature weights
    │
    └─ Vector Matrix
        ├─ Row 0: Cathedral Basilica vector
        ├─ Row 1: Leandro's Mill vector
        └─ ...

Retrieval Process:
1. Query comes in → "Tell me about architecture"
2. Vectorize query using same vectorizer
3. Calculate cosine similarity between query and all documents
4. Sort by similarity score (highest first)
5. Return top-k results with scores
```

## LLM Integration Flow

```
User Query + Context
    │
    ▼
Prompt Engineering
    │
    ├─ System Prompt
    │   └─ Role: Tour guide for Bydgoszcz
    │   └─ Instructions: Tailor to persona
    │   └─ Guidelines: Historical accuracy, engagement
    │
    ├─ Context Section
    │   ├─ Persona information
    │   ├─ Landmark details
    │   └─ Retrieved documents
    │
    ├─ Conversation History
    │   ├─ Previous user messages
    │   └─ Previous assistant responses
    │
    └─ Current Query
        └─ User's latest question
    │
    ▼
OpenAI API Call
    │
    ├─ Model: gpt-3.5-turbo (or gpt-4)
    ├─ Messages: [system, history, current]
    ├─ Temperature: 0.7
    ├─ Max tokens: 500
    └─ → Response text ←
    │
    ▼
Response Processing
    │
    ├─ Extract response text
    ├─ Validate length
    ├─ Check for errors
    └─ Return to user
```

## Error Handling Flow

```
Request Arrives
    │
    ├─ Validation Error?
    │   ├─ Missing required fields → 400
    │   ├─ Invalid landmark → 404
    │   └─ Invalid JSON → 400
    │
    ├─ Configuration Error?
    │   ├─ Missing OpenAI key → 500
    │   └─ Invalid configuration → 500
    │
    ├─ LLM Error?
    │   ├─ API rate limit → 500 (logged)
    │   ├─ Invalid API key → 500 (logged)
    │   └─ Timeout → 500 (logged)
    │
    └─ Internal Error?
        └─ Unexpected exception → 500 (logged)
```

## Scaling Considerations

```
Current Architecture (Single Machine):
    └─ Flask development server
       ├─ Single process
       └─ In-memory session storage

Scale to Multiple Instances:
    ├─ Load Balancer (nginx)
    │   ├─ Instance 1: Flask app
    │   ├─ Instance 2: Flask app
    │   └─ Instance N: Flask app
    │
    └─ Shared Services
        ├─ Redis: Session persistence
        ├─ PostgreSQL: Long-term storage
        ├─ Vector DB: Embedding storage
        └─ OpenAI API: Shared backend
```

This architecture provides:
- ✅ **Scalability**: Can handle multiple concurrent users
- ✅ **Maintainability**: Clear separation of concerns
- ✅ **Extensibility**: Easy to add new landmarks or features
- ✅ **Reliability**: Error handling and validation throughout
- ✅ **Performance**: Efficient document retrieval and caching
