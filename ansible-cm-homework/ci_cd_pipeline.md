# Extra Credit - Simple CI/CD Pipeline for Ansible Config

## Goal
Test Ansible configurations automatically before deployment.

## Tools
- **Serverspec** for testing server state
- **GitHub Actions** or **GitLab CI** as the CI runner

## Steps
1. Push Ansible roles and playbooks to GitHub
2. Trigger a CI pipeline on commit
3. Use a test container to run:
   - `ansible-playbook` on a local container
   - `serverspec` tests to validate setup
4. If tests pass, deploy to production

## Example GitHub Action Snippet

```yaml
name: Ansible CI Test

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Ansible playbook
        run: ansible-playbook install_apache.yml