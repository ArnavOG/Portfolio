'use client';

import React, { useEffect, useRef } from 'react';
import { learningCards } from '@/data/learning';

export default function CurrentlyLearning() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const colorConfig: Record<string, { border: string; label: string; bullet: string }> = {
    yellow: {
      border: 'border-primary/20 hover:border-primary/40',
      label: 'text-primary',
      bullet: 'bg-primary',
    },
    purple: {
      border: 'border-secondary/20 hover:border-secondary/40',
      label: 'text-secondary',
      bullet: 'bg-secondary',
    },
    blue: {
      border: 'border-accent/20 hover:border-accent/40',
      label: 'text-accent',
      bullet: 'bg-accent',
    },
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="reveal">
          <p className="section-label mb-3">Status</p>
          <h2 className="text-section-title text-foreground leading-tight">
            Right Now
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {learningCards.map((card, i) => {
            const config = colorConfig[card.color];
            return (
              <div
                key={card.type}
                className={`reveal card-glass rounded-xl p-6 border transition-all duration-300 ${config.border}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className={`font-mono-code text-xs tracking-widest uppercase mb-4 ${config.label}`}>
                  {card.title}
                </p>
                <ul className="space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${config.bullet} mt-1.5 flex-shrink-0 opacity-70`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}