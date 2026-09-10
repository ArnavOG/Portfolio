import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <AppLogo size={24} />
              <span className="font-sans font-bold text-sm tracking-tight text-foreground">
                arnav<span className="text-primary">.</span>
              </span>
            </div>
            <p className="font-mono-code text-xs text-muted-foreground">
              CS Student · Developer · Creator
            </p>
          </div>

          {/* Center: Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: 'Home', href: '/' },
              { label: 'Work', href: '/work' },
              { label: 'Journey', href: '/#journey' },
              { label: 'Contact', href: '/#contact' },
            ]?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Right: Socials + copyright */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-code text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-code text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-code text-muted-foreground hover:text-foreground transition-colors"
              >
                YouTube
              </a>
            </div>
            <p className="text-xs text-muted-foreground/60 font-mono-code">
              © 2026 Arnav · Built with curiosity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}