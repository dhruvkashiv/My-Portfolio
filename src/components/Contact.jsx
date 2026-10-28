import React, { useState } from "react";
import { CONFIG } from "../config";
import {
  GithubIcon,
  InstagramIcon,
  MailIcon,
  CopyIcon,
  CheckIcon,
  ArrowUpRightIcon,
} from "./Icons";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (!CONFIG.social.email) return;
    navigator.clipboard.writeText(CONFIG.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" aria-label="Contact and Connect">
      <div className="section-wrapper" style={{ paddingBottom: "3rem" }}>
        {/* Contact Hero Box */}
        <div className="contact-box viewfinder-box">
          <div className="viewfinder-corner viewfinder-corner-tl" />
          <div className="viewfinder-corner viewfinder-corner-tr" />
          <div className="viewfinder-corner viewfinder-corner-bl" />
          <div className="viewfinder-corner viewfinder-corner-br" />

          <span className="section-badge">COLLABORATION // FRAME 05</span>

          <h2 className="contact-headline">
            HAVE AN IDEA?
            <br />
            LET’S MAKE IT REAL.
          </h2>

          <p className="contact-subtext">
            Whether you want to build an AI-driven digital product, edit a cinematic video,
            or brainstorm an ambitious creative concept, I am always open to meaningful
            conversations and collaborations.
          </p>

          <div className="contact-channels">
            {/* Copy Email Interaction */}
            {CONFIG.social.email ? (
              <button
                onClick={handleCopyEmail}
                className="copy-email-btn"
                data-cursor="COPY EMAIL"
                title="Click to copy email address"
              >
                <MailIcon size={18} />
                <span>{CONFIG.social.email}</span>
                <span className={`copy-badge ${copied ? "copied" : ""}`}>
                  {copied ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <CheckIcon size={12} /> COPIED
                    </span>
                  ) : (
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <CopyIcon size={12} /> COPY
                    </span>
                  )}
                </span>
              </button>
            ) : (
              <div className="placeholder-notice">
                [Email placeholder: configure in src/config.js]
              </div>
            )}

            {/* Direct Mailto */}
            {CONFIG.social.email && (
              <a
                href={`mailto:${CONFIG.social.email}`}
                className="btn btn-secondary"
                data-cursor="SEND MAIL"
              >
                <span>Compose Mail</span>
                <ArrowUpRightIcon size={16} />
              </a>
            )}

            {/* GitHub */}
            <a
              href={CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              data-cursor="GITHUB"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            {/* Instagram */}
            <a
              href={CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              data-cursor="INSTAGRAM"
            >
              <InstagramIcon size={16} />
              <span>Instagram</span>
            </a>
          </div>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.74rem",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span className="rec-dot" style={{ width: "6px", height: "6px" }} />
            <span>STATUS: {CONFIG.status}</span>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="site-footer">
        <div className="footer-inner">
          <div className="footer-credits">
            <span>{CONFIG.name} © {currentYear}. All rights reserved.</span>
          </div>

          <div className="footer-hud">
            <span>BUILD: REACT + VITE</span>
            <span>·</span>
            <span>CINEMATIC RETICLE MODE</span>
            <span>·</span>
            <span>2.39:1 RATIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
