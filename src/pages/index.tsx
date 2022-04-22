import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-red-400 text-4xl">Hello Thomes</h1>
    </div>
  );
};

export default Home;
