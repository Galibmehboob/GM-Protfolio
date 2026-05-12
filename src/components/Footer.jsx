import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="relative py-14 border-t border-gray-800 bg-black text-gray-400">

            {/* glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-90 pointer-events-none" />

            <div className="relative w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Brand */}
                <div className="text-center md:text-left">
                    <Link href="/" className="relative w-[90px] h-[90px] lg:w-[120px] lg:h-[120px]">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            fill
                            priority
                            className="object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                        />
                    </Link>
                    <p className="text-sm mt-2 text-gray-500">
                        Building modern web experiences.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                    <Link href="/" className="hover:text-white transition">Home</Link>
                    <Link href="/about" className="hover:text-white transition">About</Link>
                    <Link href="/projects" className="hover:text-white transition">Projects</Link>
                    <Link href="/contact" className="hover:text-white transition">Contact</Link>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-5 text-xl">
                    <a href="https://github.com" target="_blank" className="hover:text-white hover:scale-110 transition">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400 hover:scale-110 transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://facebook.com" target="_blank" className="hover:text-blue-500 hover:scale-110 transition">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" className="hover:text-sky-400 hover:scale-110 transition">
                        <FaTwitter />
                    </a>
                    <a href="mailto:yourmail@gmail.com" className="hover:text-red-400 hover:scale-110 transition">
                        <FiMail />
                    </a>
                </div>
            </div>

            {/* bottom line */}
            <div className="relative mt-10 text-center text-xs text-gray-600">
                © 2026 Galib. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;