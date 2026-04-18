#!/bin/bash
# Kubernetes Deployment Script
set -e
echo "🚀 Deploying to Kubernetes cluster..."
kubectl apply -f kubernetes/infrastructure.yaml
kubectl apply -f kubernetes/storage.yaml
kubectl apply -f kubernetes/backend-deployment.yaml
kubectl apply -f kubernetes/frontend-deployment.yaml
echo "✅ Deployment manifests applied."
