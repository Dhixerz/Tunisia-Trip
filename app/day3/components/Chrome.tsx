import { useEffect, useState } from "react";
import { useScrollProgress } from "./primitives";

export function scrollToDay(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Day-1", href: "/day1" },
  { label: "Day-2", href: "/day2" },
  { label: "Day-3", href: "/day3" },
  { label: "Works", href: "/works" },
];

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
          aria-label={open ? "Close menu" : "Open menu"}
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
        <ul className="flex h-full flex-col justify-center gap-2 px-8 max-w-3xl mx-auto md:px-16">
          {navItems.map((item, i) => (
            <li
              key={item.label}
              className="transition-all duration-500"
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(14px)",
                transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-bone/10 py-4 text-left"
              >
                <span className="display-bold text-[clamp(2.2rem,5.5vw,4.2rem)] text-bone/80 transition-colors group-hover:text-bone">
                  {item.label}
                </span>
                <span className="text-bone/40 text-xl font-light transition-all group-hover:translate-x-2 group-hover:text-bone">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}