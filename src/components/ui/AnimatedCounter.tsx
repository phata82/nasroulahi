'use client';

import { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export default function AnimatedCounter({ end, duration = 2000, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // Eviter de diviser par zéro
    if (end === 0) {
      setCount(0);
      return;
    }

    // Calcul de l'incrément et du temps
    let incrementTime = (duration / end);
    let step = 1;
    
    // Si on a un grand nombre, on limite la vitesse à ~60 images par secondes (16ms)
    if (incrementTime < 16) {
      incrementTime = 16;
      step = Math.ceil(end / (duration / 16));
    }

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}
