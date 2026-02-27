import styles from './ContactSection.module.css';

const ContactSection = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h2 className={styles.sectionTitle}>CONTACT US</h2>
                        <p className={styles.description}>
                            We&apos;re here to help with any questions or support you need.
                            Get in touch with us through direct mail. Just give us a knock.
                        </p>
                        <a href="mailto:iloilospaceorganization@outlook.com" className={styles.email}>
                            iloilospaceorganization@outlook.com
                        </a>
                    </div>
                    <div className={styles.imageWrapper}>
                        <div className={styles.placeholder}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
