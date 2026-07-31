import { useEffect, useRef, useState } from "react";
import { days, photos } from "./diary-data";
import { Waveform } from "./primitives";
import { scrollToDay } from "./Chrome";

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={photos.hero}
          alt="Arina walking through a sunlit alley in a Tunisian medina at golden hour"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--ink) 6%, color-mix(in oklab, var(--umber) 45%, transparent) 45%, oklch(0 0 0 / .35) 100%)",
          }}
        />

        <span className="marginalia absolute right-6 top-24 max-w-[18ch] text-right text-[12px] md:right-10">
          presented for you, my love
        </span>
        <span
          className="marginalia absolute right-3 top-1/2 hidden rotate-90 whitespace-nowrap text-[8px] md:block"
          aria-hidden
        >
          36.8065° N, 10.1815° E · 04–10 · TUN
        </span>

        <div className="absolute bottom-[9vh] left-6 right-6 md:left-10">
          <h1 className="display-bold flex flex-wrap items-start gap-3 text-[clamp(3.4rem,13vw,11rem)]">
            TUNISIA
            <sup className="display-italic mt-3 text-[clamp(0.9rem,2.4vw,2.5rem)] text-stone">
              seven days
            </sup>
          </h1>
          <p className="display-italic mt-4 max-w-[18ch] text-[clamp(1.8rem,6vw,6rem)] text-stone">
            more funsies on this day
          </p>
        </div>
      </div>

      <FilmStrip />
    </section>
  );
}

function FilmStrip() {
  const ref = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [near, setNear] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleCardClick = (d: (typeof days)[0]) => {
    if (playingId === d.id) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingId(null);
      return;
    }

    if (d.audio) {
      if (!audioRef.current) {
        audioRef.current = new Audio(d.audio);
      } else {
        audioRef.current.pause();
        audioRef.current.src = d.audio;
      }
      audioRef.current.play().catch(() => {});
      setPlayingId(d.id);
    }
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const el = ref.current;
      const bg = bgRef.current;
      if (!el || !bg) return;
      const r = el.getBoundingClientRect();
      const off = (r.top + r.height / 2 - window.innerHeight / 2) * 0.2;
      bg.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0) scale(1.15)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden border-y border-bone/10 py-14">
      <div
        ref={bgRef}
        aria-hidden
        className="absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage: `url(${photos.day5a})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(28px) saturate(0.7)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-ink/70" aria-hidden />

      <div
        className="flex w-full gap-px overflow-x-auto px-px [scrollbar-width:none]"
        onMouseLeave={() => setNear(null)}
      >
        {days.map((d, i) => {
          const active = near === i || playingId === d.id;
          const isPlaying = playingId === d.id;
          return (
            <button
              key={d.id}
              type="button"
              onMouseEnter={() => setNear(i)}
              onClick={() => handleCardClick(d)}
              className="group relative min-w-[42vw] flex-1 overflow-hidden border border-bone/10 bg-bone/5 p-3 text-left backdrop-blur-md transition-[transform,box-shadow] duration-[420ms] sm:min-w-0"
              style={{
                transform: active ? "scale(1.02)" : "scale(1)",
                boxShadow: active
                  ? "0 30px 60px -20px oklch(0 0 0 / .9), 0 0 0 1px color-mix(in oklab, var(--umber) 70%, transparent)"
                  : "none",
                transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={d.cover}
                  alt={`${d.title}, day ${d.n}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-opacity duration-500"
                  style={{ opacity: active ? 1 : 0.6 }}
                />
              </div>
              <div className="mt-3 flex items-end justify-between gap-2">
                <span className="display-bold text-3xl">{d.n}</span>
                <span className={`transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  <Waveform active={active} />
                </span>
              </div>
              <span className="eyebrow mt-1 block truncate">{d.theme}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}