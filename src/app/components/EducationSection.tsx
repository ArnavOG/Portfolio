'use client';

import React, { useEffect, useRef } from 'react';
import { education, experience } from '@/data/education';

export default function EducationSection() {
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

    sectionRef?.current?.querySelectorAll('.reveal')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="reveal">
          <p className="section-label mb-3">Background</p>
          <h2 className="text-section-title text-foreground leading-tight">
            Education
            {experience?.length > 0 && (
              <>
                {' '}
                <span className="gradient-text-yellow">&amp; Experience</span>
              </>
            )}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {education?.map((edu) => (
            <div key={edu?.institution} className="reveal card-glass rounded-xl p-6 border border-primary/20">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="font-mono-code text-xs text-primary tracking-widest uppercase mb-1">
                    {edu?.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                  </p>
                  <h3 className="text-base font-bold text-foreground">{edu?.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu?.field}</p>
                </div>
                <span className="font-mono-code text-xs text-muted-foreground whitespace-nowrap">
                  {edu?.period}
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground/80 mb-3">{edu?.institution}</p>
              <div className="flex flex-wrap gap-1.5">
                {edu?.details?.map((d) => (
                  <span key={d} className="tech-pill text-xs">{d}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Experience — only renders when populated */}
          {experience?.length > 0 &&
            experience?.map((exp) => (
              <div key={exp?.company} className="reveal card-glass rounded-xl p-6 border border-border">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="font-mono-code text-xs text-muted-foreground tracking-widest uppercase mb-1">
                      {exp?.type}
                    </p>
                    <h3 className="text-base font-bold text-foreground">{exp?.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp?.company}</p>
                  </div>
                  <span className="font-mono-code text-xs text-muted-foreground whitespace-nowrap">
                    {exp?.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp?.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp?.tech?.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}