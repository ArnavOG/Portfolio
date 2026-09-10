import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import FeaturedProjects from '@/app/components/FeaturedProjects';
import SkillsSection from '@/app/components/SkillsSection';
import JourneyPreview from '@/app/components/JourneyPreview';
import CurrentlyLearning from '@/app/components/CurrentlyLearning';
import EducationSection from '@/app/components/EducationSection';
import AchievementsSection from '@/app/components/AchievementsSection';
import CreatorSection from '@/app/components/CreatorSection';
import VisionSection from '@/app/components/VisionSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <SkillsSection />
      <JourneyPreview />
      <CurrentlyLearning />
      <EducationSection />
      <AchievementsSection />
      <CreatorSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}