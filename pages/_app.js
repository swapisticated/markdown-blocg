import Head from "next/head";
import Header from "../components/Header";
import "@/styles/globals.css";
import Footer from "@/components/Footer";



export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>blog</title>
      </Head>
      <Header />
      <main className="">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
