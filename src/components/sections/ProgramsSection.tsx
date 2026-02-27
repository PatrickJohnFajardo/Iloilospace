import styles from './ProgramsSection.module.css';

const ProgramsSection = () => {
    const programs = [
        {
            title: "SPACE EDUCATION",
            description: "Providing students with the knowledge and skills to pursue careers in space through seminars, workshops, camps, and mentorship programs.",
            image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "OUTREACH",
            description: "Bringing space closer to communities through exhibitions, stargazing events, and school programs, inspiring the next generation to look up and dream bigger.",
            image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "SPACE EDUCATION",
            description: "Providing students with the knowledge and skills to pursue careers in space through seminars, workshops, camps, and mentorship programs.",
            image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "OUTREACH",
            description: "Bringing space closer to communities through exhibitions, stargazing events, and school programs, inspiring the next generation to look up and dream bigger.",
            image: "https://images.unsplash.com/photo-1506704911336-7c71e8193a64?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section id="programs" className={styles.programs}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>PROGRAMS</h2>
                <div className={styles.grid}>
                    {programs.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.image} alt={item.title} className={styles.image} />
                            </div>
                            <div className={styles.info}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
