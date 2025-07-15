import React from 'react';

/**
 * RoadDivider
 * Renders a custom SVG road divider with a dark road, dashed yellow center line, and subtle shadow.
 */
function RoadDivider() {
  return (
    <div className="w-full flex justify-center my-12">
      <svg viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-5xl h-10">
        {/* Road background */}
        <rect x="0" y="10" width="1200" height="20" rx="10" fill="#222" filter="url(#shadow)" />
        {/* Dashed yellow center line */}
        <line x1="0" y1="20" x2="1200" y2="20" stroke="#FFD600" strokeWidth="4" strokeDasharray="32 24" strokeLinecap="round" />
        {/* Subtle shadow */}
        <defs>
          <filter id="shadow" x="0" y="10" width="1200" height="20" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default RoadDivider;
