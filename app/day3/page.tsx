"use client";

import { Chrome } from "./components/Chrome";
import { Hero } from "./components/Hero";
import { DayOne, DayTwo, DayThree, DayFour } from "./components/DaysEarly";
import {
  DayFive,
  DaySix,
  DaySeven,
  Reflections,
  Closing,
} from "./components/DaysLate";

export default function Day3Page() {
  return (
    <main className="day3-page relative w-full bg-ink">
      <Chrome />
      <Hero />
      <DayOne />
      <DayTwo />
      <DayThree />
      <DayFour />
      <DayFive />
      <DaySix />
      <DaySeven />
      <Reflections />
      <Closing />
    </main>
  );
}
