import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.canonical;
  const now = new Date();

  const routes = ["", "/projects", "/about", "/experience", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const projectRoutes = projects
    .filter((p) => p.caseStudy)
    .map((p) => ({
      url: `${base}${p.caseStudy}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...routes, ...projectRoutes];
}
