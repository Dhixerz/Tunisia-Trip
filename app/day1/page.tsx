import type { Metadata } from "next";
import { AboutPage } from "../components/ViciiSite";

export const metadata: Metadata = {
  title: "Day-1 — TUNI",
  description:
    "Meet TUNI, a multidisciplinary team blending strategy, design, and execution.",
};

export default function About() {
  return <AboutPage />;
}
