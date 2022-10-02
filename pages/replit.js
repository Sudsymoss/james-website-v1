import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Loader from '../components/loader'

export default function repl(){
    return(
        <div>
            <Head>
                <meta http-equiv="refresh" content="2;url=https://replit.com/@Suddsy"/>
            </Head>
            <Loader/>
        </div>
    )
}