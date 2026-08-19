import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import EducationRecognition from "@/components/EducationRecognition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <CaseStudy />
      <Projects />
      <Experience />
      <EducationRecognition />
      <Contact />
      <Footer />
    </main>
  );
}
