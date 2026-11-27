# Intro logo "R" untuk Next.js

Sudah diuji di Next.js 16 + React 19 (App Router & Pages Router): build produksi lolos,
tanpa warning hydration di mode dev, dan intro tidak menghalangi halaman kalau JavaScript mati.

## 1. Salin file (sesuaikan kalau proyekmu memakai folder `src/`)

| Dari zip                          | Ke proyekmu                          |
|-----------------------------------|--------------------------------------|
| `public/splash/layers/*.webp`     | `public/splash/layers/`              |
| `components/SplashScreen.tsx`     | `components/SplashScreen.tsx`        |
| `app/splash.css`                  | `app/splash.css`                     |

(Kalau pakai `src/`: `src/components/...` dan `src/app/...`; folder `public/` tetap di root.)

## 2. App Router — edit `app/layout.tsx`

Lihat `app/layout.example.tsx`. Yang ditambahkan hanya:
1. `import "./splash.css";` dan `import SplashScreen from "../components/SplashScreen";`
2. `suppressHydrationWarning` pada tag `<html>`
3. `<script>` + `<noscript>` kecil di dalam `<head>`
4. `<SplashScreen />` sebagai elemen pertama di dalam `<body>`

`layout.tsx` TIDAK perlu dijadikan `"use client"` — hanya `SplashScreen.tsx` yang client component.

## 3. Pages Router (kalau proyekmu memakai folder `pages/`)

- Salin `app/splash.css` ke `styles/splash.css`
- Pakai `pages-router/_document.tsx` -> `pages/_document.tsx`
- Pakai `pages-router/_app.tsx` -> `pages/_app.tsx` (kalau sudah punya, tambahkan 2 import + `<SplashScreen />`)

## 4. Pengaturan

- Warna latar & ukuran logo: bagian atas `splash.css` (`--splash-bg`, `--splash-logo-w`)
- Lama tampil: `MIN_MS` dan `MAX_MS` di `SplashScreen.tsx`
- Supaya intro tampil di SETIAP kunjungan (bukan sekali per sesi): hapus dua baris
  `sessionStorage.setItem(...)` / `sessionStorage.getItem(...)` di komponen, dan di script `<head>`
  ganti kondisinya jadi selalu `'splash-lock'`.
- Mau tes ulang: buka DevTools > Application > Session Storage > hapus `splash-seen`, lalu refresh.
