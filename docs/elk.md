# ELK Stack Documentation

## Overview
A centralized logging solution for collecting, indexable, and visualizing logs from every pod in the enterprise cluster.

## Components
- **Elasticsearch**: The distributed search and analytics engine.
- **Logstash / FluentBit**: The log collector and processor (we prefer FluentBit for K8s).
- **Kibana**: The visualization dashboard.

## Installation
Usually deployed as a sidecar or a DaemonSet to capture stdout/stderr from all pods.

## Key Features
- **Centralization**: No more `kubectl logs` on 50 different pods; all logs in one search bar.
- **Retention**: Configurable lifecycle for old logs to save disk space.

## Best Practices
- **Namespace Tags**: Always tag logs with the source namespace and pod name.
- **Sensitive Data**: Use Logstash filters to mask PII (emails, passwords) before indexing.

## Troubleshooting
- **Elasticsearch Yellow State**: Usually means unassigned shards. Check disk space.
- **Missing Logs**: Ensure FluentBit has permission to read `/var/log/pods`.
