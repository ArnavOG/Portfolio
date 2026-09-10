'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { Project } from '@/data/projects';

interface ProjectDetailClientProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

function StatusBadge({ status }: { status: Project['status'] }) {
  if (status === 'active')
    return <span className="status-badge-active"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Live</span>;
  if (status === 'wip')
    return <span className="status-badge-wip"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />In Progress</span>;
  return <span className="status-badge-archived">Archived</span>;
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  const pageRef = useRef<HTMLDivElement>(null);

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

    pageRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [project.slug]);

  return (
    <div ref={pageRef} className="pt-24 pb-24">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <AppImage
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          {/* Atmospheric blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 blob-yellow" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 blob-purple" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 space-y-6">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono-code text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
          >
            ← Back to Work
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono-code text-xs px-2 py-0.5 rounded border border-border/60 bg-background/70 text-muted-foreground uppercase tracking-wider">
                {project.category}
              </span>
              <StatusBadge status={project.status} />
              <span className="font-mono-code text-xs text-muted-foreground">{project.year}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-none">
              {project.title}
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all duration-200"
              >
                GitHub ↗
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-semibold text-xs hover:border-primary/40 hover:text-primary transition-all duration-200"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 space-y-16 mt-12">
        {/* Overview */}
        <section className="reveal space-y-4">
          <p className="section-label">Overview</p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </section>

        {/* Problem / Solution side by side */}
        <div className="reveal grid md:grid-cols-2 gap-6">
          <div className="card-glass rounded-xl p-6 border border-border space-y-3">
            <p className="section-label">Problem</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>
          <div className="card-glass rounded-xl p-6 border border-primary/20 space-y-3">
            <p className="section-label">Solution</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Features */}
        <section className="reveal space-y-5">
          <p className="section-label">Features</p>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="reveal space-y-5">
          <p className="section-label">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="skill-tag skill-tag-primary">{t}</span>
            ))}
          </div>
        </section>

        {/* Screenshot placeholder */}
        <section className="reveal space-y-5">
          <p className="section-label">Screenshots</p>
          <div className="rounded-xl overflow-hidden border border-border aspect-video relative">
            <AppImage
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono-code text-xs text-muted-foreground/60 tracking-widest uppercase">
                Screenshots coming soon
              </span>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="reveal space-y-5">
          <p className="section-label">Challenges</p>
          <div className="space-y-3">
            {project.challenges.map((c, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-muted/30">
                <span className="font-mono-code text-xs text-muted-foreground/50 mt-0.5 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Learned */}
        <section className="reveal space-y-5">
          <p className="section-label">What I Learned</p>
          <ul className="space-y-3">
            {project.learned.map((l, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                {l}
              </li>
            ))}
          </ul>
        </section>

        {/* Future Improvements */}
        <section className="reveal space-y-5">
          <p className="section-label">Future Improvements</p>
          <ul className="space-y-3">
            {project.future.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Footer CTA — prev/next + view all */}
        <section className="reveal pt-8 border-t border-border space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Prev */}
            {prevProject ? (
              <Link
                href={`/project-detail?slug=${prevProject.slug}`}
                className="group flex flex-col gap-1 text-left"
              >
                <span className="font-mono-code text-xs text-muted-foreground tracking-widest uppercase">
                  ← Previous
                </span>
                <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
            >
              View All Projects
            </Link>

            {/* Next */}
            {nextProject ? (
              <Link
                href={`/project-detail?slug=${nextProject.slug}`}
                className="group flex flex-col gap-1 text-right"
              >
                <span className="font-mono-code text-xs text-muted-foreground tracking-widest uppercase">
                  Next →
                </span>
                <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}