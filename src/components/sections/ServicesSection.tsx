import styles from './ServicesSection.module.css';

const ServicesSection = () => {
    const services = [
        { title: "SEMINAR", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400" },
        { title: "WORKSHOP", image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=400" },
        { title: "SUMMER SCHOOL", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400" },
        { title: "MENTORSHIP", image: "https://images.unsplash.com/photo-1515187029135-18ee2827b672?auto=format&fit=crop&q=80&w=400" },
        { title: "STARGAZING", image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=400" },
        { title: "CAMP", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=400" },
        { title: "COMPETITION", image: "https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?auto=format&fit=crop&q=80&w=400" },
        { title: "EXHIBITION", image: "https://images.unsplash.com/photo-1518998053502-53dd83b913c3?auto=format&fit=crop&q=80&w=400" },
    ];

    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>SERVICES</h2>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceItem}>
                            <div className={styles.imageBox}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={service.image} alt={service.title} />
                            </div>
                            <h3>{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
