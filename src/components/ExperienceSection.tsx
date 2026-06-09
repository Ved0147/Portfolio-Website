import { BriefcaseBusiness, MapPin } from "lucide-react";
import { experiences } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section className="section section-muted" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Enterprise experience, from backend delivery to data implementation."
          description="Hands-on work with global enterprise platforms, technical delivery, and client-aligned data solutions."
        />
        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-card" key={`${experience.company}-${experience.role}`}>
              <div className="experience-meta">
                <span className="experience-icon" aria-hidden="true">
                  <BriefcaseBusiness />
                </span>
                <p>{experience.period}</p>
              </div>
              <div className="experience-content">
                <div className="experience-title">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="company">{experience.company}</p>
                  </div>
                  <p className="location">
                    <MapPin size={16} aria-hidden="true" />
                    {experience.location}
                  </p>
                </div>
                <ul className="achievement-list">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tag-list" aria-label={`Skills used at ${experience.company}`}>
                  {experience.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
