'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { timelineNodes } from '@/data/timeline';

export default function JourneyPreview() {
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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    sectionRef?.current?.querySelectorAll('.reveal')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  const previewNodes = timelineNodes?.slice(0, 5);

  return (
    <section id="journey" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div className="space-y-3">
            <p className="section-label">Journey</p>
            <h2 className="text-section-title text-foreground leading-tight">
              How I Got{' '}
              <span className="gradient-text-yellow">Here</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
            Full Timeline
            <span className="w-8 h-px bg-muted-foreground group-hover:w-14 group-hover:bg-primary transition-all duration-500" />
          </Link>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-0">
            {previewNodes?.map((node, i) => (
              <div
                key={node?.id}
                className={`reveal relative flex gap-8 pb-10`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Node dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                      node?.type === 'present' ?'border-primary bg-primary/10'
                        : node?.type === 'future' ?'border-dashed border-muted-foreground bg-transparent' :'border-border bg-muted'
                    }`}
                  >
                    <span className="font-mono-code text-xs font-bold text-muted-foreground">
                      {node?.id}
                    </span>
                    {node?.type === 'present' && (
                      <span className="absolute w-3 h-3 rounded-full bg-primary animate-ping opacity-40" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1.5 pb-2">
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <span className="font-mono-code text-xs text-muted-foreground tracking-wider">
                      {node?.period}
                    </span>
                    {node?.type === 'present' && (
                      <span className="status-badge-active text-xs">Now</span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-foreground">{node?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">
                    {node?.description}
                  </p>
                  {node.relatedLink && (
  <a
    href={node.relatedLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 mt-2 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
  >
    <span>→</span>
    {node.relatedProject}
  </a>
)}
                </div>
              </div>
            ))}

            {/* Future node (dashed) */}
            <div className="reveal relative flex gap-8" style={{ transitionDelay: '500ms' }}>
              <div className="relative z-10 flex-shrink-0">
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-muted-foreground/40 flex items-center justify-center">
                  <span className="font-mono-code text-xs text-muted-foreground/40">→</span>
                </div>
              </div>
              <div className="flex-1 pt-1.5">
                <span className="font-mono-code text-xs text-muted-foreground/40 tracking-wider">2027 →</span>
                <h3 className="text-base font-bold text-muted-foreground/40 mt-1">The Next Chapter</h3>
                <p className="text-sm text-muted-foreground/30 mt-1">Still writing...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}