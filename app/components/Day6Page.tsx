"use client";

import {
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

const FEATURES = [
  {
    image: "/day6/feature-fast.png",
    title: "Fast and Reliable Delivery",
    copy: "We move at the speed of creativity — and caffeine. Your deadlines won't even see us coming.",
  },
  {
    image: "/day6/feature-price.png",
    title: "Clear, No-Surprise Pricing",
    copy: "No hidden fees, no sneaky charges — just clear, honest pricing and work that makes you wonder.",
  },
  {
    image: "/day6/feature-roof.png",
    title: "Everything, Under One Roof",
    copy: "Design? Branding? Websites? TikTok dances? (Okay, maybe not that last one... yet.)",
  },
];

const BRANDS = [
  ["Amazon", "/day6/brand-amazon.png"],
  ["Unibet", "/day6/brand-unibet.png"],
  ["Asana", "/day6/brand-asana.png"],
  ["NEO Transport", "/day6/brand-neo.png"],
  ["British Council", "/day6/brand-british.png"],
  ["Unilever", "/day6/brand-unilever.png"],
];

const SERVICES = [
  {
    title: "Branding & Identity",
    tagline: "Make your mark—boldly and beautifully.",
    tags: [
      "Logo Design",
      "Brand Strategy",
      "Visual Identity",
      "Brand Guidelines",
      "Content Marketing",
      "Digital Ads / Banners",
      "Social Media Graphics",
      "Print Design & Packaging",
      "Illustrations",
    ],
    copy: "We build visual systems with a distinct personality, a clear point of view, and enough flexibility to grow with the brand.",
    images: [
      "/day6/service-brand-1.gif",
      "/day6/service-brand-2.jpg",
      "/day6/service-brand-3.jpg",
      "/day6/service-brand-4.jpg",
    ],
  },
  {
    title: "Web Design and Development",
    tagline: "Pretty and powerful websites that actually work.",
    tags: [
      "UI UX Design",
      "Custom Web Development",
      "Responsive Design",
      "Website Maintenance",
      "Landing Page Design",
      "Webflow Development",
      "Framer Development",
      "Iconography",
      "App UI Design",
    ],
    copy: "We turn strategy into responsive digital experiences with expressive motion, clear navigation, and fast, reliable implementation.",
    images: [
      "/day6/service-web-1.gif",
      "/day6/service-web-2.gif",
      "/day6/service-web-3.jpg",
      "/day6/service-web-4.png",
    ],
  },
  {
    title: "Content Creation",
    tagline: "Words, visuals, and videos that speak human.",
    tags: [
      "Copywriting",
      "Social Media Assets",
      "Video & Motion Graphics",
      "Animation",
      "Brand Story Videos",
      "Scriptwriting",
      "Infographic Design",
      "Paid Ad Creative",
      "Infographics",
    ],
    copy: "Scroll-stopping stories, lively visuals, and motion-led content designed to make a brand feel unmistakably human.",
    images: [
      "/day6/service-brand-4.jpg",
      "/day6/service-web-3.jpg",
      "/day6/service-brand-1.gif",
      "/day6/service-web-2.gif",
    ],
  },
  {
    title: "Digital Marketing",
    tagline: "Get seen. Get clicks. Get results.",
    tags: [
      "Social Media Marketing",
      "SEO & SEM",
      "Email Campaigns",
      "Paid Ads",
      "Influencer Marketing",
      "Social Media Ads",
      "Blog Strategy",
      "Analytics & Reporting",
      "Email Automation",
    ],
    copy: "Creative ideas meet practical data so every campaign lands in the right place, with the right audience, at the right time.",
    images: [
      "/day6/service-web-4.png",
      "/day6/service-brand-2.jpg",
      "/day6/service-web-1.gif",
      "/day6/service-brand-3.jpg",
    ],
  },
];

const BENEFITS = [
  {
    image: "/day6/benefit-1.png",
    title: "Creative Sparks",
    copy: "We craft ideas that break the mold and make your brand unforgettable.",
    tone: "yellow",
  },
  {
    image: "/day6/benefit-2.png",
    title: "Design That Delivers",
    copy: "Smart, strategic visuals built to grow your brand and move the needle.",
    tone: "green",
  },
  {
    image: "/day6/benefit-3.png",
    title: "Adaptable & Flexible",
    copy: "Tailored solutions for evolving market needs.",
    tone: "peach",
  },
  {
    image: "/day6/benefit-4.png",
    title: "Human-Centered Approach",
    copy: "We craft brands that connect emotionally and authentically.",
    tone: "cream",
  },
  {
    image: "/day6/benefit-5.png",
    title: "Global Vision, Local Focus",
    copy: "Bringing global trends with a local understanding.",
    tone: "pink",
  },
  {
    image: "/day6/benefit-6.png",
    title: "Ideas You Didn’t See Coming",
    copy: "Our team comes up with out-of-the-box ideas to make your brand stand out.",
    tone: "lavender",
  },
  {
    image: "/day6/benefit-7.png",
    title: "Every Detail Matters",
    copy: "Every element we design is intentional—measured, refined, and built to perform.",
    tone: "cream",
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);


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

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setVideoPlaying(true);
    } else {
      video.pause();
      setVideoPlaying(false);
    }
  };

  return (
    <main className="day6-page" ref={rootRef}>
      <nav className="day6-nav" aria-label="Day-2 navigation">
        <a href="/day6" className="day6-nav__logo" aria-label="TUNI Day-2">
          TUNI
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
        <span className="day6-hero__float day6-hero__float--one">Beach</span>
        <span className="day6-hero__float day6-hero__float--two">Funsies</span>
        <span className="day6-hero__float day6-hero__float--three">Blacko</span>

        <h1 className="day6-hero__headline">
          <SplitHeading>-SO EXCITED FOR TUNI TUNI ADVENTURES!-</SplitHeading>
        </h1>

        <div className="day6-hero__media">
          <video
            autoPlay
            loop
            muted
            playsInline
            ref={videoRef}
            src="/day6/hero.mp4"
          />
          <button
            type="button"
            className="day6-hero__play"
            onClick={toggleVideo}
            aria-label={videoPlaying ? "Pause" : "Play"}
          >
            <span>{videoPlaying ? "Pause" : "Play"}</span>
          </button>
        </div>
      </section>

      <section className="day6-features" aria-label="Studio advantages">
        {FEATURES.map((feature, index) => (
          <article
            className="day6-feature"
            data-day6-reveal
            key={feature.title}
            style={{ "--day6-delay": index } as CSSProperties}
          >
            <img src={feature.image} alt="" />
            <h2>{feature.title}</h2>
            <p>{feature.copy}</p>
          </article>
        ))}
      </section>

      <section className="day6-statistics" ref={statsRef}>
        <div className="day6-section-heading" data-day6-reveal>
          <span>Brands</span>
          <h2>
            <SplitHeading>We built the rocket, they flew</SplitHeading>
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
                <span>{name}</span>
                <img src={image} alt={name} />
              </div>
            ))}
          </div>
        </div>

        <div className="day6-stats-grid" data-day6-reveal>
          <article>
            <CountUp target={40} suffix="+" play={statsStarted} />
            <p>Brands launched</p>
          </article>
          <article>
            <CountUp target={120} suffix="+" play={statsStarted} />
            <p>Projects Delivered</p>
          </article>
          <article>
            <CountUp target={300} suffix="+" play={statsStarted} />
            <p>Moodboards created</p>
          </article>
          <article>
            <CountUp target={98} suffix="%" play={statsStarted} />
            <p>Happy clients</p>
          </article>
        </div>
        <span className="day6-statistics__label">Numbers</span>
      </section>

      <section className="day6-services" id="day6-services">
        <div className="day6-section-heading" data-day6-reveal>
          <span>Services</span>
          <h2>
            <SplitHeading>What we do (and do really well)</SplitHeading>
          </h2>
        </div>

        <div className="day6-services__accordion" data-day6-reveal>
          {SERVICES.map((item, index) => {
            const isOpen = activeService === index;

            return (
              <article
                className={`day6-service-card day6-service-card--${index + 1} ${isOpen ? "is-open" : ""
                  }`}
                key={item.title}
              >
                <button
                  className="day6-service-card__header"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`day6-service-${index}`}
                  onClick={() => setActiveService(isOpen ? null : index)}
                >
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.tagline}</small>
                  </span>
                  <i aria-hidden="true">+</i>
                </button>

                <div
                  className="day6-service-card__body"
                  id={`day6-service-${index}`}
                  aria-hidden={!isOpen}
                >
                  <div className="day6-service-card__details">
                    <div className="day6-service-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <p>{item.copy}</p>
                  </div>

                  <div className="day6-service-gallery">
                    <div className="day6-service-gallery__track">
                      {[...item.images, ...item.images].map((image, imageIndex) => (
                        <img src={image} alt="" key={`${image}-${imageIndex}`} />
                      ))}
                    </div>
                  </div>

                  <div className="day6-service-panel__controls">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveService((index - 1 + SERVICES.length) % SERVICES.length)
                      }
                      aria-label="Previous service"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveService((index + 1) % SERVICES.length)}
                      aria-label="Next service"
                    >
                      →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="day6-benefits" id="day6-benefits">
        <div className="day6-section-heading day6-section-heading--dark" data-day6-reveal>
          <span>Benefitsss</span>
          <h2>
            <SplitHeading>Why we are</SplitHeading>
            <br />
            <SplitHeading>the best!</SplitHeading>
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
