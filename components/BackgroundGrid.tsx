'use client';

import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <svg className="bg-noise" aria-hidden="true">
        <filter id="grainNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainNoise)" />
      </svg>
    </>
  );
};
