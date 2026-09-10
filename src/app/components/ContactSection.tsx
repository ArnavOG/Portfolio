'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-transparent border-b border-border py-4 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-all duration-300 font-sans';

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="space-y-10 reveal">
            <div className="space-y-3">
              <p className="section-label">Contact</p>
              <h2 className="text-section-title text-foreground leading-tight">
                Let&apos;s{' '}
                <span className="gradient-text-yellow">Connect</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
              I&apos;m open to internship opportunities, collaboration on interesting projects, or just talking about tech and building things. Don&apos;t overthink the message.
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-mono-code text-xs text-muted-foreground tracking-widest uppercase mb-1">Email</p>
                <a
                  href="mailto:arnav@example.com"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200"
                >
                  arnav@example.com
                </a>
              </div>
              <div>
                <p className="font-mono-code text-xs text-muted-foreground tracking-widest uppercase mb-2">Socials</p>
                <div className="flex gap-6">
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
                      className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <a
                  href="/resume"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/10 transition-all duration-200"
                >
                  Download Resume ↓
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-1">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <span className="text-4xl">✓</span>
                <h3 className="text-xl font-bold text-foreground">Message sent!</h3>
                <p className="text-muted-foreground text-sm">I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  required
                />
                <textarea
                  rows={4}
                  placeholder="What's on your mind?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-200 yellow-glow"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}