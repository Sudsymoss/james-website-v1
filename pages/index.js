import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
        <h1>James M</h1>
      </main>
      <Footer/>
    </div>
  )
}
