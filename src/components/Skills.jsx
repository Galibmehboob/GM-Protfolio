"use client";

import { skills } from "@/data/portfolioData";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2 className="text-5xl font-bold gradient-text mb-12">
                Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="card p-6 rounded-2xl text-center"
                        >
                            <Icon className="text-5xl mx-auto mb-4" />
                            <h3>{skill.name}</h3>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;