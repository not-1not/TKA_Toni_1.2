# GitHub Actions Configuration Guide

## Overview

Repository ini menggunakan GitHub Actions untuk otomasi CI/CD:
- **CI Workflow** (`ci.yml`) - Lint, type check, build
- **Deploy Workflow** (`deploy.yml`) - Deploy ke Vercel

## Workflows

### CI Pipeline (ci.yml)

Berjalan pada:
- Setiap push ke branch `main` atau `master`
- Setiap pull request

**Steps:**
1. Checkout code
2. Setup Node.js (18.x dan 20.x)
3. Install dependencies
4. Lint code
5. Type checking
6. Build

### Deploy Pipeline (deploy.yml)

Berjalan pada:
- Setiap push ke branch `main` atau `master` (setelah CI sukses)

**Steps:**
1. Checkout code
2. Deploy ke Vercel menggunakan provided credentials

## Setup Required Secrets

GitHub Actions membutuhkan secrets untuk deployment. Setup di:
**Settings → Secrets and variables → Actions**

### Required Secrets

#### VERCEL_TOKEN
- **Purpose**: Autentikasi dengan Vercel API
- **How to get**:
  1. Go to https://vercel.com/account/tokens
  2. Create new token (give it appropriate scopes)
  3. Copy the token

#### VERCEL_ORG_ID
- **Purpose**: Identifikasi organisasi Vercel
- **How to get**:
  1. Go to Vercel project settings
  2. Find "Team ID" or "Org ID"
  3. Copy the ID

#### VERCEL_PROJECT_ID
- **Purpose**: Identifikasi spesifik project di Vercel
- **How to get**:
  1. Go to Vercel project settings
  2. Find "Project ID"
  3. Copy the ID

## How to Add Secrets

### Via GitHub UI
1. Go to repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Enter Name and Value
5. Click "Add secret"

### Example
```
Name: VERCEL_TOKEN
Value: (paste your token here)
```

Repeat for other secrets.

## Environment Variables (Different from Secrets)

These are handled differently and go in Vercel dashboard:

**Vercel Project Settings → Environment Variables:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Testing Workflows Locally

### Install Act
```bash
# macOS
brew install act

# or download from https://github.com/nektos/act
```

### Run Workflow
```bash
# List available workflows
act -l

# Run specific workflow
act push --job build

# Run with secrets (create .secrets file first)
act -s VERCEL_TOKEN=your_token push
```

## Workflow Status

### Check Status
1. Go to repository
2. Click "Actions" tab
3. View workflow runs and status

### View Logs
1. Click on workflow run
2. Click on job
3. View detailed logs

## Troubleshooting

### Deployment fails with auth error
- ✓ Check secrets are set correctly
- ✓ Verify VERCEL_TOKEN is not expired
- ✓ Ensure token has correct permissions

### Build fails in Actions but works locally
- ✓ Check Node.js version matches
- ✓ Verify environment variables
- ✓ Check for platform-specific issues

### Workflows not running
- ✓ Check workflow file syntax (YAML)
- ✓ Verify branch name (main/master)
- ✓ Check repository permissions

## Workflow Customization

### Modify CI triggers
Edit `.github/workflows/ci.yml`:
```yaml
on:
  push:
    branches: [main, master]
    paths:
      - 'apps/web/**'  # Only run on web changes
  pull_request:
    branches: [main, master]
```

### Add new workflows
Create new file in `.github/workflows/` directory

Example: `.github/workflows/test.yml`
```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm install
      - run: npm test
```

## Best Practices

1. **Use matrix strategy** for multiple Node versions
2. **Cache dependencies** to speed up builds
3. **Keep secrets secure** - never log sensitive data
4. **Use concurrency** to limit parallel jobs
5. **Add badges** to README for workflow status

## Badge Example

Add to README.md:
```markdown
[![CI](https://github.com/USERNAME/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/USERNAME/REPO/actions/workflows/ci.yml)
```

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel GitHub Action](https://vercel.com/docs/deployments/integrations/vercel-for-github)
- [Action: checkout](https://github.com/actions/checkout)
- [Action: setup-node](https://github.com/actions/setup-node)
