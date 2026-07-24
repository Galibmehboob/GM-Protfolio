"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { contactInfo } from "@/data/portfolioData";
import { FaGithub } from "react-icons/fa";
import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";
import { AlertCircle, CheckCircle2, Globe, Loader2, Mail, MapPin, MessageSquare, Phone, Send, Sparkles } from "lucide-react";

// Icon mapping dictionary for social icons
const socialIcons = {
    Github: FaGithub,
    Linkedin: LogoLinkedin,
    Facebook: LogoFacebook,
    Globe: Globe,
};

const Contact = () => {
    // Form State Management
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form Field Validation
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulate API submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset success banner after 6 seconds
            setTimeout(() => setIsSubmitted(false), 6000);
        }, 1500);
    };

    // Contact cards metadata
    const contactCards = [
        {
            title: "Email",
            value: contactInfo.email,
            href: `mailto:${contactInfo.email}`,
            icon: Mail,
            color: "text-purple-400",
        },
        {
            title: "Phone",
            value: contactInfo.phone,
            href: `tel:${contactInfo.phone}`,
            icon: Phone,
            color: "text-cyan-400",
        },
        {
            title: "WhatsApp",
            value: contactInfo.whatsapp,
            href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`,
            icon: MessageSquare,
            color: "text-emerald-400",
        },
        {
            title: "Location",
            value: contactInfo.location,
            href: null,
            icon: MapPin,
            color: "text-amber-400",
        },
    ];

    return (
        <section
            id="contact"
            aria-label="Contact Section"
            className="relative w-full py-16 lg:py-24 overflow-hidden"
        >
            {/* Background Ambient Glows */}
            <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
                <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full" />
                <div className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />
            </div>

            <div className="max-w-6xl w-full mx-auto px-5 sm:px-8">
                {/* ========================================== */}
                {/* SECTION HEADER                             */}
                {/* ========================================== */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-purple-300">
                            Get In Touch
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                        Let's Work{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                            Together
                        </span>
                    </h2>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                        Have an idea, project, or open position? Let's build something amazing together.
                    </p>
                </motion.div>

                {/* ========================================== */}
                {/* MAIN TWO COLUMN GRID LAYOUT                */}
                {/* ========================================== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                    {/* ---------------------------------------- */}
                    {/* LEFT COLUMN: INFO & SOCIALS (5 Cols)      */}
                    {/* ---------------------------------------- */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        {/* Availability Badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xl self-start">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-emerald-300">
                                {contactInfo.availability}
                            </span>
                        </div>

                        {/* Contact Information Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                            {contactCards.map((card) => {
                                const Icon = card.icon;
                                const CardWrapper = card.href ? "a" : "div";

                                return (
                                    <CardWrapper
                                        key={card.title}
                                        href={card.href || undefined}
                                        target={card.href ? "_blank" : undefined}
                                        rel={card.href ? "noopener noreferrer" : undefined}
                                        className="group relative flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl hover:border-purple-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-lg"
                                    >
                                        <div
                                            className={`p-3 rounded-xl border border-white/10 bg-white/5 ${card.color} group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                                                {card.title}
                                            </span>
                                            <span className="text-sm font-semibold text-white truncate group-hover:text-purple-300 transition-colors">
                                                {card.value}
                                            </span>
                                        </div>
                                    </CardWrapper>
                                );
                            })}
                        </div>

                        {/* Social Links Section */}
                        <div className="p-5 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl space-y-3 mt-2">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                Connect on Socials
                            </h3>
                            <div className="flex items-center gap-3 flex-wrap">
                                {contactInfo.socials.map((social) => {
                                    const SocialIcon = socialIcons[social.icon] || Globe;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Visit my ${social.name}`}
                                            className="group relative p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-purple-500/20 hover:border-purple-500/40 text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-purple-500/20"
                                        >
                                            <SocialIcon className="w-4 h-4" />
                                            {/* Tooltip */}
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-zinc-950 border border-white/10 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
                                                {social.name}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* ---------------------------------------- */}
                    {/* RIGHT COLUMN: CONTACT FORM (7 Cols)      */}
                    {/* ---------------------------------------- */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7"
                    >
                        <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-2xl shadow-xl relative overflow-hidden">
                            {/* Form Ambient Background Glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                            <form onSubmit={handleSubmit} noValidate className="space-y-4 relative z-10">
                                {/* Name & Email Inputs */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Name Field */}
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-xs font-semibold text-zinc-300">
                                            Full Name <span className="text-purple-400">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            autoComplete="name"
                                            className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${errors.name ? "border-red-500/80 focus:ring-red-500" : "border-white/10 focus:border-purple-500 focus:ring-purple-500/30"
                                                } text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:ring-2 backdrop-blur-md transition-all duration-200`}
                                        />
                                        {errors.name && (
                                            <p className="text-[11px] font-medium text-red-400 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" /> {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-semibold text-zinc-300">
                                            Email Address <span className="text-purple-400">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            autoComplete="email"
                                            className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${errors.email ? "border-red-500/80 focus:ring-red-500" : "border-white/10 focus:border-purple-500 focus:ring-purple-500/30"
                                                } text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:ring-2 backdrop-blur-md transition-all duration-200`}
                                        />
                                        {errors.email && (
                                            <p className="text-[11px] font-medium text-red-400 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" /> {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-xs font-semibold text-zinc-300">
                                        Subject <span className="text-purple-400">*</span>
                                    </label>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Inquiry / Job Opportunity"
                                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${errors.subject ? "border-red-500/80 focus:ring-red-500" : "border-white/10 focus:border-purple-500 focus:ring-purple-500/30"
                                            } text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:ring-2 backdrop-blur-md transition-all duration-200`}
                                    />
                                    {errors.subject && (
                                        <p className="text-[11px] font-medium text-red-400 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.subject}
                                        </p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-xs font-semibold text-zinc-300">
                                        Message <span className="text-purple-400">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or idea..."
                                        className={`w-full p-4 rounded-xl bg-black/40 border ${errors.message ? "border-red-500/80 focus:ring-red-500" : "border-white/10 focus:border-purple-500 focus:ring-purple-500/30"
                                            } text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:ring-2 backdrop-blur-md transition-all duration-200 resize-none`}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-[11px] font-medium text-red-400 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Sending Message...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>

                                {/* Success Feedback Animation */}
                                <AnimatePresence>
                                    {isSubmitted && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium flex items-center gap-2"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span>Thank you! Your message has been sent successfully.</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;