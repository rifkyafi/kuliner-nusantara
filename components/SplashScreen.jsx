"use client";

import { useEffect, useRef, useState } from "react";

/** Intro logo "R" — tampil saat website pertama kali dimuat (sekali per sesi tab). */
const MIN_MS = 2400; // lama tampil minimal sejak animasi mulai (agar animasi tuntas)
const MAX_MS = 6000; // batas aman: tutup paksa kalau halaman terlalu lama
const STORAGE_KEY = "splash-seen";

const LAYERS = [
  { name: "leafA", cls: "s-leaf s-leaf-a", left: 4.00, top: 45.57, width: 22.60, w: 226, h: 244, origin: "86.3% 90.2%" },
  { name: "leafB", cls: "s-leaf s-leaf-b", left: 3.50, top: 72.02, width: 14.30, w: 143, h: 119, origin: "85.9% 74.6%" },
  { name: "swoosh", cls: "s-swoosh", left: 62.20, top: 56.43, width: 22.90, w: 229, h: 227, origin: "50.0% 50.0%" },
  { name: "R", cls: "s-r", left: 9.30, top: 4.13, width: 87.30, w: 873, h: 790, origin: "50.0% 50.0%" },
  { name: "bowl_base", cls: "s-base", left: 27.20, top: 94.92, width: 20.50, w: 205, h: 22, origin: "50.0% 50.0%" },
  { name: "bowl_low", cls: "s-low", left: 16.10, top: 85.95, width: 41.10, w: 411, h: 65, origin: "50.0% 50.0%" },
  { name: "bowl_top", cls: "s-top", left: 15.90, top: 76.98, width: 43.90, w: 439, h: 55, origin: "50.0% 50.0%" },
  { name: "cone", cls: "s-cone", left: 23.30, top: 54.19, width: 31.50, w: 315, h: 181, origin: "50.1% 96.6%" },
  { name: "steam1", cls: "s-steam s-steam-1", left: 33.80, top: 25.86, width: 7.80, w: 78, h: 212, origin: "50.0% 100.0%" },
  { name: "steam2", cls: "s-steam s-steam-2", left: 38.50, top: 32.70, width: 6.30, w: 63, h: 163, origin: "50.0% 100.0%" },
];

export default function SplashScreen() {
  const rootRef = useRef(null);
  const [run, setRun] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    let seen = false;
    try { seen = sessionStorage.getItem(STORAGE_KEY) === "1"; } catch {}
    if (seen) {
      html.classList.remove("splash-lock");
      setGone(true);
      return;
    }

    let cancelled = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minMs = reduce ? 400 : MIN_MS;
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    const imgs = Array.from(rootRef.current?.querySelectorAll("img") ?? []);
    const assetsReady = Promise.all(imgs.map((img) => img.decode().catch(() => {}))).then(() => {
      if (!cancelled) setRun(true); // mulai animasi setelah semua layer siap
      return wait(minMs);
    });
    const pageReady = new Promise((r) => {
      if (document.readyState === "complete" || document.readyState === "interactive") r();
      else window.addEventListener("DOMContentLoaded", () => r(), { once: true });
    });

    Promise.race([Promise.all([pageReady, assetsReady]), wait(MAX_MS)]).then(() => {
      if (cancelled) return;
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
      setLeaving(true);
      html.classList.remove("splash-lock");
      setTimeout(() => { if (!cancelled) setGone(true); }, 700);
    });

    return () => { cancelled = true; };
  }, []);

  if (gone) return null;

  return (
    <div
      id="splash"
      ref={rootRef}
      className={[run && "run", leaving && "is-leaving"].filter(Boolean).join(" ")}
      role="status"
      aria-label="Memuat halaman"
    >
      <div className="splash-logo" style={{ aspectRatio: "1000 / 847" }}>
        {LAYERS.map((l) => (
          // <img> biasa (bukan next/image): file sudah kecil & posisinya harus presisi
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={l.name}
            className={`s-layer ${l.cls}`}
            src={`/splash/layers/${l.name}.webp`}
            alt=""
            width={l.w}
            height={l.h}
            decoding="async"
            style={{ left: `${l.left}%`, top: `${l.top}%`, width: `${l.width}%`, transformOrigin: l.origin }}
          />
        ))}
      </div>
      <span className="s-sr">Memuat…</span>
    </div>
  );
}
