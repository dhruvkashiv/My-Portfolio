import React from "react";
import { CONFIG } from "../config";
import { FilmIcon, PlayIcon, InstagramIcon, ArrowUpRightIcon } from "./Icons";

export const Creator = () => {
  return (
    <section id="creator" className="section-wrapper" aria-label="Creator and Video Editing Portfolio">
      <div className="section-header-block">
        <span className="section-badge">TIMELINE // FRAME 03</span>
        <h2 className="section-title">BEHIND THE SCENES.</h2>
        <p className="section-subtitle">
          Cinematic experiments, video editing cuts, rhythm studies, and creative visual explorations.
        </p>
      </div>

      {/* 2x2 Visual Gallery Grid */}
      <div className="creator-grid">
        {CONFIG.creatorWorks.map((work) => (
          <div key={work.id} className="creator-card viewfinder-box">
            <div className="viewfinder-corner viewfinder-corner-tl" />
            <div className="viewfinder-corner viewfinder-corner-tr" />
            <div className="viewfinder-corner viewfinder-corner-bl" />
            <div className="viewfinder-corner viewfinder-corner-br" />

            {/* Cinematic Media / Thumbnail Area */}
            <div className="creator-media-box">
              <div className="creator-media-preview">
                <FilmIcon size={36} />
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontFamily: "var(--font-mono)",
                    marginTop: "8px",
                  }}
                >
                  [{work.aspectRatio} CUT PLACEHOLDER]
                </span>
              </div>

              {/* Hover Play Reticle */}
              <div className="creator-play-overlay">
                <div className="play-reticle-btn" data-cursor="PLAY">
                  <PlayIcon size={18} />
                </div>
              </div>

              {/* Media Meta Bar */}
              <div className="creator-media-meta">
                <span>{work.duration}</span>
                <span>{work.fps}</span>
                <span>TC: {work.timecode}</span>
              </div>
            </div>

            {/* Description & Category */}
            <div className="creator-info">
              <div className="creator-info-cat">{work.category}</div>
              <h3 className="creator-info-title">{work.title}</h3>
              <p className="creator-info-desc">{work.description}</p>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                  }}
                >
                  [Replaceable Video Reel • src/config.js]
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prominent Instagram CTA Banner */}
      <div className="creator-cta-banner viewfinder-box">
        <div className="creator-cta-text">
          <span className="section-badge" style={{ marginBottom: "0.5rem" }}>
            CREATIVE DISPATCHES
          </span>
          <h3>Follow the Creative Process on Instagram</h3>
          <p>
            Stills, color grades, behind-the-scenes timelines, and micro visual essays.
          </p>
          <div style={{ marginTop: "0.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
              }}
            >
              Configurable Handle: {CONFIG.social.instagram}
            </span>
          </div>
        </div>

        <a
          href={CONFIG.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-violet"
          data-cursor="INSTAGRAM"
          aria-label="Dhruv Kashiv on Instagram"
        >
          <InstagramIcon size={18} />
          <span>View on Instagram</span>
          <ArrowUpRightIcon size={16} />
        </a>
      </div>
    </section>
  );
};
