import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./use-mobile";
import { photos, reflections } from "./diary-data";
import { Eyebrow, Polaroid, Section } from "./primitives";

export function DayFive() {
  const isMobile = useIsMobile();
  const orbit = [
    { src: photos.day5a, rot: -8, left: "2%", top: "2%", w: "26%" },
    { src: photos.day4a, rot: 6, left: "66%", top: "6%", w: "23%" },
    { src: photos.day6a, rot: -4, left: "10%", top: "56%", w: "25%" },
    { src: photos.day2b, rot: 9, left: "72%", top: "50%", w: "18%" },
  ];
  const memos = [
    "The dunes hum. Actually hum, I'm not being poetic.",
    "Sand in the camera. Worth it.",
    "Watched the sun go down twice — once in the sky, once in the sand.",
    "I have never been this quiet for this long.",
  ];

  return (
    <Section id="day-05" className="px-6 py-[clamp(90px,14vh,180px)] md:px-10">
      <Eyebrow n="05" theme="Dunes" className="reveal" />
      <div className="relative mx-auto mt-10 grid w-full max-w-[1500px] grid-cols-2 gap-8 md:block md:min-h-[92svh]">
        <h2 className="display-italic pointer-events-none col-span-2 order-2 text-center text-[clamp(3.5rem,16vw,15rem)] md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:whitespace-nowrap">
          Sahara
        </h2>
        {orbit.map((o, i) => (
          <Polaroid
            key={i}
            src={o.src}
            alt="Scattered photograph from the desert day"
            rot={o.rot}
            seed={i + 31}
            drift
            delay={i * 80}
            memo={memos[i]}
            time={`${17 + i}:0${i}`}
            style={
              isMobile
                ? undefined
                : { position: "absolute", left: o.left, top: o.top, width: o.w }
            }
          />
        ))}
      </div>
      <p className="display-italic reveal mx-auto mt-16 max-w-[26ch] text-center text-[clamp(1.2rem,2.6vw,2.2rem)] text-stone">
        nothing for miles, everything at once
      </p>
    </Section>
  );
}

export function DaySix() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const v = 1 - (r.top + r.height * 0.35) / window.innerHeight;
      setP(Math.min(Math.max(v, 0), 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Section id="day-06" className="relative">
      <div ref={ref} className="relative w-full overflow-hidden" style={{ height: "130vh" }}>
        <div className="sticky top-0 w-full overflow-hidden" style={{ height: "100vh" }}>
          <img
            src={photos.day6a}
            alt="Campfire under a desert sky full of stars"
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ transform: `scale(${1 + p * 0.06})`, transition: "transform 200ms linear" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
          <div className="absolute inset-x-6 bottom-[14vh] md:inset-x-10">
          <Eyebrow n="06" theme="Night" />
          <h2
            className="display-bold mt-3 text-[clamp(3.5rem,12vw,10rem)]"
            style={{
              clipPath: `inset(0 ${100 - p * 100}% 0 0)`,
              transition: "clip-path 600ms cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            Fire
          </h2>
          <p
            className="display-italic mt-4 max-w-[20ch] text-[clamp(1.3rem,3.4vw,3rem)] text-stone"
            style={{
              opacity: p > 0.35 ? 1 : 0,
              transform: `translateY(${p > 0.35 ? 0 : 18}px)`,
              transition: "all 600ms cubic-bezier(0.4,0,0.2,1) 100ms",
            }}
          >
            you counted stars until you fell asleep
          </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function DaySeven() {
  return (
    <Section id="day-07" className="px-6 py-[clamp(90px,14vh,180px)] md:px-10">
      <Eyebrow n="07" theme="Farewell" className="reveal" />
      <div className="mt-8 grid gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5 md:col-start-2">
          <Polaroid
            src={photos.day7a}
            alt="Hands holding a boarding pass and a dried desert flower"
            rot={-3}
            seed={41}
            memo="Taking one flower home. It'll survive the flight, probably."
            time="09:12"
          />
        </div>
        <div className="md:col-span-5">
          <h2 className="reveal display-bold text-[clamp(3rem,9vw,7rem)]">Home</h2>
          <div className="display-italic reveal mt-8 space-y-6 text-[clamp(1.05rem,1.6vw,1.35rem)] leading-relaxed text-stone">
            <p>Arina —</p>
            <p>
              Seven mornings ago you left with an almost-empty bag and came back with sand in every
              seam of it. I listened to all of your memos twice. In three of them you're laughing at
              something off-camera and never explain what.
            </p>
            <p>
              I built you this so the week doesn't flatten into a folder of photographs. Hover
              anything. Some of them still whisper.
            </p>
            <p className="text-bone">Until the next departures board.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Reflections() {
  return (
    <Section id="reflections" className="px-6 py-[clamp(90px,14vh,180px)] md:px-10">
      <h2 className="display-italic reveal max-w-[16ch] text-[clamp(2.2rem,6vw,5rem)]">
        things you said out loud
      </h2>
      <div className="relative mt-16 grid gap-10 md:grid-cols-12 md:gap-6">
        {reflections.map((r, i) => (
          <blockquote
            key={i}
            className={`reveal photo-frame md:col-span-4 ${i % 2 === 0 ? "md:col-start-2" : "md:col-start-7"}`}
            style={
              {
                "--rot": `${r.rot}deg`,
                "--reveal-delay": `${i * 60}ms`,
                marginTop: `${(i % 3) * 40}px`,
              } as React.CSSProperties
            }
          >
            <div className="bg-bone p-6">
              <p className="display-italic text-[1.05rem] leading-relaxed text-ink">“{r.text}”</p>
              <p className="eyebrow mt-4 text-ink/50">{r.meta}</p>
            </div>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}

export function Closing() {
  return (
    <Section id="closing" className="relative h-[110svh] w-full overflow-hidden">
      <img
        src={photos.day5a}
        alt="A last look at the dunes at sunset"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink" />
      <div className="absolute bottom-[14vh] left-6 right-6 md:left-10">
        <p className="display-italic reveal max-w-[16ch] text-[clamp(2rem,7vw,6rem)]">
          the light follows you home
        </p>
        <button className="quiet-link reveal mt-10 inline-block">
          download the full memo archive
        </button>
        <p className="marginalia mt-14 text-[10px]">Tunisia · seven days · made by hand, for A.</p>
      </div>
    </Section>
  );
}