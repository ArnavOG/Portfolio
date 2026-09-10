import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkClient from '@/app/work/components/WorkClient';
import { projects, experiments } from '@/data/projects';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <WorkClient projects={projects} experiments={experiments} />
      <Footer />
    </main>
  );
}