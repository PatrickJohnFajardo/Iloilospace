import styles from './AboutSection.module.css';

const AboutSection = () => {
    const leadership = [
        { name: "DAVE LOU A. GUMARANG", role: "Founder", image: "" },
        { name: "PATRICK JOHN F. FAJARDO", role: "Co-Founder", image: "" },
        { name: "ENGR. HEROLD C. CABIDO", role: "Advisor", image: "" }
    ];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.heroAbout}>
                    <h2 className={styles.sectionTitle}>ABOUT</h2>
                    <div className={styles.heroImage}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=1200" alt="About ISO" />
                    </div>
                </div>

                <div className={styles.missionVision}>
                    <div className={styles.mvGrid}>
                        <div className={styles.mvItem}>
                            <h3>MISSION AND VISION</h3>
                            <p className={styles.mvText}>SHAPING THE NEXT GENERATION OF SPACE PROFESSIONALS THROUGH ACCESSIBLE SPACE EDUCATION.</p>
                            <span className={styles.label}>MISSION</span>
                        </div>
                        <div className={styles.mvItem}>
                            <div className={styles.mvPlaceholder}></div>
                        </div>
                        <div className={styles.mvItem}>
                            <p className={styles.mvText}>LAUNCHPAD OF THE NEXT GENERATION OF SPACE PROFESSIONALS, LEADING HUMANITY&apos;S FUTURE IN SPACE.</p>
                            <span className={styles.label}>VISION</span>
                        </div>
                    </div>
                </div>

                <div className={styles.leadership}>
                    <h2 className={styles.subsectionTitle}>LEADERSHIP</h2>
                    <div className={styles.leaderGrid}>
                        {leadership.map((leader, index) => (
                            <div key={index} className={styles.leaderCard}>
                                <div className={styles.leaderPhoto}></div>
                                <h3>{leader.name}</h3>
                                <p>{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.partners}>
                    <h2 className={styles.subsectionTitle}>PARTNERS</h2>
                    <div className={styles.partnerLogos}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/partner-logo-1.png" alt="Partner 1" className={styles.partnerLogo} />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/partner-logo-2.png" alt="Partner 2" className={styles.partnerLogo} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
