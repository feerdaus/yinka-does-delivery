import Shipping from "@components/Shipping";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop with Yinka Does Delivery on Logistix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="bg-grey">
        <Shipping />
      </main>
    </>
  );
}
