import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/api";
interface ProjectSectionProps {
  analytics: {
    visitors: number;
    aiChats: number;
    resumeDownloads: number;
  };
}
interface Project {
  id: string;
  title: string;
  description: string;
  //githubUrl: string[];
  //featured: boolean;
  order: number;
  type: string;
  technologies: string[];
  featured: string[];
}
export function ProjectSection({
  analytics
}: ProjectSectionProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/projects`)
      // fetch("http://localhost:5133/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);
  return (
    <section
      className="section section-dark"
      id="projects"
    >
      <div className="container">

        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          description="Projects showcasing backend development, cloud technologies and modern web applications."
        />

        <div className="projects-grid">

          {[...projects]
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <article
                className="project-card"
                key={project.title}
              >
                <p className="project-type">
                  {project.type}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="tag-list project-tags">
                  {project.technologies.map(
                    (tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="feature-list">
                  {project.featured.map(
                    (feature) => (
                      <div
                        className="feature-item"
                        key={feature}
                      >
                        {feature}
                      </div>
                    )
                  )}

                </div>
                {/* {

                  project.id === "portfolio" ? (
                    <div className="project-analytics">

                      <h3>Live Usage</h3>
                      <div className="project-stats">

                        <div className="project-stat">
                          <strong>
                            {analytics.visitors}
                          </strong>
                          <span>Website Visitors</span>
                        </div>

                        <div className="project-stat">
                          <strong>
                            {analytics.aiChats}
                          </strong>
                          <span>AI Chats</span>
                        </div>

                        <div className="project-stat">
                          <strong>
                            {analytics.resumeDownloads}
                          </strong>
                          <span>Resume Visitors</span>
                        </div>

                      </div>

                    </div>

                  ) : null
                } */}
                {/* <div
                className="project-status"
                role="status"
              >
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
                 {project.githubUrl.map(
                  (url) => (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={url}
                    >
                      Github Repository
                    </a>
                  ))
                }
                Github URL 
              </div> */}

              </article>
            ))}

        </div>
        <div className="project-analytics">
          <h3>Live Analytics</h3>

          <div className="project-stats">
            <div className="project-stat">
              <strong>{analytics.visitors}</strong>
              <span>Website Visitors</span>
            </div>

            <div className="project-stat">
              <strong>{analytics.aiChats}</strong>
              <span>AI Conversations</span>
            </div>

            <div className="project-stat">
              <strong>{analytics.resumeDownloads}</strong>
              <span>Resume Visitors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}