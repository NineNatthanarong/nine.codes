"use client";

import { motion } from "framer-motion";
import { Brain, Code, Sparkles, Zap, Bot, Trophy, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const quickStats = [
  { icon: Brain, value: "∞", label: "AI Ideas" },
  { icon: Code, value: "15+", label: "Shipped" },
  { icon: Bot, value: "7", label: "Robots" },
];

const scrollToProjects = () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="hero" className="min-h-screen relative flex items-center overflow-hidden pt-20 dark:bg-[#1a1a2e]">
      {/* Animated background blobs */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b6b]/20 blob animate-float-gentle -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#48dbfb]/15 blob-2 animate-breathe -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#feca57]/10 blob animate-spin-slow -z-10" style={{ animationDuration: '30s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1dd1a1] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1dd1a1]" />
                </span>
                <span className="text-white/70">Open to opportunities</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              AI Software{" "}
              <span className="gradient-warm">Solution</span>{" "}
              <span className="gradient-cool">Engineer</span>
              <span className="text-white/40">.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/60 mb-8 max-w-xl leading-relaxed"
            >
              I build AI-powered applications and robotic systems. From chatbots to automation,
              I turn ideas into working solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                onClick={scrollToProjects}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-full bg-[#ff6b6b] text-white font-medium flex items-center gap-3 shadow-lg shadow-[#ff6b6b]/30"
              >
                <span>View my work</span>
                <motion.span
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Play className="w-4 h-4 fill-current" />
                </motion.span>
              </motion.button>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium hover:bg-white/5 transition-colors"
              >
                Get in touch
              </motion.a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-8"
            >
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2.5 rounded-xl bg-white/5">
                    <stat.icon className="w-5 h-5 text-[#feca57]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/50">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 z-20 px-4 py-2 rounded-full bg-[#ff6b6b] text-white text-sm font-medium shadow-lg"
              >
                🤖 AI/Robotics
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 z-20 px-4 py-2 rounded-full bg-[#48dbfb] text-white text-sm font-medium shadow-lg"
              >
                ⚡ Full Stack
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-8 z-20 px-3 py-1.5 rounded-full bg-[#feca57] text-[#1a1a2e] text-xs font-bold shadow-lg"
              >
                🏆 ABB
              </motion.div>

              {/* Main photo frame */}
              <div className="photo-frame relative aspect-[3/4] max-w-md mx-auto">
                <Image
                  src="/images/profile.jpg"
                  alt="Natthanarong (Nine) - LAB MASTER"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 via-transparent to-transparent rounded-xl" />
                
                {/* Caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">Natthanarong</p>
                  <p className="text-white/70 text-sm">AI Software Solution Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-foreground/40 hover:text-[#e85d4c] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
