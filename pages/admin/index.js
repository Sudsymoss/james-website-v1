import Head from 'next/head'
import styles from '../../styles/Admin.module.css'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <main className={styles.main}>
        <h1>Admin</h1>
        <ul className={styles.links}>
        <Link href="/admin/projects" passHref><li><a>Project manager</a></li></Link>
        <Link href="/admin/roles" passHref><li><a>Role manager</a></li></Link>
        <Link href="/auth/login" passHref><li><a>Login</a></li></Link>
          
        </ul>
      </main>
      <Footer/>
    </div>
  )
}
