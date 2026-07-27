import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Logo & About */}
          <div className={styles.footerCol}>
            <div className={styles.logo}>
              <div className={styles.logoImageContainer}>
                <Image 
                  src="/logo.jpeg" 
                  alt="Nasroulahi Holding SARL" 
                  width={200} 
                  height={80}
                  className={styles.logoImage}
                />
              </div>
            </div>
            <p className={styles.aboutText}>
              Votre partenaire de confiance entre la Chine et le Sénégal pour le transport international, 
              l'achat de produits et la logistique.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Liens Rapides</h4>
            <ul className={styles.linkList}>
              <li><Link href="#home">Accueil</Link></li>
              <li><Link href="#about">À Propos</Link></li>
              <li><Link href="#services">Nos Services</Link></li>
              <li><Link href="#process">Processus</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Senegal */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Sénégal 🇸🇳</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className={styles.contactIcon} />
                <span>Liberté 6 Extension, Marché Barack, Cité Panoramique</span>
              </li>
              <li>
                <Phone size={18} className={styles.contactIcon} />
                <span>+221 76 143 01 01</span>
              </li>
            </ul>
          </div>

          {/* Contact China */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Chine 🇨🇳</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className={styles.contactIcon} />
                <span>A041-A042, 1st Fl, Guangfu Int. Trade City, Yuexiu Dist, Guangzhou</span>
              </li>
              <li>
                <Phone size={18} className={styles.contactIcon} />
                <span>+86 130 7688 3639</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Nasroulahi Holding SARL. Tous droits réservés.
          </p>
          <div className={styles.legalLinks}>
            <Link href="#">Mentions légales</Link>
            <Link href="#">Politique de confidentialité</Link>
            <Link href="#home" className={styles.backToTopLink} aria-label="Retour en haut">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
