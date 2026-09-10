'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const featured = projects?.filter((p) => p?.featured)?.slice(0, 4);

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

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div className="space-y-3">
            <p className="section-label">Projects</p>
            <h2 className="text-section-title text-foreground leading-tight">
              What I&apos;ve{' '}
              <span className="gradient-text-yellow">Built</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
            All Projects
            <span className="w-8 h-px bg-muted-foreground group-hover:w-14 group-hover:bg-primary transition-all duration-500" />
          </Link>
        </div>

        {/* Bento grid — 4 cards */}
        {/* Row 1: [col-1: NexusChat cs-2] [col-3: PixelForge cs-1] */}
        {/* Row 2: [col-1: AlgoVisualizer cs-1] [col-2: StudySync cs-2] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: NexusChat — spans 2 cols */}
          <div className="reveal md:col-span-2">
            <ProjectCard project={featured?.[0]} variant="featured" />
          </div>

          {/* Card 2: PixelForge — 1 col */}
          <div className="reveal reveal-delay-1">
            <ProjectCard project={featured?.[1]} />
          </div>

          {/* Card 3: AlgoVisualizer — 1 col */}
          <div className="reveal reveal-delay-2">
            <ProjectCard project={featured?.[2]} />
          </div>

          {/* Card 4: StudySync — spans 2 cols */}
          <div className="reveal reveal-delay-3 md:col-span-2">
            <ProjectCard project={featured?.[3]} variant="featured" />
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center pt-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all duration-200"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}