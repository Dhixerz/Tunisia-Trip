import { useEffect, useRef, useState } from "react";

const BARS = [
  4, 9, 14, 22, 17, 27, 34, 21, 12, 18, 29, 38, 30, 20, 11, 16, 25, 33, 41, 28, 19, 13, 8, 15, 24,
  36, 31, 22, 14, 9, 17, 26, 35, 27, 18, 10, 6, 12, 20, 30, 24, 15, 9, 5, 11, 19, 28, 21, 13, 7,
];

const DURATION = 84; // seconds

function clock(s: number) {
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export function AudioMemo() {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [pressed, setPressed] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setT((prev) => {
        const next = prev + dt;
        if (next >= DURATION) {
          setPlaying(false);
          return 0;
        }
        return next;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [playing]);

  const pct = (t / DURATION) * 100;

  return (
    <div className="bg-ink px-5 py-4" style={{ border: "2px solid var(--ink)" }}>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label={playing ? "Pause the memo" : "Play the memo"}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          onClick={() => setPlaying((p) => !p)}
          className="flex h-[45px] w-[45px] shrink-0 items-center justify-center bg-sand text-ink transition-colors duration-200 hover:bg-teal"
          style={{ animation: playing ? "btn-press 350ms cubic-bezier(0.4,0,0.2,1)" : undefined }}
        >
          <span style={{ transform: `translateY(${pressed ? 2 : 0}px)`, display: "block" }}>
            {playing ? (
              <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true">
                <path d="M0 0h4.5v16H0zM9.5 0H14v16H9.5z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true">
                <path d="M0 0l14 8-14 8z" fill="currentColor" />
              </svg>
            )}
          </span>
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <span className="eyebrow truncate text-sand">Voice memo — dunes at 18:40</span>
            <span
              className="text-[12px] tabular-nums text-teal"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {clock(t)} / {clock(DURATION)}
            </span>
          </div>

          <div className="mt-3 flex h-9 items-end gap-[3px]">
            {BARS.map((h, i) => {
              const passed = (i / BARS.length) * 100 < pct;
              return (
                <span
                  key={i}
                  className="flex-1 origin-bottom"
                  style={{
                    height: `${Math.max(12, h)}%`,
                    background: passed ? "var(--teal)" : "var(--sand)",
                    opacity: passed ? 1 : 0.45,
                    animation: playing ? `wave-pulse ${1.4 + (i % 5) * 0.22}s ease-in-out infinite` : undefined,
                    animationDelay: `${(i % 7) * 60}ms`,
                  }}
                />
              );
            })}
          </div>

          <div className="mt-3 h-[3px] w-full bg-sand/30">
            <div className="h-full bg-teal" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
