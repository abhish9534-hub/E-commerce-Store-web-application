# ArgoCD & GitOps Documentation

## Overview
ArgoCD is our **GitOps Continuous Delivery** tool. It ensures the state of the EKS cluster matches the configuration stored in our Git repository.

## Why used?
- **Self-Healing**: Automatically reverts manual changes (drift) in the cluster.
- **Rollbacks**: Reverting a deployment is as simple as a `git revert`.
- **Visibility**: Provides a visual graph of all K8s resources.

## Configuration
ArgoCD watches the `/kubernetes` and `/helm` directories.
- **Sync Policy**: Automatic with Pruning enabled.
- **Source**: This GitHub Repository.
- **Destination**: Enterprise-app namespace.

## Best Practices
- **Prune Resources**: Always enable pruning to remove old objects.
- **App of Apps**: Use the "App of Apps" pattern for complex multi-service projects.

## Troubleshooting
- **Out of Sync**: Check if a manual edit caused a conflict.
- **Sync Failed**: Look at the "Events" tab in the ArgoCD UI to see permission or quota errors.
