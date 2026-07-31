import type { Metadata } from "next";
import { WorksPage } from "../components/ViciiSite";

export const metadata: Metadata = {
  title: "Day-4 — TUNI",
  description:
    "A curated collection of TUNI's boldest and most impactful projects.",
};

export default function Day4() {
  return <WorksPage />;
}
