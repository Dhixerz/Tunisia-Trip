import type { Metadata } from "next";
import { WorksPage } from "../components/ViciiSite";

export const metadata: Metadata = {
  title: "Works — TUNI",
  description:
    "A curated collection of TUNI's boldest and most impactful projects.",
};

export default function Works() {
  return <WorksPage />;
}
