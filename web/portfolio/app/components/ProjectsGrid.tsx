"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { folderProjects, categories } from "../data/folderProjects";
import { useState } from "react";

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? folderProjects 
    : folderProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative" aria-label="Projects portfolio showcasing AI, web development, and robotics work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[#ff6b6b]/10 text-[#ff6b6b] text-sm font-medium mb-4">
                📁 15 Folders = 15 Projects
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Hands-On <span className="gradient-warm">Experience</span>
              </h2>
              <p className="sr-only">Portfolio projects demonstrating skills in AI, machine learning, full-stack web development, and robotics engineering</p>
              <p className="text-lg text-white/50 mt-3 max-w-2xl">
                Every folder in my SKILLS directory represents a real project with real impact. 
                No fluff. Just delivered work.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[#ff6b6b] text-white shadow-lg shadow-[#ff6b6b]/30"
                      : "bg-[#252542] text-white/60 border border-white/10 hover:border-white/30"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}
