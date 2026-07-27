'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Amadou Diallo",
      role: "Commerçant, Dakar",
      content: "Nasroulahi Holding m'a permis de développer mon activité. Leurs services de contrôle qualité et de transit sont impeccables. Je reçois mes marchandises dans les délais et sans aucune mauvaise surprise.",
      rating: 5
    },
    {
      id: 2,
      name: "Ousmane Fall",
      role: "Importateur de pièces auto",
      content: "Je travaille avec eux depuis 3 ans pour l'importation de pièces détachées depuis la Chine. Leur bureau à Guangzhou est très réactif et ils trouvent toujours les meilleurs fournisseurs.",
      rating: 5
    },
    {
      id: 3,
      name: "Fatou Diop",
      role: "Entrepreneure",
      content: "Leur accompagnement personnalisé fait toute la différence. Ils s'occupent de tout, de l'achat en Chine jusqu'à la livraison à mon dépôt au Sénégal. Un partenaire de confiance !",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className={`section ${styles.testimonialsSection}`}>
      <div className="container">
        <h2 className="section-title">
          Ce que disent <span>nos clients</span>
        </h2>
        
        <div className={styles.carouselContainer}>
          <button className={styles.navButton} onClick={prevTestimonial} aria-label="Précédent">
            <ChevronLeft size={24} />
          </button>
          
          <div key={currentIndex} className={`${styles.testimonialCard} ${styles.slideIn}`}>
            <div className={styles.quoteIcon}>
              <Quote size={40} />
            </div>
            
            <div className={styles.rating}>
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className={styles.starIcon} fill="currentColor" />
              ))}
            </div>
            
            <p className={styles.content}>"{testimonials[currentIndex].content}"</p>
            
            <div className={styles.author}>
              <div className={styles.avatar}>
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className={styles.name}>{testimonials[currentIndex].name}</h4>
                <p className={styles.role}>{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          <button className={styles.navButton} onClick={nextTestimonial} aria-label="Suivant">
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
