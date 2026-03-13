"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Sparkles, Zap } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const navItems = [
  { name: "Projects", href: "#projects", icon: Terminal },
  { name: "Experience", href: "#experience", icon: Zap },
  { name: "Contact", href: "#contact", icon: Sparkles },
];

interface MagneticLinkProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  "aria-label"?: string;
}

function MagneticLink({ children, className, href, onClick, "aria-label": ariaLabel }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
      >
        <nav className="max-w-7xl mx-auto" aria-label="Main navigation">
          <div className={`flex items-center justify-between h-14 px-2 rounded-2xl transition-all duration-500 ${
            isScrolled 
              ? "bg-[#1a1a2e]/90 backdrop-blur-xl shadow-2xl shadow-black/20 border border-white/10" 
              : "bg-transparent"
          }`}>
            {/* Animated Logo */}
            <MagneticLink
              href="#"
              className="relative group px-3 py-2"
              aria-label="Nine - Home"
            >
              <motion.div
                className="relative flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="text-2xl font-bold gradient-warm"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255,107,107,0.3)",
                      "0 0 40px rgba(255,107,107,0.6)",
                      "0 0 20px rgba(255,107,107,0.3)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  nine.
                </motion.span>
                <motion.span
                  className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-[#ff6b6b]"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </MagneticLink>

            {/* Desktop Navigation - Floating Pill */}
            <div className="hidden md:flex items-center">
              <motion.div 
                className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/5 border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.replace("#", "");
                  
                  return (
                    <MagneticLink
                      key={item.name}
                      href={item.href}
                      className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors group"
                    >
                      <span className={`relative z-10 flex items-center gap-2 ${
                        isActive ? "text-white" : "text-white/60 group-hover:text-white"
                      }`}>
                        <Icon size={14} className={`transition-transform duration-300 ${
                          isActive ? "scale-110" : "group-hover:scale-110"
                        }`} />
                        {item.name}
                      </span>
                      
                      {/* Active/ Hover Indicator */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            layoutId="nav-indicator"
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff6b6b]/20 to-[#feca57]/20 border border-[#ff6b6b]/30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </AnimatePresence>
                      
                      {/* Hover Glow */}
                      <motion.span
                        className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </MagneticLink>
                  );
                })}
              </motion.div>

              {/* CTA Button */}
              <MagneticLink
                href="#contact"
                className="ml-4 relative group"
              >
                <motion.span
                  className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#feca57] text-white text-sm font-semibold shadow-lg shadow-[#ff6b6b]/25 overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255,107,107,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated gradient background */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#feca57] to-[#ff6b6b]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Let&apos;s Talk</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </MagneticLink>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative p-3 rounded-xl bg-white/5 text-white border border-white/10 overflow-hidden"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            aria-hidden={!isOpen}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#1a1a2e]/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.nav
              className="absolute top-20 left-4 right-4 p-6 rounded-3xl bg-[#252542]/90 border border-white/10 shadow-2xl"
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              aria-label="Mobile navigation"
            >
              <ul className="space-y-2" role="list">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        className="flex items-center gap-4 px-4 py-4 rounded-2xl text-lg text-white/70 hover:text-white hover:bg-white/5 transition-all group"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="p-2 rounded-xl bg-gradient-to-br from-[#ff6b6b]/20 to-[#9b5de5]/20 group-hover:from-[#ff6b6b]/40 group-hover:to-[#9b5de5]/40 transition-all">
                          <Icon size={20} className="text-[#ff6b6b]" />
                        </span>
                        <span className="font-medium">{item.name}</span>
                        <motion.span
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
              
              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                className="flex items-center justify-center gap-2 mt-4 px-4 py-4 rounded-2xl bg-gradient-to-r from-[#ff6b6b] to-[#feca57] text-white font-semibold"
                onClick={() => setIsOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Talk
                <span>→</span>
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
