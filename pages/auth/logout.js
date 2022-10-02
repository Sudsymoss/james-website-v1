import { useSession, signOut } from "next-auth/react"
import styles from '../../styles/Login.module.css'
import Nav from '../../components/nav'
import Head from 'next/head'
import Loader from '../../components/loader'
import Footer from "../../components/footer"

export default function SignOut() {
    const { data: session, status } = useSession()
    if (status === "unauthenticated") {
        return (<div><Loader/><meta http-equiv="refresh" content="2;url=/auth/login"/></div>)
      }
    return (
        <div>
            <Head>
                <title>Logout</title>
            </Head>
            <Nav />
            <div className={styles.main}>
                <h1>Logout</h1>
                <button onClick={() => signOut({ callbackUrl: "/" })}>
                    Signout
                </button>
            </div>
            <Footer/>
        </div>
    )
}

