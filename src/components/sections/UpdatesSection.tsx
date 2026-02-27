import styles from './UpdatesSection.module.css';

const UpdatesSection = () => {
    const updates = [
        {
            category: "NEWS",
            date: "March 3, 2026",
            title: "ISO Conducts Stargazing Event at Molo Mansion",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=800"
        },
        {
            category: "NEWS",
            date: "January 15-17, 2026",
            title: "ISO Host Space Camp at SHA",
            image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
        },
        {
            category: "NEWS",
            date: "January 10, 2026",
            title: "ISO Bring Space Education at SHA",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
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
