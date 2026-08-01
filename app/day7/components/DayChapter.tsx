import { PhotoFrame } from "./PhotoFrame";
import { MapPin, Stamp } from "./Doodles";
import { useReveal } from "./useReveal";

type Props = {
  day: string;
  date: string;
  place: string;
  title: string;
  body: string;
  note: string;
  image: string;
  alt: string;
  caption: string;
  time: string;
  width: number;
  height: number;
  flip?: boolean;
  tinted?: boolean;
};

export function DayChapter({
  day,
  date,
  place,
  title,
  body,
  note,
  image,
  alt,
  caption,
  time,
  width,
  height,
  flip = false,
  tinted = false,
}: Props) {
  const ref = useReveal<HTMLElement>(0.15);

  return (
    <section
      id={`day-${day}`}
      ref={ref}
      className={`relative py-12 lg:py-20 ${tinted ? "bg-sand" : "bg-paper"}`}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div
          className={`grid grid-cols-1 items-start gap-x-14 gap-y-12 lg:grid-cols-[1fr_1fr] ${
            flip ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className={flip ? "lg:pl-[4%]" : "lg:pr-[4%] lg:pt-8"}>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none text-violet">
                {day}
              </span>
              <span className="eyebrow text-mauve">
                {date ? `${date} · ${place}` : place}
              </span>
            </div>
            <h2 className="mt-5 text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[0.95]">{title}</h2>
            <p className="mt-6 max-w-[46ch] text-[16px] leading-[1.65] text-ink/85">{body}</p>
            <p className="mt-6 flex items-center gap-3 font-hand text-[22px] text-mauve">
              <MapPin className="h-7 w-6" />
              {note}
            </p>
          </div>

          <div className={flip ? "lg:pt-8" : "lg:pt-0"}>
            <PhotoFrame
              src={image}
              alt={alt}
              caption={caption}
              time={time}
              width={width}
              height={height}
              rotate={flip ? 1.5 : -1.5}
              accent={flip ? "violet" : "teal"}
              className="w-full max-w-[650px] mx-auto"
              drift={flip ? 14 : -14}
            />
          </div>
        </div>
      </div>
      <Stamp className="pointer-events-none absolute right-6 top-10 hidden h-12 w-12 text-ink/25 lg:block" />
    </section>
  );
}
