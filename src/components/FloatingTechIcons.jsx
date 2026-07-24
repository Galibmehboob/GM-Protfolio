"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGithub,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiMongodb,
    SiJavascript,
    SiTailwindcss,
    SiExpress,
} from "react-icons/si";

// SVG Icons for maximum crispness and light footprint
const TECH_ICONS = {
    react: FaReact,
    nextjs: SiNextdotjs,
    nodejs: FaNodeJs,
    express: SiExpress,
    mongodb: SiMongodb,
    tailwind: SiTailwindcss,
    github: FaGithub,
    javascript: SiJavascript,
};

const ICON_LIST = [
    FaReact,
    SiNextdotjs,
    FaNodeJs,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    FaGithub,
    SiJavascript,
];

const PARTICLES = [
    { icon: ICON_LIST[0], left: "8%", duration: 12, size: 40 },
    { icon: ICON_LIST[1], left: "20%", duration: 15, size: 34 },
    { icon: ICON_LIST[2], left: "32%", duration: 11, size: 42 },
    { icon: ICON_LIST[3], left: "45%", duration: 18, size: 30 },
    { icon: ICON_LIST[4], left: "58%", duration: 13, size: 38 },
    { icon: ICON_LIST[5], left: "70%", duration: 16, size: 34 },
    { icon: ICON_LIST[6], left: "82%", duration: 14, size: 36 },
    { icon: ICON_LIST[7], left: "92%", duration: 17, size: 32 },

    { icon: ICON_LIST[0], left: "15%", duration: 20, size: 28 },
    { icon: ICON_LIST[4], left: "52%", duration: 19, size: 26 },
    { icon: ICON_LIST[5], left: "76%", duration: 21, size: 30 },
];

// Deterministic configuration for icon particles
const FLOATING_CONFIGS = [
    { iconKey: "react", left: "10%", size: 40, duration: 12 },
    { iconKey: "nextjs", left: "25%", size: 34, duration: 16 },
    { iconKey: "nodejs", left: "40%", size: 42, duration: 14 },
    { iconKey: "mongodb", left: "58%", size: 38, duration: 17 },
    { iconKey: "tailwind", left: "72%", size: 36, duration: 15 },
    { iconKey: "javascript", left: "88%", size: 34, duration: 13 },
    { iconKey: "github", left: "18%", size: 36, duration: 18 },
    { iconKey: "express", left: "82%", size: 30, duration: 16 },
];

export default function FloatingTechIcons() {


    {
        PARTICLES.map((item, index) => {
            const Icon = item.icon;

            return (
                <motion.div
                    key={index}
                    className="absolute text-white/20"
                    style={{
                        left: item.left,
                        top: "-80px",
                    }}
                    initial={{
                        y: -100,
                    }}
                    animate={{
                        y: 1200,
                        x: [0, -30, 20, -15, 15, 0],
                        rotate: 360,
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.8,
                    }}
                >
                    <Icon
                        size={item.size}
                        className="drop-shadow-[0_0_20px_rgba(168,85,247,.6)]"
                    />
                </motion.div>
            );
        })
    }
}