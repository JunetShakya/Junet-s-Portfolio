import { useEffect, useState } from "react";
import Loader from "./Components/Loader.jsx";
import Nav from "./Components/Nav.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Experience from "./Components/Experience.jsx";
import Services from "./Components/Services.jsx";
import TechStack from "./Components/TechStack.jsx";
// import GithubStats from "./Components/GithubStats.jsx";
// import Testimonials from "./Components/Testimonials.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import BackToTop from "./Components/BackToTop.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="relative bg-[var(--color-bg)] text-[var(--color-text)]">
        <div className="pointer-events-none fixed inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <TechStack />
          {/* <GithubStats /> */}
          {/* <Testimonials /> */}
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
