import Head from "next/head";
import styles from "../styles/Projects.module.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { useSession } from "next-auth/react";
import Loader from "../components/loader";

export default function Home({ data }) {
  const { data: session, status } = useSession();
  const [projects, setProjects] = useState(data);
  if(projects == null){
    return <p>ERROR: Project not found or may not exist!<Loader/></p>
  }
  
  if (status === "loading") {
    return <Loader />;
  }
  if (!session || status === "unauthenticated") {
    return location.replace("/auth/login")
  }

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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Silkscreen&family=Oxygen&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>{projects.title}</h1>
      </main>
      <section className={styles.projects}>
        <iframe src={projects.srcLink} className={styles.prosite}/>
      </section>
      <Footer />
    </div>
  );
}

//href for plink is {item.name}

export async function getServerSideProps({params}) {
  const projects = await prisma.project.findUniqueOrThrow({where:{name: params.slug}});
  return {
    props: {
      data: JSON.parse(JSON.stringify(projects)),
    },
  };
}
