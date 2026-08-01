const videoUrl = "/day5/tunisian-dance.mp4";
const snapshot1 = "/day5/snapshot-1.jpg";
const snapshot2 = "/day5/snapshot-2.jpg";
const snapshot3 = "/day5/snapshot-3.jpg";
const snapshot4 = "/day5/snapshot-4.jpg";
import { AudioMemo } from "./AudioMemo";
import { PhotoFrame } from "./PhotoFrame";
import { ArrowScribble, Camera, MapPin, PalmLeaf, Stitch } from "./Doodles";
import { useReveal } from "./useReveal";

export function Day5() {
  const ref = useReveal<HTMLElement>(0.1);

  return (
    <section id="day-05" ref={ref} className="relative overflow-hidden bg-sand py-28 lg:py-40">
      <div className="pointer-events-none absolute inset-0 grain-drift" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-violet">More Tuni Funsies</span>
            <h2 className="mt-3 text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.9]">
              Some More Snapshots of Tuni
            </h2>
          </div>
          <div className="flex items-center gap-3 text-mauve">
            <MapPin className="h-9 w-7" />
            <span className="font-hand text-[22px] leading-tight text-ink">
              Tunisia
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
              src={snapshot1}
              alt="Snapshot 1"
              caption=""
              time=""
              width={1000}
              height={1200}
              delay={0}
              drift={-14}
            />
            <PhotoFrame
              className="col-span-6 mt-24 sm:col-span-4"
              src={snapshot2}
              alt="Snapshot 2"
              caption=""
              time=""
              width={900}
              height={900}
              rotate={-2.5}
              accent="violet"
              delay={70}
              drift={-12}
            />
            <PhotoFrame
              className="col-span-6 -mt-8 sm:col-span-5"
              src={snapshot3}
              alt="Snapshot 3"
              caption=""
              time=""
              width={900}
              height={1200}
              rotate={2}
              delay={140}
              drift={-10}
            />
            <PhotoFrame
              className="col-span-12 mt-6 sm:col-span-7"
              src={snapshot4}
              alt="Snapshot 4"
              caption=""
              time=""
              width={1000}
              height={750}
              accent="violet"
              delay={210}
              drift={-14}
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
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="block aspect-[4/3] w-full object-cover"
                    aria-label="Tunisian dance video"
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
                Next time it will be us dancing Macarena with those couples.
              </p>
            </div>

            <div
              className="reveal"
              style={{ "--ry": "16px", "--rd": "180ms" } as React.CSSProperties}
            >
              <AudioMemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
