import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/content/projects";
import { TradingCaseStudy } from "@/components/projects/TradingCaseStudy";
import { ClassicGamesCaseStudy } from "@/components/projects/ClassicGamesCaseStudy";
import { GenericCaseStudy } from "@/components/projects/GenericCaseStudy";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
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

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  if (project.slug === "trading-platform") {
    return <TradingCaseStudy project={project} />;
  }
  if (project.slug === "classic-games") {
    return <ClassicGamesCaseStudy project={project} />;
  }
  return <GenericCaseStudy project={project} />;
}
