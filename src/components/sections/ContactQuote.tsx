"use client";

import { useState } from 'react';
import { Send, Mail, CheckCircle2 } from 'lucide-react';
import styles from './ContactQuote.module.css';

export default function ContactQuote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/nasroulahiholdingsarl@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter par email.");
      }
    } catch (error) {
      alert("Une erreur est survenue. Vérifiez votre connexion internet et réessayez.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.grid}>
          
          <div className={styles.infoCol}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Demander un <span>Devis</span> ou nous contacter
            </h2>
            <p className={styles.description}>
              Remplissez le formulaire ci-contre pour toute demande de cotation, d'information 
              ou de partenariat. Notre équipe vous répondra dans les plus brefs délais avec 
              une offre adaptée à vos besoins.
            </p>
            
            <div className={styles.emailContact}>
              <div className={styles.emailIconWrapper}>
                <Mail size={24} />
              </div>
              <div>
                <h4 className={styles.emailTitle}>Envoyez-nous un email directement</h4>
                <a href="mailto:nasroulahiholdingsarl@gmail.com" className={styles.emailLink}>
                  nasroulahiholdingsarl@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div id="quote" className={styles.formCol}>
            {isSubmitted ? (
              <div className={styles.successMessage} style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={64} color="#10b981" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Demande envoyée avec succès !</h3>
                <p style={{ color: 'var(--text-muted)' }}>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className={styles.submitBtn}
                  style={{ marginTop: '2rem', display: 'inline-flex' }}
                >
                  <span>Nouvelle demande</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input type="hidden" name="_subject" value="Nouvelle Demande de Devis - Site Web" />
                <input type="hidden" name="_template" value="table" />
                
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nom complet ou Entreprise *</label>
                  <input type="text" id="name" name="name" required placeholder="Votre nom" className={styles.input} />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required placeholder="votre@email.com" className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Téléphone *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+221..." className={styles.input} />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="service">Service recherché *</label>
                  <select id="service" name="service" required className={styles.input} defaultValue="">
                    <option value="" disabled>Sélectionnez un service</option>
                    <option value="transit">Transit international</option>
                    <option value="pieces">Pièces détachées automobiles</option>
                    <option value="achat">Achat et contrôle qualité</option>
                    <option value="assurance">Assurance automobile</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Votre message ou détails de la demande *</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Détaillez votre besoin ici..." className={styles.input}></textarea>
                </div>
                
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}</span>
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
