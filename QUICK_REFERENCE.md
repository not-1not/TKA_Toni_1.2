# ⚡ Quick Reference Card

Cheat sheet untuk commands, links, dan info penting.

## 🔧 Essential Commands

### Development
```bash
npm install              # Install all dependencies
npm run dev              # Start dev server (localhost:5173)
npm run build            # Build for production
npm run lint             # Lint all code
npm run type-check       # TypeScript type checking
npm run clean            # Clean build artifacts
```

### Workspace (Root Level)
```bash
npm install -w @tka-toni/types    # Install in package
npm list -w @tka-toni/types       # List dependencies
npm run build -w @tka-toni/types  # Build specific package
```

### Git
```bash
git add .
git commit -m "Your message"
git push -u origin main
git branch -m main                 # Rename master to main
```

### Useful Unix Commands
```bash
# (Windows PowerShell equivalent)
cd apps/web               # Navigate to frontend
Get-ChildItem            # List directory
Remove-Item -Recurse     # Delete folder
```

## 📁 Important Paths

### Frontend
```
apps/web/src/           → React components
apps/web/src/pages/     → Page components
apps/web/src/lib/       → Database & utilities
apps/web/.env.local     → Environment variables
```

### Shared Code
```
packages/types/src/     → Type definitions
packages/utils/src/     → Helper functions
```

### Configuration
```
turbo.json             → Build orchestration
tsconfig.json          → TypeScript base
eslint.config.js       → Linting rules
package.json           → Workspace setup
```

### CI/CD
```
.github/workflows/ci.yml      → Test & build
.github/workflows/deploy.yml  → Deploy to Vercel
```

## 🌐 Important URLs

### Local Development
```
http://localhost:5173   → Frontend dev server
```

### External Services
```
https://github.com      → Your repository
https://vercel.com      → Frontend deployment
https://app.supabase.com → Backend database
```

### Your Project URLs (After Setup)
```
GitHub:    https://github.com/YOUR_USERNAME/TKA_Toni_v2
Vercel:    https://your-app-name.vercel.app
Supabase:  https://app.supabase.com/project/YOUR_PROJECT_ID
```

## 🔑 Credentials Checklist

### Supabase
- [ ] Project URL → `VITE_SUPABASE_URL`
- [ ] Anon Key → `VITE_SUPABASE_ANON_KEY`

### Vercel
- [ ] Project ID → `VERCEL_PROJECT_ID`
- [ ] Org ID → `VERCEL_ORG_ID`
- [ ] Token → `VERCEL_TOKEN`

### GitHub
- [ ] Repository link
- [ ] Secrets configured

## 📝 Environment Variables

### Local Setup (apps/web/.env.local)
```
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_key_here
```

### Vercel Dashboard
```
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_key_here
```

### GitHub Secrets
```
VERCEL_TOKEN=your_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

## 🚀 Quick Deploy Flow

### Step 1: Local Testing
```bash
npm install
npm run dev
# Test in browser
# Make changes
npm run build  # Verify build works
```

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Your message"
git push
```

### Step 3: Automatic
```
GitHub Actions CI runs → CI passes → Deploy to Vercel
```

## 🐛 Common Issues & Fixes

### Port Already in Use
```bash
# Kill process on 5173
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process
```

### Build Fails
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Types Not Found
```bash
npm install
npm run build
# Rebuild to ensure types are available
```

### Env Variables Not Working
```bash
# Restart dev server
npm run dev

# For Vercel, restart deployment
# Go to Vercel dashboard > Redeploy
```

## 📊 Project Stats

| Item | Count |
|------|-------|
| Apps | 1 (web) |
| Packages | 2 (types, utils) |
| Workflows | 2 (CI, Deploy) |
| Main folders | 7 |
| Documentation files | 8 |
| Configuration files | 12 |

## 📚 Documentation Quick Links

```
README_RESTRUCTURING.md     ← Start here!
NEXT_STEPS.md              ← Setup guide (10 phases)
DEPLOYMENT.md              ← Deployment steps
STRUCTURE.md               ← Architecture
GITHUB_ACTIONS.md          ← CI/CD setup
PROJECT_TREE.md            ← File structure
DOCUMENTATION_INDEX.md     ← All docs index
```

## ⏱️ Setup Timeline

```
Day 1 (1.5 hours)
  Phase 1: Local setup
  Phase 2-3: GitHub & secrets
  
Day 2 (2 hours)
  Phase 4: Supabase
  Phase 5: Vercel
  Phase 6: Config
  
Day 3 (1 hour)
  Phase 7-8: Verify CI/CD
  Phase 9: Documentation
  
Ongoing
  Phase 10: Monitoring
```

## 🔄 Deployment Checklist

- [ ] Local dev works (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] Linting passes (`npm run lint`)
- [ ] Type check passes (`npm run type-check`)
- [ ] Code pushed to GitHub
- [ ] GitHub Actions secrets added
- [ ] Supabase project created
- [ ] Database tables created
- [ ] Vercel project created
- [ ] Environment vars in Vercel
- [ ] First deployment successful

## 🎯 Key Tasks

### Today
- [ ] Read README_RESTRUCTURING.md
- [ ] Run `npm install`
- [ ] Setup GitHub

### Tomorrow
- [ ] Create Supabase account
- [ ] Create Vercel account
- [ ] Deploy to Vercel

### This Week
- [ ] Verify CI/CD working
- [ ] Test application
- [ ] Optimize build

## 💡 Pro Tips

1. **Save credentials securely** - Use password manager
2. **Never commit .env files** - Use .env.example as template
3. **Test locally first** - Before pushing to GitHub
4. **Check CI logs** - When deployment fails
5. **Keep docs updated** - When making changes
6. **Monitor deployments** - After each push
7. **Use branches** - For feature development
8. **Automated tests** - Add when possible

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| npm install fails | `npm cache clean --force` |
| Types error | `npm install` then `npm run build` |
| Dev server won't start | Check port 5173 not in use |
| Build fails locally | Check `npm run type-check` |
| Vercel deploy fails | Check build works locally first |
| Supabase connect fails | Verify credentials in .env.local |
| GitHub Actions not running | Check workflow file syntax (YAML) |
| Env vars not working | Restart after setting |

## 📞 Getting Help

1. Check relevant documentation file
2. Run `npm run build` to verify build
3. Check GitHub Actions logs
4. Check Vercel deployment logs
5. Check browser console for errors

## 🎓 Learning Resources

```
React      → https://react.dev
TypeScript → https://www.typescriptlang.org
Vite       → https://vitejs.dev
Vercel     → https://vercel.com/docs
Supabase   → https://supabase.com/docs
Turbo      → https://turbo.build
```

## 🗂️ File Quick Reference

| File | Purpose | Edit |
|------|---------|------|
| `package.json` (root) | Workspace | Rarely |
| `turbo.json` | Build orchestration | Rarely |
| `apps/web/src/App.tsx` | Main app | Often |
| `packages/types/src/index.ts` | Types | When needed |
| `packages/utils/src/index.ts` | Utils | When needed |
| `.env.local` (apps/web/) | Local env | Often |
| `.github/workflows/*.yml` | CI/CD | Rarely |

## ⚙️ System Requirements

```
Node.js:        18 or higher
npm:            9 or higher
OS:             Windows, macOS, Linux
Browser:        Modern (Chrome, Firefox, Safari, Edge)
RAM:            2GB minimum (4GB recommended)
```

## 🚀 Next Action

```
1. Read README_RESTRUCTURING.md     (5 min)
2. Open NEXT_STEPS.md               (Check phases)
3. Run npm install                  (5 min)
4. Start Phase 1 setup              (Go!)
```

---

**Last Updated**: 2026-04-06  
**Keep This Handy**: For quick reference during setup  
**Print Friendly**: Yes - fits on 2-3 pages
