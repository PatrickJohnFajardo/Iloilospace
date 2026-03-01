'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './HeroSection.module.css';

const EarthGlobe = dynamic(() => import('./EarthGlobe'), { ssr: false });

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            {/* Deep space gradient background */}
            <div className={styles.spaceBackground} />

            {/* Earth Globe — right-side positioned via CSS */}
            <div className={styles.globeWrapper}>
                <EarthGlobe />
            </div>

            {/* Left-side text content */}
            <div className={styles.content}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        NEXT GENERATION,<br />
                        <span className={styles.titleAccent}>SPACE-ENABLED</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Iloilo Space Organization was founded on the belief that space makes us curious, drives us to explore, and pushes us to dream big.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/about" className={styles.secondaryBtn}>LEARN MORE</Link>
                        <Link href="/programs" className={styles.primaryBtn}>EXPLORE PROGRAMS</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
