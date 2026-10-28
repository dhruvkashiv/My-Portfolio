import React, { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [contextLabel, setContextLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check touch screen
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target or parent is interactive
      const target = e.target;
      const interactiveEl = target.closest(
        'a, button, [role="button"], input, select, textarea, [data-cursor], .interactive-target'
      );

      if (interactiveEl) {
        setIsHovering(true);
        const label = interactiveEl.getAttribute("data-cursor") || "REC";
        setContextLabel(label);
      } else {
        setIsHovering(false);
        setContextLabel("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const size = isHovering ? 38 : 26;

  return (
    <div
      className="custom-cursor-container"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className={`custom-cursor-reticle ${isHovering ? "is-hovering" : ""}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div className="cursor-bracket-tl" />
        <div className="cursor-bracket-tr" />
        <div className="cursor-bracket-bl" />
        <div className="cursor-bracket-br" />
        <div className="cursor-center-dot" />

        {isHovering && contextLabel && (
          <div className="cursor-context-label">
            ● {contextLabel}
          </div>
        )}
      </div>
    </div>
  );
};
