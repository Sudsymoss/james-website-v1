import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import Script from 'next/script'

export default function Nav(){
    return(
        <div className={styles.container}>
            <div className={styles.navdiv}>
            <Script src="nameindex.js" strategy="afterInteractive" onLoad={() => {
          typeF()
        }}/>
                <h3><Link passHref href="/"><a id="name">James M</a></Link></h3>
                <ul className={styles.navitems}>
                    <li><Link href="/" passHref><a>Home</a></Link></li>
                    <li><Link href="/about" passHref><a>About</a></Link></li>
                    <li><Link href="/projects" passHref><a>Projects</a></Link></li>
                    <li id="conflash"><Link href="/u/myaccount" passHref><a>Account</a></Link></li>
                </ul>
            </div>
        </div>
    )
}