# Bydgoszcz LLM Tour Guide API - Docker Deployment Guide

## Overview

The application includes Docker configuration for easy containerization and deployment.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, but recommended)
- OpenAI API key

## Quick Start with Docker Compose

### 1. Clone/Navigate to Project

```bash
cd /home/hanna/Documents/projects/hacknation/ai
```

### 2. Create .env File

```bash
cp .env.example .env
```

Edit `.env` and add your OpenAI API key:
```
OPENAI_API_KEY=sk-your-actual-key-here
OPENAI_MODEL=gpt-3.5-turbo
DEBUG=false
FLASK_ENV=production
```

### 3. Build and Run with Docker Compose

```bash
# Build the image
docker-compose build

# Start the container
docker-compose up -d

# View logs
docker-compose logs -f bydgoszcz-api

# Stop the container
docker-compose down
```

### 4. Test the Container

```bash
# Health check
curl http://localhost:5000/health

# Get landmarks
curl http://localhost:5000/landmarks
```

## Manual Docker Build and Run

### 1. Build the Docker Image

```bash
docker build -t bydgoszcz-tour-guide:latest .
```

### 2. Run the Container

```bash
docker run -d \
  --name bydgoszcz-api \
  -p 5000:5000 \
  -e OPENAI_API_KEY=sk-your-key-here \
  -e OPENAI_MODEL=gpt-3.5-turbo \
  -e DEBUG=false \
  -e FLASK_ENV=production \
  bydgoszcz-tour-guide:latest
```

### 3. Access the API

```bash
curl http://localhost:5000/health
```

### 4. Stop the Container

```bash
docker stop bydgoszcz-api
docker rm bydgoszcz-api
```

## Container Features

### Health Check
The container includes a built-in health check that:
- Pings the `/health` endpoint every 30 seconds
- Waits 40 seconds before first check
- Times out after 3 seconds
- Restarts after 3 failures

### Logging
- Logs stored in JSON format
- Max file size: 10MB
- Max 3 log files kept
- View logs with: `docker logs bydgoszcz-api`

### Resource Management
By default, no resource limits are set. To add them:

```yaml
# In docker-compose.yml
services:
  bydgoszcz-api:
    # ... existing configuration ...
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 1G
        reservations:
          cpus: '0.5'
          memory: 512M
```

## Production Deployment

### Using Docker Compose

```yaml
# Production configuration example
version: '3.8'
services:
  bydgoszcz-api:
    image: bydgoszcz-tour-guide:latest
    ports:
      - "5000:5000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - FLASK_ENV=production
      - DEBUG=false
    restart: always
    networks:
      - app-network
    labels:
      - "com.example.description=Bydgoszcz Tour Guide API"

networks:
  app-network:
    driver: bridge
```

### Using Kubernetes

Create a `deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bydgoszcz-tour-guide
spec:
  replicas: 3
  selector:
    matchLabels:
      app: bydgoszcz-tour-guide
  template:
    metadata:
      labels:
        app: bydgoszcz-tour-guide
    spec:
      containers:
      - name: api
        image: bydgoszcz-tour-guide:latest
        ports:
        - containerPort: 5000
        env:
        - name: OPENAI_API_KEY
          valueFrom:
            secretKeyRef:
              name: openai-secret
              key: api-key
        - name: FLASK_ENV
          value: "production"
        livenessProbe:
          httpGet:
            path: /health
            port: 5000
          initialDelaySeconds: 40
          periodSeconds: 30
        readinessProbe:
          httpGet:
            path: /health
            port: 5000
          initialDelaySeconds: 10
          periodSeconds: 10
```

Deploy with:
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml  # Create LoadBalancer service
```

## Docker Registry

### Push to Docker Hub

```bash
# Tag the image
docker tag bydgoszcz-tour-guide:latest your-username/bydgoszcz-tour-guide:latest

# Login to Docker Hub
docker login

# Push the image
docker push your-username/bydgoszcz-tour-guide:latest
```

### Use from Docker Hub

```bash
docker run -d \
  -p 5000:5000 \
  -e OPENAI_API_KEY=sk-your-key \
  your-username/bydgoszcz-tour-guide:latest
```

## Docker Compose Advanced Examples

### With Volume for Logs

```yaml
version: '3.8'
services:
  bydgoszcz-api:
    build: .
    ports:
      - "5000:5000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    volumes:
      - ./logs:/app/logs
      - ./sample_documents.py:/app/sample_documents.py:ro
    restart: unless-stopped
```

### With Nginx Proxy

```yaml
version: '3.8'
services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certs:/etc/nginx/certs:ro
    depends_on:
      - bydgoszcz-api

  bydgoszcz-api:
    build: .
    expose:
      - "5000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    restart: unless-stopped
```

### With Redis Cache

```yaml
version: '3.8'
services:
  redis:
    image: redis:7-alpine
    expose:
      - "6379"
    restart: unless-stopped

  bydgoszcz-api:
    build: .
    ports:
      - "5000:5000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis
    restart: unless-stopped
```

## Troubleshooting

### Container Won't Start

```bash
# Check logs
docker logs bydgoszcz-api

# Common issues:
# - Port 5000 already in use: docker ps
# - Missing OPENAI_API_KEY: check .env
# - Build errors: docker build --progress=plain .
```

### Health Check Failing

```bash
# Check manually
curl -v http://localhost:5000/health

# Increase timeout if slow
# Modify HEALTHCHECK in Dockerfile
```

### High Memory Usage

```bash
# Check memory usage
docker stats bydgoszcz-api

# Reduce if needed by limiting:
docker run --memory=512m bydgoszcz-tour-guide:latest
```

## Monitoring and Maintenance

### View Container Stats

```bash
docker stats bydgoszcz-api
```

### Clean Up

```bash
# Remove stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove everything (careful!)
docker system prune -a
```

### Update Application

```bash
# Rebuild with code changes
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Environment Variables for Container

| Variable | Default | Required |
|----------|---------|----------|
| OPENAI_API_KEY | - | Yes |
| OPENAI_MODEL | gpt-3.5-turbo | No |
| DEBUG | false | No |
| FLASK_ENV | production | No |
| MAX_TOKENS | 500 | No |
| TEMPERATURE | 0.7 | No |

## Performance Optimization

### Multi-Worker Configuration

The Dockerfile uses Gunicorn with 4 workers by default. To adjust:

```dockerfile
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "8", "app:create_app()"]
```

Calculate optimal workers: `(2 × cpu_cores) + 1`

### Memory Limit

```yaml
deploy:
  resources:
    limits:
      memory: 2G
```

## Security Best Practices

1. **Never commit .env with secrets**
   ```bash
   echo ".env" >> .gitignore
   ```

2. **Use Docker secrets for production**
   ```yaml
   secrets:
     openai_key:
       external: true
   ```

3. **Run as non-root user** (modify Dockerfile)
   ```dockerfile
   RUN useradd -m appuser
   USER appuser
   ```

4. **Use minimal base image**
   - Already using `python:3.11-slim` ✓

5. **Keep dependencies updated**
   ```bash
   docker build --no-cache .
   ```

## Further Reading

- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)

---

For issues or questions, refer to the main README.md and QUICKSTART.md documents.
