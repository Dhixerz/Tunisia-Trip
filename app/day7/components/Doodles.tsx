type P = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Compass({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="24" {...stroke} />
      <path d="M22 42 38 26 42 22 38 38 22 42Z" {...stroke} />
      <path d="M32 4v6M32 54v6M4 32h6M54 32h6" {...stroke} />
    </svg>
  );
}

export function PlaneTrail({ className }: P) {
  return (
    <svg viewBox="0 0 120 48" className={className} aria-hidden="true">
      <path d="M2 44C24 44 40 30 56 16" strokeDasharray="5 7" {...stroke} />
      <path d="M62 4 96 18 78 22 70 34 66 22 54 18 62 4Z" {...stroke} />
    </svg>
  );
}

export function Stamp({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M8 8h48v48H8z"
        strokeDasharray="4 4"
        {...stroke}
      />
      <circle cx="32" cy="28" r="9" {...stroke} />
      <path d="M18 46h28" {...stroke} />
    </svg>
  );
}

export function MapPin({ className }: P) {
  return (
    <svg viewBox="0 0 32 40" className={className} aria-hidden="true">
      <path d="M16 38C16 38 28 24 28 15A12 12 0 0 0 4 15c0 9 12 23 12 23Z" {...stroke} />
      <circle cx="16" cy="15" r="4.5" {...stroke} />
    </svg>
  );
}

export function PalmLeaf({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M32 60V22" {...stroke} />
      <path d="M32 24C22 16 14 16 8 20c8 2 14 8 24 12M32 24c10-8 18-8 24-4-8 2-14 8-24 12M32 36c-8-4-14-4-20-1 7 2 12 6 20 9M32 36c8-4 14-4 20-1-7 2-12 6-20 9" {...stroke} />
    </svg>
  );
}

export function ArrowScribble({ className }: P) {
  return (
    <svg viewBox="0 0 100 60" className={className} aria-hidden="true">
      <path d="M4 8c26 2 44 14 54 40" {...stroke} />
      <path d="M46 44l12 6 2-13" {...stroke} />
    </svg>
  );
}

export function Camera({ className }: P) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden="true">
      <path d="M4 12h12l5-7h22l5 7h12v32H4z" {...stroke} />
      <circle cx="32" cy="27" r="10" {...stroke} />
    </svg>
  );
}

export function Stitch({ className }: P) {
  return (
    <svg viewBox="0 0 200 12" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path d="M0 6h200" strokeDasharray="8 6" {...stroke} />
    </svg>
  );
}
