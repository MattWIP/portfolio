import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";

// Components
import Layout from "../lib/components/Layout";
import NeonText from "../lib/components/NeonText";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Eman Web Dev</title>
          <meta name="description" content="Eman Web Dev" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className="flex items-center justify-center">
            <NeonText />
          </div>
        </main>

        {/* <footer className={styles.footer}>
        </footer> */}
      </div>
    </Layout>
  );
}
