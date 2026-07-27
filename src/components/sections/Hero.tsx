import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import styles from './Hero.module.css';

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.background}>
        <Image 
          src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50a30?q=80&w=2000&auto=format&fit=crop" 
          alt="Logistique et transport maritime"
          fill
          priority
          className={styles.bgImage}
        />
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.textContainer}>
          <h1 className={`animate-fade-in-up ${styles.title}`}>
            L'excellence logistique entre la <span>Chine</span> et le <span>Sénégal</span>
          </h1>
          <p className={`animate-fade-in-up delay-100 ${styles.subtitle}`}>
            Votre partenaire de confiance pour le transport international, les pièces automobiles, 
            l'achat sécurisé de produits et l'assurance automobile.
          </p>
          <div className={`animate-fade-in-up delay-200 ${styles.buttonGroup}`}>
            <Link href="#quote" className={styles.btnPrimary}>
              <span className={styles.btnIcon}>🟠</span> Demander un devis
            </Link>
            <Link href="#contact" className={styles.btnSecondary}>
              <span className={styles.btnIcon}>🔵</span> Nous contacter
            </Link>
          </div>
        </div>
        
        <div className={`animate-fade-in-up delay-300 ${styles.statsContainer}`}>
          <div className={styles.glassCard}>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}><AnimatedCounter end={10} suffix="+" /></h3>
              <p className={styles.statLabel}>Années d'expérience</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}><AnimatedCounter end={2} /></h3>
              <p className={styles.statLabel}>Bureaux (SN & CN)</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}><AnimatedCounter end={100} suffix="%" /></h3>
              <p className={styles.statLabel}>Sécurité garantie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
