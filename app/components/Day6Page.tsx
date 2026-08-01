"use client";

import {
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

const BRANDS = [
  ["Splash 1", "/day6/swim-logo-1.png"],
  ["Splash 2", "/day6/swim-logo-2.png"],
  ["Splash 3", "/day6/swim-logo-1.png"],
  ["Splash 4", "/day6/swim-logo-2.png"],
  ["Splash 5", "/day6/swim-logo-1.png"],
  ["Splash 6", "/day6/swim-logo-2.png"],
];

const BENEFITS = [
  {
    image: "/day6/nuggets-more.jpg",
    title: "More Nuggets",
    copy: "Best Nuggets served for the best person.",
    tone: "yellow",
  },
];

function SplitHeading({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const tokens = children.split(/(\s+)/).filter(Boolean);
  const indexedTokens = tokens.map((token, tokenIndex) => ({
    token,
    tokenIndex,
    tokenOffset: tokens.slice(0, tokenIndex).join("").length,
  }));

  return (
    <span className={`day6-split ${className}`} aria-label={children}>
      {indexedTokens.map(({ token, tokenIndex, tokenOffset }) => {

        if (/^\s+$/.test(token)) {
          return (
            <span
              aria-hidden="true"
              className="day6-split__space"
              key={`space-${tokenIndex}`}
            >
              {" "}
            </span>
          );
        }

        return (
          <span
            aria-hidden="true"
            className="day6-split__word"
            key={`${token}-${tokenIndex}`}
          >
            {Array.from(token).map((character, index) => (
              <span
                className="day6-split__character"
                key={`${character}-${index}`}
                style={
                  {
                    "--day6-character": tokenOffset + index,
                  } as CSSProperties
                }
              >
                {character}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
}

function CountUp({
  target,
  suffix,
  play,
}: {
  target: number;
  suffix: string;
  play: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!play) return;

    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [play, target]);

  return (
    <strong>
      {value}
      <span>{suffix}</span>
    </strong>
  );
}

export default function day6Page() {
  const rootRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("day6-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    root
      .querySelectorAll<HTMLElement>("[data-day6-reveal]")
      .forEach((element) => revealObserver.observe(element));

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStatsStarted(true);
          statsObserver.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) statsObserver.observe(statsRef.current);

    let frame = 0;
    const updateScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty("--day6-scroll", String(window.scrollY));
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      statsObserver.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="day6-page" ref={rootRef}>
      <nav className="day6-nav" aria-label="Day-2 navigation">
        <a href="/day6" className="day6-nav__logo" aria-label="Day-6">
          Soussy
        </a>
        <button
          className="day6-nav__menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="day6-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      <div
        className={`day6-menu ${menuOpen ? "day6-menu--open" : ""}`}
        id="day6-menu"
        aria-hidden={!menuOpen}
      >
        <div className="day6-menu__inner">
          {[
            ["Home", "/"],
            ["Day-1", "/day1"],
            ["Day-2", "/day2"],
            ["Day-3", "/day3"],
            ["Day-4", "/day4"],
            ["Day-5", "/day5"],
            ["Day-6", "/day6"],
            ["Day-7", "/day7"],
          ].map(([label, href], index) => (
            <a
              href={href}
              key={label}
              onClick={() => setMenuOpen(false)}
              style={{ "--day6-menu-index": index } as CSSProperties}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <section className="day6-hero" id="day6-hero">
        <div className="day6-hero__brand" aria-hidden="true">
          DAY-6
        </div>
        <span className="day6-hero__float day6-hero__float--one">Happy</span>
        <span className="day6-hero__float day6-hero__float--two">Pools</span>
        <span className="day6-hero__float day6-hero__float--three">Swim</span>

        <h1 className="day6-hero__headline">
          <SplitHeading>You are the absolute beauty in Tunisia</SplitHeading>
        </h1>
      </section>

      <section className="day6-statistics">
        <div className="day6-section-heading" data-day6-reveal>
          <span>Splash</span>
          <h2>
            <SplitHeading>Just Keep Swimming</SplitHeading>
          </h2>
        </div>

        <div className="day6-brand-marquee" aria-label="Selected brands">
          <div className="day6-brand-marquee__track">
            {[...BRANDS, ...BRANDS].map(([name, image], index) => (
              <div
                className="day6-brand"
                key={`${name}-${index}`}
                style={{ "--day6-brand-index": index } as CSSProperties}
              >
                <img src={image} alt={name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="day6-benefits" id="day6-benefits">
        <div className="day6-section-heading day6-section-heading--dark" data-day6-reveal>
          <span>Foodsss</span>
          <h2>
            <SplitHeading>Dinner Time!</SplitHeading>
          </h2>
        </div>

        <div className="day6-benefits__grid">
          {BENEFITS.map((benefit, index) => (
            <article
              className={`day6-benefit day6-benefit--${benefit.tone} day6-benefit--${index + 1}`}
              data-day6-reveal
              key={benefit.title}
              style={{ "--day6-delay": index % 3 } as CSSProperties}
            >
              <img src={benefit.image} alt="" />
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
