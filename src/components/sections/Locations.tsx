import { MapPin, Phone } from 'lucide-react';
import styles from './Locations.module.css';

export default function Locations() {
  return (
    <section className={`section ${styles.locationsSection}`}>
      <div className="container">
        <h2 className="section-title">
          Nos <span>Implantations</span>
        </h2>
        
        <div className={styles.cardsContainer}>
          {/* Senegal Card */}
          <div className={styles.locationCard}>
            <div className={styles.cardHeader}>
              <div className={styles.flag}>🇸🇳</div>
              <h3 className={styles.countryName}>Sénégal</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.infoItem}>
                <MapPin className={styles.icon} size={20} />
                <div className={styles.address}>
                  <p>Liberté 6 Extension</p>
                  <p>Marché Barack</p>
                  <p>Cité Panoramique</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Phone className={styles.icon} size={20} />
                <a href="tel:+221761430101" className={styles.phone}>+221 76 143 01 01</a>
              </div>
            </div>
            {/* Carte Interactive Google Maps */}
            <div className={styles.mapContainer}>
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=fr&amp;q=Liberte%206%20Extension,%20Dakar,%20Senegal&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* China Card */}
          <div className={styles.locationCard}>
            <div className={styles.cardHeader}>
              <div className={styles.flag}>🇨🇳</div>
              <h3 className={styles.countryName}>Chine</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.infoItem}>
                <MapPin className={styles.icon} size={20} />
                <div className={styles.address}>
                  <p>A041 - A042, 1st Floor</p>
                  <p>Guangfu International Trade City</p>
                  <p>No.6 Lujing Road, Yuexiu District, Guangzhou</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Phone className={styles.icon} size={20} />
                <a href="tel:+8613076883639" className={styles.phone}>+86 130 7688 3639</a>
              </div>
            </div>
            {/* Carte Interactive Google Maps */}
            <div className={styles.mapContainer}>
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=fr&amp;q=Lujing%20Road,%20Yuexiu%20District,%20Guangzhou,%20China&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
