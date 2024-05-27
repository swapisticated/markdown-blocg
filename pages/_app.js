import Head from "next/head";
import Header from "../components/Header";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>lol</title>
      </Head>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}
