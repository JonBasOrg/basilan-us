import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/content/projects";
import { TradingCaseStudy } from "@/components/projects/TradingCaseStudy";
import { ClassicGamesCaseStudy } from "@/components/projects/ClassicGamesCaseStudy";
import { GenericCaseStudy } from "@/components/projects/GenericCaseStudy";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `https://basilan.us/projects/${project.slug}` },
    openGraph: {
      title: project.name,
      description: project.description,
      url: `https://basilan.us/projects/${project.slug}`,
      images: [
        {
          url:
            project.slug === "trading-platform"
              ? "/og/trading.png"
              : project.slug === "classic-games"
              ? "/og/games.png"
              : "/og/home.png",
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  if (project.slug === "trading-platform") {
    return <TradingCaseStudy project={project} />;
  }
  if (project.slug === "classic-games") {
    return <ClassicGamesCaseStudy project={project} />;
  }
  return <GenericCaseStudy project={project} />;
}
