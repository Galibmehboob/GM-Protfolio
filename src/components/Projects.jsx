"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FolderGit2,
    ExternalLink,

    ArrowRight,
    CheckCircle2,
    Clock,
} from "lucide-react";
import { projects } from "@/data/portfolioData";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    // Stagger Container Variants
    const containerVariants = useMemo(
        () => ({
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.08,
                },
            },
        }),
        []
    );

    // Card Reveal Motion
    const cardVariants = useMemo(
        () => ({
            hidden: { opacity: 0, y: 30 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                },
            },
        }),
        []
    );

    return (
        <section
            id="projects"
            aria-label="Featured Projects Section"
            className="relative w-full py-16 lg:py-24 overflow-hidden"
        >
            {/* Background Ambient Spheres */}
            <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full" />
                <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />
            </div>

            {/* Max Width Compressed for Compact Layout */}
            <div className="max-w-6xl w-full mx-auto px-5 sm:px-8">
                <div className="flex flex-col gap-10 sm:gap-14">

                    {/* ========================================== */}
                    {/* SECTION HEADER                             */}
                    {/* ========================================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-center max-w-2xl mx-auto space-y-3"
                    >
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl shadow-sm">
                            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
                            <span className="text-[11px] font-bold uppercase tracking-widest text-purple-300">
                                Portfolio Showcase
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                            Featured{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>

                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                            Real-world web applications built with scalable architecture, clean code, and modern UI engineering.
                        </p>
                    </motion.div>

                    {/* ========================================== */}
                    {/* PROJECTS CARDS GRID (COMPACT COMPOSITE)    */}
                    {/* ========================================== */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
                    >
                        {projects.map((project) => {
                            return (
                                <motion.article
                                    key={project.slug || project.title}
                                    variants={cardVariants}
                                    whileHover={{ y: -6 }}
                                    className="group relative rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-purple-500/40 transition-all duration-300 flex flex-col overflow-hidden h-full"
                                >
                                    {/* Subtle Shimmer Flare Effect on Hover */}
                                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none z-20" />

                                    {/* 1. COMPACT PROJECT IMAGE CONTAINER */}
                                    <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        />

                                        {/* Gradient Overlay Mask */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-300" />

                                        {/* Compact Status Badge */}
                                        <div className="absolute top-3 left-3 z-10">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border border-white/15 bg-black/60 backdrop-blur-md text-zinc-200">
                                                {project.status === "Completed" ? (
                                                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                                ) : (
                                                    <Clock className="w-3 h-3 text-amber-400" />
                                                )}
                                                {project.status || "Completed"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* 2. PROJECT CONTENT BODY */}
                                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow gap-5 relative z-10">
                                        <div className="space-y-3">
                                            {/* Title */}
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className="inline-block group/title"
                                            >
                                                <h3 className="text-lg sm:text-xl font-bold text-white group-hover/title:text-purple-300 transition-colors tracking-tight">
                                                    {project.title}
                                                </h3>
                                            </Link>

                                            {/* Description */}
                                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* Pill-Style Tech Badges */}
                                            {project.technologies && (
                                                <div className="flex flex-wrap gap-1.5 pt-1">
                                                    {project.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2.5 py-0.5 rounded-lg text-[10px] font-medium border border-white/10 bg-white/5 text-purple-200 group-hover:border-purple-500/30 transition-all duration-200"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* 3. ACTION BUTTONS & FOOTER */}
                                        <div className="flex items-center flex-wrap gap-2.5 pt-3 border-t border-white/10 mt-auto">
                                            {/* Live Demo Button */}
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white text-[11px] font-bold shadow-md shadow-purple-600/20 transition-all duration-200 hover:scale-102 active:scale-95"
                                                >
                                                    <ExternalLink className="w-3 h-3" />
                                                    <span>Live Demo</span>
                                                </a>
                                            )}

                                            {/* GitHub Button */}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white text-[11px] font-semibold transition-all duration-200 hover:scale-102 active:scale-95"
                                                >
                                                    <FaGithub className="w-3 h-3 text-zinc-300" />
                                                    <span>Code</span>
                                                </a>
                                            )}

                                            {/* Case Study Link */}
                                            {project.slug && (
                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="inline-flex items-center gap-1 px-2.5 py-2 ml-auto text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                                                >
                                                    <span>Case Study</span>
                                                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-200" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Projects;