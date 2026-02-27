import Link from 'next/link';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            {/* Background image should be set via CSS or an Image component */}
            <div className={styles.content}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        SHAPING THE NEXT GENERATION OF SPACE PROFESSIONALS
                    </h1>
                    <p className={styles.subtitle}>
                        Through accessible space education and leadership.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/programs" className={styles.primaryBtn}>EXPLORE PROGRAMS</Link>
                        <Link href="/about" className={styles.secondaryBtn}>LEARN MORE</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
