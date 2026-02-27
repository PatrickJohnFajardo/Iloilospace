'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Iloilo Space Organization Logo"
                            width={40}
                            height={40}
                            className={styles.logoImage}
                        />
                    </Link>
                </div>
                <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <li onClick={closeMenu}><Link href="/about">ABOUT</Link></li>
                    <li onClick={closeMenu}><Link href="/programs">PROGRAMS</Link></li>
                    <li onClick={closeMenu}><Link href="/updates">UPDATES</Link></li>
                    <li onClick={closeMenu}><Link href="/opportunities">OPPORTUNITIES</Link></li>
                    <li onClick={closeMenu}><Link href="/contact" className={styles.contactBtn}>CONTACT US</Link></li>
                </ul>
                <button className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} onClick={toggleMenu} aria-label="Menu">
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>
            {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
        </nav>
    );
};

export default Navbar;
