"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
    User,
    MapPin,
    GraduationCap,
    Briefcase,
    Globe,
    CheckCircle2,
    Layout,
    Code2,
    Sparkles,
    Trophy,
    Music,
    Compass,
    Coffee,
    Camera,
    Gamepad2,
    Heart,
    Compass as JourneyIcon,
    Flame,
} from "lucide-react";
import { ABOUT_DATA } from "@/data/portfolioData";

// Icon Map for dynamic lookup based on string keys
const ICON_MAP = {
    // Quick Info
    Name: User,
    Location: MapPin,
    Education: GraduationCap,
    "Experience Level": Briefcase,
    Languages: Globe,
    Freelance: CheckCircle2,
    // What I Love
    Layout: Layout,
    Code2: Code2,
    Sparkles: Sparkles,
    // Interests
    Trophy: Trophy,
    Music: Music,
    Compass: Compass,
    Coffee: Coffee,
    Camera: Camera,
    Gamepad2: Gamepad2,
};

const About = () => {
    // Motion Container Stagger Configuration
    const containerVariants = useMemo(
        () => ({
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.05,
                },
            },
        }),
        []
    );

    // Motion Child Fade Up Configuration
    const itemVariants = useMemo(
        () => ({
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                },
            },
        }),
        []
    );

    return (
        <section
            id="about"
            aria-label="About Me Section"
            className="relative w-full py-20 lg:py-28 overflow-hidden"
        >
            {/* Background Layer: Soft Ambient Lighting */}
            <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
                <div className="absolute top-1/4 -right-28 w-[450px] h-[450px] bg-purple-600/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-10 -left-28 w-[400px] h-[400px] bg-cyan-500/10 blur-[130px] rounded-full" />
            </div>

            <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="flex flex-col gap-16 sm:gap-20"
                >
                    {/* ========================================== */}
                    {/* SECTION HEADER                             */}
                    {/* ========================================== */}
                    <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-3">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                                Get To Know Me
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                            About{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                Me
                            </span>
                        </h2>
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                            Transforming ideas into polished digital realities with clean code and modern design.
                        </p>
                    </motion.div>

                    {/* ========================================== */}
                    {/* 1. STORYTELLING & QUICK INFO GRID          */}
                    {/* ========================================== */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                        {/* Story & Journey Left Column */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-7 flex flex-col gap-6 p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                            {/* Bio Story */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-purple-400 font-semibold text-lg">
                                    <User className="w-5 h-5" />
                                    <h3>Who I Am</h3>
                                </div>
                                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base border-l-2 border-purple-500/60 pl-4">
                                    I believe every digital experience should be intuitive, engaging, and built to deliver real results. I specialize in building responsive, scalable web applications using React, Next.js, Node.js, Express, and MongoDB.
                                </p>
                                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base pl-4">
                                    From interactive dashboards to dynamic full-stack platforms, my focus remains on writing clean, maintainable code with exceptional performance across all devices.
                                </p>
                            </div>

                            <div className="h-px w-full bg-white/10 my-1" />

                            {/* My Journey */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-lg">
                                    <JourneyIcon className="w-5 h-5" />
                                    <h3>My Journey</h3>
                                </div>
                                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                                    My programming path started with curiosity about how complex websites operate under the hood. What began as experimenting with HTML and JavaScript evolved into a dedicated passion for engineering scalable web applications. I thrive on continuous growth and adapting to modern web technologies.
                                </p>
                            </div>
                        </motion.div>

                        {/* Quick Information Card Right Column */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <Flame className="w-5 h-5 text-purple-400" />
                                        Quick Reference
                                    </h3>
                                    <span className="text-xs px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium">
                                        Verified
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {ABOUT_DATA.quickInfo.map((info) => {
                                        const IconComp = ICON_MAP[info.label] || User;
                                        return (
                                            <div
                                                key={info.label}
                                                className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-200"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                                        <IconComp className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                                                        {info.label}
                                                    </span>
                                                </div>
                                                <span className="text-xs sm:text-sm text-zinc-100 font-semibold text-right">
                                                    {info.value}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ========================================== */}
                    {/* 2. ANIMATED STATISTICS BAR                 */}
                    {/* ========================================== */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
                    >
                        {ABOUT_DATA.stats.map((stat, idx) => (
                            <div
                                key={stat.label}
                                className={`flex flex-col items-center text-center space-y-1 ${idx !== ABOUT_DATA.stats.length - 1
                                        ? "lg:border-r lg:border-white/10"
                                        : ""
                                    }`}
                            >
                                <div className="text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center">
                                    <CountUp
                                        end={stat.count}
                                        duration={2.5}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                    <span className="text-cyan-400">{stat.suffix}</span>
                                </div>
                                <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* ========================================== */}
                    {/* 3. WHAT I LOVE CARDS                       */}
                    {/* ========================================== */}
                    <div className="space-y-6">
                        <motion.div variants={itemVariants} className="flex items-center gap-2">
                            <Heart className="w-5 h-5 text-purple-400" />
                            <h3 className="text-xl sm:text-2xl font-bold text-white">What I Love</h3>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {ABOUT_DATA.whatILove.map((item) => {
                                const IconComp = ICON_MAP[item.iconName] || Sparkles;
                                return (
                                    <motion.div
                                        key={item.title}
                                        variants={itemVariants}
                                        whileHover={{ y: -6 }}
                                        className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col gap-4 group"
                                    >
                                        <div className="p-3 w-fit rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                            <IconComp className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ========================================== */}
                    {/* 4. PERSONAL INTERESTS                      */}
                    {/* ========================================== */}
                    <div className="space-y-6">
                        <motion.div variants={itemVariants} className="flex items-center gap-2">
                            <Compass className="w-5 h-5 text-cyan-400" />
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                                Personal Interests
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
                        >
                            {ABOUT_DATA.interests.map((interest) => {
                                const IconComp = ICON_MAP[interest.iconName] || Sparkles;
                                return (
                                    <div
                                        key={interest.name}
                                        className="flex flex-col items-center justify-center p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-500/40 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 group cursor-default"
                                    >
                                        <div className="p-2.5 rounded-full bg-white/5 text-zinc-300 group-hover:text-cyan-400 transition-colors mb-2">
                                            <IconComp className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs sm:text-sm font-semibold text-zinc-300 group-hover:text-white">
                                            {interest.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;