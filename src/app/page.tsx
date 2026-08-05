'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { TechStack } from '@/components/TechStack';
import { Timeline } from '@/components/Timeline';
import { Capabilities } from '@/components/Capabilities';
import { GithubSection } from '@/components/GithubSection';
import { AskNithishAI } from '@/components/AskNithishAI';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const handleOpenAskAI = () => {
    const aiSection = document.getElementById('ask-ai');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-neutral-100 flex flex-col selection:bg-yellow-400/30 selection:text-yellow-400">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenAskAI={handleOpenAskAI} />

      {/* 1. Hero Section */}
      <Hero onOpenAskAI={handleOpenAskAI} />

      {/* 2. About Section */}
      <About />

      {/* 3. Selected Work (Projects) */}
      <Projects />

      {/* 4. Tech Stack */}
      <TechStack />

      {/* 5. Journey (Timeline) */}
      <Timeline />

      {/* 6. Capabilities */}
      <Capabilities />

      {/* 7. GitHub Section */}
      <GithubSection />

      {/* 8. Ask Nithish AI (Signature Feature) */}
      <AskNithishAI />

      {/* 9. Contact Section */}
      <Contact />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
