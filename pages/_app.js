import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gereja Toraja Jemaat Depok</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
