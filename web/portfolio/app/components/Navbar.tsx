"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#e5e5e5]/50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="text-2xl font-bold gradient-warm"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Nine - Home"
          >
            nine.
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  className="px-4 py-2 rounded-full text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
            <li>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-5 py-2 rounded-full bg-[#ff6b6b] text-white text-sm font-medium shadow-lg shadow-[#ff6b6b]/30 hover:shadow-[#ff6b6b]/50 transition-shadow"
              >
                Let's Talk
              </motion.a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl bg-white/5 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        id="mobile-menu"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden glass border-t border-white/10"
        aria-hidden={!isOpen}
      >
        <nav className="px-4 py-4" aria-label="Mobile navigation">
          <ul className="space-y-2" role="list">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.header>
  );
}
