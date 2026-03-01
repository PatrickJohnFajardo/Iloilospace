'use client';

import styles from './OpportunitiesSection.module.css';

const OpportunitiesSection = () => {
    return (
        <section className={styles.opportunities}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>OPPORTUNITIES</h2>

                <p className={styles.description}>
                    For membership, partnership, or sponsorship inquiries,<br />
                    kindly fill out the form. Full details will be sent via email.
                </p>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.formRow}>
                        <input type="text" placeholder="Title" className={styles.input} />
                        <input type="text" placeholder="Name" className={styles.input} />
                    </div>
                    <input type="text" placeholder="Inquiry" className={styles.input} />
                    <div className={styles.formRow}>
                        <input type="email" placeholder="Email" className={styles.input} />
                        <button type="submit" className={styles.submitBtn}>Submit</button>
                    </div>
                </form>

                <div className={styles.ctaSection}>
                    <h2 className={styles.ctaTitle}>JOIN THE MISSION!</h2>
                    <p className={styles.ctaText}>Connect with us for partnerships, opportunities, or inquiries.</p>
                    <a href="mailto:admin@iso.ph" className={styles.ctaButton}>
                        CONTACT US
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OpportunitiesSection;
