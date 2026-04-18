# Prometheus & Grafana Documentation

## Overview
A comprehensive monitoring stack installed via Helm to provide 360-degree visibility into the enterprise cluster.

## Why Used?
- **Prometheus**: Time-series database for metric collection.
- **Grafana**: Visual dashboarding for real-time analysis.
- **Node Exporter**: Collects OS-level metrics (CPU, RAM).
- **Kube-State-Metrics**: Monitors Kubernetes object health.

## Installation
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install monitoring prometheus-community/kube-prometheus-stack -f monitoring/values.yaml
```

## Dashboards
Standard dashboards included:
- **Kubernetes / Compute Resources / Cluster**: Global overview.
- **Kubernetes / Pods**: Individual service health.
- **Node Exporter / Nodes**: Hardware-level metrics.

## Alerts
Defined in `monitoring/prometheus-values.yaml`:
- **HighCPUUsage**: Alert if CPU > 85% for 5 minutes.
- **PodRestarts**: Alert if a service is unstable.

## Best Practices
- **Persistence**: Ensure Prometheus data is stored on a Managed Disk (PV).
- **SLIs/SLOs**: Define and monitor specific Service Level Objectives.

## Troubleshooting
- **Target Down**: Check if the service has the correct `prometheus.io/scrape` annotations.
- **No data in Grafana**: Verify the DataSource connection to Prometheus.
