"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Compass } from "lucide-react";

// Pre-defined static particle properties to ensure pure component rendering
const PARTICLES = [
    { id: 1, size: 8, top: "15%", left: "10%", duration: 4.2, delay: 0 },
    { id: 2, size: 5, top: "25%", left: "85%", duration: 5.1, delay: 0.4 },
    { id: 3, size: 10, top: "65%", left: "15%", duration: 3.8, delay: 0.8 },
    { id: 4, size: 6, top: "75%", left: "80%", duration: 4.7, delay: 1.2 },
    { id: 5, size: 9, top: "45%", left: "90%", duration: 5.5, delay: 0.2 },
    { id: 6, size: 4, top: "85%", left: "35%", duration: 3.5, delay: 0.6 },
];

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background px-6 py-12">
            {/* Background Soft Lighting Gradients */}
            <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
                <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-purple-600/15 blur-[160px] rounded-full" />
                <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-cyan-500/15 blur-[160px] rounded-full" />
            </div>

            {/* Floating Background Particles */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {PARTICLES.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-white/10 backdrop-blur-3xl"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            top: particle.top,
                            left: particle.left,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.7, 0.2],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: particle.delay,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-xl w-full text-center space-y-8 relative z-10">
                {/* Badge Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md"
                >
                    <Compass className="w-4 h-4 text-purple-400 animate-spin-slow" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                        Error 404 • Page Not Found
                    </span>
                </motion.div>

                {/* Hero 404 Display */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                    className="relative select-none"
                >
                    <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 drop-shadow-2xl">
                        404
                    </h1>
                    {/* Subtle Ambient Glow Behind Text */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full transform scale-75 opacity-60" />
                </motion.div>

                {/* Message Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-3"
                >
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Lost in the digital void?
                    </h2>
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                        The page you are looking for doesn&apos;t exist or has been moved to a new destination. Let&apos;s get you back on track.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
                >
                    <Link
                        href="/"
                        className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                        <Home className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        <span>Back to Home</span>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        type="button"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-zinc-300 hover:text-white hover:border-purple-500/40 hover:bg-white/10 font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        <span>Go Back</span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}