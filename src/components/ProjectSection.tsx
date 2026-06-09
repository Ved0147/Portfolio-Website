import { ArrowUpRight, BookOpen, Database, LockKeyhole, ShoppingCart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  { icon: LockKeyhole, label: "Secure authentication" },
  { icon: ShoppingCart, label: "Cart workflow" },
  { icon: Database, label: "Dynamic MySQL listings" },
  { icon: BookOpen, label: "Admin book management" },
];

export function ProjectSection() {
  return (
    <section className="section section-dark" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Project"
          title="EBookStore"
          description="An Amazon-style digital bookstore designed around secure user and admin workflows."
        />
        <article className="project-feature">
          <div className="project-copy">
            <p className="project-type">Full-stack web application</p>
            <h3>From browsing to checkout, built as one cohesive MVC experience.</h3>
            <p>
              Designed and developed with C#, .NET MVC, MySQL, HTML, CSS, and JavaScript.
              The application includes user login, dynamic catalog content, cart functionality,
              secure authentication, and an administration dashboard.
            </p>
            <div className="tag-list project-tags">
              {["C#", ".NET MVC", "MySQL", "JavaScript"].map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="project-status" role="status">
              <ArrowUpRight size={18} aria-hidden="true" />
              Case study and repository link coming soon
            </div>
          </div>
          <div className="feature-list">
            {features.map(({ icon: Icon, label }) => (
              <div className="feature-item" key={label}>
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
