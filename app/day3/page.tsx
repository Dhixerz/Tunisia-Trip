"use client";

import { Chrome } from "./components/Chrome";
import { Hero } from "./components/Hero";
import { DayOne, DayTwo } from "./components/DaysEarly";
import { DaySix } from "./components/DaysLate";

export default function Day3Page() {
  return (
    <main className="day3-page relative w-full bg-ink">
      <Chrome />
      <Hero />
      <DayOne />
      <DayTwo />
      <DaySix />
    </main>
  );
}
