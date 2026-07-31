import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption: string;
  time: string;
  width: number;
  height: number;
  rotate?: number;
  accent?: "teal" | "violet";
  className?: string;
  delay?: number;
  drift?: number;
};

export function PhotoFrame({
  src,
  alt,
  caption,
  time,
  width,
  height,
  rotate = 0,
  accent = "teal",
  className = "",
  delay = 0,
  drift = 12,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const accentColor = accent === "teal" ? "var(--teal)" : "var(--violet)";

  return (
    <figure
      className={`reveal group relative ${className}`}
      style={
        {
          "--rd": `${delay}ms`,
          "--rx": `${drift}px`,
          "--ry": "20px",
        } as React.CSSProperties
      }
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative bg-paper p-[6px] transition-[transform,box-shadow] duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          border: "2px solid var(--ink)",
          transform: `rotate(${rotate}deg) translateY(${hovered ? -6 : 0}px)`,
          boxShadow: hovered ? "12px 12px 0 var(--ink)" : "6px 6px 0 var(--ink)",
          outline: hovered ? `2px solid ${accentColor}` : "2px solid transparent",
          outlineOffset: hovered ? "5px" : "0px",
          transitionDelay: hovered ? "0ms, 60ms" : "0ms",
        }}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="block h-full w-full object-cover"
        />
      </div>
      <figcaption
        className="pointer-events-none absolute left-1 top-[calc(100%+10px)] flex items-baseline gap-3 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          opacity: hovered ? 1 : 0,
          transform: `translateY(${hovered ? 0 : 8}px)`,
          transitionDelay: hovered ? "100ms" : "0ms",
        }}
      >
        <span className="eyebrow text-mauve">{time}</span>
        <span className="font-hand text-[19px] leading-none text-ink">{caption}</span>
      </figcaption>
    </figure>
  );
}
