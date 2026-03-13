"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap, Globe, Star, Heart } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Innovator & Head of Operations",
    company: "BU ROBOTSTUDIO",
    period: "Mar 2023 - Present",
    color: "#ff6b6b",
    description: [
      "Built software and AI systems for robotics projects",
      "Worked with different teams on technical planning",
      "Helped with R&D and prototyping work",
      "Progressed: Staff (2023) → Operation Lead (2024) → Head of Operations (2025)",
    ],
  },
  {
    icon: Award,
    title: "Outstanding Innovation Award & CAIO",
    company: "Super AI Engineer Season 5 (AiAT) & RaoChatHub",
    period: "October 2025",
    color: "#9b5de5",
    description: [
      "Won at Thailand's 5th National AI Exhibition",
      "Built a RAG Chatbot for SCG IT",
      "Worked as CAIO for RaoChatHub startup",
      "Created chatbot solutions for business clients",
    ],
  },
  {
    icon: Globe,
    title: "Global Collaborator",
    company: "Learning Express Program, Singapore Polytechnic",
    period: "Mar 2024 & Mar 2025",
    color: "#48dbfb",
    description: [
      "Used Design Thinking with international teams",
      "Built cross-cultural communication skills",
      "Solved real community problems",
    ],
  },
  {
    icon: GraduationCap,
    title: "AI Engineering Student",
    company: "Bangkok University",
    period: "2024 - Present",
    color: "#feca57",
    description: [
      "Received Tech Talent 100% Full Scholarship",
      "Majoring in AI Engineering & Data Science",
      "Active in competitions and innovation projects",
    ],
  },
];

const highlights = [
  { icon: Award, text: "Finalist PLC Competition Thailand 2024" },
  { icon: Award, text: "Finalist Gaskathon PTT 2024" },
  { icon: Star, text: "TESA Top Gun Rally 2025" },
  { icon: Heart, text: "Co-Project with Central Group" },
  { icon: Award, text: "2x Finalist LearnLab Innovation" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden" aria-label="Professional experience and career journey" aria-labelledby="experience-heading">
      {/* Subtle section overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#252542]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#48dbfb]/10 text-[#48dbfb] text-sm font-medium mb-4">
            🚀 My Journey
          </span>
          <h2 id="experience-heading" className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Experience & <span className="gradient-cool">Growth</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From competitions to collaborations, each step has helped me grow
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff6b6b] via-[#feca57] to-[#48dbfb] hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#252542] shadow-lg z-10 hidden md:block"
                  style={{ backgroundColor: exp.color }}
                />

                {/* Content card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/10 hover:border-[var(--exp-color)]/50 transition-all group"
                    style={{ "--exp-color": exp.color } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${exp.color}15` }}
                      >
                        <exp.icon className="w-6 h-6" style={{ color: exp.color }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-[var(--exp-color)] transition-colors text-white">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-white/50">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-xs text-[var(--exp-color)] font-medium mb-3">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                          <span style={{ color: exp.color }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-center text-sm text-white/50 mb-6">Competition Highlights & Milestones</p>
          <div className="flex flex-wrap justify-center gap-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a2e] border border-white/10 hover:border-[#feca57]/50 transition-all"
              >
                <item.icon className="w-4 h-4 text-[#feca57]" />
                <span className="text-sm text-white/70">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
