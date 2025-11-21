"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, MessageCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20
        }
    },
} as const;

const letterContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
} as const;

const letter = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 15
        }
    },
} as const;

const links = [
    {
        name: "Instagram",
        handle: "@n_nine.e",
        url: "https://instagram.com/n_nine.e",
        icon: Instagram,
        color: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
        name: "Line",
        handle: "ninetop",
        url: "https://line.me/ti/p/~ninetop",
        icon: MessageCircle,
        color: "from-green-400 to-green-600",
    },
    {
        name: "LinkedIn",
        handle: "Natthanarong Tiangjit",
        url: "https://www.linkedin.com/in/natthanarong-tiangjit/",
        icon: Linkedin,
        color: "from-blue-500 to-blue-700",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen w-full bg-neutral-950 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full max-w-md z-10 flex flex-col gap-8"
            >
                {/* Header / Profile Section */}
                <motion.div variants={item} className="text-center space-y-2 mb-8">
                    <motion.h1
                        variants={letterContainer}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 pb-2"
                    >
                        <div className="flex flex-col items-center">
                            <div className="flex flex-wrap justify-center">
                                {Array.from("Natthanarong").map((char, i) => (
                                    <motion.span key={`first-${i}`} variants={letter} className="inline-block">
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex flex-wrap justify-center">
                                {Array.from("Tiangjit").map((char, i) => (
                                    <motion.span key={`last-${i}`} variants={letter} className="inline-block">
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.h1>
                    <p className="text-neutral-400 text-lg font-light tracking-wide">AI Software Developer</p>
                </motion.div>

                {/* Links Section */}
                <div className="space-y-4">
                    {links.map((link) => (
                        <motion.div key={link.name} variants={item}>
                            <Link
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-between p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:bg-neutral-800/50 backdrop-blur-sm overflow-hidden"
                            >
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${link.color}`} />

                                <div className="flex items-center gap-4 relative z-10">
                                    <div className={`p-2 rounded-xl bg-gradient-to-br ${link.color} text-white shadow-lg`}>
                                        <link.icon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-medium text-neutral-200 group-hover:text-white transition-colors">
                                            {link.name}
                                        </span>
                                        <span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
                                            {link.handle}
                                        </span>
                                    </div>
                                </div>

                                <ExternalLink size={16} className="text-neutral-600 group-hover:text-neutral-400 transition-colors relative z-10" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div variants={item} className="text-center mt-8">
                    <p className="text-xs text-neutral-600">
                        © {new Date().getFullYear()} nine.codes
                    </p>
                </motion.div>
            </motion.div>
        </main>
    );
}
