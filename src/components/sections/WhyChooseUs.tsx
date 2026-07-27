import { MapPin, Users, CheckCircle2, FastForward, DollarSign, Briefcase, Handshake, HeartHandshake } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const reasons = [
    { icon: <MapPin size={24} />, title: "Présence au Sénégal et en Chine", delay: "delay-100" },
    { icon: <Users size={24} />, title: "Accompagnement personnalisé", delay: "delay-200" },
    { icon: <CheckCircle2 size={24} />, title: "Contrôle qualité des marchandises", delay: "delay-300" },
    { icon: <FastForward size={24} />, title: "Livraison rapide", delay: "delay-400" },
    { icon: <DollarSign size={24} />, title: "Prix compétitifs", delay: "delay-100" },
    { icon: <Briefcase size={24} />, title: "Réseau de fournisseurs fiables", delay: "delay-200" },
    { icon: <Handshake size={24} />, title: "Service professionnel", delay: "delay-300" },
    { icon: <HeartHandshake size={24} />, title: "Satisfaction client", delay: "delay-400" },
  ];

  return (
    <section className={`section ${styles.whyChooseUs}`}>
      <div className="container">
        <h2 className="section-title">
          Pourquoi choisir <span>Nasroulahi Holding ?</span>
        </h2>
        
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={`${styles.card} ${reason.delay}`}>
              <div className={styles.iconWrapper}>
                {reason.icon}
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
