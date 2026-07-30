import type { Metadata } from "next";
import { ProjectPage } from "../../components/ViciiSite";

export const metadata: Metadata = {
  title: "NØRA — TUNI",
  description:
    "Brand design and product development for NØRA, a holistic sleeping brand.",
};

export default function NoraProject() {
  return <ProjectPage projectKey="nora" />;
}
