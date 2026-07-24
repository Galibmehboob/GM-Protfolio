"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    // Applies smooth physics-based dampening to scroll progress
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-400 pointer-events-none"
        />
    );
}