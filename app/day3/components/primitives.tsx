import { useEffect, useRef, useState, type ReactNode } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    if (el.classList.contains("reveal")) io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}

export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

export function useParallax(speed = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const off = (r.top + r.height / 2 - window.innerHeight / 2) * -speed;
        el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);
  return ref;
}

/* --- ambient "voice memo" tone: a soft breathy hum, synthesised --- */
let ctx: AudioContext | null = null;
function whisper(seed: number) {
  if (typeof window === "undefined") return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  try {
    ctx ??= new (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const c = ctx;
    if (c.state === "suspended") void c.resume();
    const gain = c.createGain();
    gain.gain.setValueAtTime(0.0001, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.055, c.currentTime + 0.35);
    const filter = c.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 420 + (seed % 5) * 70;
    filter.Q.value = 2.2;
    const osc = c.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = 104 + (seed % 7) * 9;
    const lfo = c.createOscillator();
    lfo.frequency.value = 4.5;
    const lfoGain = c.createGain();
    lfoGain.gain.value = 12;
    lfo.connect(lfoGain).connect(osc.frequency);
    osc.connect(filter).connect(gain).connect(c.destination);
    osc.start();
    lfo.start();
    return () => {
      gain.gain.cancelScheduledValues(c.currentTime);
      gain.gain.setTargetAtTime(0.0001, c.currentTime, 0.12);
      setTimeout(() => {
        osc.stop();
        lfo.stop();
      }, 450);
    };
  } catch {
    return () => {};
  }
}

export function Waveform({ active }: { active: boolean }) {
  return (
    <span className="flex h-4 items-end gap-[2px]" aria-hidden>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <span
          key={i}
          className="w-[2px] origin-bottom bg-bone"
          style={{
            height: `${6 + ((i * 5) % 11)}px`,
            animation: active ? `wave ${620 + i * 90}ms ease-in-out infinite` : "none",
            animationDelay: `${i * 60}ms`,
            opacity: active ? 1 : 0.45,
          }}
        />
      ))}
    </span>
  );
}

type PolaroidProps = {
  src: string;
  alt: string;
  memo?: string;
  time?: string;
  caption?: string;
  rot?: number;
  className?: string;
  imgClassName?: string;
  delay?: number;
  drift?: boolean;
  seed?: number;
  style?: React.CSSProperties;
};

export function Polaroid({
  src,
  alt,
  memo,
  time,
  caption,
  rot = 0,
  className = "",
  imgClassName = "",
  delay = 0,
  drift = false,
  seed = 1,
  style,
}: PolaroidProps) {
  const [on, setOn] = useState(false);
  const stopRef = useRef<(() => void) | null>(null);

  useEffect(() => () => stopRef.current?.(), []);

  const start = () => {
    if (!memo || on) return;
    setOn(true);
    stopRef.current = whisper(seed);
  };
  const stop = () => {
    if (!on) return;
    setOn(false);
    stopRef.current?.();
    stopRef.current = null;
  };

  return (
    <figure
      className={`reveal group relative ${drift ? "ambient-drift" : ""} ${className}`}
      style={
        {
          ...style,
          "--rot": `${rot}deg`,
          "--reveal-delay": `${delay}ms`,
          "--drift-delay": `${(seed % 5) * 0.7}s`,
        } as React.CSSProperties
      }
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      tabIndex={memo ? 0 : -1}
    >
      <div
        className="photo-frame relative group-hover:-translate-y-1 group-hover:scale-[1.02]"
        style={{
          boxShadow: on
            ? "0 0 0 1px var(--umber), 0 40px 70px -18px oklch(0 0 0 / .9), 0 0 60px -12px color-mix(in oklab, var(--umber) 60%, transparent)"
            : undefined,
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`block w-full object-cover transition-[filter,opacity] duration-500 ${
            memo ? "opacity-85 group-hover:opacity-100" : ""
          } ${imgClassName}`}
        />
        {memo ? (
          <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 bg-ink/70 px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
            <Waveform active={on} />
            {time ? <span className="eyebrow text-[8px]">{time}</span> : null}
          </span>
        ) : null}
      </div>

      {memo ? (
        <figcaption
          className="marginalia pointer-events-none absolute left-1 top-full mt-3 max-w-[22ch] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100"
          style={{ transitionDelay: "100ms" }}
        >
          “{memo}”
        </figcaption>
      ) : caption ? (
        <figcaption className="marginalia mt-3">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function Eyebrow({ n, theme, className = "" }: { n: string; theme: string; className?: string }) {
  return (
    <span className={`eyebrow inline-block ${className}`}>
      Day {n} <span className="mx-2 text-umber">/</span> {theme}
    </span>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} className={`relative w-full ${className}`}>
      {children}
    </section>
  );
}