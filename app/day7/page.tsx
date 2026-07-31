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
    <div className="day7-container">
      <Chrome theme="light" />
      <main id="top" className="bg-paper text-ink">
        <Hero />

        <DayChapter
          day="01"
          date="10 March"
          place="Tunis"
          title="Landed with wet hair and no plan"
          body="The taxi driver turned the radio down to tell us the medina closes late on Fridays, then turned it back up and sang the rest of the way. We ate too much bread and slept with the window open."
          note="First stamp in the notebook"
          image={pAlley}
          alt="A blue door in a whitewashed alley in Tunis"
          caption="the door was the exact blue you like"
          time="17:05, Sidi Bou Said"
          width={900}
          height={1200}
        />

        <DayChapter
          day="02"
          date="11 March"
          place="Sousse"
          title="Salt on everything, including the coffee"
          body="We walked the ramparts twice because you wanted to see the harbour from both ends. A boy sold us four oranges and gave us a fifth for free when he heard us mangling the word for thank you."
          note="9.2 km, mostly uphill"
          image={pSouk}
          alt="Spice stall in a Tunisian market"
          caption="cumin, then rose, then smoke"
          time="12:41, the covered market"
          width={1000}
          height={1200}
          flip
          tinted
        />

        <DayChapter
          day="03"
          date="12 March"
          place="Tozeur"
          title="The oasis was louder than the city"
          body="Water running in the irrigation channels under the palms, all afternoon, in every direction. You lay down on the mat and said you could hear the dates growing. I have never seen you fall asleep faster."
          note="Slept 11 hours"
          image={pPalms}
          alt="Sunlight through palm fronds in an oasis"
          caption="ten minutes of shade, stolen"
          time="15:12, the palm grove"
          width={900}
          height={1100}
        />

        <DayChapter
          day="04"
          date="13 March"
          place="Chebika"
          title="A road that kept forgetting to be a road"
          body="Gravel, then rock, then nothing, then the mountain spring with the cold water. We shared a thermos with two men from Gafsa who insisted on refilling it before we left."
          note="Cut my hand on the rocks — worth it"
          image={pTea}
          alt="A glass of mint tea on a tiled surface"
          caption="tea number four of the day"
          time="16:30, the spring"
          width={900}
          height={900}
          flip
          tinted
        />

        <Day7Section />

        <DayChapter
          day="06"
          date="15 March"
          place="Ksar Ghilane"
          title="Woke up with the sunrise on the tent wall"
          body="Bread baked in the sand and coffee that tasted like the pot it came from. We didn't take many photos this day, which I think means it was the best one."
          note="Zina the camel said goodbye"
          image={pBread}
          alt="Hands tearing warm flatbread over a woven mat"
          caption="bread out of the embers"
          time="07:18, the camp"
          width={1000}
          height={750}
        />

        <DayChapter
          day="07"
          date="16 March"
          place="Back to Tunis"
          title="Six hours north with the windows down"
          body="You slept from Gabès to Sfax with your feet on the dashboard. I kept the receipt from the last coffee because it had the date on it and I wanted proof that the week actually happened."
          note="Last look at the dunes in the mirror"
          image={pSand}
          alt="Rippled sand dunes at sunset"
          caption="the desert, getting smaller"
          time="09:02, kilometre 40"
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
