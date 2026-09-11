'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Journey', href: '/#journey' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-blur' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo
              size={28}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-sans font-800 text-base tracking-tight text-foreground">
              Arnav
              <span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all duration-200"
            >
              View Work
              <span className="text-sm">→</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 group"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`h-[1.5px] bg-foreground transition-all duration-300 ${
                menuOpen ? 'w-6 rotate-45 translate-y-[5px]' : 'w-6'
              }`}
            />
            <span
              className={`h-[1.5px] bg-foreground transition-all duration-300 ${
                menuOpen ? 'w-0 opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`h-[1.5px] bg-foreground transition-all duration-300 ${
                menuOpen ? 'w-6 -rotate-45 -translate-y-[5px]' : 'w-6'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto' :'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(10,11,15,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks?.map((link, i) => (
            <Link
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-200"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="/work"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all duration-200"
          >
            View Work →
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono-code text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}