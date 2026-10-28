import React, { useState } from "react";
import { CONFIG } from "../config";
import { GithubIcon, ArrowUpRightIcon, TerminalIcon, SparklesIcon } from "./Icons";
import { ProjectModal } from "./ProjectModal";

export const Projects = ({ onTriggerFlash }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    if (onTriggerFlash) onTriggerFlash();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="section-wrapper" aria-label="Selected Engineering Projects">
      <div className="section-header-block">
        <span className="section-badge">ENGINEERING // FRAME 02</span>
        <h2 className="section-title">SELECTED PROJECTS.</h2>
        <p className="section-subtitle">
          Intelligent systems, web platforms, and human-centric software built with modern engineering.
        </p>
      </div>

      <div className="projects-list">
        {CONFIG.projects.map((project, idx) => {
          const isAlternate = idx % 2 === 1;

          return (
            <article
              key={project.id}
              className={`project-card ${isAlternate ? "alternate" : ""}`}
            >
              {/* Project Visual / Thumbnail Column */}
              <div
                className="project-visual-col"
                onClick={() => handleOpenModal(project)}
              >
                <div
                  className="project-visual-box viewfinder-box"
                  data-cursor="EXPAND"
                >
                  <div className="viewfinder-corner viewfinder-corner-tl" />
                  <div className="viewfinder-corner viewfinder-corner-tr" />
                  <div className="viewfinder-corner viewfinder-corner-bl" />
                  <div className="viewfinder-corner viewfinder-corner-br" />

                  {/* Thumbnail HUD top */}
                  <div style={{ display: "flex", justifyContent: "space-between", zIndex: 2 }}>
                    <span className="project-visual-badge">
                      {project.number} // {project.category}
                    </span>
                    <span className="project-visual-badge">
                      {project.aspectRatio}
                    </span>
                  </div>

                  {/* Visual Center Graphic / Placeholder */}
                  <div className="project-visual-placeholder">
                    <div className="project-visual-center">
                      <TerminalIcon size={32} />
                      <div className="project-visual-title">{project.title}</div>
                      <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)" }}>
                        [Click to inspect case details]
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail HUD bottom */}
                  <div style={{ display: "flex", justifyContent: "space-between", zIndex: 2 }}>
                    <span className="timecode-readout">STATUS: {project.meta.status}</span>
                    <span className="timecode-readout">EXP_VIEW</span>
                  </div>
                </div>
              </div>

              {/* Project Info Column */}
              <div className="project-info-col">
                <div>
                  <div className="project-header-meta">
                    <span className="project-num">PROJECT {project.number}</span>
                    <span className="project-cat">{project.category}</span>
                  </div>

                  <h3 className="project-heading">{project.title}</h3>
                  <div className="project-tagline">{project.tagline}</div>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="stack-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="project-actions">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="btn btn-secondary"
                    data-cursor="DETAILS"
                  >
                    <span>View Details</span>
                  </button>

                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      data-cursor="GITHUB"
                    >
                      <GithubIcon size={16} />
                      <span>GitHub</span>
                      <ArrowUpRightIcon size={14} />
                    </a>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <button
                        className="btn btn-secondary"
                        disabled
                        style={{ opacity: 0.6, cursor: "not-allowed" }}
                      >
                        <GithubIcon size={16} />
                        <span>GitHub</span>
                      </button>
                      <span className="placeholder-notice">
                        [Placeholder: repo URL pending]
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Modal Detail View */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
