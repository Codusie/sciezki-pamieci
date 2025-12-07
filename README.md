# Ścieżki Pamięci (Memory Paths)

**Ścieżki Pamięci** is an interactive web application designed to guide users through the historical landmarks of Bydgoszcz. It features an AI-powered chat interface that allows users to converse with historical figures associated with the city, providing a unique and engaging educational experience.

## 🌟 Features

-   **Interactive Map**: Explore Bydgoszcz's landmarks on a dynamic map.
-   **AI-Powered Chat**: Talk to historical personas such as:
    -   **Kazimierz Wielki**
    -   **Marian Rejewski**
    -   **Pan Twardowski**
-   **RAG Architecture**: The AI uses Retrieval-Augmented Generation to provide accurate historical information based on a curated document store.

## 🏗️ Tech Stack

The project is built using a modern microservices architecture:

-   **Frontend**:
    -   **Framework**: Vue 3
    -   **Build Tool**: Vite
    -   **Styling**: TailwindCSS, PrimeVue
    -   **Map**: Leaflet
-   **Backend (API)**:
    -   **Framework**: Laravel 12
    -   **Admin Panel**: Filament 4
    -   **Database**: SQLite
-   **AI Service**:
    -   **Framework**: Flask (Python)
    -   **LLM Provider**: Chat GPT/Google Gemini
    -   **Logic**: Custom RAG implementation with document retrieval

## 🚀 Getting Started

The project is containerized using Docker Compose for easy setup.

### Prerequisites

-   Docker & Docker Compose
-   API keys for Chat GPT/Google Gemini

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd sciezki-pamieci
    ```

2.  **Environment Setup**:
    -   Copy `.env.example` to `.env` in the root and subdirectories if needed.
    -   Ensure you have your api keys are set in the `ai/.env` file (or root `.env` if passed through).

3.  **Start the Application**:
    ```bash
    docker-compose up -d
    ```

4.  **Access the Services**:
    -   **Frontend**: [http://localhost:3000](http://localhost:3000)
    -   **API**: [http://localhost:80](http://localhost:80)
    -   **AI Service**: [http://localhost:5000](http://localhost:5000)

## 📂 Project Structure

-   `front/`: Vue.js frontend application.
-   `api/`: Laravel backend API.
-   `ai/`: Python Flask application for AI logic.
-   `docker-compose.yml`: Orchestration for all services.
