import React from 'react';

/**
 * RoadDivider
 * Renders a custom road divider (longer yellow dashes, no rounded edges).
 */
function RoadDivider() {
  return (
    <div className="w-full flex justify-center mt-12">
      <div className="relative w-full h-2 bg-transparent overflow-hidden flex items-center">
        <div className="absolute left-0 top-1/2 w-full flex justify-between items-center" style={{transform:'translateY(-50%)'}}>
          {Array.from({length: 40}).map((_,i) => (
            <div key={i} className="h-1 w-8 bg-yellow-400 mx-1" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadDivider;
