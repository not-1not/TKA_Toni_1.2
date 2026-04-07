# Deployment Guide

## Overview

Aplikasi ini di-deploy menggunakan:
- **Frontend**: Vercel
- **Backend**: Supabase
- **Version Control**: GitHub

## Prerequisites

- GitHub account
- Vercel account (free tier tersedia)
- Supabase account (free tier tersedia)
- Node.js 18+ dan npm installed

## Step 1: GitHub Setup

### Create Repository

```bash
# Navigate to project directory
cd TKA_Toni_v2

# Initialize git (if not already)
git init

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/TKA_Toni_v2.git

# Create main branch (if on master)
git branch -m main

# Commit current state
git add .
git commit -m "Initial commit: monorepo structure with Vercel and Supabase"

# Push to GitHub
git push -u origin main
```

### Enable GitHub Workflows

1. Go to repository settings
2. Navigate to "Actions" > "General"
3. Enable "Allow all actions and reusable workflows"

## Step 2: Supabase Setup

### Create Supabase Project

1. Go to https://app.supabase.com
2. Click "New project"
3. Fill in project details:
   - Name: TKA_Toni_v2
   - Database password: (use strong password)
   - Region: Choose closest to you
4. Wait for project to initialize

### Get Credentials

1. Go to Project Settings > API
2. Copy:
   - `Project URL` → `VITE_SUPABASE_URL`
   - `anon public` key → `VITE_SUPABASE_ANON_KEY`

### Setup Database

```bash
# Install Supabase CLI
npm install -g supabase

# Link project
supabase link --project-ref YOUR_PROJECT_ID

# Run migrations
supabase db push
```

Or manually create tables via Supabase dashboard:

**students**
```sql
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  school TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**questions**
```sql
CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  subject TEXT NOT NULL,
  question TEXT NOT NULL,
  type TEXT NOT NULL,
  option_a TEXT,
  option_b TEXT,
  option_c TEXT,
  option_d TEXT,
  correct_answer TEXT,
  statements JSONB,
  image TEXT,
  package TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**exam_results**
```sql
CREATE TABLE exam_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id),
  exam_date TIMESTAMP NOT NULL,
  subject TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  answers JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**exam_tokens**
```sql
CREATE TABLE exam_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  token TEXT UNIQUE NOT NULL,
  duration_minutes INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  used_at TIMESTAMP,
  used_by UUID REFERENCES students(id)
);
```

## Step 3: Vercel Setup

### Create Vercel Project

1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Select your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `apps/web`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Add Environment Variables

In Vercel Project Settings > Environment Variables, add:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Deploy

1. Click "Deploy" button
2. Wait for deployment to complete
3. Your app will be live at provided URL

## Step 4: GitHub Actions Setup

### Add Secrets

1. Go to GitHub repo > Settings > Secrets and variables > Actions
2. Add repository secrets:
   - `VERCEL_TOKEN`: From Vercel account settings
   - `VERCEL_ORG_ID`: From Vercel team settings
   - `VERCEL_PROJECT_ID`: From Vercel project settings

### Workflows

**CI (ci.yml)**
- Runs on: Every push to main/master and PRs
- Actions:
  - Lint code
  - Type check
  - Build application

**Deploy (deploy.yml)**
- Runs on: Every push to main/master (if CI passes)
- Actions:
  - Build application
  - Deploy to Vercel

## Step 5: Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/YOUR_USERNAME/TKA_Toni_v2.git
cd TKA_Toni_v2

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Add your Supabase credentials
# Edit apps/web/.env.local with your Supabase URL and key

# 5. Start development server
npm run dev
```

## Continuous Deployment Flow

```
1. Developer pushes to GitHub (main branch)
   ↓
2. GitHub Actions CI pipeline runs
   - Lint
   - Type check
   - Build
   ↓
3. If CI passes, Deploy workflow runs
   - Build for production
   - Deploy to Vercel
   ↓
4. Vercel publishes new version
   ↓
5. Live at your Vercel domain
```

## Monitoring & Maintenance

### Vercel Dashboard
- Monitor deployments
- Check logs
- View analytics
- Manage domains

### Supabase Dashboard
- Monitor database usage
- Check logs
- Manage credentials
- View real-time stats

### GitHub Actions
- Check workflow runs
- View CI/CD logs
- Monitor for failures

## Rollback

### Vercel
1. Go to Deployments
2. Click on previous working deployment
3. Click "Redeploy"

### Database
Use Supabase backup/restore features

## Troubleshooting

### Deployment fails
- Check GitHub Actions logs
- Verify environment variables
- Check build logs in Vercel

### Environment variables not working
- Restart deployment after updating
- Check `.env.example` matches actual needs
- Ensure variables set in Vercel dashboard

### Build timeout
- Increase Node memory: `--max-old-space-size=4096`
- Check for large dependencies
- Optimize build process

## Security Best Practices

1. Never commit `.env` files
2. Use `.env.example` for templates
3. Rotate Supabase keys regularly
4. Use strong database passwords
5. Enable 2FA on all accounts
6. Review GitHub secret access

## Cost Optimization

### Vercel
- Free tier includes generous bandwidth
- Pay only for additional bandwidth/deployments

### Supabase
- Free tier: 2 projects, 500MB storage
- Scale as needed with Pro tier

### GitHub Actions
- Free: 2000 minutes/month
- Sufficient for most projects

## Next Steps

1. ✅ Set up GitHub repository
2. ✅ Connect Supabase
3. ✅ Deploy to Vercel
4. ✅ Configure CI/CD
5. Start development and push changes
6. Monitor deployments and metrics
