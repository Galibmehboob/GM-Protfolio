"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="section">
            <div className="mb-4 mt-4">

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:space-y-52 space-y-6 md:grid-cols-2 gap-16 items-start"
                >

                    {/* LEFT - About Me */}
                    <div>
                        <h2 className="text-5xl font-bold mb-8 gradient-text">
                            About Me
                        </h2>

                        <p className="text-gray-300 leading-9 text-lg border-l-4 border-purple-600 pl-6">
                            As a developer, I believe every digital experience should be intuitive, engaging, and built to deliver real results. I specialize in creating responsive, user-friendly, and scalable web applications using H5, C3, JS (ES6), React, Node.js, Express.js, MongoDB, and Next.js.

                            I’ve worked on projects ranging from interactive dashboards to e-commerce and book management platforms, focusing on clean design, smooth user experience, and strong functionality. I enjoy turning ideas into real-world web solutions that are modern, efficient, and optimized across all devices.
                        </p>
                    </div>

                    {/* RIGHT - Vision */}
                    <div>
                        <h2 className="text-5xl font-bold mb-8 gradient-text text-right">
                            Vision
                        </h2>

                        <p className="text-gray-300 leading-9 text-lg border-r-4 border-purple-600 pr-6 text-right">
                            My vision is to build impactful digital products that not only look beautiful but also solve real-world problems. I aim to grow as a full-stack developer who creates scalable, performance-focused applications that improve user experience globally.

                            I want to continuously explore modern technologies, contribute to innovative projects, and help businesses grow through powerful web solutions that are fast, accessible, and future-ready.
                        </p>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default About;