"use client";

import { motion } from "framer-motion";
import ImpactHero from "./components/ImpactHero";
import About from "./components/About";
import ProjectsGrid from "./components/ProjectsGrid";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ImpactHero />
        <ProjectsGrid />
        <About />
        <Experience />
        <Contact />
      </motion.div>
    </main>
  );
}
