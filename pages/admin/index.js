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
          <li><Link href="/admin/projects" passHref><a>Project manager</a></Link></li>
          <li><Link href="/admin/roles" passHref><a>Role manager</a></Link></li>
          <li><Link href="/auth/login" passHref><a>Login</a></Link></li>
          
        </ul>
      </main>
      <Footer/>
    </div>
  )
}
