'use client';

import styles from './OpportunitiesSection.module.css';

const OpportunitiesSection = () => {
    return (
        <section className={styles.opportunities}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>OPPORTUNITIES</h2>

                <p className={styles.description}>
                    Dedicated to membership, partnership, and sponsorship inquiries.<br />
                    Kindly fill out the form below. Full details will be sent via email.
                </p>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.formRow}>
                        <input type="text" placeholder="Title" className={styles.input} />
                        <input type="text" placeholder="Name" className={styles.input} />
                    </div>
                    <input type="text" placeholder="Inquiry Type (Membership / Partnership / Sponsorship)" className={styles.input} />
                    <div className={styles.formRow}>
                        <input type="email" placeholder="Email" className={styles.input} />
                        <button type="submit" className={styles.submitBtn}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default OpportunitiesSection;
