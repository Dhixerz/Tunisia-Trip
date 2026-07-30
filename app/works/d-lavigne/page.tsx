import type { Metadata } from "next";
import { ProjectPage } from "../../components/ViciiSite";

export const metadata: Metadata = {
  title: "D’LAVIGNE — TUNI",
  description:
    "Brand development and product strategy for the Paris art studio D’LAVIGNE.",
};

export default function DLavigneProject() {
  return <ProjectPage projectKey="dlavigne" />;
}
