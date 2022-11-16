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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Silkscreen&family=Oxygen&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h1>Projects</h1>
      </main>
      <section className={styles.projects}>
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
          <h3 onLoad={countdown()}>Expected fix date: <p id="countdown"></p></h3>
        </div>
      </section>
      <Footer />
    </div>
  );
}

//href for plink is {item.name}

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

function countdown(){
  //--------------------
  // ERROR IS DEV ONLY!
  //--------------------
  var countDownDate = new Date("Nov 25, 2022 00:00:00").getTime();
// Update the count down every 1 second
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Fixed?";
    }
  }, 1000);
}
