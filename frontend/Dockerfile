# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build --config frontend/vite.config.ts

# Stage 2: Serve with Nginx for performance
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
# Custom nginx config for SPA routing
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
