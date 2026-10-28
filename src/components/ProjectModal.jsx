import React, { useEffect } from "react";
import { CloseIcon, GithubIcon, ArrowUpRightIcon, TerminalIcon } from "./Icons";

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-panel viewfinder-box"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="viewfinder-corner viewfinder-corner-tl" />
        <div className="viewfinder-corner viewfinder-corner-tr" />
        <div className="viewfinder-corner viewfinder-corner-bl" />
        <div className="viewfinder-corner viewfinder-corner-br" />

        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close project modal"
          data-cursor="CLOSE"
        >
          <CloseIcon size={18} />
        </button>

        {/* Header */}
        <div className="project-header-meta" style={{ marginTop: "0.5rem" }}>
          <span className="project-num">PROJECT // {project.number}</span>
          <span className="project-cat">{project.category}</span>
        </div>

        <h3 id="modal-project-title" className="project-heading">
          {project.title}
        </h3>

        <div className="project-tagline">{project.tagline}</div>

        <p className="project-desc">{project.description}</p>

        {/* Architecture & Meta */}
        <div className="modal-highlights">
          <div className="modal-highlights-title">KEY IMPLEMENTATION HIGHLIGHTS</div>
          <ul className="modal-highlights-list">
            {project.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div className="skills-title">TECHNOLOGY STACK</div>
          <div className="project-stack">
            {project.stack.map((tech) => (
              <span key={tech} className="stack-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="project-actions" style={{ marginTop: "2rem" }}>
          {project.githubUrl && project.githubUrl !== "#" ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              data-cursor="REPO"
            >
              <GithubIcon size={18} />
              <span>View GitHub Repository</span>
              <ArrowUpRightIcon size={16} />
            </a>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                className="btn btn-secondary"
                disabled
                style={{ opacity: 0.6, cursor: "not-allowed" }}
              >
                <GithubIcon size={18} />
                <span>GitHub Repository</span>
              </button>
              <span className="placeholder-notice">
                [Configurable Link Placeholder: #{' '}
                — replace in src/config.js]
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
