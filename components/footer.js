import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import { useSession  } from "next-auth/react"

export default function Footer() {
    const { data: session, status } = useSession()
    if(!session){
        return (
            <div>
                <div className={styles.footer}>
                    <div></div>
                    <p>© James M 2022</p>
                </div>
            </div>
        )
    }
    if(session && session.user.role == "admin"){
        return (
            <div>
                <div className={styles.footer}>
                    <Link href="/admin" passHref><a id={styles.style2} data-replace="Admin" className={styles.logoutbut}><span>Admin</span></a></Link>
                    <p>© James M 2022</p>
                    <Link href="/auth/logout" passHref><a id={styles.style2} data-replace="Logout" className={styles.logoutbut}><span>Logout</span></a></Link>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className={styles.footer}>
                <p className={styles.username}>{session.user.name}</p>
                <p>© James M 2022</p>
                <Link href="/auth/logout" passHref><a id={styles.style2} data-replace="Logout" className={styles.logoutbut}><span>Logout</span></a></Link>
            </div>
        </div>
    )
    
}