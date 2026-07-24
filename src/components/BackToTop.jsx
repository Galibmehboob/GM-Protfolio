"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll handler (supports both native scroll & Lenis smooth scroll)
    const scrollToTop = useCallback(() => {
        const lenisInstance =
            window.lenis?.lenis || window.lenis?.current || window.lenis;

        if (typeof lenisInstance?.scrollTo === "function") {
            lenisInstance.scrollTo(0, { duration: 1.2 });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    type="button"
                    aria-label="Scroll to top"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full border border-white/15 bg-zinc-900/60 backdrop-blur-md shadow-lg shadow-purple-500/10 text-zinc-200 hover:text-white hover:border-purple-500/50 hover:bg-zinc-800/80 transition-colors group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                    {/* Subtle Ambient Glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Arrow Icon */}
                    <ArrowUp className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}