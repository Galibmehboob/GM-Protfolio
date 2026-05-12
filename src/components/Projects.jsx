"use client";

import { projects } from "@/data/portfolioData";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="text-5xl font-bold gradient-text mb-12">
                Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="card rounded-2xl overflow-hidden"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            loading="eager"
                            width={600}
                            height={400}
                            className="w-full h-[250px] object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 mb-6">
                                {project.description}
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="px-6 py-3 bg-purple-600 rounded-full"
                                >
                                    Live
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="px-6 py-3 border border-white rounded-full"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;