# Jenkins Documentation

## Overview
Jenkins is the automation heart of our CI/CD process. It orchestrates building, testing, scanning, and deploying the entire stack.

## Pipeline Highlights
Our `Jenkinsfile` implements a declarative pipeline with the following stages:
1. **Lint & Test**: Ensures code quality.
2. **SonarQube Analysis**: Static Application Security Testing (SAST).
3. **Trivy Image Scan**: Scans Docker layers for vulnerabilities.
4. **Push**: Uploads to private container registry.
5. **ArgoCD Sync**: Triggers GitOps deployment.

## Installation
Typically installed on a dedicated EC2 instance using our Ansible playbooks:
1. Java 17 Runtime.
2. Jenkins LTS.
3. Plugins: Pipeline, GitHub, Docker, SonarQube Scanner.

## Commands & Management
- `systemctl status jenkins`: Check runner health.
- `cat /var/lib/jenkins/secrets/initialAdminPassword`: Retrieve initial pass.

## Best Practices
- **Master-Slave**: Run builds on distributed agents, not the master node.
- **Pipeline as Code**: Always store your pipeline logic in a `Jenkinsfile`.
- **Credential Masking**: Use the `credentials()` helper to hide secrets in logs.

## Troubleshooting
- **No space left on device**: Regularly prune old build artifacts and Docker images on the agent.
- **Webhook not firing**: Verify the GitHub repository settings and the Jenkins URL.
