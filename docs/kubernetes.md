# Enterprise Kubernetes Strategy

This document outlines the design decisions and operational best practices for managing the application's Kubernetes lifecycle.

## 🏗 Cluster Topology
- **Provider**: AWS EKS (Managed)
- **Version**: 1.29+
- **Network**: Calico CNI with Network Policies enabled for isolation.
- **Node Groups**: Multi-AZ Managed Node Groups (t3.medium).

## 🚀 Deployment Patterns

| Component | Strategy | Scaling |
|-----------|----------|---------|
| Frontend  | RollingUpdate | HPA (CPU > 80%) |
| Backend   | RollingUpdate | HPA (CPU > 70%) |
| Database  | Managed RDS | AWS-driven Scaling |

## 🛡 Security Hardening (DevSecOps)

- **Pod Security Standards (PSS)**: Standard "Restricted" profile applied at namespace level.
- **Network Policies**: Default deny-all ingress, with explicit allow rules for Frontend -> Backend communication.
- **Secret Management**: Integrated with AWS Secrets Manager via External Secrets Operator (Inferred in prod).
- **RBAC**: ServiceAccounts used with least-privilege principles.

## 📦 Secrets & API Keys Policy

To ensure a smooth developer experience and robust availability:
1. **Fallback Logic**: The application uses internal simulation modes if `STRIPE_SECRET_KEY` or `GEMINI_API_KEY` are missing.
2. **Mocking**: Dev environments bypass external API dependencies by default.
3. **Production Guard**: CI/CD pipelines fail only if *mandatory* vault-sync secrets (like DB credentials) are unreachable.

## 🛠 Useful Commands

```bash
# List all pods in the enterprise namespace
kubectl get pods -n enterprise-app

# Apply the entire stack
kubectl apply -k kubernetes/

# View HPA status
kubectl get hpa -n enterprise-app
```

## ⚠️ Troubleshooting
- **CrashLoopBackOff**: Most common when the DB migration has not yet been applied. Check `db-init` logs.
- **ImagePullBackOff**: Ensure the EKS Node IAM role has access to your ECR/ACR registry.
