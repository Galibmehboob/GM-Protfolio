"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    CheckCircle,
    AlertTriangle,
    Rocket,
    ArrowLeft,

    ExternalLink
} from "lucide-react";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";


export default function ProjectDetails({ project }) {

    return (

        <div className="space-y-16">


            {/* Hero Section */}

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                className="
                grid
                lg:grid-cols-2
                gap-10
                items-center
                "
            >


                <div className="space-y-6">


                    <span
                        className="
                        inline-block
                        rounded-full
                        bg-purple-500/10
                        border
                        border-purple-400/30
                        px-4
                        py-2
                        text-sm
                        text-purple-300
                        "
                    >
                        {project.status}
                    </span>



                    <h1
                        className="
                        text-5xl
                        font-bold
                        text-white
                        "
                    >
                        {project.title}
                    </h1>



                    <p
                        className="
                        text-gray-300
                        leading-relaxed
                        "
                    >
                        {project.fullDescription}
                    </p>



                    <div className="flex flex-wrap gap-4">


                        <a
                            href={project.live}
                            target="_blank"
                            className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-purple-600
                            px-5
                            py-3
                            text-white
                            hover:bg-purple-700
                            "
                        >

                            <ExternalLink size={18} />
                            Live Demo

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
                            px-5
                            py-3
                            text-white
                            hover:bg-white/20
                            "
                        >

                            <FaGithub size={18} />
                            Github

                        </a>



                    </div>


                </div>




                {/* Main Image */}

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="
                    relative
                    h-[350px]
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    "
                >

                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />

                </motion.div>


            </motion.section>






            {/* Technology */}

            <section>

                <h2 className="
                    mb-6
                    text-3xl
                    font-bold
                    text-white
                ">
                    Tech Stack
                </h2>


                <div className="flex flex-wrap gap-3">


                    {
                        project.technologies.map((tech) => (
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                key={tech}
                                className="
                                rounded-full
                                border
                                border-cyan-400/30
                                bg-cyan-400/10
                                px-4
                                py-2
                                text-cyan-300
                                "
                            >
                                {tech}
                            </motion.span>
                        ))
                    }


                </div>


            </section>







            {/* Gallery */}

            {
                project.gallery &&

                <section>

                    <h2 className="
                    mb-6
                    text-3xl
                    font-bold
                    text-white
                    ">
                        Project Gallery
                    </h2>


                    <div className="
                    grid
                    md:grid-cols-3
                    gap-6
                    ">


                        {
                            project.gallery.map((img) => (
                                <motion.div
                                    key={img}
                                    whileHover={{ scale: 1.05 }}
                                    className="
                                relative
                                h-60
                                overflow-hidden
                                rounded-2xl
                                "
                                >

                                    <Image
                                        src={img}
                                        alt="Screenshot"
                                        fill
                                        className="object-cover"
                                    />

                                </motion.div>
                            ))
                        }


                    </div>


                </section>

            }







            {/* Features */}

            <SectionCard
                title="Features"
                icon={<CheckCircle />}
                items={project.features}
            />



            {/* Challenges */}

            <SectionCard
                title="Challenges Faced"
                icon={<AlertTriangle />}
                items={project.challenges}
            />




            {/* Future */}

            <SectionCard
                title="Future Improvements"
                icon={<Rocket />}
                items={project.futurePlans}
            />






            {/* Back Button */}

            <Link
                href="/#projects"
                className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/20
                px-5
                py-3
                text-white
                hover:bg-white/10
                "
            >

                <ArrowLeft size={18} />

                Back Projects

            </Link>


        </div>

    );
}







function SectionCard({ title, icon, items }) {

    return (

        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            "
        >


            <div className="
            flex
            items-center
            gap-3
            mb-6
            text-white
            ">

                {icon}

                <h2 className="text-3xl font-bold">
                    {title}
                </h2>

            </div>



            <ul className="space-y-4">


                {
                    items.map((item, index) => (

                        <li
                            key={index}
                            className="
                        text-gray-300
                        flex
                        gap-3
                        "
                        >

                            <span className="text-cyan-400">
                                •
                            </span>

                            {item}

                        </li>

                    ))
                }


            </ul>



        </motion.section>

    )

}