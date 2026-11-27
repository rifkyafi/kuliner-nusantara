import { Geist, Geist_Mono, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "./splash.css"
import { Montserrat } from "next/font/google";
import SplashScreen from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat  = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
})


export const metadata = {
  title: "Ranusaji",
  description: "Kuliner Indonesia",
};

// Script anti-flicker di head (membaca sessionStorage sebelum render)
const splashHead = `(function(d){try{d.classList.add(sessionStorage.getItem('splash-seen')?'splash-skip':'splash-lock')}catch(e){d.classList.add('splash-lock')}})(document.documentElement)`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${playfairDisplay.variable}  h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{__html: splashHead}}/>
        <noscript>
          <style>{`#splash{display:none!important}`}</style>     
        </noscript>
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <SplashScreen/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
