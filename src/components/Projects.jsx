"use client";

import ProjectCard from "@/components/project/ProjectCard";
import { projects } from "@/data/portfolioData";


export default function Projects() {

    return (
        <section
            id="projects"
            className="px-5 py-20"
        >

            <div className="max-w-7xl mx-auto">

                <h2 className="
                    text-4xl
                    font-bold
                    text-white
                    text-center
                    mb-12
                ">
                    My Projects
                </h2>


                <div className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-8
                ">

                    {
                        projects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                            />
                        ))
                    }

                </div>

            </div>

        </section>
    );
}