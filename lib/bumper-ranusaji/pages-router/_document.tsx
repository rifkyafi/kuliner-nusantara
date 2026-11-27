// pages/_document.tsx  (khusus Pages Router)
import { Html, Head, Main, NextScript } from "next/document";

const splashHead = `(function(d){try{d.classList.add(sessionStorage.getItem('splash-seen')?'splash-skip':'splash-lock')}catch(e){d.classList.add('splash-lock')}})(document.documentElement)`;

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: splashHead }} />
        <noscript><style>{`#splash{display:none!important}`}</style></noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
