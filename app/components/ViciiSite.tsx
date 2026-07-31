"use client";

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

type ProjectKey = "nora" | "aykuna" | "dlavigne";

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
};

export const PROJECTS: Record<ProjectKey, Project> = {
  nora: {
    key: "nora",
    href: "/works/arcworks-collective",
    name: "N Ø R A",
    compactName: "NØRA",
    image: A.nora,
    alt: "NORA",
    year: "2025",
    duration: "8 Months",
    service: "Brand Design & Product Development",
    description:
      "This project focuses on brand awareness, and product designs development for a holistic sleeping brand blending rituals with a modern twist for a dreamy ambiance. NØRA is more than just a brand; it is an invitation to transform the act of sleeping into a sacred and beautiful ritual, providing our customers with the tools to achieve ultimate rest and rejuvenation.",
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
    name: "A Y K U N A",
    compactName: "AYKUNA",
    image: A.aykuna,
    alt: "Dynamic Fashion Portrait",
    year: "2025",
    duration: "6 Months",
    service: "Fashion brand",
    description:
      "Branding and product design for an ultra-luxury fashion brand that blends art, craftmanship, and storytelling.",
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
    name: "D ’ L A V I G N E",
    compactName: "D’LAVIGNE",
    image: A.dlavigne,
    alt: "Modern Black Chair",
    year: "2025",
    duration: "On Going",
    service: "Brand Design & Product Development",
    description:
      "Brand development and product strategy for renowned Paris’s art studio, translating their unique artistic style into luxury fashion brand collaborations and art exhibitions",
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
};

const projectList = [
  PROJECTS.nora,
  PROJECTS.aykuna,
  PROJECTS.dlavigne,
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
            ["Works", "/works"],
            ["Services", "/#services"],
            ["Contact", "/#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="menu-panel__email" href="mailto:contact@viciistudio.com">
            contact@viciistudio.com
          </a>
        </nav>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__image">
        <img src={A.hero} alt="Waveform Glow: A Red-Lit Modern Interior" />
      </div>
      <div className="site-footer__shade" />
      <div className="site-footer__grid">
        <div>
          <h4>—Per Aspera Ad Astra</h4>
          <form className="footer-signup" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="footer-email">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="contact@viciistudio.com"
            />
            <button type="submit" aria-label="Submit email">
              →
            </button>
          </form>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/day1">Day-1</a>
          <a href="/day2">Day-2</a>
          <a href="/works">Works</a>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>
          <small>All Rights Reserved.</small>
        </nav>
      </div>
      <div className="site-footer__logo" aria-label="TUNI Studio">
        <span>TUNI</span>
        <sup>®</sup>
        <em>Studio</em>
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
      <a className="contact-section__email" href="mailto:contact@viciistudio.com">
        contact@viciistudio.com
      </a>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <a
      className={`project-card ${index % 2 ? "project-card--reverse" : ""}`}
      href={project.href}
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
      </div>
    </a>
  );
}

function HomeHero() {
  return (
    <section className="home-hero">
      <img className="home-hero__background" src={A.hero} alt="Surreal Portrait Blur" />
      <div className="home-hero__shade" />
      <div className="home-hero__tagline">
        Stories you can feel,
        <br />
        moments you can keep
      </div>
      <div className="home-hero__motto">—Per Aspera ad Astra</div>
      <div className="home-hero__serial home-hero__serial--left">
        00600 93C7 9002
      </div>
      <div className="home-hero__serial home-hero__serial--right">
        00600 93C7 9002
      </div>
      <div className="home-hero__title" aria-label="TUNI Studio">
        <strong>TUNI</strong>
        <sup>®</sup>
        <span>Studio</span>
      </div>
    </section>
  );
}

function MottoCollage() {
  return (
    <section className="motto-collage" data-scroll-scene>
      <div className="motto-collage__sticky">
        <div className="motto-collage__word motto-collage__word--veni">VENI</div>
        <div className="motto-collage__word motto-collage__word--vidi">VIDI</div>
        <div className="motto-collage__word motto-collage__word--vici">TUNI</div>
        <img className="motto-collage__a" src={A.collageA} alt="a man in a room" />
        <img
          className="motto-collage__b"
          src={A.collageB}
          alt="people walking in a hallway"
        />
        <img className="motto-collage__c" src={A.collageC} alt="a man in an office" />
        <img className="motto-collage__d" src={A.collageD} alt="a room with chairs" />
      </div>
    </section>
  );
}

function Glimpse() {
  return (
    <section className="glimpse">
      <div className="glimpse__hero" data-reveal>
        <img src={A.glimpseMain} alt="Futuristic Fashion Fusion" />
      </div>
      <div className="glimpse__copy" data-reveal>
        <h2>
          <em>Glimpse of</em> TUNI
        </h2>
        <p>
          TUNI is a multidisciplinary creative studio focused on artistic
          direction, fashion design, textile and industrial design,
          illustration, graphic identity, editorial design, web design, and
          music direction. As a next-generation startup dedicated to
          multidisciplinary experimentation and cultural impact, TUNI crafting
          visual narratives that evoke emotion, silence, and rhythm.
        </p>
      </div>
      <div className="glimpse__grid">
        <img src={A.glimpseA} alt="minimalist workspace" />
        <img src={A.glimpseB} alt="Fashion portrait in red" />
        <img src={A.glimpseC} alt="Editorial fashion portrait" />
        <img src={A.glimpseD} alt="Casual Office or Café Gathering" />
      </div>
    </section>
  );
}

function CinematicScene() {
  return (
    <section className="cinematic-scene" data-scroll-scene>
      <div className="cinematic-scene__sticky">
        <img className="cinematic-scene__frame frame-one" src={A.darkA} alt="" />
        <img className="cinematic-scene__frame frame-two" src={A.darkB} alt="" />
        <img className="cinematic-scene__frame frame-three" src={A.darkC} alt="" />
        <img className="cinematic-scene__frame frame-four" src={A.darkD} alt="" />
        <h2>Our Projects</h2>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__copy" data-reveal>
        <h2>Our Services</h2>
        <p>
          Visual Identity Creation | Narrative Strategy | Art Direction &amp;
          Editorial Styling | Packaging &amp; Object Design
        </p>
        <p>
          Website &amp; Digital Experience Design | Cultural Consulting &amp;
          Creative Research
        </p>
      </div>
    </section>
  );
}

function HorizontalGallery() {
  const images = [A.railA, A.railB, A.railC, A.railD];
  const labels = [
    "NØRA packaging",
    "NØRA quiet comfort",
    "Painted textile detail",
    "Editorial environment",
  ];

  return (
    <section className="horizontal-gallery" data-scroll-scene>
      <div className="horizontal-gallery__sticky">
        <div className="horizontal-gallery__track">
          {images.map((image, index) => (
            <figure key={image}>
              <img src={image} alt={labels[index]} />
            </figure>
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
        <section className="project-list">
          {projectList.map((project, index) => (
            <ProjectCard key={project.key} project={project} index={index} />
          ))}
        </section>
        <Services />
        <HorizontalGallery />
        <ContactSection />
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
            A curated collection of
            <br />
            our <em>boldest</em> and most
            <br />
            <em>impactful</em> projects.
          </>
        )}
      </h1>
      <p data-reveal>
        {about
          ? "From Russia to Tunisia - It was Saturday Night (25/07/26). Arina and famie boarded the plane at 7 PM to arrive at the city of Africans, Sousse."
          : "Every project is rooted in strategy, built with intention, and crafted to help our clients grow, connect with their audience, and stand out in a crowded market."}
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
        <ContactSection />
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
