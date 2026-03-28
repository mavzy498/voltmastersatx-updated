'use client';

export function Logo({ className = 'h-8', variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const isLight = variant === 'light';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="38 92 520 96"
      className={`w-auto ${className}`}
      aria-label="VoltMasters ATX"
      role="img"
    >
      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isLight ? '#d4d4d4' : '#2A2A2A'} />
          <stop offset="100%" stopColor={isLight ? '#eeeeee' : '#111111'} />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="600" height="280" fill="transparent" />

      {/* Grid pattern */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(128,128,128,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="280" fill="url(#grid)" />

      {/* Hexagon */}
      <polygon
        points="84,98.784 118.048,118.496 118.048,161.504 84,181.216 49.952,161.504 49.952,118.496"
        fill="url(#hexGrad)"
      />
      <polygon
        points="84,104.16 112.672,122.08 112.672,157.92 84,175.84 55.328,157.92 55.328,122.08"
        fill="none"
        stroke="rgba(255,184,0,0.3)"
        strokeWidth="1.434"
      />

      {/* Lightning bolt */}
      <path
        d="M87.584 113.12 L69.664 143.584 H80.416 L76.832 166.88 L98.336 136.416 H87.584 Z"
        fill="#FFB800"
      />

      {/* VOLTMASTERS text */}
      <text
        x="152.8"
        y="137.83"
        fontFamily="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif"
        fontWeight="800"
        fontSize="43.4"
        letterSpacing="0.05em"
        dominantBaseline="auto"
      >
        <tspan fill={isLight ? '#FFFFFF' : '#111111'}>VOLT</tspan>
        <tspan fill="#FFB800">MASTERS</tspan>
      </text>

      {/* AUSTIN, TX text */}
      <text
        x="152.8"
        y="170.59"
        fontFamily="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif"
        fontWeight="700"
        fontSize="18.2"
        letterSpacing="0.3em"
        fill={isLight ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)'}
      >
        AUSTIN, TX
      </text>
    </svg>
  );
}