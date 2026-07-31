import { useEffect, useRef, useState } from "react";
import { photos } from "./diary-data";
import { Eyebrow, Polaroid, Section, useParallax } from "./primitives";

export function DayOne() {
  const p1 = useParallax(0.14);
  const p2 = useParallax(0.28);
  return (
    <Section id="day-01" className="overflow-hidden px-6 py-[clamp(90px,14vh,180px)] md:px-10">
      <Eyebrow n="01" theme="Arrival" className="reveal -rotate-90 origin-left md:absolute md:left-4 md:top-40" />
      <span className="ghost-number pointer-events-none absolute -left-[6vw] top-[8vh] select-none text-[38vw] opacity-40">
        01
      </span>

      <div className="relative grid gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5 md:col-start-2">
          <div ref={p1}>
            <Polaroid
              src={photos.day1a}
              alt="Sunset seen through an aeroplane window over the Tunisian coast"
              rot={-4}
              seed={3}
              memo="I could see the coast turning gold before we even landed."
              time="18:22"
            />
          </div>
          <p className="reveal mt-24 max-w-[42ch] text-[17px] leading-relaxed text-stone">
            You landed at the hour when everything here is the colour of apricot. The air outside the
            terminal smelled like jasmine and warm dust, and you texted me a single word:{" "}
            <em className="display-italic">finally</em>.
          </p>
        </div>

        <div className="md:col-span-5 md:pt-[26vh]">
          <h2 className="reveal display-bold text-[clamp(3.5rem,11vw,9rem)]">Arrival</h2>
          <p className="display-italic reveal mt-4 text-[clamp(1.4rem,3.6vw,3rem)] text-stone">
            the light was already waiting
          </p>
          <div ref={p2} className="mt-16">
            <Polaroid
              src={photos.day1b}
              alt="A suitcase and straw hat on a tiled hotel floor"
              rot={5}
              seed={5}
              delay={80}
              memo="Room 14. The floor tiles are older than both of us."
              time="21:05"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export function DayTwo() {
  const wrap = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);
  const [x, setX] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrap.current;
      const tr = track.current;
      if (!el || !tr) return;
      const total = el.offsetHeight - window.innerHeight;
      const passed = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
      const max = Math.max(tr.scrollWidth - window.innerWidth + 48, 0);
      setX(total > 0 ? (passed / total) * max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const shots = [
    { src: photos.day2a, rot: -6, memo: "Saffron, harissa, and a man who insisted I taste everything.", t: "11:40" },
    { src: photos.day2b, rot: 4, memo: "Every door here is a different blue. I photographed nine.", t: "12:58" },
    { src: photos.day3a, rot: -3, memo: "Mint tea number four. I have no regrets.", t: "15:20" },
    { src: photos.hero, rot: 6, memo: "Got lost on purpose for about an hour.", t: "17:03" },
  ];

  return (
    <Section id="day-02" className="h-[320vh]" style={{ height: "320vh" }}>
      <div ref={wrap} className="absolute inset-0">
        <div className="sticky top-0 flex flex-col justify-center overflow-hidden" style={{ height: "100vh" }}>
          <div className="px-6 md:px-10">
            <Eyebrow n="02" theme="Souk" className="reveal" />
            <h2 className="reveal display-bold mt-3 text-[clamp(3rem,9vw,7rem)]">
              Souk<span className="display-italic text-umber">.</span>
            </h2>
          </div>
          <div
            ref={track}
            className="mt-10 flex items-center gap-10 px-6 will-change-transform md:gap-20 md:px-10"
            style={{
              transform: `translate3d(${-x}px,0,0)`,
              transition: "transform 120ms linear",
            }}
          >
            {shots.map((s, i) => (
              <Polaroid
                key={i}
                src={s.src}
                alt="Photograph from the medina souk"
                rot={s.rot}
                seed={i + 11}
                memo={s.memo}
                time={s.t}
                delay={i * 70}
                className="w-[62vw] shrink-0 sm:w-[38vw] md:w-[26vw]"
                imgClassName="aspect-[4/5]"
              />
            ))}
            <p className="display-italic w-[70vw] shrink-0 text-[clamp(1.4rem,3vw,2.6rem)] text-stone md:w-[34vw]">
              a hundred colours, and still you came back saying the best part was the noise.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function DayThree() {
  return (
    <Section id="day-03" className="relative min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 42%, 0 78%)" }}
      >
        <img
          src={photos.day3a}
          alt="Mint tea glasses on a terrace above the Mediterranean"
          loading="lazy"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-ink/35" />
      </div>

      <div className="relative px-6 pb-[clamp(90px,12vh,160px)] pt-[52vh] md:px-10">
        <Eyebrow n="03" theme="Blue Hour" className="reveal" />
        <h2 className="reveal display-italic mt-2 text-[clamp(4rem,16vw,13rem)] mix-blend-difference">
          Blue
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <p className="reveal text-[17px] leading-relaxed text-stone md:col-span-5 md:col-start-7">
            Sidi Bou Saïd, and the whole village agreed on two colours. You sat on a terrace for three
            hours and called it “doing something”. You were right.
          </p>
          <p className="marginalia reveal rotate-[-2deg] md:col-span-3 md:col-start-2">
            — the sea did that thing again, the flat silver thing
          </p>
        </div>
      </div>
    </Section>
  );
}

export function DayFour() {
  return (
    <Section id="day-04" className="px-6 py-[clamp(90px,14vh,180px)] md:px-10">
      <Eyebrow n="04" theme="Stone" className="reveal" />
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-12 md:grid-rows-[repeat(3,minmax(160px,auto))] md:gap-6">
        <div className="col-span-2 md:col-span-7 md:row-span-2">
          <Polaroid
            src={photos.day4a}
            alt="Roman columns at Dougga in warm afternoon light"
            rot={-1.5}
            seed={21}
            memo="Two thousand years old and it still throws shade at 4pm."
            time="16:10"
            imgClassName="h-full max-h-[60vh] w-full"
          />
        </div>
        <div className="col-span-2 flex flex-col justify-end md:col-span-4 md:col-start-9">
          <h2 className="reveal display-bold text-[clamp(3rem,8vw,6.5rem)]">Stone</h2>
          <p className="display-italic reveal mt-3 text-[clamp(1.2rem,2.4vw,2rem)] text-stone">
            older than every word for love
          </p>
        </div>
        <div className="hidden md:col-span-4 md:col-start-9 md:block" aria-hidden />
        <div className="col-span-1 md:col-span-3 md:col-start-2">
          <Polaroid
            src={photos.day1b}
            alt="Detail from the day's belongings"
            rot={7}
            seed={23}
            delay={90}
            memo="Found a fig tree growing out of a wall."
            time="17:45"
          />
        </div>
        <div className="col-span-1 self-center md:col-span-4 md:col-start-6">
          <p className="reveal max-w-[38ch] text-[17px] leading-relaxed text-stone">
            Dry grass, hot columns, and the sound of nothing at all. You said it felt like walking
            through the inside of a held breath.
          </p>
        </div>
      </div>
    </Section>
  );
}