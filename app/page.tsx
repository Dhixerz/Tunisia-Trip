import type { Metadata } from "next";
import { HomePage } from "./components/ViciiSite";

export const metadata: Metadata = {
  title: "TUNI — Multidisciplinary Creative Studio",
  description:
    "TUNI crafts visual narratives across brand, fashion, product, editorial, and digital design.",
};

export default function Home() {
  return <HomePage />;
}
