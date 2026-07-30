import type { Metadata } from "next";
import { ProjectPage } from "../../components/ViciiSite";

export const metadata: Metadata = {
  title: "AYKUNA — TUNI",
  description:
    "Branding and product design for AYKUNA, an ultra-luxury fashion brand.",
};

export default function AykunaProject() {
  return <ProjectPage projectKey="aykuna" />;
}
