"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  width: number;
  height: number;
  left: string;
  top: string;
  color: string;
  duration: number;
  delay: number;
}

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const colors = [
      "#ff6b6b",
      "#feca57",
      "#48dbfb",
      "#9b5de5",
      "#f15bb5",
      "#1dd1a1",
    ];

    const newParticles: Particle[] = [...Array(15)].map((_, i) => ({
      id: i,
      width: Math.random() * 3 + 2,
      height: Math.random() * 3 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: colors[i % 6],
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));

    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animated gradient blobs
  const blobs = [
    {
      id: 1,
      color: "rgba(155, 93, 229, 0.4)", // purple
      size: 600,
      x: "10%",
      y: "20%",
      delay: 0,
      duration: 20,
    },
    {
      id: 2,
      color: "rgba(241, 91, 181, 0.35)", // pink
      size: 500,
      x: "70%",
      y: "60%",
      delay: 2,
      duration: 25,
    },
    {
      id: 3,
      color: "rgba(72, 219, 251, 0.3)", // cyan
      size: 450,
      x: "50%",
      y: "10%",
      delay: 4,
      duration: 22,
    },
    {
      id: 4,
      color: "rgba(255, 107, 107, 0.35)", // coral
      size: 400,
      x: "80%",
      y: "30%",
      delay: 1,
      duration: 18,
    },
    {
      id: 5,
      color: "rgba(254, 202, 87, 0.25)", // yellow
      size: 350,
      x: "20%",
      y: "70%",
      delay: 3,
      duration: 24,
    },
    {
      id: 6,
      color: "rgba(29, 209, 161, 0.3)", // green
      size: 380,
      x: "60%",
      y: "80%",
      delay: 5,
      duration: 21,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Base gradient mesh */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(155, 93, 229, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(72, 219, 251, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 40% 80%, rgba(241, 91, 181, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Animated floating blobs */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            left: blob.x,
            top: blob.y,
          }}
          animate={{
            x: [0, 100, -50, 80, 0],
            y: [0, -80, 60, -30, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mouse-following interactive glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, rgba(155, 93, 229, 0.1) 30%, transparent 60%)`,
        }}
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
          mass: 0.5,
        }}
      />

      {/* Secondary mouse follower - smaller, faster */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-2xl"
        style={{
          background: `radial-gradient(circle, rgba(72, 219, 251, 0.2) 0%, transparent 60%)`,
        }}
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.3,
        }}
      />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating particles - smaller accent dots */}
      {mounted &&
        particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
              backgroundColor: particle.color,
              boxShadow: `0 0 8px ${particle.color}`,
            }}
            animate={{
              y: [0, -20, 20, 0],
              x: [0, 15, -15, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Aurora effect - horizontal light streaks */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`aurora-${i}`}
            className="absolute h-[2px] w-[40%]"
            style={{
              top: `${20 + i * 30}%`,
              left: "-40%",
              background: `linear-gradient(90deg, transparent, ${
                ["rgba(155, 93, 229, 0.4)", "rgba(72, 219, 251, 0.3)", "rgba(241, 91, 181, 0.35)"][i]
              }, transparent)`,
              filter: "blur(1px)",
            }}
            animate={{
              x: ["0%", "250%"],
            }}
            transition={{
              duration: 15 + i * 5,
              delay: i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
