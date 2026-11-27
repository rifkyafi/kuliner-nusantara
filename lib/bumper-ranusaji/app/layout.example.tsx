// Contoh app/layout.tsx (App Router). Sesuaikan dengan layout.tsx milikmu —
// yang perlu ditambahkan hanya baris bertanda  // <-- BARU
import type { Metadata } from "next";
import "./globals.css";
import "./splash.css";                                   // <-- BARU
import SplashScreen from "../../../components/SplashScreen";   // <-- BARU

export const metadata: Metadata = { title: "Website Kamu" };

// Dijalankan sebelum halaman tampil: cegah kedipan & kunci scroll selama intro
const splashHead = `(function(d){try{d.classList.add(sessionStorage.getItem('splash-seen')?'splash-skip':'splash-lock')}catch(e){d.classList.add('splash-lock')}})(document.documentElement)`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>{/* <-- BARU: suppressHydrationWarning */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: splashHead }} />{/* <-- BARU */}
        <noscript><style>{`#splash{display:none!important}`}</style></noscript>{/* <-- BARU */}
      </head>
      <body>
        <SplashScreen />{/* <-- BARU: harus paling atas di dalam <body> */}
        {children}
      </body>
    </html>
  );
}
