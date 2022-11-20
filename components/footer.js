import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import { useSession  } from "next-auth/react"

export default function Footer() {
    const { data: session, status } = useSession()
    if(!session){
        return (
            <div>
                <div className={styles.footer}>
                    <p><Link passHref href="/admin"><a id="flash">©</a></Link> James M 2022</p>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className={styles.footer}>
                <p className={styles.username}>{session.user.name}</p>
                <p><Link passHref href="/admin"><a id="flash">©</a></Link> James M 2022</p>
                <Link href="/auth/logout" passHref><a className={styles.logoutbut}>Logout</a></Link>
            </div>
        </div>
    )
    
}