#!/bin/bash
# Enterprise Stack Setup Script
# Description: Installs basic dependencies and initializes the dev environment.

set -e

echo "🚀 Starting Enterprise Stack Setup..."

# 1. Check for Docker
if ! [ -x "$(command -v docker)" ]; then
  echo "❌ Error: Docker is not installed. Please install Docker first."
  exit 1
fi

# 2. Initialize Terraform
if [ -d "terraform" ]; then
  echo "📡 Initializing Terraform..."
  cd terraform
  terraform init
  cd ..
fi

# 3. Setup Local Environment Variables
if [ ! -f ".env" ]; then
  echo "📝 Creating .env from .env.example..."
  cp .env.example .env
fi

# 4. Install Local Node Modules
echo "📦 Installing development dependencies..."
npm install

# 5. Build Local Project
echo "🏗 Building application modules..."
npm run build

echo "✅ Setup complete! run 'npm run dev' to start the local stack."
