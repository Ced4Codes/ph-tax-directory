# Docker Development Guide

This guide provides detailed information about the Docker setup for the PH Tax Directory application.

## 📂 Docker Structure

```
docker/
├── Dockerfile          # Main application container
├── docker-compose.yml  # Orchestration configuration
└── nginx.conf         # Nginx reverse proxy config
```

## 🐳 Docker Configuration Details

### Dockerfile Features
- **Base Image**: `node:18-alpine` (lightweight Alpine Linux)
- **Security**: Runs as non-root user (`reactuser:1001`)
- **Layer Caching**: Optimized for fast rebuilds
- **Health Checks**: Monitors application health
- **Development Mode**: Runs Vite dev server with hot reload

### docker-compose.yml Services

#### App Service
- **Port**: 5173 (configurable via APP_PORT)
- **Volumes**: Source code mounted for hot reload
- **Environment**: Development configuration with .env file support
- **Health Checks**: Ensures application is running

#### Nginx Service (Optional)
- **Port**: 80 (configurable via NGINX_PORT)
- **Purpose**: Reverse proxy for production-like setup
- **Features**: Gzip compression, security headers, SPA routing

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env` and customize:

```env
APP_PORT=5173          # Vite dev server port
NGINX_PORT=80         # Nginx proxy port
VITE_APP_NAME="PH Tax Directory"
NODE_ENV=development
```

## 🚀 Development Workflow

### Initial Setup
```bash
# Clone and navigate
git clone <repo-url>
cd ph-tax-directory

# Setup environment
cp .env.example .env

# Start development
cd docker
docker-compose up --build
```

### Daily Development
```bash
# Start containers
docker-compose up

# Stop containers
docker-compose down

# View logs
docker-compose logs -f app

# Rebuild after dependency changes
docker-compose up --build
```

### File Changes
- **Source code changes**: Auto-reload (hot module replacement)
- **Package.json changes**: Rebuild container
- **Docker files changes**: Rebuild with `--build` flag

## 🛠️ Advanced Usage

### Custom Commands
```bash
# Rebuild specific service
docker-compose build app

# Remove all containers and volumes
docker-compose down -v

# View container resource usage
docker stats
```

### Debugging
```bash
# Shell access to container
docker-compose exec app /bin/sh

# Check container logs
docker-compose logs --tail=50 app
```

## 🔒 Security Features

- **Non-root user**: Application runs as `reactuser:1001`
- **Alpine Linux**: Minimal attack surface
- **No secrets in image**: Environment variables loaded at runtime
- **Health checks**: Automatic container restart on failure
- **Security headers**: Added via Nginx configuration

## 📝 Best Practices Implemented

✅ **Alpine base image** (lightweight and secure)  
✅ **Layer caching optimized** (dependencies installed before code copy)  
✅ **Security hardened** (non-root user, minimal base image)  
✅ **Development optimized** (hot reload, volume mounts)  
✅ **Health monitoring** (health checks and restart policies)  
✅ **Environment configuration** (.env file support)  
✅ **Clean organization** (all Docker files in dedicated folder)