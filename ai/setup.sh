#!/bin/bash
# Quick start script for Bydgoszcz LLM Tour Guide API

echo "🏛️  Bydgoszcz LLM Tour Guide API - Setup"
echo "========================================"

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "📚 Installing dependencies..."
pip install -r requirements.txt

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚙️  Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please edit .env and add your OPENAI_API_KEY/GEMINI_API_KEY"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env and add your api keys"
echo "2. Run: python app.py"
echo "3. API will be available at http://localhost:5000"
echo ""
echo "Available endpoints:"
echo "  GET  /health         - Health check"
echo "  GET  /landmarks      - List available landmarks"
echo "  POST /chat           - Main chat endpoint"
echo "  GET  /stats          - API statistics"
