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
  return (
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
  );
}