const heroDunes = "/day5/hero-dunes.jpg";
const pCamels = "/day5/p-camels.jpg";
const pTea = "/day5/p-tea.jpg";
import { PlaneTrail, Stamp } from "./Doodles";
import { useHeroScroll } from "./useReveal";

const WORD = "Sousse";

export function Hero() {
  const { ref } = useHeroScroll();

  return (
    <header
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden border-b-2 border-ink bg-sand/30"
      style={{ "--p": 0 } as React.CSSProperties}
    >
      <div className="pointer-events-none absolute inset-0 grain-drift" aria-hidden="true" />

      <div className="mx-auto grid min-h-[100svh] max-w-[1280px] grid-cols-1 items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pt-32">
        <div className="relative z-10 self-center">
          <p className="eyebrow text-mauve">July 29th, 2026</p>

          <h1 className="mt-4 text-[clamp(3.5rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight">
            <span className="block text-ink">
              {WORD}
            </span>
            <span className="mt-3 block text-[clamp(1.8rem,3.8vw,2.8rem)] font-normal italic leading-none text-mauve">
              Day 5
            </span>
          </h1>

          <p className="mt-10 max-w-[42ch] text-[17px] leading-[1.65] text-ink/85">
            It has been 5 days in Tuni Tuni babe! Were you feeling any Muslims energy on this day? Want to pray together? (In a Muslim way of course).
          </p>

          <div
            className="mt-10 inline-flex items-center gap-3 bg-sand px-4 py-2 hard-shadow"
            style={{ border: "2px solid var(--ink)", transform: "rotate(-2deg)" }}
          >
            <span className="eyebrow font-semibold">سوسة, xتونس</span>
          </div>
        </div>

        <div className="relative min-h-[460px] md:min-h-[500px] w-full self-center">
          {/* Main Photo (Desert / Dunes) */}
          <div
            className="absolute right-0 top-0 w-[70%] bg-paper p-[6px] hard-shadow z-10"
            style={{
              border: "2px solid var(--ink)",
              transform:
                "translate(calc((1 - var(--p)) * 45px), calc((1 - var(--p)) * -30px)) rotate(calc(2deg - var(--p) * 2deg))",
              transition: "transform 140ms linear",
            }}
          >
            <img
              src={heroDunes}
              alt="Desert landscape"
              width={1200}
              height={1500}
              className="block aspect-[4/5] w-full object-cover"
            />
          </div>

          {/* Secondary Photo (Camels) */}
          <div
            className="absolute bottom-6 left-0 w-[52%] bg-paper p-[6px] hard-shadow z-15"
            style={{
              border: "2px solid var(--ink)",
              transform:
                "translate(calc((1 - var(--p)) * -45px), calc((1 - var(--p)) * 35px)) rotate(calc(-4deg + var(--p) * 1.5deg))",
              transition: "transform 140ms linear",
            }}
          >
            <img
              src={pCamels}
              alt="Camel photo"
              width={1200}
              height={800}
              className="block aspect-[3/2] w-full object-cover"
            />
          </div>

          {/* Accent Photo (Glass drink) */}
          <div
            className="absolute bottom-[36%] left-[40%] w-[27%] bg-paper p-[5px] hard-shadow z-20"
            style={{
              border: "2px solid var(--ink)",
              transform:
                "translate(calc((1 - var(--p)) * 25px), calc((1 - var(--p)) * 50px)) rotate(calc(6deg - var(--p) * 3deg))",
              transition: "transform 140ms linear",
            }}
          >
            <img
              src={pTea}
              alt="Glass drink photo"
              width={900}
              height={900}
              className="block aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>

      <PlaneTrail className="pointer-events-none absolute right-[46%] top-24 hidden h-12 w-28 text-ink/50 lg:block" />
      <Stamp className="pointer-events-none absolute bottom-[18%] left-[43%] hidden h-12 w-12 text-mauve/70 lg:block" />
    </header>
  );
}
