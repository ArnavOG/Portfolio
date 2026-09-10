'use client';

import React, { useEffect, useRef } from 'react';
import { creatorCards } from '@/data/creator';

export default function CreatorSection() {
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

  const colorConfig: Record<string, { bg: string; border: string; label: string; emoji: string }> = {
    yellow: {
      bg: 'bg-primary/5',
      border: 'border-primary/20 hover:border-primary/50',
      label: 'text-primary',
      emoji: 'bg-primary/10',
    },
    purple: {
      bg: 'bg-secondary/5',
      border: 'border-secondary/20 hover:border-secondary/50',
      label: 'text-secondary',
      emoji: 'bg-secondary/10',
    },
    blue: {
      bg: 'bg-accent/5',
      border: 'border-accent/20 hover:border-accent/50',
      label: 'text-accent',
      emoji: 'bg-accent/10',
    },
  };

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="reveal">
          <p className="section-label mb-3">Beyond Code</p>
          <h2 className="text-section-title text-foreground leading-tight">
            The Other{' '}
            <span className="gradient-text-yellow">Side</span>
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-lg">
            Building software is what I do. But creating, gaming, and sharing are why I keep doing it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {creatorCards.map((card, i) => {
            const config = colorConfig[card.color];
            return (
              <div
                key={card.title}
                className={`reveal rounded-xl p-6 border transition-all duration-300 hover-lift ${config.bg} ${config.border}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${config.emoji}`}>
                  {card.emoji}
                </div>
                <p className={`font-mono-code text-xs tracking-widest uppercase mb-1 ${config.label}`}>
                  {card.subtitle}
                </p>
                <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                {card.link && (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 mt-4 text-xs font-semibold ${config.label} hover:opacity-80 transition-opacity`}
                  >
                    {card.linkLabel} ↗
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}