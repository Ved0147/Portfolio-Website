import { ArrowDown, Eye, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import heroWorkspace from "../assets/hero-workspace.webp";
import { API_BASE_URL } from "../config/api";
const metrics = [
  { value: "1+", label: "Years of experience" },
  { value: "ASP.NET", label: "Backend specialization" },
  { value: "Cloud & DevOps", label: "CI/CD & Automation" },
];
export function Hero() {
  const handleResumeDownload = async () => {
  const response = await fetch(
    `${API_BASE_URL}/resume`
  );
  const data = await response.json();

  window.open(data.url, "_blank");
  fetch(`${API_BASE_URL}/resume/download`, { method: "POST" });
  // await refreshAnalytics();
};
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src={heroWorkspace}
        width="1600"
        height="822"
        alt=""
        fetchPriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="availability">
            <span aria-hidden="true" />
            Open to backend and cloud opportunities.
          </p>
          <p className="eyebrow">Software Developer · Surat, India</p>
          <h1 id="hero-title">
            Building dependable backend systems for <span>real business data.</span>
          </h1>
          <p className="hero-intro">
            I’m Ved, a developer working across ASP.NET, REST APIs, SQL databases,Google Cloud, and CI/CD practices. I turn complex requirements into maintainable,
            data-driven software.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              <Mail size={18} aria-hidden="true" />
              Let’s talk
            </a>
            <a className="button button-secondary" onClick={handleResumeDownload}>
              <Eye size={18} aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>

        <div className="metric-grid" aria-label="Professional overview">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Continue to about section">
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
