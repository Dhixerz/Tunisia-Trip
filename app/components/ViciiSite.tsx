"use client";

import Link from "next/link";
import {
  type CSSProperties,
  type FormEvent,
  useEffect,
  useState,
} from "react";

const A = {
  hero: "/assets/99354a9d226b8774.avif",
  nora: "/assets/995cf52cb14a5b23.avif",
  aykuna: "/assets/6db3b57b44e5f5dd.avif",
  dlavigne: "/assets/f5564b8ca3f63c98.avif",
  contact: "/assets/89a89b7baf518dbd.avif",
  glimpseMain: "/assets/d98205e6d18e55a8.avif",
  glimpseA: "/assets/462c5f3a2ed154fb.svg",
  glimpseB: "/assets/eba11c4826f21a8a.svg",
  glimpseC: "/assets/1c366644082f01b6.svg",
  glimpseD: "/assets/65a7ea6af1b5f882.svg",
  collageA: "/assets/78afc7fe072483b9.avif",
  collageB: "/assets/8fce24135c533a3c.avif",
  collageC: "/assets/f5564b8ca3f63c98.avif",
  collageD: "/assets/05748fa1b2376422.avif",
  railA: "/assets/a5451385157aa29b.avif",
  railB: "/assets/9457958bc4da0db7.avif",
  railC: "/assets/cff3c7c8e83741d1.avif",
  railD: "/assets/8fce24135c533a3c.avif",
  darkA: "/assets/c7d8950c066ed33d.avif",
  darkB: "/assets/a9c43cfaa85806d6.avif",
  darkC: "/assets/e2cc1d2ecb77fbb5.avif",
  darkD: "/assets/c1b3463d046822f9.avif",
  aboutHero: "/assets/day-1-arrival.jpg",
  workerA: "/assets/kais-saied.png",
  workerB: "/assets/tunisian-women-flag.png",
  workerC: "/assets/you-were-there.jpg",
  office: "/assets/day1-bikes.png",
  day1Photo1: "/assets/day1-memory-01.jpg",
  day1Photo2: "/assets/day1-memory-02.jpg",
  day1Photo3: "/assets/day1-memory-03.jpg",
  day1Photo4: "/assets/day1-memory-04.jpg",
  day1Photo5: "/assets/day1-memory-05.jpg",
  day1Photo6: "/assets/day1-memory-06.jpg",
  day1Photo7: "/assets/day1-memory-07.jpg",
  masonryA: "/assets/f4f9bb9c8127069a.avif",
  masonryB: "/assets/2905e7321f1bc91d.avif",
  masonryC: "/assets/3ddf17b515085e77.webp",
  masonryD: "/assets/ee9234f320acc0f3.avif",
  masonryE: "/assets/a5cbffa23e5a6a69.avif",
  masonryF: "/assets/2403a6508c35239c.avif",
  masonryG: "/assets/f0e09766a0df6788.avif",
  masonryH: "/assets/f129c7ba1d8692ee.avif",
  masonryI: "/assets/d966272d7fa9a449.avif",
} as const;

type ProjectKey = "nora" | "aykuna" | "dlavigne" | "aykuna2";

type Project = {
  key: ProjectKey;
  href: string;
  name: string;
  compactName: string;
  image: string;
  alt: string;
  year: string;
  description: string;
  service: string;
  duration: string;
  introTitle: string;
  intro: string[];
  solutionTitle: string;
  solution: string[];
  outcomeTitle: string;
  outcome: string[];
  storyImages: [string, string, string];
  audio?: string;
};

export const PROJECTS: Record<ProjectKey, Project> = {
  nora: {
    key: "nora",
    href: "/works/arcworks-collective",
    name: "Beach Day",
    compactName: "Beach Day",
    image: "/assets/beach-day.png",
    alt: "Beach Day",
    year: "2026",
    duration: "8 Months",
    service: "In my eyes, your beauty is undefeatable.",
    description:
      "AWWW HOW CUTE TO SEE YOU RELAX ON THE BEACH WITH RITA!! You, Rita, and your mommy are all the prettiest women alive on earth ^^",
    introTitle: "Introduction",
    intro: [
      "NØRA, a new holistic wellness brand, came to TUNI Studio with a clear vision: to create an identity that would elevate the act of sleep into a mindful ritual. They needed more than just a brand, they wanted an entire world built on tranquility and sensory experience.",
      "Our team began with an immersive brand deep dive, exploring NØRA’s core philosophy of blending ancient practices with modern aesthetics. Through a series of collaborative workshops, we uncovered their desire for a brand that felt both serene and luxurious. Our goal was to position NØRA as a leader in the wellness space by designing a visual identity and digital platform that would inspire their audience to embrace rest as a form of self care. We then developed a strategic plan to bring this dreamy, holistic vision to life.",
    ],
    solutionTitle: "Our Solution",
    solution: [
      "At TUNI Studio, we crafted a brand identity that embodies NØRA's core philosophy. We began by designing a custom logo and color palette that evoke a sense of calm, using soft, earthy tones and elegant typography to reflect the brand's luxurious yet grounded nature.",
      "Next, we developed a comprehensive brand awareness strategy to introduce NØRA to its target audience. This included defining key messaging and visual assets for social media, and developing content pillars that tell the story of NØRA's unique approach to wellness and ritual.",
      "To support NØRA's growth, we created innovative product designs and comprehensive brand guidelines. These ensure that every touchpoint from the unboxing experience to the products themselves maintains a cohesive, dreamy ambiance. The final deliverable is a holistic brand presence that positions NØRA not just as a product provider, but as a curator of rest and rejuvenation.",
    ],
    outcomeTitle: "Outcome",
    outcome: [
      "Following our collaboration, NØRA's brand launch successfully captivated its target audience. The cohesive visual identity and thoughtful messaging resonated deeply, leading to strong initial brand awareness and a highly positive reception.",
      "With our comprehensive brand guidelines in place, NØRA's team is empowered to create consistent and impactful content, saving time and resources while maintaining brand integrity. The innovative product designs have been met with enthusiastic feedback, establishing NØRA as a premium and unique offering in the crowded wellness market.",
      "Our partnership has provided NØRA with a powerful foundation for growth. The brand's polished and professional presence has not only attracted a loyal customer base but also positioned it for future expansion, allowing them to confidently pursue their vision of a restful and ritual focused lifestyle.",
    ],
    storyImages: [
      "/assets/93fdf3c7a7e45f43.webp",
      "/assets/0574343b62c6e52c.webp",
      "/assets/nora-outcome.png",
    ],
  },
  aykuna: {
    key: "aykuna",
    href: "/works/studio-nive",
    name: "Blue Jellyfish",
    compactName: "Blue Jellyfish",
    image: "/assets/blue-jellyfish.png",
    alt: "Blue Jellyfish",
    year: "2026",
    duration: "6 Months",
    service: "I still think Jellyfish sting people.",
    description:
      "The Jellyfish must have been a cool creature! It's blue too, we both love bluewy. And you said it looks like plastic, so there you go a Korean <3",
    introTitle: "Introduction",
    intro: [
      "Aykuna approached Vicii Studio seeking a refreshed digital presence that matched their grand vision as an ultra-luxury fashion brand based on a story of warrior-queens that earnt themselves the place to be on top. They needed more than just a mere branding they wanted to establish an institution, a story full of tradition that gives a deep and unforgettable impression especially to those who adores the haute-couture world of fashion.",
      "Our creative exploration took us on a symbolic voyage. We traveled from the vast, open steppes of Mongolia, capturing the spirit of its wild horses and intricate patterns, to the serene gardens of China, borrowing the subtle beauty of its ancient art. But we didn’t want to create a museum piece. We brought these inspirations back to our studio and introduced them to the graceful spirit of European abstract art and the clean structural lines of high-fashion.",
    ],
    solutionTitle: "Establishing a Brand Image",
    solution: [
      'Our process began with a deep dive into the concept of "modern heritage." We explored the rich visual tapestry of Mongolian and Chinese traditions, not as static relics, but as living languages of art. We then filtered these powerful motifs through a lens from both contemporary and long-established tradition of European elegance and rich history. The goal was to create a design ethos that was immediately recognizable and emotionally resonant with their audience.',
      "We developed a core brand narrative for AYKUNA centered on the “Sovereign Queen.” This informed every aspect of the project.",
      'Brand Identity: The AYKUNA logo and wordmark were designed to be clean and versatile, allowing the product patterns to shine. The "A" emblem subtly hints at both a mountain peak and the point of a compass, signifying a journey.',
      "Product Design: For the silk garments and handbags, we created a series of signature patterns. These designs fuse the strength of Mongolian equestrian motifs with the delicate intricacy of Chinese silk painting, all balanced by bold, abstract color fields reminiscent of modern art.",
      "Visualization: Using photorealistic rendering, we produced a suite of product and editorial images that established a mood of quiet confidence, natural elegance, and artistic luxury, setting the brand's tone from day one.",
    ],
    outcomeTitle: "The Results",
    outcome: [
      "Through our strategic and creative partnership, we equipped AYKUNA with a powerful, multi faceted brand toolkit. The launch was not just of a collection, but of a complete and compelling brand world.",
      "AYKUNA is now positioned to capture the imagination of the modern luxury consumer, armed with a unique narrative, a versatile visual identity, and a clear brand ethos. We successfully translated a conceptual vision into a tangible, market-ready brand, establishing a strong foundation for long-term growth, customer loyalty, and a lasting legacy.",
    ],
    storyImages: [
      "/assets/dda16bde983fabbe.avif",
      "/assets/aykuna-brand.png",
      "/assets/aykuna-outcome.png",
    ],
  },
  dlavigne: {
    key: "dlavigne",
    href: "/works/d-lavigne",
    name: "Cheater",
    compactName: "Cheater",
    image: "/assets/cheater.png",
    alt: "Cheater",
    year: "2026",
    duration: "On Going",
    service: "Just No.",
    description:
      "Typical Muslim guy. I don't even know how to describe this. You already know by looking at the illustration. Imagine holding that dirty hands and got pregnant by it too.",
    introTitle: "Introduction",
    intro: [
      "D'Lavigne, a renowned Paris’s art studio celebrated for their collaborations with luxury brands, approached TUNI Studio with a desire to redefine their digital presence. D’Lavigne goal was to create a platform that not only showcased their impressive body of work but also captured the unique essence of their artistic vision. D’Lavigne needed more than a standard portfolio; they wanted a curated online experience that conveyed the elegance and narrative of their art.",
      "Our team began by conducting a comprehensive brand audit, analyzing D'Lavigne's existing portfolio and brand identity. Through in depth discovery sessions, we identified a need to balance their classical artistic style with a modern, clean aesthetic. We established a clear objective: to position D'Lavigne as an icon in the luxury art space, highlighting their signature collaborations and projects with impactful, immersive visuals. From there, we developed a strategic plan to elevate D’Lavigne brand and bring their creative world to life online.",
    ],
    solutionTitle: "Our Solution",
    solution: [
      "At TUNI Studio, we collaborated with D'Lavigne to design a comprehensive luxury product development and branding strategy. Our focus was on translating their unique artistic style into brand partnerships with luxury fashion houses and art exhibitions.",
      "We integrated a robust brand strategy to elevate D'Lavigne’s status and ensure their brand narrative is consistent across all touchpoints. We refined their messaging to reflect D’Lavigne artistic philosophy and global appeal, all while elevating their online presence to attract high profile clients. To maintain consistency, we developed a comprehensive art experiment product development approach that can scale with their future collaborations. The final deliverable is a striking, modern brand that not only showcases their portfolio but also elevates D’Lavigne as an industry leader in the luxury goods market.",
    ],
    outcomeTitle: "Outcome",
    outcome: [
      "As a result of our collaboration, D'Lavigne's elevated brand presence successfully resonated with top tier clients and gallerists. The refined messaging and professional online portfolio have led to an increase in high profile inquiries for luxury brand collaborations.",
      "Our strategic approach to product development that collaborates between art, illustration and paintings has enabled D'Lavigne to confidently expand their artistic reach, translating their unique vision into a range of sought after luxury products. This has opened new revenue streams and solidified D’Lavigne status as a versatile and innovative art studio.",
      "The partnership has provided D'Lavigne with a powerful foundation for continued growth and artistic exploration. D’Lavigne brand's sophisticated identity not only showcases their extraordinary talent but also positions their as a leader in both the art and luxury goods markets, attracting opportunities that align with their ambitious creative vision.",
    ],
    storyImages: [
      "/assets/dl-intro.png",
      "/assets/78afc7fe072483b9.avif",
      "/assets/05748fa1b2376422.avif",
    ],
  },
  aykuna2: {
    key: "aykuna2" as ProjectKey,
    href: "/works/studio-nive",
    name: "The Internet",
    compactName: "The Internet",
    image: "/assets/no-wifi.jpg",
    alt: "The Internet",
    year: "2026",
    duration: "6 Months",
    service: "Internet Crash Out",
    description:
      "The only set back there was the internet :( Floppie Tuni Tuni digital world.",
    audio: "/assets/internet-crashout.mp3",
    introTitle: "Introduction",
    intro: [
      "Aykuna approached Vicii Studio seeking a refreshed digital presence that matched their grand vision as an ultra-luxury fashion brand based on a story of warrior-queens that earnt themselves the place to be on top.",
    ],
    solutionTitle: "Establishing a Brand Image",
    solution: [
      "We developed a core brand narrative for AYKUNA centered on the “Sovereign Queen.” This informed every aspect of the project.",
    ],
    outcomeTitle: "The Results",
    outcome: [
      "Through our strategic and creative partnership, we equipped AYKUNA with a powerful, multi faceted brand toolkit.",
    ],
    storyImages: [
      "/assets/dda16bde983fabbe.avif",
      "/assets/aykuna-brand.png",
      "/assets/aykuna-outcome.png",
    ],
  },
};

const projectList = [
  PROJECTS.nora,
  PROJECTS.aykuna,
  PROJECTS.dlavigne,
  PROJECTS.aykuna2,
];

function useMotionRuntime() {
  useEffect(() => {
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-scene]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealNodes.forEach((node) => observer.observe(node));

    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const range = Math.max(1, rect.height - viewport);
        const progress = Math.min(1, Math.max(0, -rect.top / range));
        scene.style.setProperty("--progress", progress.toFixed(4));
      });
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
}

function IntroCurtain() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div className="intro-curtain" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, index) => (
        <span key={index} style={{ "--i": index } as CSSProperties}>
          TUNI
        </span>
      ))}
    </div>
  );
}

function SiteHeader({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", open);
    return () => document.body.classList.remove("menu-is-open");
  }, [open]);

  return (
    <>
      <header className={`site-header site-header--${tone}`}>
        <a className="wordmark" href="/" aria-label="TUNI home">
          TUNI
        </a>
        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>
      <div className={`menu-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="menu-panel__veil" />
        <nav className="menu-panel__content" aria-label="Main navigation">
          {[
            ["Home", "/"],
            ["Day-1", "/day1"],
            ["Day-2", "/day2"],
            ["Day-3", "/day3"],
            ["Day-4", "/day4"],
            ["Day-5", "/day5"],
            ["Day-6", "/day6"],
            ["Day-7", "/day7"],
            ["Services", "/#services"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer" style={{ minHeight: "auto", background: "transparent" }}>
      <div className="site-footer__image" style={{ height: "auto", overflow: "hidden" }}>
        <img
          src="/footer-image.png"
          alt="Tunisia Footer"
          style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
        />
      </div>
    </footer>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-section" id="contact">
      <img src={A.contact} alt="Futuristic Explorer" />
      <div className="contact-section__veil" />
      <div className="contact-section__content" data-reveal>
        <h2>Contact Us</h2>
        <p>Reach out today and let’s start building something remarkable.</p>
        <form onSubmit={submit}>
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Jane Smith" required />
          </label>
          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              placeholder="Enter email address"
              required
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={2}
              required
            />
          </label>
          <button type="submit">{sent ? "Thank you" : "Submit"}</button>
        </form>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className={`project-card ${index % 2 ? "project-card--reverse" : ""}`}
      data-reveal
    >
      <div className="project-card__media">
        <img src={project.image} alt={project.alt} />
      </div>
      <div className="project-card__copy">
        <span>{project.year}</span>
        <h3>{project.compactName}</h3>
        <p>{project.description}</p>
        <em>{project.service}</em>
        {project.audio ? (
          <div className="mt-6">
            <audio
              controls
              src={project.audio}
              className="w-full max-w-sm rounded-full accent-umber"
              onPlay={() => window.dispatchEvent(new CustomEvent("pause-bg-music"))}
              onPause={() => window.dispatchEvent(new CustomEvent("resume-bg-music"))}
              onEnded={() => window.dispatchEvent(new CustomEvent("resume-bg-music"))}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function HomeHero() {
  return (
    <section className="home-hero">
      <img className="home-hero__background" src="/tunisia-journey.jpg" alt="Your Journey in Tunisia" />
      <div className="home-hero__shade" />
      <div className="home-hero__tagline">
        Your journey in Tunisia!
        <br />
        Sousse specifically
      </div>
      <div className="home-hero__motto">—25 July till 1 August</div>
      <div className="home-hero__title" aria-label="TUNI">
        <strong>TUNI</strong>
      </div>
    </section>
  );
}

function MottoCollage() {
  return (
    <section className="motto-collage" data-scroll-scene>
      <div className="motto-collage__sticky">
        <div className="motto-collage__word motto-collage__word--vici">TUNI</div>
        <img className="motto-collage__a" src="/collage-1.jpg" alt="Tunisia collage 1" />
        <img className="motto-collage__b" src="/collage-2.jpg" alt="Tunisia collage 2" />
        <img className="motto-collage__c" src="/collage-3.jpg" alt="Tunisia collage 3" />
        <img className="motto-collage__d" src="/collage-4.jpg" alt="Tunisia collage 4" />
      </div>
    </section>
  );
}

function Glimpse() {
  return (
    <section className="glimpse">
      <div className="glimpse__hero" data-reveal>
        <img src="/glimpse-hero.jpg" alt="Glimpse of TUNI" />
      </div>
      <div className="glimpse__copy" data-reveal>
        <h2>
          <em>Glimpse of</em> TUNI
        </h2>
        <p>
          Tunisia is a North African country on the Mediterranean coast known for its blend of Roman, Arab, and French history, moving from green coastal mountains down into the Sahara Desert. One of its premier coastal destinations is Sousse, a major port city famous for its UNESCO-listed ancient medina, historic fortifications, and vibrant beach resorts that attract travelers from around the world.
        </p>
      </div>
      <div className="glimpse__grid">
        <img src="/glimpse-1.jpg" alt="Tunisia Glimpse 1" />
        <img src="/glimpse-2.jpg" alt="Tunisia Glimpse 2" />
        <img src="/glimpse-3.jpg" alt="Tunisia Glimpse 3" />
        <img src="/glimpse-4.jpg" alt="Tunisia Glimpse 4" />
      </div>
    </section>
  );
}

function CinematicScene() {
  return (
    <section className="cinematic-scene" data-scroll-scene>
      <div className="cinematic-scene__sticky">
        <img className="cinematic-scene__frame frame-one" src="/cinematic-1.jpg" alt="Sousse 1" />
        <img className="cinematic-scene__frame frame-two" src="/cinematic-2.jpg" alt="Sousse 2" />
        <img className="cinematic-scene__frame frame-three" src="/cinematic-3.jpg" alt="Sousse 3" />
        <img className="cinematic-scene__frame frame-four" src="/cinematic-4.jpg" alt="Sousse 4" />
        <h2>Sousse, Tunisia</h2>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__copy" data-reveal>
        <h2>7 Days in Tunisia</h2>
        <p>
          Arrival | Blacko | Trumpie Cat | Blue Jellyfish | Nuggets | Swim | Shopping | Home
        </p>
        <p style={{ marginTop: "1rem", fontSize: "0.85rem", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "monospace" }}>
          Press Each Picture Below Or Navigate Through The Button On Top Right Corner
        </p>
      </div>
    </section>
  );
}

function HorizontalGallery() {
  const days = [
    {
      day: "Day 1",
      title: "Arrival",
      image: "/day-thumb-1.jpg",
      href: "/day1",
    },
    {
      day: "Day 2",
      title: "Blacko",
      image: "/day-thumb-2.jpg",
      href: "/day2",
    },
    {
      day: "Day 3",
      title: "Trumpie Cat",
      image: "/day-thumb-3.jpg",
      href: "/day3",
    },
    {
      day: "Day 4",
      title: "Blue Jellyfish",
      image: "/day-thumb-4.jpg",
      href: "/day4",
    },
    {
      day: "Day 5",
      title: "Nuggets",
      image: "/day-thumb-5.jpg",
      href: "/day5",
    },
    {
      day: "Day 6",
      title: "Swim",
      image: "/day-thumb-6.jpg",
      href: "/day6",
    },
    {
      day: "Day 7",
      title: "Shopping & Home",
      image: "/day-thumb-7.jpg",
      href: "/day7",
    },
  ];

  return (
    <section className="horizontal-gallery" data-scroll-scene>
      <div className="horizontal-gallery__sticky">
        <div className="horizontal-gallery__track">
          {days.map((item) => (
            <Link key={item.day} href={item.href} style={{ textDecoration: "none", color: "inherit" }}>
              <figure style={{ cursor: "pointer", position: "relative", overflow: "hidden", borderRadius: "1rem" }}>
                <img src={item.image} alt={`${item.day} - ${item.title}`} />
              </figure>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  useMotionRuntime();

  return (
    <div className="page page--dark">
      <IntroCurtain />
      <SiteHeader tone="light" />
      <main>
        <HomeHero />
        <MottoCollage />
        <Glimpse />
        <CinematicScene />
        <Services />
        <HorizontalGallery />
      </main>
      <Footer />
    </div>
  );
}

function EditorialHero({
  kind,
}: {
  kind: "about" | "works";
}) {
  const about = kind === "about";
  return (
    <section className="editorial-hero">
      <h1 data-reveal>
        {about ? (
          <>
            The Arrival
            <br />
            of the glorious famie, Arina&apos;s Family.
          </>
        ) : (
          <>
            Мы любим Тунис
            <br />
            Пляжи и бассейны обязательны.
          </>
        )}
      </h1>
      <p data-reveal>
        {about
          ? "From Russia to Tunisia - It was Saturday Night (25/07/26). Arina and famie boarded the plane at 7 PM to arrive at the city of Africans, Sousse."
          : "You enjoyed your time at the beach swimming on this day! YAYYYY."}
      </p>
    </section>
  );
}

function ExperienceScene() {
  const images = [
    A.day1Photo1,
    A.day1Photo2,
    A.day1Photo3,
    A.day1Photo4,
    A.day1Photo5,
    A.day1Photo6,
    A.day1Photo7,
  ];

  return (
    <section className="experience-scene" data-scroll-scene>
      <div className="experience-scene__sticky">
        <div className="experience-scene__title">
          With TUNI, you made
          <em>memories</em>
        </div>
        {images.map((image, index) => (
          <img
            key={image}
            className={`experience-scene__image image-${index + 1}`}
            src={image}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}

function MasonryGallery() {
  const images = [
    A.day1Photo1,
    A.day1Photo2,
    A.day1Photo3,
    A.day1Photo4,
    A.day1Photo5,
    A.day1Photo6,
    A.day1Photo7,
    A.day1Photo1,
    A.day1Photo2,
    A.day1Photo3,
    A.day1Photo4,
    A.day1Photo5,
    A.day1Photo6,
    A.day1Photo7,
  ];

  return (
    <section className="masonry-gallery">
      {images.map((image, index) => (
        <figure key={`${image}-${index}`} data-reveal>
          <img src={image} alt="" />
        </figure>
      ))}
    </section>
  );
}

export function AboutPage() {
  useMotionRuntime();

  const team = [
    ["Kais Saied", "Mr. President (since 2019, got re-elected since 2024)", A.workerA],
    ["A Muslim Country", "Roughly 99% of the population is Muslim", A.workerB],
    ["You Were There!", "Three most beautiful russian women were all in Sousse", A.workerC],
  ];

  return (
    <div className="page page--light">
      <SiteHeader tone="dark" />
      <main>
        <EditorialHero kind="about" />
        <section className="about-hero-image">
          <img src={A.aboutHero} alt="Tunisian flag waving against a blue sky" />
        </section>
        <section className="team-section">
          <h2 data-reveal>About Tuni Tuni</h2>
          <p data-reveal>
            Here is a lil info about the current Tunisia you were in!
          </p>
          <div className="team-grid">
            {team.map(([name, role, image]) => (
              <article key={name} data-reveal tabIndex={0}>
                <img src={image} alt={name} />
                <div>
                  <h3>{name}</h3>
                  <p>{role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="office-quote" data-reveal>
          <img src={A.office} alt="Four people riding together on a motorbike" />
          <h4>
            &quot;THERES <em>BIKES</em> WITH <em>4 PPL</em>
            <br />
            AND <em>20 MEN</em> IN <em>ONE</em> CAR.&quot;
          </h4>
        </section>
        <ExperienceScene />
        <MasonryGallery />
      </main>
      <Footer />
    </div>
  );
}

export function WorksPage() {
  useMotionRuntime();

  return (
    <div className="page page--light">
      <SiteHeader tone="dark" />
      <main>
        <EditorialHero kind="works" />
        <section className="project-list project-list--works">
          {projectList.map((project, index) => (
            <ProjectCard key={project.key} project={project} index={index} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

function DetailSection({
  title,
  paragraphs,
  image,
  alt,
}: {
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
}) {
  return (
    <section className="case-section" data-reveal>
      <h2>
        <span />
        {title}
      </h2>
      <div className="case-section__body">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <img src={image} alt={alt} />
      </div>
    </section>
  );
}

export function ProjectPage({ projectKey }: { projectKey: ProjectKey }) {
  useMotionRuntime();
  const project = PROJECTS[projectKey];

  return (
    <div className="page page--case">
      <SiteHeader tone="light" />
      <main>
        <section className="case-hero">
          <div className="case-hero__name" data-reveal>
            <h1>{project.compactName}</h1>
            <p>{project.description}</p>
          </div>
          <div className="case-hero__media" data-reveal>
            <img src={project.image} alt={project.alt} />
          </div>
          <dl className="case-hero__meta" data-reveal>
            <div>
              <dt>/Client</dt>
              <dd>{project.compactName}</dd>
            </div>
            <div>
              <dt>/Service</dt>
              <dd>{project.service}</dd>
            </div>
            <div>
              <dt>/Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>/Duration</dt>
              <dd>{project.duration}</dd>
            </div>
          </dl>
        </section>
        <div className="case-story">
          <DetailSection
            title={project.introTitle}
            paragraphs={project.intro}
            image={project.storyImages[0]}
            alt={`${project.compactName} introduction`}
          />
          <DetailSection
            title={project.solutionTitle}
            paragraphs={project.solution}
            image={project.storyImages[1]}
            alt={`${project.compactName} solution`}
          />
          <DetailSection
            title={project.outcomeTitle}
            paragraphs={project.outcome}
            image={project.storyImages[2]}
            alt={`${project.compactName} outcome`}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
