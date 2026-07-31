import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./use-mobile";
import { photos, reflections } from "./diary-data";
import { Eyebrow, Polaroid, Section } from "./primitives";

export function DayFive() {
  const orbit = [
    { src: photos.day5a, rot: -3 },
    { src: photos.day4a, rot: 4 },
    { src: photos.day6a, rot: -2 },
    { src: photos.day2b, rot: 3 },
  ];
  const memos = [
    "The dunes hum. Actually hum, I'm not being poetic.",
    "Sand in the camera. Worth it.",
    "Watched the sun go down twice — once in the sky, once in the sand.",
    "I have never been this quiet for this long.",
  ];

  return (
    <Section id="day-05" className="px-6 py-16 md:px-10 md:py-24">
      <div className="relative mb-12 text-center">
        <Eyebrow n="05" theme="Dunes" className="reveal block mb-3" />
        <h2 className="reveal display-italic text-[clamp(3.5rem,10vw,9rem)]">
          Sahara
        </h2>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {orbit.map((o, i) => (
          <Polaroid
            key={i}
            src={o.src}
            alt="Photograph from the desert day"
            rot={o.rot}
            seed={i + 31}
            drift
            delay={i * 80}
            memo={memos[i]}
            className="w-full"
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
  return (
    <Section id="day-06" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src="/day3/orange-cat.jpg"
        alt="Orange Cat - Trumpie following you"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      <div className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-[12vh] pt-20 md:px-10">
        <span className="eyebrow reveal block">My Fav Picie of the Day</span>
        <h2 className="reveal display-bold mt-3 text-[clamp(3.5rem,12vw,10rem)]">
          Orange Cat
        </h2>
        <p className="display-italic reveal mt-4 max-w-[28ch] text-[clamp(1.3rem,3.4vw,3rem)] text-stone">
          Trumpie is following you everywhere babe, I love you.
        </p>
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