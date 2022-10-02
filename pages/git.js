import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Loader from '../components/loader'
export default function git(){
    return(
        <div>
            <Head>
                <meta http-equiv="refresh" content="2;url=https://github.com/Sudsymoss/james-website"/>
            </Head>
            <Loader/>
        </div>
    )
}