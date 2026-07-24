"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Compass, Calendar, Award, Sparkles } from "lucide-react";
import { educationTimeline, programmingJourney } from "@/data/portfolioData";

const Education = () => {
    const [activeTab, setActiveTab] = useState("education");

    // Container Stagger Variants
    const containerVariants = useMemo(
        () => ({
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.05,
                },
            },
        }),
        []
    );

    // Timeline Item Fade Up Variants
    const itemVariants = useMemo(
        () => ({
            hidden: { opacity: 0, y: 30 },
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
            id="education"
            aria-label="Education and Journey Section"
            className="relative w-full py-20 lg:py-28 overflow-hidden"
        >
            {/* Ambient Lighting Background */}
            <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
                <div className="absolute top-1/3 -right-28 w-[400px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full" />
                <div className="absolute bottom-10 -left-28 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />
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
                            <GraduationCap className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                                Qualifications & Roadmap
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                            Education &{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                Journey
                            </span>
                        </h2>
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                            My academic background and continuous self-driven software engineering timeline.
                        </p>
                    </motion.div>

                    {/* ========================================== */}
                    {/* TAB SWITCHER                               */}
                    {/* ========================================== */}
                    <div className="flex justify-center">
                        <div className="flex items-center gap-2 p-1.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                            <button
                                onClick={() => setActiveTab("education")}
                                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none ${activeTab === "education"
                                        ? "text-white shadow-lg"
                                        : "text-zinc-400 hover:text-zinc-200"
                                    }`}
                            >
                                {activeTab === "education" && (
                                    <motion.div
                                        layoutId="activeTimelineTab"
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <GraduationCap className="w-4 h-4" />
                                <span>Education</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("journey")}
                                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none ${activeTab === "journey"
                                        ? "text-white shadow-lg"
                                        : "text-zinc-400 hover:text-zinc-200"
                                    }`}
                            >
                                {activeTab === "journey" && (
                                    <motion.div
                                        layoutId="activeTimelineTab"
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <Compass className="w-4 h-4" />
                                <span>Programming Journey</span>
                            </button>
                        </div>
                    </div>

                    {/* ========================================== */}
                    {/* TIMELINE CONTENT                           */}
                    {/* ========================================== */}
                    <AnimatePresence mode="wait">
                        {activeTab === "education" ? (
                            /* ACADEMIC EDUCATION TIMELINE */
                            <motion.div
                                key="education-timeline"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, y: 15 }}
                                className="relative max-w-4xl mx-auto w-full"
                            >
                                {/* Vertical Center Gradient Line */}
                                <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent sm:-translate-x-1/2" />

                                <div className="space-y-8 sm:space-y-12">
                                    {educationTimeline.map((item, idx) => {
                                        const IconComp = item.icon || GraduationCap;
                                        const isEven = idx % 2 === 0;

                                        return (
                                            <motion.div
                                                key={item.degree}
                                                variants={itemVariants}
                                                className={`relative flex flex-col sm:flex-row items-start ${isEven ? "sm:flex-row-reverse" : ""
                                                    }`}
                                            >
                                                {/* Timeline Center Node Icon */}
                                                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950 border-2 border-purple-400 text-purple-300 shadow-lg shadow-purple-500/20 z-10">
                                                    <IconComp className="w-4 h-4" />
                                                </div>

                                                {/* Card Content Container */}
                                                <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-8 w-full">
                                                    <div className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:border-purple-500/40 hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden">
                                                        {/* Radial Ambient Glow */}
                                                        <div className="absolute -top-12 -right-12 w-28 h-28 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-300 pointer-events-none" />

                                                        <div className="space-y-3">
                                                            {/* Duration Badge & Status */}
                                                            <div className="flex items-center justify-between gap-2">
                                                                <div className="flex items-center gap-1.5 text-xs text-purple-300 font-semibold px-2.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
                                                                    <Calendar className="w-3.5 h-3.5" />
                                                                    <span>{item.duration}</span>
                                                                </div>
                                                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                                                                    {item.status}
                                                                </span>
                                                            </div>

                                                            {/* Degree Title & Institution */}
                                                            <div>
                                                                <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                                                                    {item.degree}
                                                                </h3>
                                                                <p className="text-xs sm:text-sm font-medium text-cyan-400">
                                                                    {item.institution}
                                                                </p>
                                                            </div>

                                                            {/* Description */}
                                                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                                                                {item.description}
                                                            </p>

                                                            {/* Result/CGPA if present */}
                                                            {item.result && (
                                                                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                                                                    <Award className="w-4 h-4" />
                                                                    <span>{item.result}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ) : (
                            /* PROGRAMMING JOURNEY TIMELINE */
                            <motion.div
                                key="journey-timeline"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, y: 15 }}
                                className="relative max-w-4xl mx-auto w-full"
                            >
                                {/* Vertical Center Gradient Line */}
                                <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent sm:-translate-x-1/2" />

                                <div className="space-y-8 sm:space-y-12">
                                    {programmingJourney.map((step, idx) => {
                                        const IconComp = step.icon || Sparkles;
                                        const isEven = idx % 2 === 0;

                                        return (
                                            <motion.div
                                                key={step.title}
                                                variants={itemVariants}
                                                className={`relative flex flex-col sm:flex-row items-start ${isEven ? "sm:flex-row-reverse" : ""
                                                    }`}
                                            >
                                                {/* Timeline Center Node Icon */}
                                                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950 border-2 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/20 z-10">
                                                    <IconComp className="w-4 h-4" />
                                                </div>

                                                {/* Card Content Container */}
                                                <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-8 w-full">
                                                    <div className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:border-cyan-500/40 hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden">
                                                        {/* Radial Ambient Glow */}
                                                        <div className="absolute -top-12 -right-12 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all duration-300 pointer-events-none" />

                                                        <div className="space-y-3">
                                                            {/* Year Badge */}
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-xs font-bold text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10">
                                                                    {step.year}
                                                                </span>
                                                            </div>

                                                            {/* Milestone Title */}
                                                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                                                                {step.title}
                                                            </h3>

                                                            {/* Milestone Description */}
                                                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                                                                {step.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
};

export default Education;