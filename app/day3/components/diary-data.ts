const hero = "/day3/hero.jpg";
const plane = "/day3/plane.avif";
const outfit = "/day3/outfit.jpg";
const mosque = "/day3/mosque.jpg";
const day2a = "/day3/day2a.avif";
const day2b = "/day3/day2b.jpg";
const day3a = "/day3/day3a.jpg";
const day4a = "/day3/day4a.jpg";
const day5a = "/day3/day5a.jpg";
const day6a = "/day3/day6a.jpg";
const day7a = "/day3/day7a.jpg";

export const photos = {
  hero,
  plane,
  outfit,
  mosque,
  day1a: outfit,
  day1b: mosque,
  day2a,
  day2b,
  day3a,
  day4a,
  day5a,
  day6a,
  day7a,
};

export type DayMeta = {
  n: string;
  id: string;
  theme: string;
  title: string;
  tagline: string;
  place: string;
  cover: string;
  audio?: string;
};

export const days: DayMeta[] = [
  {
    n: "01",
    id: "day-01",
    theme: "Press Me!",
    title: "Arrival",
    tagline: "the light was already waiting",
    place: "Tunis — Carthage",
    cover: plane,
    audio: "/day3/audio/day1.mp3",
  },
  {
    n: "02",
    id: "day-02",
    theme: "Press Me!",
    title: "Souk",
    tagline: "a hundred colours, one hand in mine",
    place: "Medina of Tunis",
    cover: day2a,
    audio: "/day3/audio/day2.mp3",
  },
  {
    n: "03",
    id: "day-03",
    theme: "Press Me!",
    title: "Blue",
    tagline: "mint, salt, and a very slow afternoon",
    place: "Sidi Bou Saïd",
    cover: day3a,
    audio: "/day3/audio/day3.mp3",
  },
  {
    n: "04",
    id: "day-04",
    theme: "Press Me!",
    title: "Stone",
    tagline: "older than every word for love",
    place: "Dougga",
    cover: day4a,
    audio: "/day3/audio/day4.mp3",
  },
  {
    n: "05",
    id: "day-05",
    theme: "Press Me!",
    title: "Sahara",
    tagline: "nothing for miles, everything at once",
    place: "Douz — Grand Erg",
    cover: day5a,
    audio: "/day3/audio/day5.mp3",
  },
  {
    n: "06",
    id: "day-06",
    theme: "Press Me!",
    title: "Fire",
    tagline: "you counted stars until you fell asleep",
    place: "Camp, 33.4°N",
    cover: day6a,
    audio: "/day3/audio/day6.mp3",
  },
  {
    n: "07",
    id: "day-07",
    theme: "Press Me!",
    title: "Home",
    tagline: "we brought the warmth back with us",
    place: "TUN → home",
    cover: day7a,
    audio: "/day3/audio/day7.mp3",
  },
];

export const reflections = [
  {
    text: "Okay it's 6am and the call to prayer just woke me and I'm not even upset, it sounds like the whole city is breathing.",
    meta: "voice memo — 06:14, day 02",
    rot: -5,
  },
  {
    text: "I bought too much saffron. I regret nothing. Smell my hands when I get back.",
    meta: "voice memo — 13:02, day 02",
    rot: 4,
  },
  {
    text: "The sand is warm underneath and cold on top. Nobody told me that.",
    meta: "voice memo — 19:40, day 05",
    rot: -3,
  },
  {
    text: "I keep saving these for you instead of posting them anywhere.",
    meta: "voice memo — 23:58, day 06",
    rot: 7,
  },
];