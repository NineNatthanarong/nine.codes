"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "/images/robotstudio1.jpg", title: "ROBOTSTUDIO Team", category: "Leadership" },
  { src: "/images/robotstudio2.jpg", title: "Innovation Lab", category: "Projects" },
  { src: "/images/robotstudio3.jpg", title: "Team Collaboration", category: "Teamwork" },
  { src: "/images/abb1.jpg", title: "ABB Automation", category: "Industrial" },
  { src: "/images/abb2.jpg", title: "Hands-on Learning", category: "Skills" },
  { src: "/images/robox1.webp", title: "ROBOx Event 2025", category: "Events" },
  { src: "/images/robox2.webp", title: "Future in Motion", category: "Events" },
  { src: "/images/volunteer1.jpg", title: "Teaching Assistant", category: "Volunteer" },
  { src: "/images/volunteer2.jpg", title: "Hackathon Staff", category: "Volunteer" },
];

const categories = ["All", "Leadership", "Projects", "Teamwork", "Events", "Volunteer", "Industrial"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#9b5de5]/10 text-[#9b5de5] text-sm font-medium mb-4">
            📸 Visual Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Moments & <span className="gradient-cool">Memories</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A visual collection of projects, events, and experiences that shaped my journey
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#ff6b6b] text-white shadow-lg shadow-[#ff6b6b]/30"
                  : "bg-[#252542] border border-white/10 text-white/70 hover:border-[#ff6b6b]/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Photo Frame Effect */}
              <div className="absolute inset-0 bg-[#252542] p-3 rounded-2xl shadow-lg border border-white/10">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/95 via-[#1a1a2e]/60 to-transparent flex flex-col justify-end p-6"
                  >
                    <span className="text-[#feca57] text-xs font-medium uppercase tracking-wider mb-2">
                      {image.category}
                    </span>
                    <div className="text-white text-xl font-semibold">
                      {image.title}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#252542] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-white/10">
                <svg className="w-4 h-4 text-[#ff6b6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "3", label: "Years Active" },
            { value: "10+", label: "Projects" },
            { value: "5", label: "Competitions" },
            { value: "∞", label: "Memories" },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-[#252542] border border-white/10"
            >
              <p className="text-3xl sm:text-4xl font-bold gradient-warm mb-2">{stat.value}</p>
              <p className="text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
