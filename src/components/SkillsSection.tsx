import { skillGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title="A practical stack for backend and enterprise data work."
          description="Tools I use to build, integrate, validate, and ship reliable software."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-index" aria-hidden="true">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
