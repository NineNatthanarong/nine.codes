"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import MagneticButton from "./MagneticButton";

const contactInfo = [
  { icon: Mail, label: "Email", value: "natthanarong.tian@gmail.com", href: "mailto:natthanarong.tian@gmail.com" },
  { icon: Phone, label: "Phone", value: "091 785 3400", href: "tel:+66917853400" },
  { icon: MapPin, label: "Location", value: "Bangkok, Thailand", href: "#" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/nine-codes", color: "#ffffff" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/natthanarong", color: "#48dbfb" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#1a1a2e] overflow-hidden" aria-label="Contact information and social links" aria-labelledby="contact-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#feca57]/10 blob -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff6b6b]/10 blob-2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#ff6b6b]/10 text-[#ff6b6b] text-sm font-medium mb-4">
            Let&apos;s Connect
          </span>
          <h2 id="contact-heading" className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to <span className="gradient-warm">Collaborate</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            If you&apos;re looking for an AI developer who can build real products, let&apos;s chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#252542] border border-white/10 hover:border-[#ff6b6b]/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#ff6b6b]/10 group-hover:bg-[#ff6b6b]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#ff6b6b]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm text-white/50 mb-4">Connect online</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    <MagneticButton
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-[#252542] border border-white/10 hover:border-[#feca57]/50 transition-all block"
                      strength={0.3}
                    >
                      <social.icon className="w-5 h-5" style={{ color: social.color }} />
                    </MagneticButton>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Availability Card */}
            <div className="p-6 rounded-2xl bg-[#252542] border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#1dd1a1] animate-pulse" />
                <span className="text-white/70">Currently Available</span>
              </div>
              <p className="text-white/50 text-sm mb-4">
                I&apos;m open to full-time roles, internships, and freelance work in AI development,
                web development, and robotics.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Full-time", "Internship", "Freelance", "Remote OK"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs text-white/60 bg-white/5 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-2xl bg-[#252542] border border-white/10">
              <p className="text-sm text-white/50 mb-3 uppercase tracking-wider">Languages</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Thai</span>
                  <span className="text-xs text-[#1dd1a1] px-2 py-1 rounded bg-[#1dd1a1]/10">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">English</span>
                  <span className="text-xs text-[#48dbfb] px-2 py-1 rounded bg-[#48dbfb]/10">~B2 (Speexx Test)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/50 text-sm">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
          <p className="text-white/30 text-xs mt-2">
            © {new Date().getFullYear()} Natthanarong Tiangjit. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
