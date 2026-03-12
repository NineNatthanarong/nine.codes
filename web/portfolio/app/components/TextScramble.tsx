"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

interface TextScrambleProps {
  text: string;
  className?: string;
  scrambleOnLoad?: boolean;
  scrambleOnHover?: boolean;
  duration?: number;
}

export default function TextScramble({
  text,
  className = "",
  scrambleOnLoad = false,
  scrambleOnHover = true,
  duration = 800,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    const originalText = text;
    const steps = 10;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      const revealedLength = Math.floor(progress * originalText.length);
      
      let newText = "";
      for (let i = 0; i < originalText.length; i++) {
        if (i < revealedLength) {
          newText += originalText[i];
        } else if (originalText[i] === " ") {
          newText += " ";
        } else {
          newText += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      setDisplayText(newText);

      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayText(originalText);
        setIsScrambling(false);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [text, duration, isScrambling]);

  useEffect(() => {
    if (scrambleOnLoad) {
      scramble();
    }
  }, [scrambleOnLoad, scramble]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      onMouseEnter={scrambleOnHover ? scramble : undefined}
      animate={isScrambling ? { opacity: [1, 0.8, 1] } : {}}
      transition={{ duration: 0.1, repeat: isScrambling ? Infinity : 0 }}
    >
      {displayText}
    </motion.span>
  );
}
