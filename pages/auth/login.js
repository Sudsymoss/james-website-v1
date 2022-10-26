import { getProviders, signIn, useSession, signOut } from "next-auth/react";
import styles from "../../styles/Login.module.css";
import Head from "next/head";
import Loader from "../../components/loader";
import Link from 'next/link'

export default function SignIn({ providers }) {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div>
        <Loader />
        <meta http-equiv="refresh" content="2;url=/auth/logout" />
      </div>
    );
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
