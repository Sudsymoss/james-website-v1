import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <p><Link passHref href="/admin"><a>©</a></Link> James M 2022</p>
            </div>
        </div>
    )
}