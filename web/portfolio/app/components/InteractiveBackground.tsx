"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function InteractiveBackground() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [mounted, setMounted] = useState(false);
  
  // Mouse position with spring physics for smooth following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: 0,
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16162a] to-[#0d0d1a]" />
      
      {/* Animated gradient mesh layers */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 30%, rgba(255,107,107,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(72,219,251,0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 30% 50%, rgba(155,93,229,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 20%, rgba(254,202,87,0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 80%, rgba(29,209,161,0.15) 0%, transparent 50%), radial-gradient(ellipse at 20% 40%, rgba(241,91,181,0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 30%, rgba(255,107,107,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(72,219,251,0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Mouse-following gradient orb 1 - Primary */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(255,107,107,0.12) 0%, rgba(155,93,229,0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Mouse-following gradient orb 2 - Secondary (delayed) */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-30%",
          translateY: "-70%",
          background: "radial-gradient(circle, rgba(72,219,251,0.1) 0%, rgba(29,209,161,0.06) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating ambient orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-20"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(255,107,107,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[10%] w-[450px] h-[450px] rounded-full opacity-20"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(72,219,251,0.25) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <motion.div
        className="absolute top-[30%] right-[30%] w-[350px] h-[350px] rounded-full opacity-15"
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.4, 0.7, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(155,93,229,0.3) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <motion.div
        className="absolute bottom-[20%] left-[20%] w-[300px] h-[300px] rounded-full opacity-15"
        animate={{
          x: [0, -40, 80, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.5, 0.6, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(254,202,87,0.25) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />

      <motion.div
        className="absolute top-[80%] left-[60%] w-[380px] h-[380px] rounded-full opacity-15"
        animate={{
          x: [0, 70, -30, 0],
          y: [0, -60, 50, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(241,91,181,0.2) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      {/* Animated gradient waves */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(255,107,107,0.1) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: "linear-gradient(-45deg, transparent 30%, rgba(72,219,251,0.1) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["100% 0%", "0% 100%", "100% 0%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Click ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ 
            width: 600, 
            height: 600, 
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,107,107,0.2) 0%, rgba(155,93,229,0.1) 30%, transparent 70%)",
            }}
          />
        </motion.div>
      ))}

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
        }}
      />
    </div>
  );
}
