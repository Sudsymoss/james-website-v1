import { getProviders, signIn, useSession, signOut } from "next-auth/react";
import styles from "../../styles/Login.module.css";
import Head from "next/head";
import Loader from "../../components/loader";
import Link from 'next/link'

export default function SignIn() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    return location.replace('./login')
  }
  if (status === "loading"){
    return <Loader/>
  }
  return (
    <div>
      <Head>
        <title>Logout</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.main}>
        <div className={styles.loginbox}>
          <h1>Logout</h1>
          <div className={styles.logprov}>
          <button onClick={() => signOut({ callbackUrl: "/" })} className={styles.loginbtn}>Signout</button>
          </div>
          <Link passHref href="/"><a className={styles.logincancel}>Cancel</a></Link>
        </div>
      </div>
    </div>
  );
}

