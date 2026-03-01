import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.bottom}>
                <div className={styles.container}>
                    <div className={styles.orgInfo}>
                        <div className={styles.logoRow}>
                            <Image
                                src="/logo.png"
                                alt="ISO Logo"
                                width={30}
                                height={30}
                                className={styles.logoSmall}
                            />
                            <h3>ILOILO SPACE ORGANIZATION</h3>
                        </div>
                        <p className={styles.description}>
                            Iloilo Space Organization is dedicated to advancing accessible space education and developing the next generation of space professionals.
                        </p>
                        <div className={styles.mobileNav}>
                            <Link href="/about">ABOUT</Link>
                            <Link href="/programs">PROGRAMS</Link>
                            <Link href="/updates">UPDATES</Link>
                            <Link href="/opportunities">OPPORTUNITIES</Link>
                        </div>
                    </div>

                    <div className={styles.linksGrid}>
                        <div className={styles.linkColumn}>
                            <h4>ABOUT</h4>
                            <Link href="/about">Mission and Vision</Link>
                            <Link href="/about">Leadership</Link>
                            <Link href="/about">Partners</Link>
                        </div>
                        <div className={styles.linkColumn}>
                            <h4>PROGRAMS</h4>
                            <Link href="/programs">Space Education</Link>
                            <Link href="/programs">Outreach</Link>
                            <Link href="/programs">Public Engagement</Link>
                            <Link href="/programs">Capacity Building</Link>
                        </div>
                        <div className={styles.linkColumn}>
                            <h4>UPDATES</h4>
                            <Link href="/updates">News</Link>
                            <Link href="/updates">Events</Link>
                            <Link href="/updates">Announcements</Link>
                        </div>
                        <div className={styles.linkColumn}>
                            <h4>OPPORTUNITIES</h4>
                            <Link href="/opportunities">Membership</Link>
                            <Link href="/opportunities">Partnership</Link>
                            <Link href="/opportunities">Donate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
