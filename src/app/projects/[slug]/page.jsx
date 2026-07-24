import { notFound } from "next/navigation";
import ProjectDetails from "@/components/project/ProjectDetails";
import { projects } from "@/data/portfolioData";

export default async function ProjectPage({ params }) {
    const { slug } = await params;

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black px-5 py-20">
            <div className="mx-auto max-w-7xl">
                <ProjectDetails project={project} />
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}