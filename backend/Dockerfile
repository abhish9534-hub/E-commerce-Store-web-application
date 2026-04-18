# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source
COPY . .

# Multi-stage build for Backend
# Since it's TS, we use tsx in production or compile to JS
# In this enterprise setup, we assume compilation to JS
RUN npm run build

# Stage 2: Production
FROM node:22-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy built assets and production dependencies
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/backend ./backend

# Centralized logging configuration would go here
# USER node
EXPOSE 3000

CMD ["node", "backend/server.ts"]
