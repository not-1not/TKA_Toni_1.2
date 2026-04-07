# NEXT STEPS - Action Items

Setelah restructuring selesai, ikuti langkah-langkah berikut untuk membuat aplikasi siap deployment.

## Phase 1: Local Setup (30 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Verify Setup
```bash
npm run type-check
npm run lint
npm run build
```

### 3. Test Development Server
```bash
npm run dev
```

Buka browser di `http://localhost:5173`

### 4. Checklist
- [ ] Dependencies installed successfully
- [ ] No type errors
- [ ] Linting passed
- [ ] Build successful
- [ ] Dev server running

## Phase 2: Move Existing Source Files (20 minutes)

Jika Anda sudah memiliki files di `src/`, `public/`, atau `.env.local`:

### 1. Move src/ contents
```bash
# If src/ exists at root, move to apps/web/
cp -r src/* apps/web/src/
```

### 2. Move public/ contents
```bash
# If public/ exists at root, move to apps/web/
cp -r public/* apps/web/public/
```

### 3. Update .env
```bash
# Copy existing .env.local to apps/web/
cp .env.local apps/web/.env.local
# Edit with your Supabase credentials
```

### 4. Update imports in src/
Replace:
```typescript
// OLD
import { db } from '@/lib/db.ts'

// NEW (if moving to apps/web/)
import { db } from '@/lib/db.ts'  // This stays the same in apps/web/
```

## Phase 3: GitHub Repository (15 minutes)

### 1. Create GitHub Repository
```bash
# If not already created
git init
git add .
git commit -m "feat: restructure to Turbo monorepo"
git branch -m main  # If on master
git remote add origin https://github.com/YOUR_USERNAME/TKA_Toni_v2.git
git push -u origin main
```

### 2. Enable GitHub Actions
1. Go to repository
2. Settings → Actions → General
3. Enable "Allow all actions and reusable workflows"
4. Check "Require status checks to pass" under branch protection

### 3. Setup GitHub Secrets
Go to Settings → Secrets and variables → Actions

Add these secrets (get from Vercel and Supabase):
- [ ] `VERCEL_TOKEN` - from Vercel account settings
- [ ] `VERCEL_ORG_ID` - from Vercel team settings
- [ ] `VERCEL_PROJECT_ID` - from Vercel project settings

## Phase 4: Supabase Setup (20 minutes)

### 1. Create Supabase Project
1. Go to https://app.supabase.com
2. New Project → Fill details → Create

### 2. Get Credentials
In Project Settings → API:
- [ ] Copy `Project URL` → `VITE_SUPABASE_URL`
- [ ] Copy `anon public` key → `VITE_SUPABASE_ANON_KEY`

### 3. Setup Database Schema
Execute SQL in Supabase SQL Editor:

```sql
-- Students table
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  school TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Questions table
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

-- Exam Results table
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

-- Exam Tokens table
CREATE TABLE exam_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  token TEXT UNIQUE NOT NULL,
  duration_minutes INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  used_at TIMESTAMP,
  used_by UUID REFERENCES students(id)
);
```

### 4. Checklist
- [ ] Project created in Supabase
- [ ] Credentials copied
- [ ] Database tables created
- [ ] Row Level Security policies configured (optional)

## Phase 5: Vercel Setup (20 minutes)

### 1. Create Vercel Project
1. Go to https://vercel.com
2. Connect GitHub Repository
3. Select your TKA_Toni_v2 repo

### 2. Configure Project
- **Framework**: Vite
- **Root Directory**: `apps/web`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### 3. Add Environment Variables
In Vercel Project Settings → Environment Variables:
- [ ] `VITE_SUPABASE_URL` = (from Supabase)
- [ ] `VITE_SUPABASE_ANON_KEY` = (from Supabase)

### 4. Deploy
Click "Deploy" button and wait for completion

### 5. Checklist
- [ ] Repository connected
- [ ] Build command correct
- [ ] Environment variables set
- [ ] First deployment successful
- [ ] App accessible at Vercel URL

## Phase 6: Update apps/web Configuration (10 minutes)

### 1. Create apps/web/.env.local
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Test Locally
```bash
npm run dev
```

### 3. Verify
- [ ] Dev server starts
- [ ] No console errors
- [ ] Supabase connection works
- [ ] Can access admin/student pages

## Phase 7: GitHub Actions Testing (10 minutes)

### 1. Make a test commit
```bash
git add .
git commit -m "test: verify CI/CD pipeline"
git push origin main
```

### 2. Check GitHub Actions
1. Go to repository → Actions tab
2. Watch CI workflow run

### 3. Verify Steps
- [ ] CI pipeline runs
- [ ] Linting passes
- [ ] Type checking passes
- [ ] Build successful
- [ ] Deploy workflow triggers (if CI passes)
- [ ] Vercel deployment completes

## Phase 8: Production Testing (20 minutes)

### 1. Test Frontend
Visit your Vercel deployment URL:
- [ ] App loads without errors
- [ ] Admin login works
- [ ] Student login works
- [ ] Exam interface responsive

### 2. Test Supabase Connection
In browser console (F12):
```javascript
// Check if Supabase is connected
console.log(window.__SUPABASE_URL__)
```

### 3. Test Data
- [ ] Can fetch questions
- [ ] Can submit answers
- [ ] Can view results

## Phase 9: Documentation Update (15 minutes)

### 1. Update README.md
- [ ] Add Supabase connection info
- [ ] Add deployment instructions
- [ ] Add contributor guidelines

### 2. Update .env.example
```bash
# Verify this matches your actual needs
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Create CONTRIBUTING.md
```markdown
# Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Run `npm run lint` and `npm run type-check`
5. Push to branch
6. Create Pull Request
```

## Phase 10: Monitoring & Maintenance

### Daily Checks
- [ ] Check GitHub Actions logs
- [ ] Monitor Vercel deployments
- [ ] Check Supabase usage

### Weekly Tasks
- [ ] Review error logs
- [ ] Update dependencies (if needed)
- [ ] Backup database

### Monthly Tasks
- [ ] Security updates
- [ ] Performance optimization
- [ ] Analytics review

## Troubleshooting Checklist

If you encounter issues, verify:

### Build Issues
- [ ] Node.js version 18+ (check: `node --version`)
- [ ] npm cache clean (run: `npm cache clean --force`)
- [ ] Dependencies installed (run: `npm install`)
- [ ] No syntax errors (run: `npm run lint`)

### Environment Variable Issues
- [ ] .env.local exists in apps/web/
- [ ] Variables are set in Vercel dashboard
- [ ] Vercel deployment restarted after env change

### Supabase Connection Issues
- [ ] URL is correct (from Project Settings)
- [ ] Anon key is correct (from Project Settings)
- [ ] CORS is configured in Supabase
- [ ] Network is accessible

### GitHub Actions Issues
- [ ] Secrets are set correctly
- [ ] VERCEL_TOKEN is not expired
- [ ] Workflow file syntax is valid (YAML)
- [ ] Branch protection rules allow deployment

## Success Criteria

You're ready when:

- ✅ Local development works (`npm run dev`)
- ✅ Linting and type checking pass
- ✅ Build succeeds (`npm run build`)
- ✅ GitHub repository is setup
- ✅ Supabase project created with tables
- ✅ Vercel deployment successful
- ✅ Environment variables configured
- ✅ GitHub Actions workflows passing
- ✅ Frontend accessible and working
- ✅ Supabase connection verified

## Quick Reference

### Useful Commands
```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run lint             # Run linting
npm run type-check       # Type checking
npm run clean            # Clean build

# Workspace (from root)
npm install -w @tka-toni/types
npm run dev --filter=web
```

### Key URLs
- GitHub: `https://github.com/YOUR_USERNAME/TKA_Toni_v2`
- Vercel: `https://your-app-name.vercel.app`
- Supabase: `https://app.supabase.com/project/YOUR_PROJECT_ID`

### Important Files
- Source code: `apps/web/src/`
- Types: `packages/types/src/index.ts`
- Utils: `packages/utils/src/index.ts`
- Workflows: `.github/workflows/`
- Config: `turbo.json`, `tsconfig.json`, `package.json`

## Support Resources

1. **Project Documentation**
   - `STRUCTURE.md` - Architecture explanation
   - `DEPLOYMENT.md` - Detailed deployment guide
   - `GITHUB_ACTIONS.md` - CI/CD setup
   - `RESTRUCTURING_SUMMARY.md` - What changed

2. **External Resources**
   - [Vercel Docs](https://vercel.com/docs)
   - [Supabase Docs](https://supabase.com/docs)
   - [GitHub Actions](https://docs.github.com/en/actions)
   - [Turbo Docs](https://turbo.build)

3. **Community**
   - Vercel Forum
   - Supabase Discord
   - GitHub Discussions

---

## Timeline

Estimasi waktu untuk menyelesaikan semua phase:
- **Phase 1**: 30 min
- **Phase 2**: 20 min
- **Phase 3**: 15 min
- **Phase 4**: 20 min
- **Phase 5**: 20 min
- **Phase 6**: 10 min
- **Phase 7**: 10 min
- **Phase 8**: 20 min
- **Phase 9**: 15 min
- **Total**: ~2.5 hours

## Next: Start with Phase 1

Ready to begin? Start with Phase 1 by running:
```bash
npm install
npm run type-check
npm run build
npm run dev
```

Good luck! 🚀
