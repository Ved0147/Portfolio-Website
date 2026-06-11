import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectSection } from "./components/ProjectSection";
import { SectionHeading } from "./components/SectionHeading";
import { SkillsSection } from "./components/SkillsSection";
//import  AIAssistant from "./components/AIAssistant";
import AIAssistantWidget from "./components/AIAssistantWidget";
import { Analytics } from "./components/Analytics";
import { useEffect, useState } from "react";

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
        "http://localhost:5133/api/analytics"
      );

    const data =
      await response.json();

    setAnalytics(data);
  };

  useEffect(() => {
    refreshAnalytics();
  }, []);

  return (
    <>
      <Header refreshAnalytics={refreshAnalytics} />

      <main id="main-content">

        <Hero refreshAnalytics={refreshAnalytics} />

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
            </div>

          </div>
        </section>

        <ExperienceSection />
        <SkillsSection />

        <Analytics analytics={analytics} />

        <ProjectSection />
        <EducationSection />
        <ContactSection />

        <AIAssistantWidget
          refreshAnalytics={refreshAnalytics}
        />

      </main>

      <Footer />
    </>
  );
}

export default App;
