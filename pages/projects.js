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
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Silkscreen&family=Bungee+Spice&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Projects</h1>
      </main>
      <section className={styles.projects}>
        <p>Some of my other projects:</p>
        <div className={styles.gridbody}>
          <div className={styles.gridcontainer}>
            {projects.map((item) => (
              <>
                <div className={styles.gridform}>
                  <Link href={item.name} key={item.id}>
                    <div className={styles.griditem} key={item.id}>
                      {item.title}
                    </div>
                  </Link>
                  <p>Last Updated: {item.updatedAt || "null"}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const projects = await prisma.project.findMany();
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=119, stale-while-revalidate=299'
  )
  return {
    props: {
      data: JSON.parse(JSON.stringify(projects)),
    },
  };
}
