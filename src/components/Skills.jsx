"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
    Sparkles,
    Cpu,
    GraduationCap,
    Layers,
    CheckCircle2,
} from "lucide-react";
import {
    skills,
    skillsStats,
    currentlyLearning,
    skillCategories,
} from "@/data/portfolioData";

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // Intersection observer hook for triggering stats countup once in viewport
    const { ref: statsRef, inView: statsInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Intersection observer for animating progress bars when section is visible
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Filter skills based on tab selection
    const filteredSkills = useMemo(() => {
        if (activeCategory === "All") return skills;
        return skills.filter((s) => s.category === activeCategory);
    }, [activeCategory]);

    // Framer Motion Container Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.1,
            },
        },
    };

    // Card Fade Up Variant
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
        },
    };

    return (
        <section
            id="skills"
            aria-label="Skills and Tech Stack Section"
            className="relative w-full py-20 lg:py-28 overflow-hidden"
            ref={sectionRef}
        >
            {/* Background Soft Lighting Gradients */}
            <div className="absolute inset-0 -z-10 pointer-events-none select-none">
                <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full" />
                <div className="absolute bottom-10 -right-32 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />
            </div>

            <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col gap-12 sm:gap-16">

                    {/* ========================================== */}
                    {/* SECTION HEADER                             */}
                    {/* ========================================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto space-y-3"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
                            <Cpu className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                                Technical Expertise
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                            Skills &{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                Technologies
                            </span>
                        </h2>
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                            A detailed breakdown of my technical stack, proficiency levels, and tools I use to craft digital experiences.
                        </p>
                    </motion.div>

                    {/* ========================================== */}
                    {/* 1. SKILLS STATISTICS BAR                  */}
                    {/* ========================================== */}
                    {/* <div
                        ref={statsRef}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
                    >
                        {skillsStats.map((stat, idx) => (
                            <div
                                key={stat.label}
                                className={`flex flex-col items-center text-center space-y-1 ${idx !== skillsStats.length - 1
                                        ? "lg:border-r lg:border-white/10"
                                        : ""
                                    }`}
                            >
                                <div className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center">
                                    {statsInView ? (
                                        <CountUp
                                            end={stat.count}
                                            duration={2.5}
                                            useEasing={true}
                                        />
                                    ) : (
                                        <span>0</span>
                                    )}
                                    <span className="text-purple-400">{stat.suffix}</span>
                                </div>
                                <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div> */}

                    {/* ========================================== */}
                    {/* 2. CATEGORY FILTER TABS                    */}
                    {/* ========================================== */}
                    <div className="flex items-center justify-center">
                        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md max-w-full overflow-x-auto">
                            {skillCategories.map((cat) => {
                                const isActive = activeCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${isActive
                                            ? "text-white shadow-lg"
                                            : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeCategoryTab"
                                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl -z-10"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* ========================================== */}
                    {/* 3. SKILLS GLASSMORPHISM GRID              */}
                    {/* ========================================== */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: 15 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
                        >
                            {filteredSkills.map((skill) => {
                                const IconComponent = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        variants={cardVariants}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="group relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:border-purple-500/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between gap-4 overflow-hidden"
                                    >
                                        {/* Hover Glow Accent */}
                                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-300 pointer-events-none" />

                                        {/* Card Top: Icon, Title & Level Badge */}
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:text-purple-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                                    <IconComponent className="w-6 h-6 text-2xl" />
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors">
                                                        {skill.name}
                                                    </h3>
                                                    <span className="text-xs text-zinc-400 font-medium">
                                                        {skill.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
                                                {skill.level}
                                            </span>
                                        </div>

                                        {/* Card Bottom: Animated Progress Bar & Percentage */}
                                        <div className="space-y-1.5 pt-2">
                                            <div className="flex items-center justify-between text-xs font-semibold">
                                                <span className="text-zinc-400">Proficiency</span>
                                                <span className="text-cyan-300">{skill.percentage}%</span>
                                            </div>

                                            {/* Outer Bar Track */}
                                            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden p-0.5 border border-white/5">
                                                {/* Animated Inner Bar */}
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{
                                                        width: sectionInView ? `${skill.percentage}%` : 0,
                                                    }}
                                                    transition={{
                                                        duration: 1.2,
                                                        ease: "easeOut",
                                                        delay: 0.2,
                                                    }}
                                                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {/* ========================================== */}
                    {/* 4. CURRENTLY LEARNING SECTION             */}
                    {/* ========================================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        <div className="space-y-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 font-semibold text-sm">
                                <GraduationCap className="w-4 h-4" />
                                <span>Continuous Growth</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">
                                Currently Learning & Exploring
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-400">
                                Technologies I am actively integrating into my development workflow.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
                            {currentlyLearning.map((item) => {
                                const IconComp = item.icon;
                                return (
                                    <div
                                        key={item.name}
                                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300 group"
                                    >
                                        <IconComp className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                                        <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                                            {item.name}
                                        </span>
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-medium">
                                            {item.level}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Skills;