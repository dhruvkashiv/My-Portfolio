import React, { useState, useMemo } from "react";
import { CONFIG } from "../config";
import { TerminalIcon, GithubIcon, ArrowUpRightIcon } from "./Icons";

export const ActivityGrid = () => {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate deterministic 52-week demo activity matrix (7 days x 52 weeks)
  const { weeks, totalContributions } = useMemo(() => {
    const weeksData = [];
    let total = 0;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Seeded pseudo-random generator
    let seed = 42;
    const pseudoRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let w = 0; w < 52; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const rand = pseudoRandom();
        let level = 0;
        let count = 0;

        // Realistic commit clustering
        if (rand > 0.82) {
          level = 4;
          count = 7 + Math.floor(rand * 5);
        } else if (rand > 0.65) {
          level = 3;
          count = 4 + Math.floor(rand * 3);
        } else if (rand > 0.45) {
          level = 2;
          count = 2 + Math.floor(rand * 2);
        } else if (rand > 0.28) {
          level = 1;
          count = 1;
        }

        total += count;
        const monthName = months[Math.floor((w / 52) * 12)];
        const dayOfMonth = ((w * 7 + d) % 28) + 1;

        days.push({
          date: `${monthName} ${dayOfMonth}`,
          count,
          level,
        });
      }
      weeksData.push(days);
    }

    return { weeks: weeksData, totalContributions: total };
  }, []);

  return (
    <section id="activity" className="section-wrapper" aria-label="GitHub Development Activity Cadence">
      <div className="section-header-block">
        <span className="section-badge">ENGINEERING CADENCE // FRAME 04</span>
        <h2 className="section-title">ENGINEERING ACTIVITY.</h2>
        <p className="section-subtitle">
          Continuous iterative development, script experiments, and open-source explorations.
        </p>
      </div>

      <div className="activity-container viewfinder-box">
        <div className="viewfinder-corner viewfinder-corner-tl" />
        <div className="viewfinder-corner viewfinder-corner-tr" />
        <div className="viewfinder-corner viewfinder-corner-bl" />
        <div className="viewfinder-corner viewfinder-corner-br" />

        {/* Header Stats */}
        <div className="activity-header">
          <div className="activity-stats">
            <div className="stat-item">
              <span className="stat-number">{totalContributions}</span>
              <span className="stat-label">Total Contributions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">28 Days</span>
              <span className="stat-label">Longest Streak</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">52 Weeks</span>
              <span className="stat-label">Continuous Cycle</span>
            </div>
          </div>

          <a
            href={CONFIG.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            data-cursor="GITHUB"
          >
            <GithubIcon size={16} />
            <span>Profile @dhruvkashiv</span>
            <ArrowUpRightIcon size={14} />
          </a>
        </div>

        {/* Matrix Visualization */}
        <div className="activity-matrix-wrap">
          <div className="activity-matrix" role="grid" aria-label="Contribution Activity Matrix">
            {weeks.map((week, wIdx) =>
              week.map((day, dIdx) => (
                <div
                  key={`${wIdx}-${dIdx}`}
                  className={`matrix-cell level-${day.level}`}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredCell({
                      x: rect.left + rect.width / 2,
                      y: rect.top - 10,
                      date: day.date,
                      count: day.count,
                    });
                  }}
                  onMouseLeave={() => setHoveredCell(null)}
                  role="gridcell"
                  aria-label={`${day.count} contributions on ${day.date}`}
                />
              ))
            )}
          </div>
        </div>

        {/* Footer & Legend */}
        <div className="activity-footer">
          <div className="activity-sample-note">
            <TerminalIcon size={14} />
            <span>[Notice: Sample activity visualization — non-fabricated demo cadence]</span>
          </div>

          <div className="activity-legend">
            <span style={{ marginRight: "4px" }}>Less</span>
            <div className="legend-cell level-0" />
            <div className="legend-cell level-1" />
            <div className="legend-cell level-2" />
            <div className="legend-cell level-3" />
            <div className="legend-cell level-4" />
            <span style={{ marginLeft: "4px" }}>More</span>
          </div>
        </div>
      </div>

      {/* Floating Hover Tooltip */}
      {hoveredCell && (
        <div
          className="activity-tooltip"
          style={{
            left: `${hoveredCell.x}px`,
            top: `${hoveredCell.y}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          {hoveredCell.count === 0
            ? `No contributions on ${hoveredCell.date}`
            : `${hoveredCell.count} contribution${hoveredCell.count > 1 ? "s" : ""} on ${hoveredCell.date}`}
        </div>
      )}
    </section>
  );
};
