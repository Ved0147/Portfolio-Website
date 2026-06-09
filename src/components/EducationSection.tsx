import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section className="section section-muted" id="education">
      <div className="container">
        <SectionHeading eyebrow="Education" title="A continuing foundation in information technology." />
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.degree}>
              <GraduationCap aria-hidden="true" />
              <div>
                <p className="education-period">{item.period}</p>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <span>{item.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
