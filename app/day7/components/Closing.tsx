import { Compass, Stitch } from "./Doodles";
import { useReveal } from "./useReveal";

const STATS = [
  { k: "Kilometres away from Russia", v: "5.508" },
  { k: "Photos sent", v: "18" },
  { k: "Love from ur girl", v: "∞" },
  { k: "Nights under African Skies", v: "7" },
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
            <span className="eyebrow text-violet">Postcard, written from Indonesia</span>
            <p className="mt-6 font-hand text-[26px] leading-[1.35] text-ink">
              You are in Tunisia but the postcard is from Indonesia, why? Because I have the power to do so. I just want to say that I am truly happy you enjoyed your time in Tunisia. I do miss you a lot here from Indonesia. And I also really do want to smash some men in Tunisia. Watch closely, it's gonna be us together for your next trip! I can't wait to talk and play with you more ^^ Welcome back to Russia, love.
            </p>
            <p className="mt-10 font-hand text-[30px] text-mauve">— D.</p>
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
              href="/"
              className="inline-flex h-[45px] items-center justify-center bg-ink px-6 text-[12px] font-semibold uppercase tracking-[0.28em] text-sand transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-paper hover:text-ink"
              style={{ border: "2px solid var(--ink)" }}
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
