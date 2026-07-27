import { MessageSquare, ClipboardList, ShoppingCart, CheckSquare, Truck, PackageCheck } from 'lucide-react';
import styles from './ProcessTimeline.module.css';

export default function ProcessTimeline() {
  const steps = [
    { id: 1, title: 'Prise de contact', desc: 'Évaluation de vos besoins', icon: <MessageSquare size={24} /> },
    { id: 2, title: 'Analyse du besoin', desc: 'Proposition de solutions', icon: <ClipboardList size={24} /> },
    { id: 3, title: 'Achat ou réception', desc: 'Acquisition des biens', icon: <ShoppingCart size={24} /> },
    { id: 4, title: 'Contrôle qualité', desc: 'Vérification rigoureuse', icon: <CheckSquare size={24} /> },
    { id: 5, title: 'Expédition', desc: 'Transport sécurisé', icon: <Truck size={24} /> },
    { id: 6, title: 'Livraison', desc: 'Remise au client', icon: <PackageCheck size={24} /> },
  ];

  return (
    <section id="process" className={`section ${styles.processSection}`}>
      <div className="container">
        <h2 className="section-title">
          Notre <span>Processus</span>
        </h2>
        
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>
          
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={step.id} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.id}</div>
                <div className={styles.iconContainer}>
                  {step.icon}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className={styles.arrowIcon}>➔</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
