import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HorizontalProjects from "@/components/projects/HorizontalProjects";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Research from "@/components/research/Research";
import Achievements from "@/components/achievements/Achievements";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Research />

      <Achievements />

      <Contact />

      <Footer />
      <HorizontalProjects />

    </main>
  );
}