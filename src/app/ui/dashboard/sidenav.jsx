
import NavLinks from '../dashboard/nav-links'
import styles from '../dashboard/sideNav.module.css'

export default function SideNav(){
    return(
        <div className={styles.sideNav}>
            <div className={styles.layout_logo}>
                'logo'
            </div>
            <div className={styles.navLinks}>
                <NavLinks />
            </div>
            <footer className={styles.footer}>
                Goldfinch 2024
            </footer>
        </div>
    )
}