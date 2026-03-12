"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Palette, Rocket, Users, MapPin, Sparkles, Camera } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import TiltCard from "./TiltCard";

const highlights = [
  {
    icon: Heart,
    title: "Passionate Creator",
    description: "I care about building things that matter. Every project gets my full attention and effort.",
    color: "#ff6b6b",
  },
  {
    icon: Palette,
    title: "Design Thinker",
    description: "I balance technical skills with design thinking. Good software should work well and look good.",
    color: "#feca57",
  },
  {
    icon: Rocket,
    title: "Lifelong Explorer",
    description: "I enjoy learning new things. Robotics, hackathons, and competitions keep me growing.",
    color: "#48dbfb",
  },
  {
    icon: Users,
    title: "Community Builder",
    description: "I led teams at BU ROBOTSTUDIO, mentored peers, and helped out at tech events.",
    color: "#9b5de5",
  },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for different layers
  const photoY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const floatingRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#252542]/30 to-[#1a1a2e]" />
      
      {/* Animated Background Orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#ff6b6b]/10 blur-3xl"
        style={{ y: floatingY, opacity: glowOpacity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#48dbfb]/10 blur-3xl"
        style={{ y: photoY, opacity: glowOpacity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#feca57]/10 text-[#feca57] text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            My Story
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            More Than Just <span className="gradient-warm">Code</span>
          </h2>
        </motion.div>

        {/* Main Parallax Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Parallax Photo Section */}
          <motion.div 
            className="relative h-[500px] lg:h-[600px]"
            style={{ y: photoY }}
          >
            {/* Floating Decorative Elements */}
            <motion.div
              className="absolute -top-4 -left-4 z-20"
              style={{ y: floatingY, rotate: floatingRotate }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff6b6b] to-[#feca57] flex items-center justify-center shadow-lg">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -right-4 z-20"
              style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 100]) }}
            >
              <div className="px-4 py-2 rounded-full bg-[#252542] border border-white/20 flex items-center gap-2 shadow-xl">
                <MapPin className="w-4 h-4 text-[#ff6b6b]" />
                <span className="text-sm text-white/80">Bangkok, Thailand</span>
              </div>
            </motion.div>

            {/* Photo Frame with Multiple Layers */}
            <div className="relative w-full h-full">
              {/* Back Frame Layer */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff6b6b]/30 to-[#48dbfb]/30"
                style={{ 
                  y: useTransform(scrollYProgress, [0, 1], [20, -20]),
                  scale: 1.05,
                }}
              />
              
              {/* Middle Frame Layer */}
              <motion.div
                className="absolute inset-2 rounded-3xl bg-[#252542]"
                style={{ 
                  y: useTransform(scrollYProgress, [0, 1], [10, -10]),
                }}
              />

              {/* Main Photo Container */}
              <motion.div
                className="absolute inset-4 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/photo-profile.jpg"
                  alt="Natthanarong Tiangjit (Nine) - AI Software Developer at Bangkok University"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 via-transparent to-transparent" />
                
                {/* Name Tag */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-white font-bold text-2xl">Natthanarong</p>
                  <p className="text-white/60 text-sm">Also known as &ldquo;Nine&rdquo;</p>
                </motion.div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#feca57]"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: i % 2 === 0 ? "-10%" : "110%",
                    y: useTransform(scrollYProgress, [0, 1], [0, -50 - i * 20]),
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Text Content with Parallax */}
          <motion.div style={{ y: textY }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/80 leading-relaxed mb-6"
            >
              I&apos;m a <span className="text-[#ff6b6b] font-semibold">third-year engineering student</span> at Bangkok University on a full scholarship. I enjoy working at the intersection of creativity and technology.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/60 leading-relaxed mb-8"
            >
              From leading robotics teams to winning AI competitions, I work across hardware and software. Each project teaches me something new and helps me grow as an engineer.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="flex gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: "∞", label: "Curiosity" },
                { value: "15+", label: "Projects" },
                { value: "7", label: "Robots Built" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold gradient-warm">{stat.value}</p>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard tiltStrength={6} glareEnabled={true}>
                <div className="group p-8 rounded-3xl bg-[#252542]/50 backdrop-blur-sm border border-white/10 hover:border-[var(--card-color)] transition-all duration-300 h-full"
                  style={{ "--card-color": item.color } as React.CSSProperties}
                >
                  <div className="flex items-start gap-5">
                    <div 
                      className="p-4 rounded-2xl transition-colors duration-300"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--card-color)] transition-colors text-white">
                        {item.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-[#ff6b6b]/10 via-[#feca57]/10 to-[#48dbfb]/10 border border-white/10">
            <p className="text-xl sm:text-2xl text-white/80 italic font-light">
              &ldquo;Building useful technology,
              <br />
              <span className="gradient-warm font-medium">one project at a time.&rdquo;</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
