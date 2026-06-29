import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AthletePowerScore from "@/components/AthletePowerScore";
import AICoach from "@/components/AICoach";
import HealthMonitor from "@/components/HealthMonitor";
import AdaptiveTraining from "@/components/AdaptiveTraining";
import Technology from "@/components/Technology";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
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
