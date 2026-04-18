# Docker Documentation

## Overview
Docker is used to containerize the enterprise stack, ensuring consistency across development, staging, and production environments. We leverage **Multi-stage builds** to keep production images lean and secure.

## Why Used?
- **Isolation**: Each service (Frontend, Backend, Database) runs in its own isolated environment.
- **Portability**: "Build once, run anywhere"—from local laptops to AWS EKS.
- **Optimization**: Multi-stage builds reduce image size by excluding build-time dependencies.

## Installation
### Linux (Ubuntu)
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```
### MacOS / Windows
Install [Docker Desktop](https://www.docker.com/products/docker-desktop).

## Key Commands
- `docker build -t app-name:version .`: Build an image.
- `docker run -p 3000:3000 app-name:version`: Run a container.
- `docker ps`: List running containers.
- `docker image prune`: Clean up unused images.

## Configuration
We use two main Dockerfiles:
1. `frontend/Dockerfile`: Next.js build + Nginx static serving.
2. `backend/Dockerfile`: Node.js build + Production runtime.

## Best Practices
- **Never use `latest` tags** in production; always use versioned tags or git SHAs.
- **Use `.dockerignore`** to prevent local `node_modules` from bloating the build context.
- **Run as non-root**: Our Dockerfiles use `USER node` for security.

## Troubleshooting
- **Cannot connect to Docker daemon**: Ensure the service is running (`sudo systemctl start docker`).
- **Build failing due to lockfile**: Run `npm install` locally first to update `package-lock.json`.
