# Ansible Documentation

## Overview
Ansible provides **Configuration Management** and server provisioning. It ensures our EC2 instances and build nodes are configured identically.

## Roles
- **docker**: Installs Docker and setup daemon config.
- **k8s-tools**: Installs `kubectl`, `helm`, and `eksctl`.
- **jenkins**: Provisions the Jenkins master/agent nodes.
- **monitoring**: Installs local logging agents.

## Why Used?
- **Agentless**: Operates over SSH without needing local agents.
- **Idempotency**: Running a playbook multiple times has the same result.
- **Human Readable**: YAML-based playbooks are easy to audit.

## Key Commands
- `ansible-playbook -i inventory.ini site.yml`: Execute global config.
- `ansible all -m ping`: Check connection to managed nodes.

## Best Practices
- **Variables**: Use `group_vars` and `host_vars` for environment-specific config.
- **Vault**: Use `ansible-vault` to encrypt sensitive SSH keys or passwords.

## Troubleshooting
- **Permission Denied**: Ensure the user has `sudo` privileges without a password or provide the `--become` flag.
- **Host Unreachable**: Check security groups and SSH keys.
