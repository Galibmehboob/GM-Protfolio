"use client";

import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { LogoGithub, LogoLinkedin, LogoFacebook, Envelope } from '@gravity-ui/icons';
import { ArrowRight, ChevronDown, Download } from "lucide-react";


// Social Links Configuration
const SOCIAL_LINKS = [
    {
        name: "GitHub",
        href: "https://github.com/Galibmehboob",
        icon: LogoGithub,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/galib-mehboob/",
        icon: LogoLinkedin,
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/heygalib.4U/",
        icon: LogoFacebook,
    },
    {
        name: "Email",
        href: "mailto:galibmehboob@gmail.com",
        icon: Envelope,
    },
];

const Hero = () => {
    // Smooth Scroll Handler to navigate to sections without full page reload
    const handleScrollTo = useCallback((sectionId) => {
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    // Parent Framer Motion Stagger Variants
    const containerVariants = useMemo(
        () => ({
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.1,
                },
            },
        }),
        []
    );

    // Child Motion Variants for Fade Up
    const fadeUpVariants = useMemo(
        () => ({
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: [0.215, 0.61, 0.355, 1],
                },
            },
        }),
        []
    );

    return (
        <section
            id="home"
            aria-label="Hero Section"
            className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
        >
            {/* ========================================== */}
            {/* BACKGROUND LAYER: Gradients, Glow & Grid   */}
            {/* ========================================== */}
            <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
                {/* Top-Left Purple Glow Spot */}
                <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-purple-600/20 dark:bg-purple-500/15 blur-[120px] rounded-full" />

                {/* Bottom-Right Cyan Glow Spot */}
                <div className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-cyan-500/20 dark:bg-cyan-500/15 blur-[120px] rounded-full" />

                {/* Grid Background Pattern with Center Fade Mask */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 dark:opacity-25" />
            </div>

            {/* ========================================== */}
            {/* MAIN CONTENT GRID                         */}
            {/* ========================================== */}
            <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* LEFT SIDE: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col items-start gap-5 text-left order-2 lg:order-1"
                    >
                        {/* Availability Badge */}
                        <motion.div variants={fadeUpVariants}>
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md shadow-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                                </span>
                                <span className="text-xs sm:text-sm font-medium text-zinc-200">
                                    Available for Remote Full Stack Developer roles.
                                </span>
                            </div>
                        </motion.div>

                        {/* Greeting & Main Name Heading */}
                        <motion.div variants={fadeUpVariants} className="space-y-1">
                            <span className="text-lg sm:text-xl font-medium text-zinc-400 tracking-wide">
                                Hey, I'm
                            </span>
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
                                <span className="text-zinc-400">G</span>
                                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                    alib
                                </span>{" "}
                                <span className="text-zinc-400">M</span>
                                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                    ehboob
                                </span>
                            </h1>
                        </motion.div>

                        {/* Animated Typewriter Subheading */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 min-h-[38px] flex items-center"
                        >
                            <span>I am a </span>
                            <span className="ml-2 text-purple-300 border-b-2 border-cyan-400/80 pb-0.5">
                                <Typewriter
                                    words={[
                                        "Full Stack Developer",
                                        "MERN Stack Developer",
                                        "Next.js Developer",
                                        "React Developer",
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </motion.div>

                        {/* Concise Concise Introduction */}
                        <motion.p
                            variants={fadeUpVariants}
                            className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl font-normal"
                        >
                            Building modern, animated, and scalable web applications using the MERN Stack and Next.js, focused on clean architecture and high-performance UI/UX experiences.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto"
                        >
                            {/* Primary: Download Resume */}
                            <a
                                href="/resume.pdf"
                                download="Galib_Mehboob_Resume.pdf"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download Resume</span>
                            </a>

                            {/* Secondary: View Projects */}
                            <button
                                type="button"
                                onClick={() => handleScrollTo("projects")}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-zinc-200 border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                            >
                                <span>View Projects</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            variants={fadeUpVariants}
                            className="pt-4 flex items-center gap-3"
                        >
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mr-1">
                                Connect
                            </span>
                            {SOCIAL_LINKS.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit Galib's ${item.name}`}
                                        className="p-3 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 backdrop-blur-md transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE: Profile Photo Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        {/* Smooth Floating Wrapper */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut",
                            }}
                            className="relative group"
                        >
                            {/* Outer Glow Halo */}
                            <div className="absolute -inset-1.5 rounded-[42px] bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 opacity-40 blur-xl group-hover:opacity-65 transition duration-700" />

                            {/* Gradient Border Frame */}
                            <div className="relative p-1.5 rounded-[40px] bg-gradient-to-br from-white/20 via-purple-500/20 to-cyan-500/20 border border-white/20 backdrop-blur-xl shadow-2xl">
                                {/* Profile Image Container */}
                                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-[34px] overflow-hidden bg-zinc-900 border border-white/10">
                                    <Image
                                        src="/profile.png"
                                        alt="Galib Mehboob - Full Stack & MERN Developer"
                                        fill
                                        sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 380px"
                                        priority
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Animated Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 cursor-pointer"
                onClick={() => handleScrollTo("projects")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleScrollTo("projects")}
                aria-label="Scroll down to projects section"
            >
                <span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                >
                    <ChevronDown className="w-4 h-4 text-cyan-400" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;