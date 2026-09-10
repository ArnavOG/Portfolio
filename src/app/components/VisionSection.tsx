'use client';

import React, { useEffect, useRef } from 'react';

export default function VisionSection() {
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
      { threshold: 0.15 }
    );

    sectionRef?.current?.querySelectorAll('.reveal')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  const themes = ['Learning', 'Building', 'Shipping', 'Founding'];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="reveal space-y-3">
          <p className="section-label">Vision</p>
          <h2 className="text-section-title text-foreground leading-tight">
            Where I&apos;m{' '}
            <span className="gradient-text-yellow">Headed</span>
          </h2>
        </div>

        <div className="reveal reveal-delay-1">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I want to build software that solves real problems — not demos, not portfolio pieces for their own sake,
            but things that people actually use and that make their work or life meaningfully better.
            The path I see is: keep learning deeply, keep shipping consistently, find a problem worth years of focus,
            and build a company around solving it.
          </p>
        </div>

        {/* Theme tags */}
        <div className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-3">
          {themes?.map((theme, i) => (
            <React.Fragment key={theme}>
              <span className="font-mono-code text-sm font-semibold text-foreground/70 px-4 py-2 rounded-lg border border-border">
                {theme}
              </span>
              {i < themes?.length - 1 && (
                <span className="text-primary opacity-40 font-bold">→</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Vertical pulse line */}
        <div className="reveal reveal-delay-3 flex justify-center pt-4">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}