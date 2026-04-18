# Terraform Documentation

## Overview
Terraform is our **Infrastructure as Code (IaC)** tool. It manages the lifecycle of our AWS resources, from networking to compute.

## Why Used?
- **Version Control**: Infrastructure is defined in code and stored in Git.
- **Reproducibility**: Easily spin up duplicate environments (Dev/Staging/Prod).
- **Execution Plans**: `terraform plan` shows changes before they happen.

## Architecture
The enterprise infra consists of:
- **VPC Module**: Networking, subnets, IGW, NAT Gateways.
- **EKS Module**: Kubernetes control plane and node groups.
- **RDS Module**: Managed PostgreSQL instance.
- **S3 / Route53**: State storage and DNS management.

## Key Commands
- `terraform init`: Initialize provider and backend.
- `terraform plan -var-file=prod.tfvars`: Preview changes.
- `terraform apply`: Execute infrastructure changes.
- `terraform output`: View exported resource IDs.

## Best Practices
- **Remote State**: Always use an S3 bucket with DynamoDB locking for state files.
- **Modules**: Break complex infra into reusable modules.
- **Secrets**: NEVER hardcode secrets. Use `sensitive = true` variables or AWS Secrets Manager.

## Troubleshooting
- **State Lock**: If a previous run crashed, use `terraform force-unlock`.
- **Provider Version Mismatch**: Run `terraform init -upgrade`.
