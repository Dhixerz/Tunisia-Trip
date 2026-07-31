import type { Metadata } from "next";
import Day2Page from "../components/Day2Page";

export const metadata: Metadata = {
  title: "Day-2 — TUNI",
  description:
    "A vivid, motion-led digital agency experience recreated for TUNI Day-2.",
};

export default function Day2() {
  return <Day2Page />;
}
