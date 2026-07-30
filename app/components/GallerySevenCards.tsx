"use client";

import { useEffect } from "react";

const CLONE_ATTRIBUTE = "data-gallery-seven-clone";

export default function GallerySevenCards() {
  useEffect(() => {
    let frame = 0;

    const ensureSevenCards = () => {
      const track = document.querySelector<HTMLElement>(
        ".horizontal-gallery__track",
      );

      if (!track) return;

      const existingCards = Array.from(
        track.querySelectorAll<HTMLElement>(":scope > figure"),
      );

      if (existingCards.length >= 7) return;

      const sourceCards = existingCards.filter(
        (card) => !card.hasAttribute(CLONE_ATTRIBUTE),
      );

      if (sourceCards.length < 4) return;

      [0, 1, 2].forEach((sourceIndex, cloneIndex) => {
        const clone = sourceCards[sourceIndex].cloneNode(true) as HTMLElement;
        const image = clone.querySelector("img");

        clone.setAttribute(CLONE_ATTRIBUTE, String(cloneIndex + 5));

        if (image) {
          image.alt = `${image.alt} — template ${cloneIndex + 5}`;
        }

        track.appendChild(clone);
      });
    };

    const schedule = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(ensureSevenCards);
    };

    schedule();

    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      document
        .querySelectorAll(`[${CLONE_ATTRIBUTE}]`)
        .forEach((clone) => clone.remove());
    };
  }, []);

  return null;
}
