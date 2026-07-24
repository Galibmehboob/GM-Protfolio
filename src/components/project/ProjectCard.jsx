"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";


export default function ProjectCard({ project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="
            group
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-xl
            "
        >

            {/* Project Image */}

            <div className="relative h-60 overflow-hidden">

                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                    object-cover
                    transition duration-500
                    group-hover:scale-110
                    "
                />

                <div
                    className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    "
                />

            </div>



            {/* Content */}

            <div className="p-6 space-y-5">


                <h2 className="
                    text-2xl
                    font-bold
                    text-white
                ">
                    {project.title}
                </h2>



                <p className="
                    text-gray-300
                    text-sm
                    leading-relaxed
                ">
                    {project.description}
                </p>



                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2">

                    {project.technologies.slice(0, 5).map((tech) => (
                        <span
                            key={tech}
                            className="
                            rounded-full
                            border
                            border-cyan-400/20
                            bg-cyan-400/10
                            px-3
                            py-1
                            text-xs
                            text-cyan-300
                            "
                        >
                            {tech}
                        </span>
                    ))}

                </div>




                {/* Buttons */}

                <div className="
                    flex
                    flex-wrap
                    gap-3
                ">


                    <a
                        href={project.live}
                        target="_blank"
                        className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-purple-600
                        px-4
                        py-2
                        text-sm
                        text-white
                        hover:bg-purple-700
                        "
                    >

                        <ExternalLink size={16} />
                        Live

                    </a>



                    <a
                        href={project.github}
                        target="_blank"
                        className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-white/10
                        px-4
                        py-2
                        text-sm
                        text-white
                        hover:bg-white/20
                        "
                    >

                        <FaGithub size={16} />
                        Github

                    </a>



                    <Link
                        href={`/projects/${project.slug}`}
                        className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-cyan-400/30
                        px-4
                        py-2
                        text-sm
                        text-cyan-300
                        hover:bg-cyan-400/10
                        "
                    >

                        Details

                        <ArrowRight size={16} />

                    </Link>


                </div>


            </div>


        </motion.div>
    );
}