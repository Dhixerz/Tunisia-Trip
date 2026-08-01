"use client";

import { Chrome } from "../day3/components/Chrome";
import { Hero } from "./components/Hero";
import { Day5 } from "./components/Day5";
import { DayChapter } from "./components/DayChapter";
import { Closing } from "./components/Closing";

import "./day5.css";

const pAlley = "/day5/p-alley.jpg";
const pSouk = "/day5/p-souk.jpg";
const pPalms = "/day5/p-palms.jpg";
const pTea = "/day5/p-tea.jpg";
const pBread = "/day5/p-bread.jpg";
const pSand = "/day5/p-sand.jpg";

export default function Day5Page() {
  return (
    <div className="day5-container">
      <Chrome theme="light" />
      <main id="top" className="bg-paper text-ink">
        <Hero />

        <DayChapter
          day="01"
          date="Morning Mystery"
          place="Tunis"
          title="The Mysterious Red Drink"
          body="You were so curious about the red drink. But it's just Fanta babe. Let's face it now, Fanta is red. Well some are orange I see on Google, but red is more common, so stop. I love you."
          note="Your Hotel (my guess is El Hana)"
          image="/day5/red-drink.jpg"
          alt="The Mysterious Red Drink"
          caption="the mysterious red drink"
          time=""
          width={900}
          height={1200}
        />

        <DayChapter
          day="02"
          date="Floppie Masc"
          place="Sousse"
          title="Yoga Invitation"
          body="Again, the nerve. These people are really brave for asking you out everywhere. You really are hot tho. I would totally swim near you in every pool."
          note="The Pool"
          image="/day5/yoga-pool.png"
          alt="Yoga Invitation"
          caption="the pool & yoga invitation"
          time=""
          width={1000}
          height={1200}
          flip
          tinted
        />

        <DayChapter
          day="03"
          date="Night Time"
          place="Sousy"
          title="The Incredibel Nuggets"
          body="You found your favorite Nuggets! It's Tunisian Nuggets! They look absolutely tasty, and the sauce. THE SAUCE. Must have been a great pair of meal for your dinner."
          note="Your Dining Table"
          image="/day5/nuggets.jpg"
          alt="The Incredibel Nuggets"
          caption="the incredibel nuggets"
          time=""
          width={900}
          height={1100}
        />

        <Day5 />
      </main>
    </div>
  );
}
