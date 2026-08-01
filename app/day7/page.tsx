"use client";

import { Chrome } from "../day3/components/Chrome";
import { Hero } from "./components/Hero";
import { Day7Section } from "./components/Day7";
import { DayChapter } from "./components/DayChapter";
import { Closing } from "./components/Closing";

import "./day7.css";

const pAlley = "/day7/p-alley.jpg";
const pSouk = "/day7/p-souk.jpg";
const pPalms = "/day7/p-palms.jpg";
const pTea = "/day7/p-tea.jpg";
const pBread = "/day7/p-bread.jpg";
const pSand = "/day7/p-sand.jpg";

export default function Day7Page() {
  return (
    <div className="day7-container bg-sand">
      <Chrome theme="light" />
      <main id="top" className="bg-sand text-ink pt-4 lg:pt-8">

        <DayChapter
          day="<3"
          date=""
          place="Your Aura is 10/10"
          title="A guy seduced you (Again.)"
          body="Let's go together next summer vacation so I can put my hand on your waist the whole time. I will give the death stare to all the monkeys trying to get close to you."
          note="Breakie spot"
          image="/day7/aura-seduced.png"
          alt="Breakie spot"
          caption="Just No."
          time=""
          width={1000}
          height={750}
          tinted
        />

        <DayChapter
          day="Aw"
          date=""
          place="CUTIESSSSS"
          title="Lil Sis & Big Bro"
          body="The kids there love you so much! You are pretty in their eyes. I bet they would want to be like you when they grow up. I mean, if i were a kid, I'd ask for adult tips from you."
          note="Tuni!"
          image="/day7/cuties.png"
          alt="Lil Sis & Big Bro"
          caption="Awwieee"
          time=""
          width={1000}
          height={750}
        />

        <DayChapter
          day="^^"
          date=""
          place="Souvenir Hunt"
          title="The Cool Tunisian Markets"
          body="You bought a lot of thingsss!! Your girl is so excited about it. And you said you saw 2 planes passed by, that's a sign to be on one soon (Russia is waiting for you)."
          note="Sousse Markets"
          image="/day7/planes.png"
          alt="Sousse Markets"
          caption="PLANES!"
          time=""
          width={1200}
          height={900}
          flip
          tinted
        />

        <Closing />
      </main>
    </div>
  );
}
