"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";
import { BiLogoTwitter } from "react-icons/bi";
import { ArrowUp, Heart, Mail, Sparkles } from "lucide-react";


const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/Galibmehboob",
        icon: FaGithub,
        hoverColor: "hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/galib-mehboob/",
        icon: LogoLinkedin,
        hoverColor: "hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10",
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/heygalib.4U/",
        icon: LogoFacebook,
        hoverColor: "hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10",
    },
    {
        name: "Twitter / X",
        href: "https://x.com/GalibMehboob",
        icon: BiLogoTwitter,
        hoverColor: "hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-400/10",
    },
    {
        name: "Email",
        href: "mailto:galibmehboob@gmail.com",
        icon: Mail,
        hoverColor: "hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10",
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative w-full border-t border-white/10 bg-zinc-950/80 backdrop-blur-2xl pt-16 pb-10 overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-purple-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-10 w-[300px] h-[150px] bg-cyan-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-6xl w-full mx-auto px-5 sm:px-8">
                {/* TOP / MAIN FOOTER CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">

                    {/* BRAND LOGO & DESCRIPTION (5 Cols) */}
                    <div className="md:col-span-5 space-y-4 text-center md:text-left">
                        <Link href="/" className="inline-block group">
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <Image
                                    src="/logo.png"
                                    alt="Galib Mehboob Logo"
                                    width={110}
                                    height={110}
                                    sizes="110px"
                                    priority
                                    className="object-contain filter group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-300"
                                />
                            </div>
                        </Link>

                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto md:mx-0">
                            Frontend Engineer & UI/UX Designer crafting high-performance, interactive, and visually stunning web applications with modern architecture.
                        </p>
                    </div>

                    {/* QUICK NAVIGATION LINKS (4 Cols) */}
                    <div className="md:col-span-4 space-y-3 text-center md:text-left">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-300">
                            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                            <span>Quick Navigation</span>
                        </div>

                        <ul className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2.5 pt-1">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 relative group py-1"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SOCIAL MEDIA LINKS (3 Cols) */}
                    <div className="md:col-span-3 space-y-3 text-center md:text-right flex flex-col items-center md:items-end">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                            Connect With Me
                        </h4>

                        <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-end pt-1">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-2.5 rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 shadow-md ${social.hoverColor}`}
                                    >
                                        <Icon className="w-4 h-4" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* BOTTOM SUB-FOOTER */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    {/* COPYRIGHT */}
                    <p className="text-xs text-zinc-400 tracking-wide">
                        © {currentYear} <span className="text-zinc-200 font-semibold">GALIB MEHBOOB</span>. All rights reserved.
                    </p>

                    {/* BUILT WITH LOVE */}
                    <p className="text-xs text-zinc-400 flex items-center justify-center gap-1.5">
                        <span>Built with</span>
                        <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400 animate-pulse" />
                        <span>by</span>
                        <span className="font-bold text-white bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Galib Mehboob
                        </span>
                    </p>

                    {/* BACK TO TOP BUTTON */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-purple-500/20 hover:border-purple-500/40 text-xs font-semibold text-purple-300 hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                    >
                        <span>Back To Top</span>
                        <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;