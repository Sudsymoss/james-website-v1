import Head from "next/head";
import styles from "../styles/Projects.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Silkscreen&family=Oxygen&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.p404}>
          <h1>Sorry!</h1>
          <h3>Project currently unavailable for view!</h3>
          <Link passHref href="/projects"><a className={styles.homebut}>back</a></Link>
        </div>
      </main>
    </div>
  );
}

