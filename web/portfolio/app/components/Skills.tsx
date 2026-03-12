"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Building Things",
    icon: "🛠️",
    skills: ["React & Next.js", "Express & Node", "Python & Django", "C/C++"],
    color: "#e85d4c",
  },
  {
    title: "Creating Experiences",
    icon: "🎨",
    skills: ["UI/UX Design", "Responsive Web", "Animation", "Design Thinking"],
    color: "#f4a261",
  },
  {
    title: "Solving Problems",
    icon: "🧩",
    skills: ["Machine Learning", "Computer Vision", "Data Analysis", "Algorithms"],
    color: "#2a9d8f",
  },
  {
    title: "Working Together",
    icon: "🤝",
    skills: ["Git & GitHub", "CI/CD", "Docker", "Team Leadership"],
    color: "#9b5de5",
  },
  {
    title: "Making Ideas Real",
    icon: "⚙️",
    skills: ["PLC Programming", "Robotics", "IoT Systems", "Hardware"],
    color: "#f15bb5",
  },
  {
    title: "Always Learning",
    icon: "📚",
    skills: ["Research", "Documentation", "Teaching", "Mentoring"],
    color: "#00bbf9",
  },
];

const badges = [
  { emoji: "🏆", label: "Super AI Engineer S5" },
  { emoji: "🎓", label: "Data Science Nanodegree" },
  { emoji: "🌟", label: "Tech Talent Scholar" },
  { emoji: "🚀", label: "TESA Top Gun 2025" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#f4a261]/10 text-[#f4a261] text-sm font-medium mb-4">
            🎯 Toolkit
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What I <span className="gradient-warm">Do</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Skills I&apos;ve learned along the way
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 rounded-3xl bg-[#faf8f5] border border-[#e5e5e5] hover:border-[var(--group-color)]/50 transition-all"
              style={{ "--group-color": group.color } as React.CSSProperties}
            >
              <div className="text-4xl mb-4">{group.icon}</div>
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: group.color }}
              >
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm bg-white border border-[#e5e5e5] text-foreground/70 hover:border-[var(--group-color)]/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-foreground/50 mb-6">Recognition & Certifications</p>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#faf8f5] border border-[#e5e5e5] hover:border-[#f4a261]/50 transition-all cursor-default"
              >
                <span className="text-xl">{badge.emoji}</span>
                <span className="text-sm font-medium text-foreground/80">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
