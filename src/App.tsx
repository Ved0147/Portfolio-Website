import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectSection } from "./components/ProjectSection";
import { SectionHeading } from "./components/SectionHeading";
import { SkillsSection } from "./components/SkillsSection";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <section className="section about-section" id="about">
          <div className="container about-layout">
            <SectionHeading
              eyebrow="About"
              title="I connect backend engineering with the data that businesses depend on."
            />
            <div className="about-copy">
              <p>
                I’m a software developer with 1.5+ years of experience across backend development
                and enterprise data solutions. My work spans ASP.NET applications, RESTful APIs,
                SQL-backed workflows, and Product Information Management implementation.
              </p>
              <p>
                I enjoy translating requirements into clear technical systems: scalable MVC
                modules, validation rules, workflows, and interfaces that
                teams can trust.
              </p>
            </div>
          </div>
        </section>
        <ExperienceSection />
        <SkillsSection />
        <ProjectSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
