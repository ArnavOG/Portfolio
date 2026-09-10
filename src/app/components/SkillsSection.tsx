'use client';

import React, { useEffect, useRef } from 'react';
import { skillGroups } from '@/data/skills';

export default function SkillsSection() {
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

  const variantClass: Record<string, string> = {
    primary: 'skill-tag-primary',
    secondary: 'skill-tag-secondary',
    accent: 'skill-tag-accent',
    default: '',
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="reveal">
          <p className="section-label mb-3">Skills</p>
          <h2 className="text-section-title text-foreground leading-tight">
            Tools I{' '}
            <span className="gradient-text-yellow">Work With</span>
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-lg">
            No skill bars. No fake percentages. Just the tools I actually use and the ones I&apos;m actively learning.
          </p>
        </div>

        <div className="space-y-8">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`reveal space-y-3`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="font-mono-code text-xs text-muted-foreground tracking-widest uppercase">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-tag ${variantClass[group.variant]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}