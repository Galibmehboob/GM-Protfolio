"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-2xl select-none"
        >
            {/* Background Soft Glow Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-500/20 blur-[100px] rounded-full" />
            </div>

            <div className="relative flex flex-col items-center gap-6">
                {/* Animated Rings & Logo Container */}
                <div className="relative flex items-center justify-center w-24 h-24">
                    {/* Outer Pulsing Glow Ring */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500 to-cyan-400 opacity-20 blur-md"
                        animate={{
                            scale: [1, 1.25, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Rotating Outer Border Ring */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-tr from-purple-500 via-purple-400/20 to-cyan-400 [mask-image:linear-gradient(white,white)_padding-box,linear-gradient(white,white)] [mask-composite:exclude]"
                        style={{ borderRadius: "1.5rem" }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Glass Center Card */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-500/10"
                    >
                        {/* Animated Logo Icon (Pulsing Brand Monogram) */}
                        <motion.span
                            animate={{
                                scale: [0.95, 1.05, 0.95],
                                opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
                        >
                            &lt;/&gt;
                        </motion.span>
                    </motion.div>
                </div>

                {/* Loading Bar & Text */}
                <div className="flex flex-col items-center gap-2">
                    {/* Animated Progress Line */}
                    <div className="w-28 h-1 rounded-full bg-zinc-800/80 overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                            animate={{
                                x: ["-100%", "100%"],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="text-xs font-mono uppercase tracking-widest text-zinc-400 pt-1"
                    >
                        Loading...
                    </motion.span>
                </div>
            </div>
        </motion.div>
    );
}