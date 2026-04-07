# Project Structure Guide

## Arsitektur Target

Proyek dipisah menjadi dua area utama:

1. Frontend untuk Vercel di `apps/web`
2. Backend database untuk Supabase di `supabase`

## Struktur Utama

```
TKA_Toni_v2/
├── apps/
│   └── web/                          # Frontend (Vercel)
│       ├── src/
│       │   ├── components/
│       │   ├── contexts/
│       │   ├── lib/
│       │   ├── pages/
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── index.css
│       ├── public/
│       │   ├── 404.html
│       │   └── database/
│       ├── index.html
│       ├── package.json
│       ├── postcss.config.js
│       ├── tailwind.config.js
│       ├── tsconfig.json
│       ├── vite.config.ts
│       └── vercel.json
│
├── supabase/                         # Backend (Supabase)
│   ├── migrations/
│   │   └── 202604070001_complete_schema.sql
│   └── seeds/
│       └── 202604070001_questions_seed.sql
│
├── packages/                         # Shared workspace packages
│   ├── types/
│   └── utils/
│
├── package.json                      # Root workspace + turbo runner
├── turbo.json
└── tsconfig.json                     # Base TS config
```

## Frontend (Vercel)

- Root deploy: `apps/web`
- Dev: `npm run dev` (dari root, akan filter ke workspace web)
- Build: `npm run build -w @tka-toni/web`
- Env frontend: `apps/web/.env.local`

Variable yang dibutuhkan:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Backend (Supabase)

- Schema migration ada di `supabase/migrations`
- Data seed ada di `supabase/seeds`
- Jalankan migration dulu, lalu seed

Urutan minimal:

1. Apply `supabase/migrations/202604070001_complete_schema.sql`
2. Apply `supabase/seeds/202604070001_questions_seed.sql`

## Catatan Penting

Folder dan file frontend lama di root (`src`, `public`, `index.html`, dll) saat ini masih ada sebagai artefak lama. Source of truth untuk deployment Vercel adalah `apps/web`.
