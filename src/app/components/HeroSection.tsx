'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = sectionRef.current;
      if (!section) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const mx = (clientX / innerWidth - 0.5) * 2;
      const my = (clientY / innerHeight - 0.5) * 2;

      const blob1 = section.querySelector<HTMLElement>('.hero-blob-1');
      const blob2 = section.querySelector<HTMLElement>('.hero-blob-2');
      if (blob1) {
        blob1.style.transform = `translate(${mx * 30}px, ${my * 20}px)`;
      }
      if (blob2) {
        blob2.style.transform = `translate(${mx * -20}px, ${my * -15}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Atmospheric depth layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob 1 — yellow */}
        <div
          className="hero-blob-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] blob-yellow transition-transform duration-700 ease-out"
          style={{ marginLeft: '-250px', marginTop: '-250px' }}
        />
        {/* Blob 2 — purple */}
        <div
          className="hero-blob-2 absolute bottom-1/3 right-1/4 w-[400px] h-[400px] blob-purple transition-transform duration-700 ease-out"
          style={{ marginRight: '-200px', marginBottom: '-200px' }}
        />
        {/* Blue accent */}
        <div className="absolute top-2/3 left-1/2 w-[300px] h-[300px] blob-blue" style={{ marginLeft: '-150px' }} />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      
      {/* Monolith background text */}
<div
  className="monolith-bg-text absolute top-1/2 left-1/2 text-foreground select-none pointer-events-none"
  style={{ transform: 'translate(-50%, -50%)' }}
>
  ARNAV
</div>

{/* Brighter outer edges */}
<div
  className="monolith-bg-text monolith-edge-text absolute top-1/2 left-1/2 text-foreground select-none pointer-events-none"
  style={{ transform: 'translate(-50%, -50%)' }}
>
  ARNAV
</div>

      {/* Hero content */}
      <div className="relative z-0 text-center px-6 max-w-5xl mx-auto space-y-10">
        {/* Status badge */}
        <div className="reveal active inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-mono-code text-xs text-primary tracking-widest uppercase">
            Open to Internships · 2026
          </span>
        </div>

        {/* Main headline */}
        <div className="reveal reveal-delay-1 space-y-2">
          <h1 className="text-hero-display text-foreground">
            ARNAV
          </h1>
          <p className="font-mono-code text-sm md:text-base text-muted-foreground tracking-widest uppercase mt-4">
            CS Student
            <span className="mx-3 text-primary opacity-60">·</span>
            Software Developer
            <span className="mx-3 text-primary opacity-60">·</span>
            Creator
          </p>
        </div>

        {/* Tagline */}
        <p className="reveal reveal-delay-2 text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
          I build things to understand how they work — and ship them so others can use them.
          Currently studying CS, making projects, and figuring out what to found.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-200 yellow-glow"
          >
            Explore Projects
            <span className="text-base">→</span>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all duration-200"
          >
            GitHub ↗
          </a>
          <a
            href="/resume"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border border-border text-muted-foreground font-semibold text-sm hover:border-border hover:text-foreground transition-all duration-200"
          >
            Resume ↓
          </a>
        </div>

        {/* Social row */}
        <div className="reveal reveal-delay-4 flex items-center justify-center gap-6 pt-2">
          {[
            { label: 'GitHub', href: 'https://github.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com' },
            { label: 'YouTube', href: 'https://youtube.com' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-code text-xs text-muted-foreground hover:text-primary transition-colors duration-200 tracking-widest uppercase"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono-code text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse-glow" />
      </div>
    </section>
  );
}