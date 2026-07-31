const heroDunes = "/day7/hero-dunes.jpg";
const pCamels = "/day7/p-camels.jpg";
const pTea = "/day7/p-tea.jpg";
import { Compass, PlaneTrail, Stamp } from "./Doodles";
import { useHeroScroll } from "./useReveal";

const WORD = "TUNISIA";

export function Hero() {
  const { ref } = useHeroScroll();

  return (
    <header
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden border-b-2 border-ink"
      style={{ "--p": 0 } as React.CSSProperties}
    >
      <div className="pointer-events-none absolute inset-0 grain-drift" aria-hidden="true" />

      <div className="mx-auto grid min-h-[100svh] max-w-[1280px] grid-cols-1 items-center gap-10 px-6 pb-24 pt-28 lg:grid-cols-[1fr_0.95fr] lg:pt-32">
        <div className="relative z-10 self-center">
          <p className="eyebrow text-mauve">Seven days · March 2026 · for Lina</p>

          <h1 className="mt-6 text-[clamp(3.2rem,11vw,7.5rem)] leading-[0.84]">
            <span className="block italic" style={{ transform: "skewX(-6deg)" }}>
              {WORD.split("").map((c, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    transform: `translateX(calc(var(--p) * ${(i - 3) * 9}px)) translateY(calc(var(--p) * ${(i % 2 ? -1 : 1) * 6}px))`,
                    transition: "transform 120ms linear",
                  }}
                >
                  {c}
                </span>
              ))}
            </span>
            <span className="mt-2 block text-[clamp(1.6rem,4.4vw,3rem)] leading-[0.95] text-mauve">
              day by day
            </span>
          </h1>

          <p className="mt-8 max-w-[38ch] text-[17px] leading-[1.6] text-ink/85">
            Every road we took, every glass of tea that burned my fingers, every night the wind kept
            rearranging the sand outside the tent. I wrote it all down before I could forget it.
          </p>

          <div
            className="mt-10 inline-flex items-center gap-3 bg-sand px-4 py-2 hard-shadow"
            style={{ border: "2px solid var(--ink)", transform: "rotate(-2.5deg)" }}
          >
            <span className="eyebrow">Day 05 — Douz, Tunisia</span>
          </div>
        </div>

        <div className="relative min-h-[440px]">
          <div
            className="absolute right-[-14vw] top-0 w-[74%] bg-paper p-[6px] hard-shadow"
            style={{
              border: "2px solid var(--ink)",
              transform:
                "translate(calc((1 - var(--p)) * 70px), calc((1 - var(--p)) * -40px)) rotate(calc(2deg - var(--p) * 2deg))",
              transition: "transform 140ms linear",
            }}
          >
            <img
              src={heroDunes}
              alt="A figure in a blue scarf walking the ridge of a dune outside Douz"
              width={1200}
              height={1500}
              className="block aspect-[4/5] w-full object-cover"
            />
          </div>

          <div
            className="absolute bottom-6 left-0 w-[52%] bg-paper p-[6px] hard-shadow"
            style={{
              border: "2px solid var(--ink)",
              transform:
                "translate(calc((1 - var(--p)) * -80px), calc((1 - var(--p)) * 50px)) rotate(calc(-4deg + var(--p) * 1.5deg))",
              transition: "transform 140ms linear",
            }}
          >
            <img
              src={pCamels}
              alt="Camels resting on the sand at sunset"
              width={1200}
              height={800}
              className="block aspect-[3/2] w-full object-cover"
            />
          </div>

          <div
            className="absolute bottom-[38%] left-[42%] w-[26%] bg-paper p-[5px] hard-shadow"
            style={{
              border: "2px solid var(--ink)",
              transform:
                "translate(calc((1 - var(--p)) * 40px), calc((1 - var(--p)) * 90px)) rotate(calc(6deg - var(--p) * 3deg))",
              transition: "transform 140ms linear",
            }}
          >
            <img
              src={pTea}
              alt="A small glass of mint tea on a tiled ledge"
              width={900}
              height={900}
              className="block aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>

      <Compass className="pointer-events-none absolute bottom-10 left-8 h-14 w-14 text-ink/60" />
      <PlaneTrail className="pointer-events-none absolute right-[46%] top-24 hidden h-12 w-28 text-ink/50 lg:block" />
      <Stamp className="pointer-events-none absolute bottom-[18%] left-[43%] hidden h-12 w-12 text-mauve/70 lg:block" />
    </header>
  );
}
