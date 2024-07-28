import React from "react";

import "../styles/Title.css";

function Title() {
  return (
    <div className="logo-container">
      <svg width="400" height="80" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7289da" />
            <stop offset="100%" stopColor="#5865f2" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="url(#gradient)"
          fontSize="36"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          Bulk Gmail Sender
        </text>
      </svg>
      <div className="logo-icons">
        <span className="logo-icon">💌</span>
        <span className="logo-icon">💌</span>
      </div>
    </div>
  );
}

export default Title;
