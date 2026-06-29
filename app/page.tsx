'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AICoach from '@/components/AICoach';
import HealthMonitor from '@/components/HealthMonitor';
import AthletePowerScore from '@/components/AthletePowerScore';
import AdaptiveTraining from '@/components/AdaptiveTraining';
import Technology from '@/components/Technology';
import Roadmap from '@/components/Roadmap';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-primary">
      <Navigation />
      <Hero />
      <AICoach />
      <HealthMonitor />
      <AthletePowerScore />
      <AdaptiveTraining />
      <Technology />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
}
