import { Ship, CarFront, SearchCheck, ShieldAlert } from 'lucide-react';
import styles from './Services.module.css';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Transit international',
      description: 'Transport sécurisé de vos marchandises de Chine vers le Sénégal avec gestion complète des formalités douanières et administratives.',
      icon: <Ship size={32} />,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Pièces automobiles',
      description: 'Distribution de pièces automobiles d\'origine et adaptables pour toutes les marques avec garantie de qualité.',
      icon: <CarFront size={32} />,
      color: 'orange'
    },
    {
      id: 3,
      title: 'Achat et contrôle qualité',
      description: 'Recherche de fournisseurs fiables, achat sécurisé, inspection et vérification rigoureuse des produits avant chaque expédition.',
      icon: <SearchCheck size={32} />,
      color: 'blue'
    },
    {
      id: 4,
      title: 'Assurance automobile',
      description: 'Solutions d\'assurance automobile complètes et adaptées à vos besoins pour une sérénité totale sur la route.',
      icon: <ShieldAlert size={32} />,
      color: 'orange'
    }
  ];

  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <h2 className="section-title">
          Nos <span>Services</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Des solutions complètes pour répondre à vos besoins en matière de commerce international et de mobilité.
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`${styles.serviceCard} delay-${(index + 1) * 100}`}
            >
              <div className={`${styles.iconContainer} ${service.color === 'orange' ? styles.iconOrange : styles.iconBlue}`}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.cardHoverEffect}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
