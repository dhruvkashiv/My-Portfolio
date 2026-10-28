import React from "react";
import { CONFIG } from "../config";
import { CameraIcon, TerminalIcon, FilmIcon, SparklesIcon } from "./Icons";

export const About = () => {
  return (
    <section id="about" className="section-wrapper" aria-label="About Dhruv Kashiv">
      <div className="section-header-block">
        <span className="section-badge">BIO // FRAME 01</span>
        <h2 className="section-title">THE PERSON BEHIND THE FRAME.</h2>
        <p className="section-subtitle">
          Bridging technical precision with cinematic expression to craft memorable digital experiences.
        </p>
      </div>

      <div className="about-grid">
        {/* Editorial Photo / Still Frame Placeholder */}
        <div className="about-portrait-frame viewfinder-box">
          <div className="viewfinder-corner viewfinder-corner-tl" />
          <div className="viewfinder-corner viewfinder-corner-tr" />
          <div className="viewfinder-corner viewfinder-corner-bl" />
          <div className="viewfinder-corner viewfinder-corner-br" />

          {/* Top HUD */}
          <div className="about-hud-meta">
            <span>PORTRAIT_STILL // 01</span>
            <span>4:5 ASP</span>
          </div>

          {/* Visual Placeholder Content */}
          <div className="about-portrait-placeholder">
            <div className="about-portrait-icon">
              <CameraIcon size={26} />
            </div>
            <div className="about-portrait-tag">DHRUV KASHIV</div>
            <p className="about-portrait-note">
              [Personal photo or cinematic still placeholder — replace in source]
            </p>
          </div>

          {/* Bottom HUD */}
          <div className="about-hud-meta">
            <span>50MM PRIME</span>
            <span>SHUTTER 1/48</span>
          </div>
        </div>

        {/* Text & Philosophy Content */}
        <div className="about-text-content">
          <p className="about-lead">
            I am an aspiring engineer, content creator, and video editor driven by curiosity
            at the crossroads of code and cinema.
          </p>

          <p className="about-bio">
            Whether architecting full-stack web platforms, training computer vision heuristics,
            or assembling visual stories on a video timeline, I view technology and filmmaking
            as complementary disciplines: one provides the analytical framework to build, while
            the other grants the empathy and pacing to resonate.
          </p>

          {/* Creative Pillars */}
          <div className="about-pillars">
            <div className="about-pillar-card">
              <div className="about-pillar-title">
                <TerminalIcon size={16} />
                <span>The Engineering Lens</span>
              </div>
              <p className="about-pillar-desc">
                Constructing robust web applications, exploring AI-driven workflows, and solving
                complex logistical challenges with clean code.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="about-pillar-title">
                <FilmIcon size={16} />
                <span>The Storytelling Cut</span>
              </div>
              <p className="about-pillar-desc">
                Translating raw ideas into captivating visual narratives through rhythm, deliberate
                sound design, and color grading.
              </p>
            </div>
          </div>

          {/* Skills List */}
          <div className="skills-wrapper">
            <div className="skills-title">COMPACT TOOLKIT & EXPERTISE</div>
            <div className="skills-tags">
              {CONFIG.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-tag"
                  data-cursor={skill.code}
                  title={`${skill.type} — ${skill.level}`}
                >
                  <span className="skill-tag-dot" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
