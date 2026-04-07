# Project Tree Structure

Ini adalah struktur lengkap project setelah restructuring:

```
TKA_Toni_v2/
│
├── 📁 apps/                                    # Application
│   └── 📁 web/                                 # Frontend App (Vercel)
│       ├── 📁 src/                             # Source code
│       │   ├── 📁 components/                  # React components
│       │   │   └── AnswerAnalysis.tsx
│       │   ├── 📁 pages/                       # Page components
│       │   │   ├── 📁 admin/                   # Admin pages
│       │   │   │   ├── Dashboard.tsx
│       │   │   │   ├── Import.tsx
│       │   │   │   ├── Login.tsx
│       │   │   │   ├── Monitor.tsx
│       │   │   │   ├── QuestionBank.tsx
│       │   │   │   ├── Results.tsx
│       │   │   │   ├── Students.tsx
│       │   │   │   └── Tokens.tsx
│       │   │   └── 📁 student/                 # Student pages
│       │   │       ├── Exam.tsx
│       │   │       ├── Instruction.tsx
│       │   │       ├── Login.tsx
│       │   │       ├── Result.tsx
│       │   │       └── Review.tsx
│       │   ├── 📁 contexts/                    # React contexts
│       │   │   └── AuthContext.tsx
│       │   ├── 📁 lib/                         # Libraries & utilities
│       │   │   ├── db.ts                       # Supabase client
│       │   │   └── utils.ts                    # Helper functions
│       │   ├── App.tsx                         # Root component
│       │   ├── main.tsx                        # Entry point
│       │   └── index.css                       # Global styles
│       ├── 📁 public/                          # Static assets
│       │   └── 📁 database/                    # Data files
│       │       ├── questions_bahasa_indonesia.csv
│       │       ├── questions_matematika.csv
│       │       ├── results.json
│       │       ├── students.json
│       │       └── tokens.json
│       ├── 📄 package.json                     # Frontend dependencies
│       ├── 📄 vite.config.ts                   # Vite configuration
│       ├── 📄 tsconfig.json                    # TypeScript config
│       ├── 📄 tsconfig.node.json               # Node TypeScript config
│       ├── 📄 vercel.json                      # Vercel deployment config
│       ├── 📄 .env.example                     # Env template
│       └── 📄 .gitignore                       # Git ignore
│
├── 📁 packages/                                # Shared packages
│   ├── 📁 types/                               # Type definitions
│   │   ├── 📁 src/
│   │   │   └── 📄 index.ts                     # Type exports
│   │   ├── 📄 package.json
│   │   └── 📄 tsconfig.json
│   │
│   └── 📁 utils/                               # Utilities
│       ├── 📁 src/
│       │   └── 📄 index.ts                     # Utility functions
│       ├── 📄 package.json
│       └── 📄 tsconfig.json
│
├── 📁 supabase/                                # Supabase backend
│   ├── 📁 migrations/                          # Database migrations
│   │   └── [migration files here]
│   └── 📁 functions/                           # Edge functions (optional)
│
├── 📁 .github/                                 # GitHub configuration
│   └── 📁 workflows/                           # CI/CD pipelines
│       ├── 📄 ci.yml                           # Lint, type-check, build
│       └── 📄 deploy.yml                       # Deploy to Vercel
│
├── 📁 .vscode/                                 # VS Code settings
│
├── 📁 dist/                                    # Build output (generated)
│   ├── 📁 assets/
│   └── 📁 database/
│
├── 📁 node_modules/                            # Dependencies (generated)
│
├── 📄 package.json                             # Root workspace
├── 📄 tsconfig.json                            # Root TypeScript config
├── 📄 turbo.json                               # Turbo configuration
├── 📄 eslint.config.js                         # ESLint configuration
├── 📄 postcss.config.js                        # PostCSS config
├── 📄 tailwind.config.js                       # TailwindCSS config
├── 📄 vite.config.ts                           # Vite config (legacy)
├── 📄 .env.example                             # Environment template
├── 📄 .env                                     # Local env (DO NOT COMMIT)
├── 📄 .env.local                               # Local env (DO NOT COMMIT)
├── 📄 .gitignore                               # Git ignore rules
│
├── 📄 README.md                                # Main README
├── 📄 README_RESTRUCTURING.md                  # 👈 START HERE!
├── 📄 NEXT_STEPS.md                            # Setup guide (10 phases)
├── 📄 DEPLOYMENT.md                            # Deployment guide
├── 📄 STRUCTURE.md                             # Architecture guide
├── 📄 GITHUB_ACTIONS.md                        # CI/CD guide
├── 📄 RESTRUCTURING_SUMMARY.md                 # Change summary
│
├── 📄 package-lock.json                        # Dependency lock
├── 📄 turbo.lock                               # Turbo lock (if using)
│
└── 📄 .git/                                    # Git repository
```

## 📊 Quick Stats

| Metric | Value |
|--------|-------|
| **Folders Created** | 7 main, 18+ total |
| **Config Files** | 12 new/modified |
| **Documentation Files** | 5 new guides |
| **Frontend App** | apps/web |
| **Shared Packages** | 2 (@types, @utils) |
| **Workflows** | 2 (CI, Deploy) |

## 📍 Key Locations

### Frontend Code
```
apps/web/src/
├── components/        # Reusable components
├── pages/            # Page components
├── contexts/         # React contexts
├── lib/              # Utilities & db client
└── assets/           # Images, etc.
```

### Type Definitions
```
packages/types/src/index.ts
- Student, Question, ExamResult types
- Database schemas
```

### Shared Utilities
```
packages/utils/src/index.ts
- Helper functions
- Formatting utilities
```

### Database
```
supabase/migrations/
- Database schema files
```

### Configuration
```
Root directory:
- package.json       (Monorepo workspace)
- tsconfig.json      (Base TS config)
- turbo.json         (Build orchestration)
- eslint.config.js   (Linting rules)
```

### Automation
```
.github/workflows/
- ci.yml             (Lint, type-check, build)
- deploy.yml         (Deploy to Vercel)
```

## 🔄 File Organization Pattern

### By Feature
```
pages/
├── admin/
│   ├── Dashboard.tsx
│   ├── Students.tsx
│   └── ...
└── student/
    ├── Exam.tsx
    ├── Result.tsx
    └── ...
```

### By Function
```
lib/
├── db.ts             (Database client)
├── utils.ts          (Helper functions)
└── hooks.ts          (Custom hooks - if added)
```

### By Scope
```
packages/
├── types/            (Shared types)
├── utils/            (Shared utilities)
└── hooks/            (Shared hooks - if added)
```

## 🏗️ Build Output Structure

```
dist/                  (Generated by build)
├── index.html
├── 404.html
├── assets/
│   ├── [app name].js
│   ├── [app name].css
│   └── [hash].js
└── database/
    └── [static files]
```

## 📦 Node Modules (Simplified)

```
node_modules/
├── @tka-toni/        # Workspace packages (symlinked)
│   ├── types/
│   └── utils/
├── react/
├── react-dom/
├── @supabase/
├── vite/
├── tailwindcss/
└── [100+ dependencies...]
```

## 🔑 Important Files to Know

| File | Purpose | Edit? |
|------|---------|-------|
| `package.json` (root) | Workspace config | ✏️ Sometimes |
| `turbo.json` | Build orchestration | ✏️ Rarely |
| `apps/web/src/App.tsx` | Main app component | ✏️ Often |
| `packages/types/src/index.ts` | Type definitions | ✏️ When adding types |
| `.github/workflows/*.yml` | CI/CD | ✏️ Rarely |
| `.env.local` | Local env vars | ✏️ Often |
| `.gitignore` | Git rules | ✏️ Rarely |

## 🚀 Typical Development Flow

```
Edit code in:
  apps/web/src/ → Component changes
  packages/types/src/ → Type changes
  packages/utils/src/ → Utility changes

Run locally:
  npm run dev
  
Test changes:
  npm run lint
  npm run type-check
  npm run build

Push to GitHub:
  git add .
  git commit -m "message"
  git push

GitHub Actions:
  → CI pipeline runs
  → If success, deploy pipeline runs
  → Vercel gets new version
```

## 📚 File Size Reference

| Component | Size (approx) |
|-----------|---|
| apps/web/src/ | 50-100 KB |
| packages/types/ | 5-10 KB |
| packages/utils/ | 5-10 KB |
| node_modules/ | 500+ MB |
| dist/ (build) | 100-300 KB |

## 🎯 Navigation Guide

### To find...
- **React components** → `apps/web/src/components/`
- **Admin pages** → `apps/web/src/pages/admin/`
- **Student pages** → `apps/web/src/pages/student/`
- **Type definitions** → `packages/types/src/index.ts`
- **Helper functions** → `packages/utils/src/index.ts`
- **Database config** → `apps/web/src/lib/db.ts`
- **CI/CD pipelines** → `.github/workflows/`
- **Environment setup** → `NEXT_STEPS.md`
- **Deployment info** → `DEPLOYMENT.md`
- **Architecture** → `STRUCTURE.md`

---

**Last Updated**: 2026-04-06  
**Structure Version**: 1.0  
**Total Folders**: 20+  
**Total Files**: 50+ (excluding node_modules)
