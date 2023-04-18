import Link from 'next/link'
import styles from './nav.module.css'

const Nav = () => {
    return (
        <>
        <nav className={styles.nav}>
            <Link href="/" className={styles.home}>My Next.js Blog
            </Link>
            <Link href="/bio" className={styles.bio}>Bio
            </Link>
        </nav>
        </>
    )
}

export default Nav;