import { Compass, Stitch } from "./Doodles";
import { useReveal } from "./useReveal";

const STATS = [
  { k: "Kilometres by road", v: "1,148" },
  { k: "Photos captured", v: "612" },
  { k: "Glasses of tea", v: "37" },
  { k: "Nights under sand", v: "2" },
];

export function Closing() {
  const ref = useReveal<HTMLElement>(0.15);

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper py-28">
      <div className="pointer-events-none absolute inset-0 grain-drift" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <div
          className="reveal grid grid-cols-2 bg-sand lg:grid-cols-4"
          style={{ border: "2px solid var(--ink)" }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.k}
              className="px-6 py-7"
              style={{
                borderRight: i < STATS.length - 1 ? "2px dashed var(--ink)" : undefined,
              }}
            >
              <div className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-none">{s.v}</div>
              <div className="eyebrow mt-3 text-mauve">{s.k}</div>
            </div>
          ))}
        </div>

        <div
          className="reveal mt-24 grid grid-cols-1 bg-paper hard-shadow lg:grid-cols-[1.15fr_1fr]"
          style={{ border: "3px solid var(--ink)", "--ry": "24px" } as React.CSSProperties}
        >
          <div className="p-10 lg:p-14" style={{ borderRight: "2px dashed var(--ink)" }}>
            <span className="eyebrow text-violet">Postcard, written on the plane</span>
            <p className="mt-6 font-hand text-[26px] leading-[1.35] text-ink">
              Lina — seven days and I still catch sand in the pocket of my jacket. I kept the ticket
              from the Douz bus, the one you folded into a triangle. Next time we go further south,
              and we stay an extra night on the ridge. I love you. Thank you for the wind, the tea,
              and the singing in the car at 2 a.m.
            </p>
            <p className="mt-10 font-hand text-[30px] text-mauve">— Y.</p>
          </div>
          <div className="flex flex-col justify-between gap-8 bg-sand p-10 lg:p-14">
            <div className="flex justify-end">
              <div
                className="flex h-24 w-20 items-center justify-center bg-paper"
                style={{ border: "2px dashed var(--ink)", transform: "rotate(3deg)" }}
              >
                <Compass className="h-10 w-10 text-ink/70" />
              </div>
            </div>
            <div className="space-y-3">
              <Stitch className="h-3 w-full text-ink/40" />
              <Stitch className="h-3 w-full text-ink/40" />
              <Stitch className="h-3 w-2/3 text-ink/40" />
            </div>
            <a
              href="#day-05"
              className="inline-flex h-[45px] items-center justify-center bg-ink px-6 text-[12px] font-semibold uppercase tracking-[0.28em] text-sand transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-paper hover:text-ink"
              style={{ border: "2px solid var(--ink)" }}
            >
              Read day 05 again
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
