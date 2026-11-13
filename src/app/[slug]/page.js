// Packages
import { notFound } from "next/navigation";

// Utils
import { PROJECTS } from "@/constants";
import { ProjectDetail } from "@/screens";

// Static export: only the slugs below exist, anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  return project ? { title: `${project.name} — Daniyal Hasan Shah`, description: project.description[0] } : {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!PROJECTS.some((project) => project.slug === slug)) notFound();
  return <ProjectDetail slug={slug} />;
}
