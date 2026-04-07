# Supabase Backend

Folder ini adalah source of truth backend database.

## Struktur

- `migrations/` untuk definisi schema
- `seeds/` untuk data awal

## Urutan Eksekusi

1. Jalankan migration schema:
   `supabase/migrations/202604070001_complete_schema.sql`
2. Jalankan seed data soal:
   `supabase/seeds/202604070001_questions_seed.sql`

## Catatan

File lama di root (`supabase_migration.sql` dan `supabase_setup.sql`) dipertahankan sebagai referensi kompatibilitas. Gunakan file di dalam folder `supabase/` untuk proses baru.
