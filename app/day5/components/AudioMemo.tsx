import { useEffect, useRef, useState } from "react";

const BARS = [
  4, 9, 14, 22, 17, 27, 34, 21, 12, 18, 29, 38, 30, 20, 11, 16, 25, 33, 41, 28, 19, 13, 8, 15, 24,
  36, 31, 22, 14, 9, 17, 26, 35, 27, 18, 10, 6, 12, 20, 30, 24, 15, 9, 5, 11, 19, 28, 21, 13, 7,
];

function clock(s: number) {
  if (isNaN(s) || s <= 0) return "0:00";
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export function AudioMemo() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(225); // initial duration fallback so it never displays 0:00
  const [pressed, setPressed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current && audioRef.current.duration && !isNaN(audioRef.current.duration)) {
      setDuration(audioRef.current.duration);
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-ink px-5 py-4" style={{ border: "2px solid var(--ink)" }}>
      <audio
        ref={audioRef}
        src="/day5/macarena.mp3"
        preload="metadata"
        onPlay={() => {
          setPlaying(true);
          window.dispatchEvent(new CustomEvent("pause-bg-music"));
        }}
        onPause={() => {
          setPlaying(false);
          window.dispatchEvent(new CustomEvent("resume-bg-music"));
        }}
        onTimeUpdate={() => {
          if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
        }}
        onLoadedMetadata={() => {
          if (audioRef.current && audioRef.current.duration) {
            setDuration(audioRef.current.duration);
          }
        }}
        onDurationChange={() => {
          if (audioRef.current && audioRef.current.duration) {
            setDuration(audioRef.current.duration);
          }
        }}
        onEnded={() => {
          setPlaying(false);
          setCurrentTime(0);
          window.dispatchEvent(new CustomEvent("resume-bg-music"));
        }}
      />
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label={playing ? "Pause the memo" : "Play the memo"}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          onClick={togglePlay}
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
            <span className="eyebrow truncate text-sand">Los Del Rio - Macarena</span>
            <span
              className="text-[12px] tabular-nums text-teal"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {clock(currentTime)} / {clock(duration)}
            </span>
          </div>

          <div
            className="mt-3 flex h-9 cursor-pointer items-end gap-[3px]"
            onClick={handleSeek}
          >
            {BARS.map((h, i) => {
              const passed = (i / BARS.length) * 100 <= pct;
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

          <div
            className="mt-3 h-[4px] w-full cursor-pointer bg-sand/30"
            onClick={handleSeek}
          >
            <div className="h-full bg-teal" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
