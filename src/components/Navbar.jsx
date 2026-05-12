"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const timer = requestAnimationFrame(() => {
            setMounted(true);
        });

        return () => cancelAnimationFrame(timer);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: "About", href: "#about", id: "about" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed -top-1 left-1/2 -translate-x-1/2 z-50 w-[95%] lg:w-[90%] flex items-center justify-between"
        >

            <Link
                href="/"
                className="relative w-[90px] h-[90px] lg:w-[120px] lg:h-[120px]"
            >
                <Image
                    src="/logo.png"
                    alt="logo"
                    fill
                    sizes="120px"
                    priority
                    className="object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                />
            </Link>


            <div className="hidden md:flex items-center justify-between lg:px-32 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/20">
                <div className="flex items-center gap-10 font-semibold">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            className={`relative transition duration-300 ${activeSection === link.id
                                ? "text-white"
                                : "text-white/50 hover:text-white"
                                }`}
                        >
                            {link.name}

                            {activeSection === link.id && (
                                <motion.span
                                    layoutId="activeNav"
                                    className="absolute left-0 -bottom-2 h-[2px] w-full bg-white rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                </div>
            </div>


            <div className="flex items-center gap-4">

                <button
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="hidden md:flex w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl items-center justify-center hover:scale-110 duration-300"
                >
                    {mounted &&
                        (theme === "dark" ? <FaSun /> : <FaMoon />)}
                </button>


                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>


            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[95px] left-0 w-full md:hidden rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl p-6"
                    >
                        <div className="flex flex-col gap-6 text-center font-semibold">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`transition duration-300 ${activeSection === link.id
                                        ? "text-white"
                                        : "text-white/50 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}


                            <button
                                onClick={() =>
                                    setTheme(
                                        theme === "dark"
                                            ? "light"
                                            : "dark"
                                    )
                                }
                                className="mx-auto w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:scale-110 duration-300"
                            >
                                {mounted &&
                                    (theme === "dark"
                                        ? <FaSun />
                                        : <FaMoon />)}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;