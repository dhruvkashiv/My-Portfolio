import React, { useState, useEffect } from "react";
import { CONFIG } from "../config";
import { GithubIcon, InstagramIcon, ArrowUpRightIcon } from "./Icons";

export const Hero = ({ onNavigate }) => {
  // Live 24fps timecode generator
  const [timecode, setTimecode] = useState("01:24:18:14");

  useEffect(() => {
    let frame = 14;
    let sec = 18;
    let min = 24;
    let hour = 1;

    const interval = setInterval(() => {
      frame++;
      if (frame >= 24) {
        frame = 0;
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
          if (min >= 60) {
            min = 0;
            hour = (hour + 1) % 24;
          }
        }
      }
      const pad = (n) => String(n).padStart(2, "0");
      setTimecode(`${pad(hour)}:${pad(min)}:${pad(sec)}:${pad(frame)}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      {/* Cinematic Viewfinder Frame Overlay */}
      <div className="hero-viewfinder-frame">
        <div className="viewfinder-corner viewfinder-corner-tl" />
        <div className="viewfinder-corner viewfinder-corner-tr" />
        <div className="viewfinder-corner viewfinder-corner-bl" />
        <div className="viewfinder-corner viewfinder-corner-br" />

        {/* Top HUD */}
        <div className="hero-hud-top">
          <div className="rec-indicator">
            <span className="rec-dot" />
            <span>REC</span>
            <span style={{ opacity: 0.6 }}>[RAW 4K]</span>
          </div>
          <div className="hero-hud-element timecode-readout">
            TC: {timecode}
          </div>
        </div>

        {/* Center Reticle / Crosshair */}
        <div className="hero-crosshair" />

        {/* Bottom HUD */}
        <div className="hero-hud-bottom">
          <div className="hero-hud-element">
            <span>2.39:1 CINE</span> · <span>24.00 FPS</span>
          </div>
          <div className="hero-hud-element">
            <span>ISO 400</span> · <span>f/1.8</span> · <span>BAT 98%</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-label-wrap">
          <span className="section-badge">{CONFIG.tagline}</span>
        </div>

        <h1 className="hero-headline">{CONFIG.headline}</h1>

        <p className="hero-subtext">{CONFIG.subtext}</p>

        <div className="hero-cta-group">
          <button
            onClick={() => onNavigate("projects")}
            className="btn btn-primary"
            data-cursor="EXPLORE"
          >
            <span>Explore My Work</span>
            <ArrowUpRightIcon size={16} />
          </button>

          <button
            onClick={() => onNavigate("contact")}
            className="btn btn-secondary"
            data-cursor="CONNECT"
          >
            <span>Let’s Connect</span>
          </button>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href={CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon-square"
              title="GitHub Profile"
              data-cursor="GITHUB"
              aria-label="Dhruv Kashiv on GitHub"
            >
              <GithubIcon size={19} />
            </a>

            <a
              href={CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon-square"
              title="Instagram Profile"
              data-cursor="INSTAGRAM"
              aria-label="Dhruv Kashiv on Instagram"
            >
              <InstagramIcon size={19} />
            </a>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <button
        onClick={() => onNavigate("about")}
        className="hero-scroll-indicator"
        data-cursor="SCROLL"
        aria-label="Scroll down to About section"
      >
        <span>SCROLL</span>
        <div className="scroll-line" />
      </button>
    </section>
  );
};
