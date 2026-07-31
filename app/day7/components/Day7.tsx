const videoUrl = "https://tunisia-diary-scrapbook.lovable.app/__l5e/assets-v1/a4c6b961-1206-48dc-9fdf-a7ad2339777b/day7-dunes.mp4";
const pSouk = "/day7/p-souk.jpg";
const pTea = "/day7/p-tea.jpg";
const pAlley = "/day7/p-alley.jpg";
const pBread = "/day7/p-bread.jpg";
const pPalms = "/day7/p-palms.jpg";
const pCamels = "/day7/p-camels.jpg";
const pSand = "/day7/p-sand.jpg";
import { AudioMemo } from "./AudioMemo";
import { PhotoFrame } from "./PhotoFrame";
import { ArrowScribble, Camera, MapPin, PalmLeaf, Stitch } from "./Doodles";
import { useReveal } from "./useReveal";

export function Day7Section() {
  const ref = useReveal<HTMLElement>(0.1);

  return (
    <section id="day-05" ref={ref} className="relative overflow-hidden bg-sand py-28 lg:py-40">
      <div className="pointer-events-none absolute inset-0 grain-drift" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-violet">Day 05 · 14 March</span>
            <h2 className="mt-3 text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.9]">
              Douz, and the
              <br />
              wind that never sat down
            </h2>
          </div>
          <div className="flex items-center gap-3 text-mauve">
            <MapPin className="h-9 w-7" />
            <span className="font-hand text-[22px] leading-tight text-ink">
              33°27′N, 9°01′E
              <br />
              43 photos, 1 memo
            </span>
          </div>
        </div>
      </div>

      <span
        className="pointer-events-none absolute -left-6 top-[10%] hidden select-none font-display text-[22rem] leading-none text-ink/[0.05] lg:block"
        aria-hidden="true"
      >
        05
      </span>

      <div className="relative mx-auto mt-20 max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-[58fr_38fr]">
          {/* ZONE A */}
          <div className="grid grid-cols-12 gap-x-5 gap-y-16">
            <PhotoFrame
              className="col-span-12 sm:col-span-8"
              src={pSouk}
              alt="Spice cones stacked at a stall in the Douz souk"
              caption="the paprika smelled like smoke"
              time="09:12, souk in Douz"
              width={1000}
              height={1200}
              delay={0}
              drift={-14}
            />
            <PhotoFrame
              className="col-span-6 mt-24 sm:col-span-4"
              src={pTea}
              alt="Mint tea in a small glass"
              caption="third glass, still too hot"
              time="10:04, café Ali"
              width={900}
              height={900}
              rotate={-2.5}
              accent="violet"
              delay={70}
              drift={-12}
            />
            <PhotoFrame
              className="col-span-6 -mt-8 sm:col-span-5"
              src={pAlley}
              alt="Blue door in a whitewashed alley"
              caption="you knocked. nobody home."
              time="11:38, off rue Farhat"
              width={900}
              height={1200}
              rotate={2}
              delay={140}
              drift={-10}
            />
            <PhotoFrame
              className="col-span-12 mt-6 sm:col-span-7"
              src={pBread}
              alt="Hands tearing warm flatbread over a woven mat"
              caption="bread baked under sand"
              time="13:20, camp kitchen"
              width={1000}
              height={750}
              accent="violet"
              delay={210}
              drift={-14}
            />
            <PhotoFrame
              className="col-span-7 sm:col-span-5"
              src={pPalms}
              alt="Sunlight through palm fronds"
              caption="ten minutes of shade"
              time="15:47, the oasis road"
              width={900}
              height={1100}
              rotate={-1.5}
              delay={280}
              drift={-10}
            />
            <PhotoFrame
              className="col-span-12 mt-20 sm:col-span-7"
              src={pCamels}
              alt="Camels resting at golden hour"
              caption="Hedi said his camel is called Zina"
              time="18:26, the last ridge"
              width={1200}
              height={800}
              delay={350}
              drift={-16}
            />
          </div>

          {/* ZONE B */}
          <div className="mt-28 lg:mt-64">
            <div
              className="reveal relative"
              style={{ "--ry": "40px", "--rd": "100ms" } as React.CSSProperties}
            >
              <div
                className="relative bg-sand p-[6px]"
                style={{
                  border: "3px solid var(--ink)",
                  boxShadow: "0 18px 40px -22px var(--ink)",
                }}
              >
                <div style={{ border: "1px solid var(--ink)" }}>
                  <video
                    src={videoUrl}
                    poster={pSand}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="block aspect-[4/3] w-full object-cover"
                    aria-label="Sand drifting over the dune ridge at golden hour"
                  />
                </div>
              </div>
              <span
                className="absolute -left-4 -top-3 h-6 w-20 bg-mauve/70"
                style={{ transform: "rotate(-8deg)", border: "1px solid var(--ink)" }}
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-3 -right-4 h-6 w-20 bg-mauve/70"
                style={{ transform: "rotate(-8deg)", border: "1px solid var(--ink)" }}
                aria-hidden="true"
              />
            </div>

            <div className="relative mx-auto h-16 w-px">
              <span className="absolute inset-0 border-l-2 border-dashed border-ink/60" />
            </div>

            <div className="relative flex items-start gap-3 pb-8">
              <ArrowScribble className="h-12 w-16 shrink-0 text-ink/70" />
              <p
                className="font-hand text-[24px] leading-[1.25] text-ink"
                style={{ transform: "rotate(-2deg)" }}
              >
                I recorded this while the sun dropped — you can hear the wind hit the mic and me
                laughing about it.
              </p>
            </div>

            <div
              className="reveal"
              style={{ "--ry": "16px", "--rd": "180ms" } as React.CSSProperties}
            >
              <AudioMemo />
            </div>

            <Stitch className="mt-10 h-3 w-full text-ink/40" />

            <div className="mt-10 flex items-center gap-5 text-mauve">
              <Camera className="h-10 w-12" />
              <PalmLeaf className="h-12 w-12" />
              <span className="eyebrow">Media from this day</span>
            </div>
          </div>
        </div>

        {/* ZONE C */}
        <div
          className="reveal relative z-10 mt-[-3rem] max-w-[46ch] bg-paper p-8 hard-shadow lg:ml-[6%] lg:mt-[-5rem]"
          style={
            {
              border: "2px solid var(--ink)",
              "--ry": "18px",
              "--rd": "560ms",
            } as React.CSSProperties
          }
        >
          <span className="eyebrow text-violet">From the notebook</span>
          <p className="mt-4 text-[16px] leading-[1.65] text-ink/90">
            We left the guesthouse before the street was awake and the only sound was a man
            dragging metal shutters up, one after another, down the whole row. In the souk a woman
            pressed dried rose petals into my palm and refused the coins. By afternoon the sand had
            worked into the seams of my shoes, my collar, the back of my watch.
          </p>
          <p className="mt-4 text-[16px] leading-[1.65] text-ink/90">
            At 18:40 we sat on the ridge and stopped talking for a while. The wind kept picking the
            top layer off the dune and putting it somewhere else. You said it looked like the desert
            was breathing. I hit record so I would still have the sound of it in a year.
          </p>
          <p className="mt-6 font-hand text-[22px] leading-none text-mauve">— 11.4 km walked</p>
        </div>
      </div>
    </section>
  );
}
