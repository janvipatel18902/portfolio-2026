import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <Achievements />
      <Contact />
    </main>
  );
}
