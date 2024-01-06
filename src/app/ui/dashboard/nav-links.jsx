'use client'

import Link from 'next/link';
import styles from '../dashboard/navlinks.module.css'
import { usePathname } from 'next/navigation';


const links = [
    {album: 'Taylor Swift', href: '/dashboard/taylor-swift'},
    {album: 'Fearless', href: '/dashboard/fearless'},
    {album: 'Speak Now', href: '/dashboard/speak-now'},
    {album: 'Red', href: '/dashboard/red'},
    {album: '1989', href: '/dashboard/1989'},
    {album: 'Reputation', href: '/dashboard/reputation'},
    {album: 'Lover', href: '/dashboard/lover'},
    {album: 'Folklore', href: '/dashboard/folklore'},
    {album: 'Evermore', href: '/dashboard/evermore'},
    {album: 'Midnights', href: '/dashboard/midnights'},
]

export default function NavLinks(){

    const router = usePathname();

    return(
    <>
    {links.map((link) => {
        return(
        <Link
        key = {link.album}
        href={link.href}
        className={styles.navlinks}>
            <p>{link.album}</p>
            </Link>
        );
        })}
    </>
    )
}