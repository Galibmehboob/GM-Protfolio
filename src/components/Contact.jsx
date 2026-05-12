"use client";

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="section">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-5xl font-bold gradient-text mb-8">
                    Contact
                </h2>

                <form className="space-y-6 max-w-2xl">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 rounded-xl bg-black border border-gray-700"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 rounded-xl bg-black border border-gray-700"
                    />

                    <textarea
                        placeholder="Message"
                        rows="6"
                        className="w-full p-4 rounded-xl bg-black border border-gray-700"
                    ></textarea>

                    <button className="px-8 py-4 bg-purple-600 rounded-full hover:scale-105 duration-300">
                        Send Message
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;