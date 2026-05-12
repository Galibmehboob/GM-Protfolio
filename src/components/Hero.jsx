"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center  px-6">

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

            {/* Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="relative z-10 w-11/12 mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-purple-400 uppercase tracking-[5px] mt-28 mb-4"
                    >
                        MERN Stack Developer
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
                    >
                        Hey, I'm
                        <span className="block gradient-text">
                            Galib Mehboob
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 text-gray-300 text-lg leading-9 max-w-xl"
                    >
                        I build modern, animated and high-performance web applications
                        using MERN Stack and Next.js with premium UI/UX experiences.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-5 mt-10"
                    >
                        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold hover:scale-105 duration-300 shadow-2xl shadow-purple-500/30">
                            Hire Me
                        </button>

                        <button className="px-8 py-4 rounded-full border border-white/20 backdrop-blur-lg hover:bg-white/10 duration-300">
                            Download CV
                        </button>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex gap-5 mt-10"
                    >
                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-purple-600 duration-300"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-cyan-600 duration-300"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-600 duration-300"
                        >
                            <FaFacebook />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative lg:top-20 flex justify-center"
                >
                    {/* Glow */}
                    <div className="absolute w-[350px] h-[350px] bg-purple-500/30 rounded-full blur-[100px]"></div>

                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                        }}
                        className="relative"
                    >
                        <Image
                            src="/profile.png"
                            alt="profile"
                            width={420}
                            height={420}
                            className="rounded-[40px] border border-white/10 shadow-2xl object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;