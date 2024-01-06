
import SideNav from "../app/ui/dashboard/sidenav";
import styles from '../app/ui/dashboard/dashobard.module.css'
import '../app/ui/globals.css'


export default function Layout ({children}) {
    return(
        <html lang="en">
            <body>
                <div className={styles.layout}>
                    <div className={styles.SideNav}>
                        <SideNav />
                    </div>
                <main className={styles.children}>
                    {children}
                </main>
                </div>
            </body>
        </html>
    )
}

