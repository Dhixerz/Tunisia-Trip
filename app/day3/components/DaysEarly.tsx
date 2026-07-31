import { useEffect, useRef, useState } from "react";
import { photos } from "./diary-data";
import { Eyebrow, Polaroid, Section, useParallax } from "./primitives";

export function DayOne() {
  const p1 = useParallax(0.04);
  const p2 = useParallax(0.05);
  return (
    <Section id="day-01" className="overflow-hidden px-6 py-16 md:px-10 md:py-24">
      <span className="ghost-number pointer-events-none absolute -left-[4vw] top-[4vh] select-none text-[28vw] opacity-15">
        01
      </span>

      <div className="relative mb-12 max-w-4xl">
        <span className="eyebrow reveal mb-3 block">Privyet Pretty</span>
        <h2 className="reveal display-bold text-[clamp(3.5rem,9vw,7.5rem)]">The Mosque</h2>
        <p className="display-italic reveal mt-3 text-[clamp(1.4rem,3vw,2.5rem)] text-stone">
          Your Favorite Activity
        </p>
      </div>

      <div className="relative grid items-start gap-12 md:grid-cols-12 md:gap-12">
        <div className="space-y-8 md:col-span-6">
          <div ref={p1}>
            <Polaroid
              src={photos.day1a}
              alt="The Outfit You Should have been Wearing"
              rot={-3}
              seed={3}
              memo="The Outfit You Should have been Wearing."
            />
          </div>
          <p className="reveal pt-2 max-w-[42ch] text-[17px] leading-relaxed text-stone">
            You didn't bring any longie pants or skirts so you had to look for something. You went for a dress instead. But in my humblest opinion, it was better with the blackie fit.
          </p>
        </div>

        <div className="md:col-span-6 md:pt-12">
          <div ref={p2}>
            <Polaroid
              src={photos.day1b}
              alt="The Great Mosque of Sousse"
              rot={4}
              seed={5}
              delay={80}
              memo="The Great Mosque of Sousse."
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
    { src: "/day3/souk1.jpg", rot: -6, memo: "Your Sweet Breaki! My mouth is watering." },
    { src: "/day3/souk2.jpg", rot: 4, memo: "Trumpie is SO CUTE." },
    { src: "/day3/souk3.jpg", rot: -3, memo: "You said the fishie for your lunchie was a lil spicy, just the way we like it in bed." },
    { src: "/day3/souk4.jpg", rot: 6, memo: "Ooohh someone is about to get rich in Tunisia." },
  ];

  return (
    <Section id="day-02" className="h-[320vh]" style={{ height: "320vh" }}>
      <div ref={wrap} className="absolute inset-0">
        <div className="sticky top-0 flex flex-col justify-center overflow-hidden" style={{ height: "100vh" }}>
          <div className="px-6 md:px-10">
            <span className="eyebrow reveal">Ya Tebya Lyublyu</span>
            <h2 className="reveal display-bold mt-3 text-[clamp(3rem,9vw,7rem)]">
              Pic Dump<span className="display-italic text-umber">.</span>
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
                delay={i * 70}
                className="w-[62vw] shrink-0 sm:w-[38vw] md:w-[26vw]"
                imgClassName="aspect-[4/5]"
              />
            ))}
            <p className="display-italic w-[70vw] shrink-0 text-[clamp(1.4rem,3vw,2.6rem)] text-stone md:w-[34vw]">
              Your 3rd day there looks fun! Cheers to that! &lt;3
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

      <div className="relative px-6 py-24 md:px-10 md:py-32">
        <Eyebrow n="03" theme="Blue Hour" className="reveal block mb-3" />
        <h2 className="reveal display-italic text-[clamp(4rem,12vw,9rem)] text-bone">
          Blue
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-12 items-start">
          <p className="reveal text-[17px] leading-relaxed text-stone md:col-span-6 md:col-start-7">
            Sidi Bou Saïd, and the whole village agreed on two colours. You sat on a terrace for three
            hours and called it “doing something”. You were right.
          </p>
          <p className="marginalia reveal md:col-span-4 md:col-start-2 pt-2">
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