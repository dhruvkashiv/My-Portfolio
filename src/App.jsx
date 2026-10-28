import React, { useState, useEffect } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { CinematicTransition } from "./components/CinematicTransition";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Creator } from "./components/Creator";
import { ActivityGrid } from "./components/ActivityGrid";
import { Contact } from "./components/Contact";

export function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isShutterActive, setIsShutterActive] = useState(false);
  const [isFlashActive, setIsFlashActive] = useState(false);
  const [targetTransitionSection, setTargetTransitionSection] = useState("hero");

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "creator", "activity", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Cinematic Shutter Navigation Trigger
  const handleNavigate = (targetId) => {
    setTargetTransitionSection(targetId);
    setIsShutterActive(true);

    // After 180ms when shutter closes, jump/scroll to section
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 180);

    // After 400ms reopen shutter
    setTimeout(() => {
      setIsShutterActive(false);
    }, 420);
  };

  // Camera Focus Flash Trigger (for project inspection)
  const triggerFocusFlash = () => {
    setIsFlashActive(true);
    setTimeout(() => {
      setIsFlashActive(false);
    }, 280);
  };

  return (
    <div className="portfolio-app-root">
      {/* Signature Viewfinder Cursor */}
      <CustomCursor />

      {/* Cinematic Shutter Transition & Camera Focus Overlay */}
      <CinematicTransition
        isShutterActive={isShutterActive}
        isFlashActive={isFlashActive}
        currentSection={targetTransitionSection}
      />

      {/* Top Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Page Sections */}
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Projects onTriggerFlash={triggerFocusFlash} />
        <Creator />
        <ActivityGrid />
        <Contact />
      </main>
    </div>
  );
}

export default App;
