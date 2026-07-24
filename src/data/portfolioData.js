import { Atom, Award, Code2, FileCode2, GraduationCap, Layers, Server } from "lucide-react";
import { FaAws, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiDocker, SiExpress, SiFigma, SiGraphql, SiJavascript, SiMongodb, SiNetlify, SiNextdotjs, SiPostman, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";



export const skillsStats = [
    { label: "Technologies", count: 15, suffix: "+" },
    { label: "Years Learning", count: 3, suffix: "+" },
    { label: "Projects Built", count: 25, suffix: "+" },
    { label: "Coding Hours", count: 2500, suffix: "+" },
];

export const currentlyLearning = [
    { name: "TypeScript", icon: SiTypescript, level: "Exploring" },
    { name: "Docker", icon: SiDocker, level: "Exploring" },
    { name: "AWS", icon: FaAws, level: "Exploring" },
    { name: "GraphQL", icon: SiGraphql, level: "Exploring" },
];

export const skillCategories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "Deployment",
    "Version Control",
    "Design",
];

export const skills = [
    // Frontend
    {
        name: "JavaScript",
        icon: SiJavascript,
        category: "Frontend",
        percentage: 88,
        level: "Advanced",
    },
    {
        name: "React",
        icon: FaReact,
        category: "Frontend",
        percentage: 90,
        level: "Advanced",
    },
    {
        name: "Next JS",
        icon: SiNextdotjs,
        category: "Frontend",
        percentage: 85,
        level: "Advanced",
    },
    {
        name: "Tailwind",
        icon: SiTailwindcss,
        category: "Frontend",
        percentage: 92,
        level: "Advanced",
    },

    // Backend
    {
        name: "Node JS",
        icon: FaNodeJs,
        category: "Backend",
        percentage: 82,
        level: "Intermediate",
    },
    {
        name: "Express JS",
        icon: SiExpress,
        category: "Backend",
        percentage: 80,
        level: "Intermediate",
    },

    // Database
    {
        name: "MongoDB",
        icon: SiMongodb,
        category: "Database",
        percentage: 78,
        level: "Intermediate",
    },

    // Deployment
    {
        name: "Vercel",
        icon: SiVercel,
        category: "Deployment",
        percentage: 88,
        level: "Advanced",
    },
    {
        name: "Netlify",
        icon: SiNetlify,
        category: "Deployment",
        percentage: 85,
        level: "Advanced",
    },

    // Version Control & Tools
    {
        name: "GitHub",
        icon: FaGithub,
        category: "Version Control",
        percentage: 88,
        level: "Advanced",
    },

    // Design
    {
        name: "Figma",
        icon: SiFigma,
        category: "Design",
        percentage: 80,
        level: "Intermediate",
    },
    //Tools
    {
        name: "Vs Code",
        icon: VscVscode,
        category: "Tools",
        percentage: 95,
        level: "Advanced"
    }
];

// Marquee Row 1 (Moves Left)
export const marqueeRow1 = [
    { name: "React", icon: FaReact, desc: "UI Library" },
    { name: "Next.js 16", icon: SiNextdotjs, desc: "React Framework" },
    { name: "JavaScript", icon: SiJavascript, desc: "ES6 Language" },
    { name: "Tailwind CSS", icon: SiTailwindcss, desc: "Utility Styling" },
    { name: "Node.js", icon: FaNodeJs, desc: "JS Runtime" },
    { name: "Express.js", icon: SiExpress, desc: "Backend Framework" },
    { name: "MongoDB", icon: SiMongodb, desc: "NoSQL Database" },
    { name: "HTML5", icon: FaHtml5, desc: "Markup Structure" },
];

// Marquee Row 2 (Moves Right)
export const marqueeRow2 = [
    { name: "CSS3", icon: FaCss3Alt, desc: "Modern Styling" },
    { name: "GitHub", icon: FaGithub, desc: "Version Control" },
    { name: "Git", icon: FaGitAlt, desc: "Code Tracking" },
    { name: "Figma", icon: SiFigma, desc: "UI/UX Design" },
    { name: "VS Code", icon: VscVscode, desc: "Primary IDE" },
    { name: "Postman", icon: SiPostman, desc: "API Testing" },
    { name: "Vercel", icon: SiVercel, desc: "Deployment Platform" },
    { name: "Netlify", icon: SiNetlify, desc: "Cloud Hosting" },
];

// Featured Core Stack Cards
export const favoriteStack = [
    {
        name: "Next.js",
        icon: SiNextdotjs,
        role: "Full-Stack Framework",
        desc: "App Router, Server Components, SSR & High-Performance Rendering.",
        badge: "Primary Framework",
    },
    {
        name: "React",
        icon: FaReact,
        role: "Frontend UI",
        desc: "Component Architecture, State Management & Modern Hooks.",
        badge: "UI Core",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        role: "Design System",
        desc: "Utility-first styling, rapid prototyping & fluid dark mode UI.",
        badge: "Styling Engine",
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        role: "Runtime & API",
        desc: "Event-driven asynchronous backend services & restful microservices.",
        badge: "Backend Runtime",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        role: "Database",
        desc: "Document-oriented NoSQL storage, indexing & flexible schemas.",
        badge: "Data Layer",
    },
];

export const educationTimeline = [
    {
        degree: "Bachelor of Business Administration (BBA)",
        institution: "Uttara University",
        duration: "2023 – Present",
        status: "In Progress",
        description:
            "Focused on Marketing and Management Information Systems (MIS), emphasizing branding, marketing strategy, business management, consumer behavior, and digital business solutions.",

        icon: GraduationCap,
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Tejgaon Collage",
        duration: "2019-2020",
        status: "Completed",
        description:
            "Completed Higher Secondary education in Business Studies during the COVID-19 pandemic, focusing on accounting, finance, economics, and business management.",
        icon: Award,
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "BAF Shaheen Collage, Kurmitola",
        duration: "2017-2018",
        status: "Completed",
        description:
            "Studied Business Studies at the secondary level, developing fundamental knowledge in accounting, finance, economics, and business management.",

        icon: Award,
    },
];

export const programmingJourney = [
    {
        year: "2022",
        title: "The Spark: HTML & CSS",
        description:
            "Discovered web development and built first static web pages, learning modern layout techniques like Flexbox and Grid.",
        icon: Code2,
    },
    {
        year: "2023",
        title: "Core Logic & JavaScript ES6+",
        description:
            "Dived deep into asynchronous JS, DOM manipulation, promises, data structures, and functional programming paradigms.",
        icon: FileCode2,
    },
    {
        year: "2024",
        title: "Mastering React & Modern UI",
        description:
            "Mastered component architecture, state management, custom hooks, and utility styling with Tailwind CSS.",
        icon: Atom,
    },
    {
        year: "2025",
        title: "Full-Stack Development (MERN)",
        description:
            "Built full-stack applications with Node.js, Express, and MongoDB, integrating REST APIs and user authentication.",
        icon: Server,
    },
    {
        year: "2026",
        title: "Next.js 16 & Production Architecture",
        description:
            "Adopted Next.js App Router, Server Components, SSR, and Framer Motion to craft high-performance client portals.",
        icon: Layers,
    },
];

export const projects = [
    {
        slug: "biko-book",
        title: "Book Management Website",
        description:
            "A full-stack MERN application with secure JWT authentication, dynamic library inventory management, and responsive book review flows.",
        fullDescription:
            "Biko Book is a feature-rich web platform designed to streamline book management, user collections, and community reviews. It features real-time search filtering, secure password hashing, dynamic inventory tracking, and an intuitive user dashboard built for book enthusiasts.",
        image: "/project1.png",
        live: "https://biko-book.vercel.app/",
        github: "https://github.com/Galibmehboob/biko-book",
        featured: true,
        status: "Completed",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "JWT",
        ],
        features: [
            "User Authentication & Authorization with JWT & HTTP-Only Cookies",
            "Full CRUD Operations for Books, Categories, and User Reviews",
            "Dynamic Search, Filtering & Pagination across large book datasets",
            "Responsive Glassmorphic UI with Toast Notifications and Loader States",
        ],
        challenges: [
            "Handling state persistence across complex nested routing while maintaining secure session management.",
            "Optimizing MongoDB query aggregation pipelines for fast real-time search and genre filtering.",
        ],
        futurePlans: [
            "Integrate Stripe API for direct digital book purchases and subscriptions.",
            "Implement AI-driven personalized book recommendations based on user history.",
        ],
    },
    {
        slug: "startup-forge",
        title: "StartupForge",
        description:
            "A modern startup collaboration platform where founders connect with developers, designers, and marketers to build startup teams.",

        fullDescription:
            "StartupForge is a full-stack startup collaboration platform designed to bridge the gap between startup founders and talented collaborators. Founders can publish startup opportunities, browse developer profiles, and build their dream teams, while collaborators can discover exciting startup ideas, apply to projects, and connect with entrepreneurs. The platform focuses on seamless collaboration, secure authentication, responsive user experience, and scalable architecture.",

        image: "/project3.png",

        live: "https://startup-forge.vercel.app/",

        github: "https://github.com/Galibmehboob/StartupForge",

        featured: true,

        status: "Completed",

        technologies: [
            "Next.js 16",
            "React 19",
            "Tailwind CSS v4",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT Authentication",
            "Framer Motion",
            "TanStack Query",
        ],

        features: [
            "Role-based authentication for Founders and Collaborators.",
            "Create, manage, and publish startup collaboration opportunities.",
            "Browse startup listings with advanced search and filtering.",
            "Apply to startup opportunities and manage collaboration requests.",
            "Personalized dashboards for founders and collaborators.",
            "Responsive UI with smooth animations and modern glassmorphism design.",
        ],

        challenges: [
            "Designing a scalable role-based architecture while maintaining a clean separation between founder and collaborator workflows.",
            "Implementing secure JWT authentication with protected routes and persistent user sessions.",
            "Optimizing data fetching and state synchronization across multiple dashboard modules using TanStack Query.",
            "Creating a responsive user experience with complex filtering, searching, and dynamic UI interactions.",
        ],

        futurePlans: [
            "Real-time messaging using WebSockets for founder and collaborator communication.",
            "AI-powered startup recommendation system based on user skills and interests.",
            "Notification system for collaboration requests and project updates.",
            "Team workspace with task management, file sharing, and milestone tracking.",
            "Integrated video meeting and scheduling features.",
        ],
    },
];

export const contactInfo = {
    availability: "Open to Opportunities", // or "Available for Freelance"
    email: "galibmehboob.com",
    phone: "+880 1604420124",
    whatsapp: "+880 1604420124",
    location: "Dhaka, Bangladesh",
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/Galibmehboob",
            icon: "Github",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/galib-mehboob/",
            icon: "Linkedin",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/heygalib.4U/",
            icon: "Facebook",
        },
        {
            name: "Portfolio",
            url: "https://gm-protfolio-vert.vercel.app/",
            icon: "Globe",
        },
    ],
};

export const ABOUT_DATA = {
    quickInfo: [
        { label: "Name", value: "Galib Mehboob" },
        { label: "Location", value: "Dhaka, Bangladesh" },
        { label: "Education", value: "BBA major in Marketing" },
        { label: "Experience Level", value: "Junior / Mid-Level" },
        { label: "Languages", value: "English, Bengali" },
        { label: "Freelance", value: "Available" },
    ],

    stats: [
        { label: "Projects Completed", count: 25, suffix: "+" },
        { label: "Technologies Learned", count: 18, suffix: "+" },
        { label: "Hours of Coding", count: 2500, suffix: "+" },
        { label: "Years of Experience", count: 2, suffix: "+" },
    ],

    whatILove: [
        {
            title: "Building Modern UI",
            description:
                "Crafting pixel-perfect, responsive interfaces with fluid animations, intuitive micro-interactions, and accessible design systems.",
            iconName: "Layout",
        },
        {
            title: "Solving Real-World Problems",
            description:
                "Architecting clean, efficient backend solutions and robust APIs that solve real user pain points and scale seamlessly.",
            iconName: "Code2",
        },
        {
            title: "Continuous Learning",
            description:
                "Constantly diving into modern frameworks, performance optimization techniques, and best software engineering practices.",
            iconName: "Sparkles",
        },
    ],

    interests: [
        { name: "Football", iconName: "Trophy" },
        { name: "Music", iconName: "Music" },
        { name: "Travel", iconName: "Compass" },
        { name: "Tea & Coffee", iconName: "Coffee" },
        { name: "Photography", iconName: "Camera" },
        { name: "Gaming", iconName: "Gamepad2" },
    ],
};