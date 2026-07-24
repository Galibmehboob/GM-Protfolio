"use client";

import React, { useState, useEffect, useCallback, useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

// Reusable Navigation Configuration
const NAV_ITEMS = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "TechStack", href: "#techstack", id: "techstack" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
];


const emptySubscribe = () => () => { };
function useIsHydrated() {
    return useSyncExternalStore(
        emptySubscribe,
        () => true,  // Client value
        () => false  // Server value (SSR)
    );
}

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const mounted = useIsHydrated();

    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Handle dynamic scroll state for glassmorphism background contraction
    useEffect(() => {
        let handleScroll;

        // Safely retrieve the Lenis instance if attached to window or React ref
        const lenisInstance = window.lenis?.lenis || window.lenis?.current || window.lenis;
        const hasLenisOn = typeof lenisInstance?.on === "function";

        if (hasLenisOn) {
            handleScroll = (e) => {
                setIsScrolled((e?.scroll ?? window.scrollY) > 50);
            };
            lenisInstance.on("scroll", handleScroll);
        } else {
            handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            };
            window.addEventListener("scroll", handleScroll, { passive: true });
        }

        return () => {
            if (hasLenisOn && handleScroll) {
                lenisInstance.off("scroll", handleScroll);
            } else {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    // IntersectionObserver for active link state sync
    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -40% 0px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        NAV_ITEMS.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Mobile menu body scroll lock & keyboard control
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };

        if (menuOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [menuOpen]);

    // Safe navigation click handler with fallback
    const handleNavClick = useCallback((href) => {
        setMenuOpen(false);

        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
            // Find Lenis instance across standard window attachments (instance, context, or ref)
            const lenisInstance = window.lenis?.lenis || window.lenis?.current || window.lenis;

            if (typeof lenisInstance?.scrollTo === "function") {
                lenisInstance.scrollTo(element, { offset: -80 });
            } else {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme, setTheme]);

    // Framer Motion Animation Variants
    const overlayVariants = useMemo(
        () => ({
            hidden: { opacity: 0, y: "-100%" },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    staggerChildren: 0.08,
                    delayChildren: 0.1,
                },
            },
            exit: {
                opacity: 0,
                y: "-100%",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            },
        }),
        []
    );

    const itemVariants = useMemo(
        () => ({
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut" },
            },
        }),
        []
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 pointer-events-none">
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                aria-label="Main Navigation"
                className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled
                    ? "w-full max-w-5xl h-14 px-6 rounded-full bg-background/70 dark:bg-neutral-900/70 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg shadow-black/5"
                    : "w-full max-w-7xl h-20 px-8 bg-transparent border-transparent"
                    }`}
            >
                {/* Brand Logo */}
                <Link
                    href="#home"
                    onClick={() => handleNavClick("#home")}
                    className="relative flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                    aria-label="Navigate to Home"
                >
                    <div className="relative w-8 h-8 lg:w-9 lg:h-9 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="Portfolio Logo"
                            fill
                            sizes="36px"
                            priority
                            className="object-contain dark:brightness-100 brightness-0 transition-all duration-300"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-1 font-medium text-sm">
                    {NAV_ITEMS.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <li key={item.id} className="relative">
                                <Link
                                    href={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`relative px-4 py-2 transition-colors duration-200 block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isActive
                                        ? "text-neutral-900 dark:text-white font-semibold"
                                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                                        }`}
                                >
                                    <span className="relative z-10 transition-transform duration-200 inline-block hover:-translate-y-0.5">
                                        {item.name}
                                    </span>

                                    {/* Active Indicator & Underline */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeNavPill"
                                            className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800/80 rounded-full -z-10"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Action Controls */}
                <div className="flex items-center gap-3">
                    {/* Theme Toggle Button */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle visual theme"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200/60 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200/60 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Fullscreen Navigation Overlay */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            id="mobile-navigation"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed inset-0 z-40 bg-background/95 dark:bg-neutral-950/95 backdrop-blur-2xl flex flex-col justify-between px-8 py-12 md:hidden pointer-events-auto"
                        >
                            {/* Header inside overlay */}
                            <div className="flex items-center justify-between w-full">
                                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                                    Navigation
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setMenuOpen(false)}
                                    aria-label="Close navigation overlay"
                                    className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Navigation Items */}
                            <ul className="flex flex-col gap-6 my-auto">
                                {NAV_ITEMS.map((item) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <motion.li key={item.id} variants={itemVariants}>
                                            <Link
                                                href={item.href}
                                                onClick={() => handleNavClick(item.href)}
                                                className={`text-3xl font-bold tracking-tight transition-colors duration-200 flex items-center gap-4 ${isActive
                                                    ? "text-neutral-900 dark:text-white"
                                                    : "text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white"
                                                    }`}
                                            >
                                                {isActive && (
                                                    <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
                                                )}
                                                {item.name}
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>

                            {/* Mobile Footer Context */}
                            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                                <span className="text-sm text-neutral-500">Appearance</span>
                                <button
                                    type="button"
                                    onClick={toggleTheme}
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900"
                                >
                                    {mounted && theme === "dark" ? (
                                        <>
                                            <Sun className="w-4 h-4" /> Light Mode
                                        </>
                                    ) : (
                                        <>
                                            <Moon className="w-4 h-4" /> Dark Mode
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    );
};

export default Navbar;