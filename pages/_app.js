import Global from "../styles/Global";
import Head from "next/head";
import fontGlobal from "../styles/fontGlobal.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Country</title>
        <meta name="description" content="Country app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></Script>
      <Component {...pageProps} />
      <Global />
    </>
  );
}

export default MyApp;
