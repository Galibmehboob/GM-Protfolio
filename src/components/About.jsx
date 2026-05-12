"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="section">
            <div className=" mb-60 mt-4">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl font-bold mb-8 gradient-text">
                        About Me
                    </h2>

                    <p className="text-gray-300 leading-9 text-lg border-l-4 border-purple-600 pl-6 max-w-7xl">
                        As a developer, I believe every digital experience should be intuitive, engaging, and built to deliver real results. I specialize in creating responsive, user-friendly, and scalable web applications using H5, C3, JS (ES6), React, Node.js, Express.js, MongoDB, and Next.js.

                        I’ve worked on projects ranging from interactive dashboards to e-commerce and book management platforms, focusing on clean design, smooth user experience, and strong functionality. I enjoy turning ideas into real-world web solutions that are modern, efficient, and optimized across all devices.

                        Passionate about continuous learning and innovation, I’m always improving my skills and exploring new technologies to build impactful digital experiences that help businesses and users grow online.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;