import { getProviders, signIn, useSession, signOut } from "next-auth/react";
import styles from "../../styles/Login.module.css";
import Head from "next/head";
import Link from 'next/link'
import * as React from "react";
import toast from "../../components/Toast";

export default function SignIn({ providers }) {
  const { data: session, status } = useSession();
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);
  if (status === "loading"){
    return <p>Loading...</p>
  }
  if (status === "authenticated"){
    notify("warning", "Already logged in!")
    setTimeout(() => {
      location.replace("./logout");
    }, 2000);
    return
  }
    return (
      <div>
        <Head>
          <title>Login</title>
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap" rel="stylesheet"></link>
        </Head>
        <div className={styles.main}>
          <div className={styles.loginbox}>
            <h1>Login</h1>
            <div className={styles.logprov}>

              <>
                {Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)} className={styles.loginbtn}>
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
              </>

            </div>
            <Link passHref href="/"><a className={styles.logincancel}>Cancel</a></Link>
          </div>
        </div>
      </div>
    );
  
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  };
}
