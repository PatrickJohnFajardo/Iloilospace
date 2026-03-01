import styles from './ProgramsSection.module.css';

const ProgramsSection = () => {
    const programs = [
        {
            title: "SPACE EDUCATION",
            description: "Providing students with the knowledge and skills to pursue careers in space through seminars, workshops, camps, and mentorship programs.",
            image: "program1.jpg"
        },
        {
            title: "OUTREACH",
            description: "Bringing space closer to communities through exhibitions, stargazing events, and school programs, inspiring the next generation to look up and dream bigger.",
            image: "program2.jpg"
        },
        {
            title: "PUBLIC ENGAGEMENT",
            description: "Connecting the public to the world of space through events, competitions, and activities that spark curiosity and fuel the passion to explore.",
            image: "program3.jpg"
        },
        {
            title: "CAPACITY BUILDING",
            description: "Equipping students and young professionals with the tools, training, and experience needed to become space-ready individuals.",
            image: "program4.jpg"
        }
    ];

    const services = [
        { name: "SEMINAR", icon: "Icon1.png" },
        { name: "WORKSHOP", icon: "Icon2.png" },
        { name: "SUMMER SCHOOL", icon: "Icon3.png" },
        { name: "MENTORSHIP", icon: "Icon4.png" },
        { name: "STARGAZING", icon: "Icon5.png" },
        { name: "CAMP", icon: "icon6.png" },
        { name: "COMPETITION", icon: "icon7.png" },
        { name: "EXHIBITION", icon: "icon8.png" }
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

                <div className={styles.servicesSection}>
                    <h2 className={styles.servicesTitle}>SERVICES</h2>
                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <div key={index} className={styles.serviceItem}>
                                <div className={styles.serviceIcon}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={service.icon} alt={service.name} />
                                </div>
                                <span>{service.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProgramsSection;
