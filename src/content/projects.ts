/** Server compatibility facade for home, sitemap, experience and case-study routes. */
import { loadPortfolio } from "@/lib/portfolio.server";
export type { Project, ProjectStatus, ProjectCategory } from "@/lib/portfolio";
export { statusStyles, statusDot } from "@/lib/portfolio";
export const projects = loadPortfolio();
export function getProject(slug: string) {
  return projects.find(project => project.slug === slug);
}
