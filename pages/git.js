import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function git(){
    return(
        <div>
            <Head>
                <meta http-equiv="refresh" content="2;url=https://github.com/Sudsymoss/james-website"/>
            </Head>
            <div className={styles.main}>
                <h1>Loading...</h1>
            </div>
        </div>
    )
}