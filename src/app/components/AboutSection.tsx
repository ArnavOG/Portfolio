'use client';

import React, { useEffect, useRef } from 'react';

const infoCards = [
  {
    label: 'EDUCATION',
    value: 'Diploma in Computer Science',
    sub: '3rd Year · 5th Semester',
    color: 'yellow',
  },
  {
    label: 'BUILDING',
    value: 'Web · Software · Layouts',
    sub: 'Learning by building',
    color: 'purple',
  },
  {
    label: 'CREATIVE',
    value: 'Sketching · Music · Storytelling',
    sub: 'Building New Ideas',
    color: 'blue',
  },
  {
    label: 'DIRECTION',
    value: 'Build → Ship → Learn',
    sub: 'Becoming a better builder',
    color: 'yellow',
  },
];

export default function AboutSection() {
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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const colorMap: Record<string, string> = {
    yellow: 'border-primary/20 hover:border-primary/50',
    purple: 'border-secondary/20 hover:border-secondary/50',
    blue: 'border-accent/20 hover:border-accent/50'
  };

  const labelColorMap: Record<string, string> = {
    yellow: 'text-primary',
    purple: 'text-secondary',
    blue: 'text-accent'
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div className="space-y-8 reveal">
            <div className="space-y-3">
              <p className="section-label">About</p>
              <h2 className="text-section-title text-foreground leading-tight">
                Hi, I&apos;m{' '}
                <span className="gradient-text-yellow">Arnav</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-base md:text-lg">
                I&apos;m Arnav... a Computer Science student, developer, and creator who likes turning ideas into things people can actually use.
              </p>
              <p className="text-base">
                My projects range from console applications in C# to browser-based tools, AI experiments, and the occasional CSS art piece at midnight.
              </p>
              <p className="text-base">
                I also create content around gaming, experimentation and storytelling. Creating videos has taught me something coding alone couldn't — how to turn an idea into an experience for another person.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/ArnavOG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/arnavin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="grid grid-cols-2 gap-4 reveal reveal-delay-1">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className={`card-glass rounded-xl p-5 border transition-all duration-300 ${colorMap[card.color]}`}
              >
                <p className={`font-mono-code text-xs tracking-widest uppercase mb-2 ${labelColorMap[card.color]}`}>
                  {card.label}
                </p>
                <p className="text-sm font-semibold text-foreground leading-snug">{card.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}