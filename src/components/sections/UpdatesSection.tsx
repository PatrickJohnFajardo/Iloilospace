import styles from './UpdatesSection.module.css';

const UpdatesSection = () => {
    const updates = [
        {
            category: "NEWS",
            date: "January 16, 2026",
            title: "ISO Conducts Stargazing Event at Molo Mansion",
            image: "newsthumbnail1.jpg"
        },
        {
            category: "NEWS",
            date: "January 16-17, 2026",
            title: "ISO Host Space Camp at SHA",
            image: "newsthumbnail2.jpg"
        }
    ];

    return (
        <section id="updates" className={styles.updates}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>UPDATES</h2>
                <div className={styles.grid}>
                    {updates.map((update, index) => (
                        <div key={index} className={styles.updateCard}>
                            <div className={styles.imageWrapper}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={update.image} alt={update.title} />
                            </div>
                            <div className={styles.meta}>
                                <span className={styles.category}>{update.category}</span>
                                <span className={styles.date}>{update.date}</span>
                            </div>
                            <h3 className={styles.updateTitle}>{update.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpdatesSection;
