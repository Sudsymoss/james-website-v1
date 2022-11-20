import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <p><Link passHref href="/admin"><a id="flash">©</a></Link> James M 2022</p>
                <Link href="/auth/logout" passHref><a className={styles.logoutbut}>Logout</a></Link>
            </div>
        </div>
    )
}