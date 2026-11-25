'use client';

import React, { useRef, useState } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  tilt = true,
  ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tiltTransform, setTiltTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });

    if (
      tilt &&
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      const px = (x / rect.width - 0.5) * 2;
      const py = (y / rect.height - 0.5) * 2;
      const maxDeg = rect.width > 600 ? 1.2 : 2.8;
      const rotateY = (px * maxDeg).toFixed(2);
      const rotateX = (-py * maxDeg).toFixed(2);
      setTiltTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    }
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => {
    setOpacity(0);
    setTiltTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card ${className}`}
      style={{
        transform: tilt ? tiltTransform : undefined,
        transformStyle: tilt ? 'preserve-3d' : undefined,
        willChange: tilt ? 'transform' : undefined,
      }}
      {...props}
    >
      <div
        className="spotlight-overlay"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          opacity,
          transition: 'opacity 0.25s ease',
          background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, rgba(0, 229, 153, 0.11), transparent 45%)`,
          zIndex: 1,
        }}
      />
      <div
        className="spotlight-border"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          padding: '1px',
          opacity,
          transition: 'opacity 0.25s ease',
          background: `radial-gradient(360px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.45), transparent 45%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: 2,
        }}
      />
      <div className="spotlight-content">{children}</div>
    </div>
  );
};
