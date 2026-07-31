import { useEffect, useState } from "react";

export function TopBar() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > window.innerHeight - 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 bg-paper/95 backdrop-blur transition-[border-color,box-shadow] duration-[400ms]"
      style={{
        borderBottom: stuck ? "2px solid var(--ink)" : "2px solid transparent",
        boxShadow: stuck ? "0 10px 24px -22px var(--ink)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-3">
        <a href="#top" className="eyebrow">
          Tunisia, day by day
        </a>
      </div>
    </nav>
  );
}
