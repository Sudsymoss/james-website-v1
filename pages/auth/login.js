import { getProviders, signIn, useSession, signOut } from "next-auth/react"
import styles from '../../styles/Login.module.css'
import Nav from '../../components/nav'
import Head from 'next/head'
import Loader from '../../components/loader'
import Footer from "../../components/footer"

export default function SignIn({ providers }) {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
        return (<div><Loader/><meta http-equiv="refresh" content="2;url=/auth/logout"/></div>)
      }
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <Head>
                        <title>Login</title>
                    </Head>
                    <Nav/>
                    <div className={styles.main}>
                        <h1>Login</h1>
                        <button onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                    <Footer/>
                </div>
            ))}
        </>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}