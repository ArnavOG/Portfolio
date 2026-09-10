'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { Project, experiments as ExperimentType } from '@/data/projects';

type FilterCategory = 'All' | 'Software' | 'Web' | 'C#' | 'AI' | 'Experiments' | 'College';
const FILTERS: FilterCategory[] = ['All', 'Software', 'Web', 'C#', 'AI', 'Experiments', 'College'];

interface WorkClientProps {
  projects: Project[];
  experiments: typeof ExperimentType;
}

function StatusDot({ status }: { status: Project['status'] }) {
  if (status === 'active')
    return <span className="status-badge-active"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Live</span>;
  if (status === 'wip')
    return <span className="status-badge-wip"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />WIP</span>;
  return <span className="status-badge-archived">Archived</span>;
}

export default function WorkClient({ projects, experiments }: WorkClientProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );

    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === 'All'
      ? projects
      : activeFilter === 'Experiments'
      ? []
      : projects.filter((p) => p.category === activeFilter);

  const showExperiments = activeFilter === 'All' || activeFilter === 'Experiments';

  return (
    <div ref={sectionRef} className="pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page header */}
        <div className="reveal space-y-4">
          <p className="section-label">Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="text-section-title text-foreground leading-tight">
              All{' '}
              <span className="gradient-text-yellow">Projects</span>
            </h1>
            <p className="font-mono-code text-sm text-muted-foreground">
              {projects.length} projects · {experiments.length} experiments
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="reveal overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-2 w-max">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        {filtered.length > 0 && (
          <div className="space-y-6">
            {/* 
              Grid audit for filtered projects:
              All filter (6 cards): 
              Row 1: [col-1: P1 cs-1] [col-2: P2 cs-1] [col-3: P3 cs-1]
              Row 2: [col-1: P4 cs-1] [col-2: P5 cs-1] [col-3: P6 cs-1]
              Placed 6/6 ✓
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project, i) => (
                <div
                  key={project.slug}
                  className="reveal group card-glass rounded-xl overflow-hidden hover-lift flex flex-col"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <AppImage
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="font-mono-code text-xs px-2 py-0.5 rounded border border-border/60 bg-background/70 text-muted-foreground uppercase tracking-wider">
                        {project.category}
                      </span>
                      <StatusDot status={project.status} />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="font-mono-code text-xs text-muted-foreground/60">{project.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <div>
                      <h2 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h2>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1.5 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="tech-pill">{t}</span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="tech-pill text-muted-foreground/50">+{project.tech.length - 4}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                      <Link
                        href={`/project-detail?slug=${project.slug}`}
                        className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
                      >
                        View Project →
                      </Link>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono-code text-muted-foreground hover:text-foreground transition-colors ml-auto"
                      >
                        GitHub ↗
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono-code text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && !showExperiments && (
          <div className="text-center py-20">
            <p className="font-mono-code text-sm text-muted-foreground">No projects in this category yet.</p>
          </div>
        )}

        {/* Experiments / Lab section */}
        {showExperiments && experiments.length > 0 && (
          <div className="space-y-8 pt-8 border-t border-border/50">
            <div className="reveal flex items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="section-label">Lab</p>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">
                  Experiments
                </h2>
                <p className="text-sm text-muted-foreground">
                  Smaller explorations, proofs of concept, and things I built just to see if I could.
                </p>
              </div>
            </div>

            {/* Experiments grid — 3 cards */}
            {/* Row 1: [col-1: exp1 cs-1] [col-2: exp2 cs-1] [col-3: exp3 cs-1] */}
            {/* Placed 3/3 ✓ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {experiments.map((exp, i) => (
                <div
                  key={exp.slug}
                  className="reveal card-glass rounded-xl p-5 border border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover-lift"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="experiment-badge">experiment</span>
                    <span className="font-mono-code text-xs text-muted-foreground/50">{exp.year}</span>
                  </div>

                  <h3 className="font-mono-code text-sm font-semibold text-secondary mb-2 tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-pill text-xs">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-3 border-t border-border/40">
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono-code text-muted-foreground hover:text-foreground transition-colors"
                    >
                      GitHub ↗
                    </a>
                    {exp.live && (
                      <a
                        href={exp.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono-code text-secondary hover:text-secondary/80 transition-colors"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}