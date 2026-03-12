"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users, Award, Wrench, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: "robotstudio",
    icon: Wrench,
    title: "ROBOTSTUDIO Operations",
    tagline: "Leading Robotics Lab",
    role: "LAB MASTER & Head of Operation",
    description: "Built and led a 50+ member robotics team. Designed internal tools, managed Open House operations, and created workflows that scaled. From staff to leadership in 3 years.",
    impact: ["Led 50+ team members", "3x Open House events", "Internal tools development", "Workflow optimization"],
    color: "#ff6b6b",
    images: ["/images/robotstudio1.jpg", "/images/robotstudio2.jpg", "/images/robotstudio3.jpg"],
  },
  {
    id: "abb",
    icon: Sparkles,
    title: "Industrial Automation",
    tagline: "ABB Automation Experience",
    role: "Software & Control Engineer",
    description: "Worked on real industrial systems. Bridged the gap between hardware and software - programming PLCs, building control interfaces, and solving production challenges.",
    impact: ["PLC Programming", "Control Systems", "Production Optimization", "Cross-functional collaboration"],
    color: "#48dbfb",
    images: ["/images/abb1.jpg", "/images/abb2.jpg"],
  },
  {
    id: "robox",
    icon: Award,
    title: "ROBOx Competition",
    tagline: "Championship-Winning Robotics",
    role: "Competitor & Strategist",
    description: "Competed at TESA Top Gun Rally 2025. Designed, built, and programmed competition robots under pressure. Strategy, teamwork, and execution under tight deadlines.",
    impact: ["TESA Top Gun Rally 2025", "Rapid prototyping", "Strategy & tactics", "High-pressure execution"],
    color: "#feca57",
    images: ["/images/robox1.webp", "/images/robox2.webp"],
  },
  {
    id: "volunteer",
    icon: Heart,
    title: "Community Impact",
    tagline: "Tech Education Volunteer",
    role: "Instructor & Mentor",
    description: "Teaching robotics and programming to students. Making tech accessible and fun. Led workshops, mentored teams, and helped organize community events.",
    impact: ["Workshop facilitation", "Student mentoring", "Community events", "Tech education"],
    color: "#1dd1a1",
    images: ["/images/volunteer1.jpg", "/images/volunteer2.jpg"],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
        {/* Image Gallery */}
        <div className="relative">
          <motion.div 
            className="relative overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              {project.images.map((img, imgIndex) => (
                <motion.div
                  key={img}
                  initial={false}
                  animate={{ 
                    opacity: activeImage === imgIndex ? 1 : 0,
                    scale: activeImage === imgIndex ? 1 : 1.1
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={img}
                    alt={`${project.title} ${imgIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-transparent to-transparent" />
              
              {/* Project icon badge */}
              <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-4 left-4 p-3 rounded-2xl backdrop-blur-md"
                style={{ backgroundColor: `${project.color}20` }}
              >
                <project.icon className="w-6 h-6" style={{ color: project.color }} />
              </motion.div>

              {/* View indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80 text-sm"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>Scroll to explore</span>
              </motion.div>
            </div>

            {/* Color accent line */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 rounded-full"
              style={{ backgroundColor: project.color }}
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Thumbnail navigation */}
          <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
            {project.images.map((img, imgIndex) => (
              <motion.button
                key={img}
                onClick={() => setActiveImage(imgIndex)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-16 h-10 sm:w-20 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden transition-all ${
                  activeImage === imgIndex 
                    ? "ring-2 ring-offset-2 ring-offset-[#1a1a2e]" 
                    : "opacity-50 hover:opacity-80"
                }`}
                style={{ 
                  ["--tw-ring-color" as string]: activeImage === imgIndex ? project.color : undefined 
                }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${imgIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:py-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${project.color}15`, color: project.color }}
          >
            {project.tagline}
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="text-2xl sm:text-3xl font-bold mb-2 text-white"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-white/60 text-base sm:text-lg mb-3 sm:mb-4"
          >
            {project.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.3 }}
            className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6"
          >
            {project.description}
          </motion.p>

          {/* Impact tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="flex flex-wrap gap-1.5 sm:gap-2"
          >
            {project.impact.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm bg-white/5 text-white/70 border border-white/10"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.3 }}
            className="mt-6 sm:mt-8"
          >
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group/btn text-sm sm:text-base"
            >
              <span>View project details</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#ff6b6b]/10 blob -z-10" />
      <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-[#48dbfb]/10 blob-2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1, stiffness: 300 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#feca57]" />
            <span className="text-sm text-white/70">What I&apos;ve been working on</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="gradient-warm">Projects</span> & <span className="gradient-cool">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
            Real work. Real impact. Real learning.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-20 sm:mt-24 lg:mt-32 pt-12 sm:pt-16 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "4+", label: "Years Experience" },
              { value: "50+", label: "Team Members Led" },
              { value: "10+", label: "Projects Delivered" },
              { value: "3", label: "Major Competitions" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-warm mb-1 sm:mb-2">{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

