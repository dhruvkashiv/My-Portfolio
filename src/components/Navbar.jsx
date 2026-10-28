import React, { useState, useEffect } from "react";
import { CONFIG } from "../config";

export const Navbar = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "HOME", idx: "00" },
    { id: "about", label: "ABOUT", idx: "01" },
    { id: "projects", label: "PROJECTS", idx: "02" },
    { id: "creator", label: "CREATOR", idx: "03" },
    { id: "activity", label: "ACTIVITY", idx: "04" },
    { id: "contact", label: "CONTACT", idx: "05" },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="navbar-container"
      style={{
        backgroundColor: scrolled
          ? "rgba(10, 12, 16, 0.94)"
          : "rgba(10, 12, 16, 0.7)",
      }}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="navbar-inner">
        {/* Brand Monogram */}
        <button
          onClick={() => handleNavClick("hero")}
          className="nav-brand"
          data-cursor="DHRUV"
          aria-label="Dhruv Kashiv Home"
        >
          <span className="nav-brand-dot" />
          <span>DHRUV KASHIV</span>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {navItems.slice(1).map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`nav-link-btn ${activeSection === item.id ? "active" : ""}`}
                data-cursor={item.label}
              >
                <span className="nav-idx">[{item.idx}]</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Status / REC Indicator */}
        <div className="nav-status">
          <div className="rec-indicator" title="Live Viewfinder Mode">
            <span className="rec-dot" />
            <span>REC 24FPS</span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{ display: "none" }}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};
