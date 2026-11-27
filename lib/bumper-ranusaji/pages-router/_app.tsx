// pages/_app.tsx  (khusus Pages Router)
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/splash.css";                            // salin splash.css ke folder styles/
import SplashScreen from "../../../components/SplashScreen";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SplashScreen />
      <Component {...pageProps} />
    </>
  );
}
