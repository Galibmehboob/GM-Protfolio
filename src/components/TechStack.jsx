"use client";

import React, { useMemo } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Layers, Flame } from "lucide-react";
import {
    marqueeRow1,
    marqueeRow2,
    favoriteStack,
} from "@/data/portfolioData";

const TechStack = () => {
    // Motion Container Config
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

    // Motion Card Fade Up Config
    const itemVariants = useMemo(
        () => ({
            hidden: { opacity: 0, y: 25 },
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
            id="techstack"
            aria-label="Tech Stack Showcase"
            className="relative w-full py-20 lg:py-28 overflow-hidden"
        >
            {/* Background Soft Lighting Gradients */}
            <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
                <div className="absolute top-1/4 -right-28 w-[400px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full" />
                <div className="absolute bottom-10 -left-28 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />
            </div>

            <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col gap-16 sm:gap-20">

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
                            <Layers className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                                Tools & Technologies
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                            Tech{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                Stack
                            </span>
                        </h2>
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                            Technologies I use to build modern, performant, and scalable web applications.
                        </p>
                    </motion.div>

                    {/* ========================================== */}
                    {/* 1. INFINITE MARQUEE ROWS                   */}
                    {/* ========================================== */}
                    <div className="relative w-full flex flex-col gap-6 py-4">

                        {/* Left & Right Linear Gradient Blur Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                        {/* Top Row: Moves Left */}
                        <Marquee
                            direction="left"
                            speed={40}
                            pauseOnHover={true}
                            gradient={false}
                            className="py-2"
                        >
                            <div className="flex items-center gap-5 pr-5">
                                {marqueeRow1.map((tech) => {
                                    const IconComp = tech.icon;
                                    return (
                                        <div
                                            key={tech.name}
                                            className="group flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                        >
                                            <div className="p-2.5 rounded-xl bg-white/5 text-cyan-400 group-hover:text-purple-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                                <IconComp className="w-6 h-6" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-white group-hover:text-purple-200 transition-colors">
                                                    {tech.name}
                                                </span>
                                                <span className="text-[11px] text-zinc-400 font-medium">
                                                    {tech.desc}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </Marquee>

                        {/* Bottom Row: Moves Right */}
                        <Marquee
                            direction="right"
                            speed={35}
                            pauseOnHover={true}
                            gradient={false}
                            className="py-2"
                        >
                            <div className="flex items-center gap-5 pr-5">
                                {marqueeRow2.map((tech) => {
                                    const IconComp = tech.icon;
                                    return (
                                        <div
                                            key={tech.name}
                                            className="group flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                        >
                                            <div className="p-2.5 rounded-xl bg-white/5 text-purple-400 group-hover:text-cyan-300 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                                                <IconComp className="w-6 h-6" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                                                    {tech.name}
                                                </span>
                                                <span className="text-[11px] text-zinc-400 font-medium">
                                                    {tech.desc}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </Marquee>
                    </div>

                    {/* ========================================== */}
                    {/* 2. FEATURED "MY FAVORITE STACK"           */}
                    {/* ========================================== */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-2.5">
                                <Flame className="w-5 h-5 text-purple-400" />
                                <h3 className="text-xl sm:text-2xl font-bold text-white">
                                    My Favorite Stack
                                </h3>
                            </div>
                            <span className="text-xs text-zinc-400 font-medium hidden sm:block">
                                Core Production Weapons
                            </span>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {favoriteStack.map((item) => {
                                const IconComp = item.icon;
                                return (
                                    <motion.div
                                        key={item.name}
                                        variants={itemVariants}
                                        whileHover={{ y: -6, scale: 1.02 }}
                                        className="group relative p-6 sm:p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:border-purple-500/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between gap-6 overflow-hidden"
                                    >
                                        {/* Radial Glow Highlight */}
                                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/25 transition-all duration-300 pointer-events-none" />

                                        <div className="space-y-4">
                                            {/* Card Top: Icon & Badge */}
                                            <div className="flex items-center justify-between">
                                                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                                    <IconComp className="w-7 h-7" />
                                                </div>
                                                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
                                                    {item.badge}
                                                </span>
                                            </div>

                                            {/* Title & Role */}
                                            <div>
                                                <h4 className="text-xl font-extrabold text-white group-hover:text-purple-200 transition-colors">
                                                    {item.name}
                                                </h4>
                                                <span className="text-xs text-purple-400 font-medium">
                                                    {item.role}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Bottom Accent Line */}
                                        <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden group-hover:bg-purple-500/30 transition-colors">
                                            <div className="w-0 group-hover:w-full h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechStack;