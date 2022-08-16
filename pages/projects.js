import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Home({projects}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Silkscreen&display=swap" rel="stylesheet"/>
      </Head>
      <Nav/>
      <main className={styles.main}>
        <h1>Projects</h1>
      </main>
      <section className={styles.projects}>
        <p>Some of my other projects:</p>
        <section className={styles.gridBody}>
                <div className={styles.gridcontainer}>
                    <>
                        {projects.map((project) => {
                            return (
                                <Link href={project.id}><div className={styles.griditem}>{project.name}</div></Link>
                            )
                        })}
                    </>
                </div>
            </section>
      </section>
      <Footer/>
    </div>
  )
}


export async function getServerSideProps(){
    const res = await fetch(`http://suddsy.dev/api/projects`)
    const data = await res.json()
    console.log(data)
    return{
        props: {
            projects: data,
        }
    }
}