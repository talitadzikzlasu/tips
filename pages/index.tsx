import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>Calculator </div>
          <div>
            <ul>
              <li>home</li>
              <li>countries</li>
              <li>Tips history</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
        <div className={styles.mainContainer}>
          <aside className={styles.mainDescription}>
            <h1>Tips Calculator</h1>
            <p>
              Tip your way around the world with ease! Say goodbye to mental
              math and awkward tip calculations when dining abroad.{" "}
            </p>
            <p>
              Our tips calculator app has got your back (and your wallet)
              covered.
            </p>
          </aside>
          <div className={styles.mainImage}>
            <img src="https://i.ibb.co/wJVmxpv/tips-main.png" />
          </div>
        </div>
      </main>
    </>
  );
}
