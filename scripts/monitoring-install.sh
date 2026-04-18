#!/bin/bash
# Monitoring Stack Installation Script
set -e
echo "📊 Installing Prometheus and Grafana..."
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install monitoring prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --create-namespace \
  -f monitoring/prometheus-values.yaml
echo "✅ Monitoring stack installed in 'monitoring' namespace."
