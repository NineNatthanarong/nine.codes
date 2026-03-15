"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { impactStats } from "../data/folderProjects";
import { ChevronDown, Award, GraduationCap, Sparkles, FolderGit2, Trophy, Medal } from "lucide-react";
import MagneticButton from "./MagneticButton";

// Animated counter component
function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {value.includes("100") ? "100%" : displayValue}
      {suffix}
    </span>
  );
}

export default function ImpactHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Key highlights for HR/Talent Seekers
  const keyHighlights = [
    { icon: Award, text: "Outstanding Innovation Award - Super AI SS5", color: "#9b5de5" },
    { icon: Sparkles, text: "Head of Operations - BU ROBOTSTUDIO", color: "#ff6b6b" },
    { icon: GraduationCap, text: "Tech Talent 100% Scholarship", color: "#48dbfb" },
  ];

  const techStack = ["Python", "AI/ML", "Full-Stack", "Robotics", "PLC", "Docker"];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero section - AI Software Developer introduction"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-[#ff6b6b]/20 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 60, 0],
            scale: [1, 1.3, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#48dbfb]/15 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-[#feca57]/10 rounded-full blur-[100px] sm:blur-[120px] lg:blur-[150px]"
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff6b6b]/20 to-[#feca57]/20 border border-white/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#feca57]" />
              <span className="text-sm text-white/80">Open to Opportunities</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              <span className="text-white">AI Software</span>
              <br />
              <span className="gradient-warm">Developer</span>
            </motion.h1>
            
            {/* Hidden SEO-friendly name */}
            <meta itemProp="name" content="Natthanarong Tiangjit" />

            {/* Role Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-lg sm:text-xl text-white/80 mb-4 font-medium"
            >
              <a href="#about" className="hover:text-[#ff6b6b] transition-colors">Natthanarong Tiangjit</a> | <a href="#experience" className="hover:text-[#ff6b6b] transition-colors">Bangkok University</a>
            </motion.p>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.4 }}
              className="text-base sm:text-lg text-white/50 mb-6 sm:mb-8 max-w-lg"
            >
              <a href="#projects" className="hover:text-[#ff6b6b] transition-colors">Full-Stack Web</a> & <a href="#projects" className="hover:text-[#ff6b6b] transition-colors">AI Developer</a> with hands-on expertise in building and deploying 
              scalable, intelligent systems. From front-end to back-end and cloud deployment.
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="space-y-3 mb-8"
            >
              {keyHighlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${item.color}20` }}>
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <span className="text-white/70">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <MagneticButton
                href="#projects"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-[#ff6b6b] text-white font-semibold shadow-lg shadow-[#ff6b6b]/30 hover:shadow-[#ff6b6b]/50 transition-all inline-block text-sm sm:text-base"
                strength={0.2}
              >
                View Projects
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white/5 text-white font-semibold border border-white/20 hover:bg-white/10 transition-all inline-block text-sm sm:text-base"
                strength={0.2}
              >
                Contact Me
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: Stats & Skills */}
          <div className="order-1 lg:order-2 relative h-[350px] sm:h-[400px] lg:h-[400px]">
            {/* Floating Stats Cards */}
            {[
              { 
                stat: impactStats[0], 
                icon: FolderGit2, 
                color: "#ff6b6b", 
                x: "5%", 
                y: "0%",
                rotate: -6,
                delay: 0.1
              },
              { 
                stat: impactStats[1], 
                icon: Trophy, 
                color: "#feca57", 
                x: "50%", 
                y: "10%",
                rotate: 8,
                delay: 0.2
              },
              { 
                stat: impactStats[2], 
                icon: Medal, 
                color: "#48dbfb", 
                x: "25%", 
                y: "55%",
                rotate: -3,
                delay: 0.3
              },
            ].map((item, i) => (
              <motion.div
                key={item.stat.label}
                initial={{ opacity: 0, scale: 0, rotate: item.rotate - 20 }}
                animate={{ opacity: 1, scale: 1, rotate: item.rotate }}
                transition={{ 
                  delay: item.delay, 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                style={{ 
                  position: "absolute", 
                  left: item.x, 
                  top: item.y,
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 0, 
                  zIndex: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="cursor-pointer"
              >
                {/* Floating animation wrapper */}
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 3 + i * 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                >
                  <div 
                    className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}25 0%, #25254290 100%)`,
                      boxShadow: `0 20px 40px -10px ${item.color}30, 0 0 0 1px ${item.color}40`
                    }}
                  >
                    {/* Pulsing glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      animate={{ 
                        boxShadow: [
                          `0 0 20px ${item.color}00`,
                          `0 0 40px ${item.color}40`,
                          `0 0 20px ${item.color}00`,
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                    
                    {/* Icon with bounce */}
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                      className="mb-2 sm:mb-3"
                    >
                      <item.icon 
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" 
                        style={{ color: item.color }}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    
                    {/* Number with counting animation */}
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 tabular-nums">
                      <AnimatedNumber value={item.stat.value} suffix={item.stat.suffix} />
                    </p>
                    
                    {/* Label with gradient text */}
                    <p 
                      className="text-sm font-medium uppercase tracking-wider"
                      style={{ color: item.color }}
                    >
                      {item.stat.label}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
