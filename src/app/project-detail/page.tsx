'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectDetailClient from '@/app/project-detail/components/ProjectDetailClient';
import { projects } from '@/data/projects';

function ProjectDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') || 'nexus-chat';
  const project = projects.find((p) => p.slug === slug) || projects[0];
  const projectIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProjectDetailClient
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
      <Footer />
    </main>
  );
}

export default function ProjectDetailPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-background" /> }>
      <ProjectDetailContent />
    </Suspense>
  );
}