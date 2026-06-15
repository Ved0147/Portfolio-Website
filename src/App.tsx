import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectSection } from "./components/ProjectSection";
import { SectionHeading } from "./components/SectionHeading";
import { SkillsSection } from "./components/SkillsSection";
import AIAssistantWidget from "./components/AIAssistantWidget";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "./config/api";

function App() {

  const [analytics, setAnalytics] =
    useState({
      visitors: 0,
      aiChats: 0,
      resumeDownloads: 0
    });

  const refreshAnalytics = async () => {
    const response =
      await fetch(
        `${API_BASE_URL}/analytics`
      );

    const data =
      await response.json();

    setAnalytics(data);
  };
  useEffect(() => {
    const initialize = async () => {
      await fetch(
        `${API_BASE_URL}/visitor`
      );

      await refreshAnalytics();
    };

    initialize();
  }, []);

  return (
    <>
      <Header />

      <main id="main-content">

        <Hero />
        <section
          className="section about-section"
          id="about"
        >
          <div className="container about-layout">

            <SectionHeading
              eyebrow="About"
              title="I connect backend engineering with the data that businesses depend on."
            />

            <div className="about-copy">
              <p>
                I’m a software developer with 1.5+ years of experience across backend development
                and enterprise data solutions.
              </p>

              <p>
                I enjoy translating requirements into clear technical systems:
                scalable MVC modules, validation rules, workflows, and interfaces that
                teams can trust.
              </p>
              <p>
                Alongside backend development, I'm actively building expertise in cloud technologies and DevOps through hands-on projects involving Google Cloud, containerization, CI/CD, and modern deployment practices
              </p>
            </div>

          </div>
        </section>

        <ExperienceSection />
        <SkillsSection />
        <ProjectSection analytics={analytics} />
        <EducationSection />
        <ContactSection />

        <AIAssistantWidget />

      </main>

      <Footer />
    </>
  );
}

export default App;
