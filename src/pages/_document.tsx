import * as React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

const v = (href: string) => {
  return `${href}?v=3`;
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en" className="dark scroll-smooth [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]">
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href={v('/favicons/apple-icon-57x57.png')} />
          <link rel="apple-touch-icon" sizes="60x60" href={v('/favicons/apple-icon-60x60.png')} />
          <link rel="apple-touch-icon" sizes="72x72" href={v('/favicons/apple-icon-72x72.png')} />
          <link rel="apple-touch-icon" sizes="76x76" href={v('/favicons/apple-icon-76x76.png')} />
          <link rel="apple-touch-icon" sizes="114x114" href={v('/favicons/apple-icon-114x114.png')} />
          <link rel="apple-touch-icon" sizes="120x120" href={v('/favicons/apple-icon-120x120.png')} />
          <link rel="apple-touch-icon" sizes="144x144" href={v('/favicons/apple-icon-144x144.png')} />
          <link rel="apple-touch-icon" sizes="152x152" href={v('/favicons/apple-icon-152x152.png')} />
          <link rel="apple-touch-icon" sizes="180x180" href={v('/favicons/apple-icon-180x180.png')} />

          <link rel="icon" type="image/png" sizes="16x16" href={v('/favicons/favicon-16x16.png')} />
          <link rel="icon" type="image/png" sizes="32x32" href={v('/favicons/favicon-32x32.png')} />
          <link rel="icon" type="image/png" sizes="96x96" href={v('/favicons/favicon-96x96.png')} />
          <link rel="icon" type="image/png" sizes="192x192" href={v('/favicons/android-icon-192x192.png')} />

          <link rel="manifest" href={v('/favicons/manifest.json')} />
          <link rel="shortcut icon" href={v('/favicons/favicon.ico')} />

          <meta name="msapplication-TileImage" content={v('/favicons/ms-icon-144x144.png')} />
          <meta name="msapplication-config" content={v('/favicons/browserconfig.xml')} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
            }}
          />
        </Head>

        <body className="bg-white font-sans text-slate-500 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
