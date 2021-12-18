import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html data-theme="dark">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="icon" href="/favicon.ico"></link>
        <meta name="description" content="Weather app" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
