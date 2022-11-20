import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import Script from 'next/script'
import { useSession, getSession } from "next-auth/react"

export default function Nav() {
    const { data: session, status } = useSession()
    if(!session){
        return (
            <div className={styles.container}>
                <div className={styles.navdiv}>
                    <h3><Link passHref href="/"><a>James M</a></Link></h3>
                    <ul className={styles.navitems}>
                        <li><Link href="/" passHref><a>Home</a></Link></li>
                        <li><Link href="/about" passHref><a>About</a></Link></li>
                        <li><Link href="/projects" passHref><a>Projects</a></Link></li>
                        <li id="conflash"><Link href="/auth/login" passHref><a>Login</a></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <div className={styles.navdiv}>
                <h3><Link passHref href="/"><a>James M</a></Link></h3>
                <ul className={styles.navitems}>
                    <li><Link href="/" passHref><a>Home</a></Link></li>
                    <li><Link href="/about" passHref><a>About</a></Link></li>
                    <li><Link href="/projects" passHref><a>Projects</a></Link></li>
                    <li id="conflash" className={styles.acc}><Link href="/auth/login" passHref><a>Account</a></Link></li>
                    <Link href="/u/myaccount" passHref><a><img src={session.user.image} className={styles.usericon}></img></a></Link>
                </ul>
            </div>
        </div>
    )
}