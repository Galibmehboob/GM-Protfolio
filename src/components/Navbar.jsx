"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = requestAnimationFrame(() => {
            setMounted(true);
        });

        return () => cancelAnimationFrame(timer);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] lg:w-[90%] flex justify-between"
        >

            <Link href="/" className="flex items-center gap-3">
                <div className="w-[120px] h-[120px] absolute">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        fill
                        sizes="fill"
                        loading="eager"
                        className="object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                    />
                </div>


            </Link>

            <div className="flex items-center justify-between lg:px-32 px-6  rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/20">





                <div className="hidden md:flex  items-center gap-10 font-semibold ">
                    <Link href="#about">About</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#contact">Contact</Link>
                </div>


            </div>
            <div className="flex items-center gap-4">


                <button
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:scale-110 duration-300"
                >
                    {mounted && (
                        theme === "dark"
                            ? <FaSun />
                            : <FaMoon />
                    )}
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;