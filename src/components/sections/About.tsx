import Image from 'next/image';
import { ShieldCheck, Globe, TrendingUp } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import styles from './About.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageMain}>
            <Image 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop" 
              alt="Logistique Nasroulahi Holding" 
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.experienceBadge}>
            <span className={styles.years}><AnimatedCounter end={10} suffix="+" /></span>
            <span className={styles.text}>Années<br/>d'Expérience</span>
          </div>
        </div>
        
        <div className={styles.content}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            À propos de <span>Nasroulahi Holding</span>
          </h2>
          <p className={styles.description}>
            Nasroulahi Holding SARL accompagne particuliers, commerçants et entreprises dans leurs opérations 
            commerciales entre la Chine et le Sénégal. Grâce à notre présence stratégique dans les deux pays, 
            nous garantissons un service fiable, rapide et sécurisé pour toutes vos importations.
          </p>
          
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.iconBox}>
                <Globe size={24} />
              </div>
              <div>
                <h4 className={styles.featureTitle}>Présence Internationale</h4>
                <p className={styles.featureDesc}>Bureaux à Guangzhou et Dakar pour une gestion de bout en bout.</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconBox}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className={styles.featureTitle}>Sécurité & Fiabilité</h4>
                <p className={styles.featureDesc}>Contrôle qualité rigoureux avant chaque expédition.</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconBox}>
                <TrendingUp size={24} />
              </div>
              <div>
                <h4 className={styles.featureTitle}>Prix Compétitifs</h4>
                <p className={styles.featureDesc}>Des solutions sur mesure adaptées à votre budget.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
