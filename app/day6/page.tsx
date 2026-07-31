import type { Metadata } from "next";
import Day6Page from "../components/Day6Page";
import "../day6.css";

export const metadata: Metadata = {
  title: "Day-6 — TUNI",
  description:
    "A vivid, motion-led digital agency experience created for TUNI Day-6.",
};

export default function Day6() {
  return <Day6Page />;
}
