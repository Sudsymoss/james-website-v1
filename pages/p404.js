import Head from "next/head";
import styles from "../styles/Projects.module.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Home({ data }) {
  const [projects, setProjects] = useState(data);

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
      <Nav />
      <main className={styles.main}>
        <div className={styles.p404}>
          <h1>Sorry!</h1>
          <h3>Project currently unavailable for view!</h3>
          <Link passHref href="/projects"><a className={styles.homebut}>back</a></Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const projects = await prisma.project.findMany();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=119, stale-while-revalidate=299"
  );
  return {
    props: {
      data: JSON.parse(JSON.stringify(projects)),
    },
  };
}
