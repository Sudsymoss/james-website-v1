import styles from '../styles/Nav.module.css'
import Link from 'next/link'

export default function Nav(){
    return(
        <div className={styles.container}>
            <div className={styles.navdiv}>
                <h3>James M</h3>
                <ul className={styles.navitems}>
                    <li><Link href="/" passHref><a>Home</a></Link></li>
                    <li><Link href="/about" passHref><a>About</a></Link></li>
                    <li><Link href="/projects" passHref><a>Projects</a></Link></li>
                </ul>
            </div>
        </div>
    )
}