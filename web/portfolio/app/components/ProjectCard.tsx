"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FolderData } from "../data/folderProjects";
import TiltCard from "./TiltCard";

interface ProjectCardProps {
  project: FolderData;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const mainImage = project.images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "150px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group relative"
    >
      <TiltCard tiltStrength={8} glareEnabled={true}>
        {/* Card Container */}
        <div className="relative bg-[#252542] rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--project-color)]/30 transition-all duration-500 h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          {mainImage && (
            <Image
              src={mainImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#252542] via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span 
              className="px-3 py-1 rounded-full text-xs font-medium text-white/90 backdrop-blur-sm"
              style={{ backgroundColor: `${project.color}30`, border: `1px solid ${project.color}50` }}
            >
              {project.category}
            </span>
          </div>

          {/* Impact Metric Badge */}
          {project.impact && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[var(--project-color)] to-[var(--project-color)]/70">
                {project.impact}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title & Icon */}
          <div className="flex items-start gap-3 mb-3">
            <div 
              className="p-2 rounded-lg shrink-0"
              style={{ backgroundColor: `${project.color}15` }}
            >
              <project.icon className="w-5 h-5" style={{ color: project.color }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-[var(--project-color)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-white/40 mt-1">{project.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[4.5rem]">
            {project.description}
          </p>

          {/* Hands-on Tags */}
          <div className="flex flex-wrap content-start gap-2 mb-4 h-[4.5rem] overflow-hidden">
            {project.handsOn.slice(0, 4).map((tag: string, i: number) => (
              <span 
                key={i}
                className="px-2 py-1 rounded text-xs text-white/50 bg-white/5 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
            {project.stats.map((stat: { value: string; label: string }, i: number) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="text-lg font-bold" style={{ color: project.color }}>
                  {stat.value}
                </span>
                <span className="text-xs text-white/40">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 70%)`
          }}
        />
        </div>
      </TiltCard>

      {/* CSS Variable for dynamic colors */}
      <style jsx>{`
        .group {
          --project-color: ${project.color};
        }
      `}</style>
    </motion.div>
  );
}
