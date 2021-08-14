import React from 'react';
import styles from '/styles/a.module.scss';
import Link from "next/link";

function Navbar(props) {
    return (
        <>
            <div className={styles.navbar}>
                <Link href={'/'}>
                    <a className={styles.navbarItem}> Home </a>
                </Link>
                <Link href={'/users'}>
                    <a className={styles.navbarItem}> Users </a>
                </Link>
                <Link href={'/events'}>
                    <a className={styles.navbarItem}> Events </a>
                </Link>
                <Link href={'/credit'}>
                    <a className={styles.navbarItem}> Credit </a>
                </Link>
                <Link href={'/credit/results'}>
                    <a className={styles.navbarItem}> Credit results </a>
                </Link>
                <Link href={'/about'}>
                    <a className={styles.navbarItem}> About </a>
                </Link>
                <Link href={'/posts'}>
                    <a className={styles.navbarItem}> Posts </a>
                </Link>
            </div>
            <div>
                {props.children}
            </div>
        </>
    );
}

export default Navbar;