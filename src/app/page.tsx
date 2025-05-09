import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}
