'use client';

import React, { useEffect, useRef } from 'react';
import { achievements } from '@/data/achievements';

export default function AchievementsSection() {
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
      { threshold: 0.1 }
    );

    sectionRef?.current?.querySelectorAll('.reveal')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  if (achievements?.length === 0) return null;

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="reveal">
          <p className="section-label mb-3">Milestones</p>
          <h2 className="text-4xl font-bold text-foreground tracking-tight">Achievements</h2>
        </div>

        <div className="space-y-3">
          {achievements?.map((item, i) => (
            <div
              key={item?.title}
              className="reveal flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-b border-border/50 last:border-0"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-mono-code text-xs text-muted-foreground/60 sm:w-16 flex-shrink-0">
                {item?.year}
              </span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground">{item?.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item?.description}</p>
              </div>
              <span className="font-mono-code text-xs px-2 py-0.5 rounded border border-border text-muted-foreground/60 uppercase tracking-wider self-start sm:self-auto">
                {item?.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}