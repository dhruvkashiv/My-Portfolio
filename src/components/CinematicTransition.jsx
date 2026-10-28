import React from "react";

export const CinematicTransition = ({ isShutterActive, isFlashActive, currentSection }) => {
  return (
    <>
      {/* Shutter Blade Overlay */}
      <div className={`cinematic-shutter-overlay ${isShutterActive ? "active" : ""}`}>
        <div className="shutter-top" />
        <div className="shutter-bottom" />
        <div className="shutter-hud">
          <div className="rec-indicator">
            <span className="rec-dot" />
            <span>CUT // SCENE: {currentSection.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Quick Camera Focus Flash Feedback */}
      <div className={`camera-focus-flash ${isFlashActive ? "flash" : ""}`} />
    </>
  );
};
