import Head from 'next/head'
import styles from '../styles/About.module.css'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <main className={styles.main}>
        <h1>About</h1>
      </main>
      <section className={styles.about}>
        <p>This is a personal site made with next js to showcase my skills<br/>Also this is the 2nd revision of this site (hopefuly a better version!).<br/><h3>Some of my other work:</h3></p>
        <p>(comming soon)</p>
      </section>
      <Footer/>
    </div>
  )
}
