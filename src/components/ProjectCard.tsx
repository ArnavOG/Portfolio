import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured';
}

function StatusBadge({ status }: { status: Project['status'] }) {
  if (status === 'active')
    return (
      <span className="status-badge-active">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Live
      </span>
    );
  if (status === 'wip')
    return (
      <span className="status-badge-wip">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        WIP
      </span>
    );
  return <span className="status-badge-archived">Archived</span>;
}

export default function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  return (
    <div className="group card-glass rounded-xl overflow-hidden hover-lift h-full flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="font-mono-code text-xs px-2 py-0.5 rounded border border-border/60 bg-background/70 text-muted-foreground uppercase tracking-wider">
            {project.category}
          </span>
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mt-1.5 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-pill text-muted-foreground/60">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
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
        </div>
      </div>
    </div>
  );
}