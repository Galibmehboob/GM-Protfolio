"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading />}
      </AnimatePresence>

      <SmoothScroll>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </SmoothScroll>
    </>
  );
}