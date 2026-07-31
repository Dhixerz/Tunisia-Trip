import { useEffect, useState } from "react";
import { days } from "./diary-data";
import { useScrollProgress } from "./primitives";

export function scrollToDay(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Chrome() {
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="grain-layer" aria-hidden />

      <div className="fixed inset-x-0 top-0 z-50 h-px bg-bone/10" aria-hidden>
        <div
          className="h-px bg-umber transition-[width] duration-200 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 md:px-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="eyebrow min-w-0 text-left text-bone"
        >
          A.T. — Tunisia ’26
        </button>
        <button
          aria-label={open ? "Close day index" : "Open day index"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-6 w-[22px] shrink-0 flex-col justify-center gap-[5px]"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-full bg-bone transition-transform duration-[400ms]"
              style={{
                transform: open
                  ? i === 0
                    ? "translateY(6px) rotate(45deg)"
                    : i === 1
                      ? "scaleX(0)"
                      : "translateY(-6px) rotate(-45deg)"
                  : undefined,
                transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          ))}
        </button>
      </header>

      <nav
        className={`fixed inset-0 z-40 bg-ink/97 backdrop-blur-md transition-opacity duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
        aria-hidden={!open}
      >
        <ul className="flex h-full flex-col justify-center gap-1 px-6 pt-16 md:px-16">
          {days.map((d, i) => (
            <li
              key={d.id}
              className="transition-all duration-500"
              style={{
                transitionDelay: open ? `${i * 35}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(14px)",
                transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <button
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => scrollToDay(d.id), 120);
                }}
                className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-b border-bone/10 py-3 text-left md:gap-8"
              >
                <span className="display-bold text-[clamp(2rem,6vw,4.5rem)] text-bone/80 transition-colors group-hover:text-bone">
                  {d.n}
                </span>
                <span className="min-w-0">
                  <span className="display-italic block truncate text-[clamp(1.1rem,3vw,2rem)]">
                    {d.title}
                  </span>
                  <span className="eyebrow mt-1 block truncate">{d.place}</span>
                </span>
                <img
                  src={d.cover}
                  alt=""
                  loading="lazy"
                  className="h-14 w-20 shrink-0 object-cover opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 md:h-20 md:w-32"
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}