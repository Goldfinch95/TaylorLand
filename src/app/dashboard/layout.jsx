import SideNav from "../ui/dashboard/sidenav";
import styles from '../ui/dashboard/dashobard.module.css'

export default function Layout ({children}) {
    return(
        <div className={styles.layout}>
            <div className={styles.SideNav}>
                <SideNav />
            </div>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}