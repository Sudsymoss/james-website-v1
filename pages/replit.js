import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function repl(){
    return(
        <div>
            <Head>
                <meta http-equiv="refresh" content="2;url=https://replit.com/@Suddsy"/>
            </Head>
            <div className={styles.main}>
                <div className={styles.loader}></div>
            </div>
        </div>
    )
}