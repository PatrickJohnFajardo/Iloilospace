import styles from './ContactSection.module.css';

const ContactSection = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h2 className={styles.sectionTitle}>CONTACT US</h2>
                        <p className={styles.description}>
                            For general inquiries and invitations, feel free to reach out to us via email.
                            We look forward to connecting with you.
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
