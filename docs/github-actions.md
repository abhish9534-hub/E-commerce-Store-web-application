# GitHub Actions Documentation

## Overview
Automated workflows triggered on every commit to GitHub. Primary focus is on **fast feedback** and **developer experience**.

## Workflow Implementation
`.github/workflows/main.yml`:
- **CI**: Build, Lint, and Unit Tests.
- **Security Check**: Dependency scanning with OSV-Scanner.
- **Publish**: Pushes dev images to GitHub Container Registry (ghcr.io).

## Configuration
Requires repository secrets:
- `AWS_ACCESS_KEY_ID`: Deployment credentials.
- `AWS_SECRET_ACCESS_KEY`: Deployment credentials.
- `CR_PAT`: Github Personal Access Token for registry access.

## Best Practices
- **Cache**: Always cache `node_modules` to speed up builds by 2-3x.
- **Matrix**: Use build matrices to test across multiple Node versions.

## Troubleshooting
- **Path not found**: Ensure `working-directory` is set correctly for monorepo setups.
- **Secret not found**: Verify secret inheritance for PRs from forks.
