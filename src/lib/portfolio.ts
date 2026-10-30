/** Client-safe portfolio types and presentation constants. Never import the fs loader here. */
export type ProjectStatus = "Live" | "Published" | "In Development" | "Experiment" | "Coming Soon" | "Archived" | "Completed" | "Ongoing" | "Investigation";
export type ProjectCategory = "AI" | "Trading" | "Games" | "Automation" | "Web" | "Experiments" | "Cloud" | "Infrastructure" | "Security" | "Leadership" | "Cloud & Infrastructure" | "Database & Data Platforms" | "Cybersecurity & Identity" | "Automation, FinOps & AI" | "Enterprise Operations & Governance";
export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  status: ProjectStatus;
  year: number | null;
  dates: { start: string | null; end: string | null };
  featured: boolean;
  sortOrder: number;
  kind: "employer" | "personal";
  approval: "approved" | "pending";
  publicVisible: boolean;
  sourceReference?: string;
  confidentiality: "public";
  challenge: string | null;
  responsibilities: string[];
  implementation: string[];
  outcome: string | null;
  sources: { description: string }[];
  image: string | null;
  useMockup?: "trading" | "games";
  gallery?: string[];
  technologies: string[];
  url?: string;
  caseStudy?: string;
  googlePlay?: string;
  hub?: boolean;
  accent?: "gold" | "steel";
}
export const portfolioTags = ["Cloud", "Infrastructure", "Security", "AI", "Automation", "Leadership", "Trading", "Games", "Web", "Experiments"];
export type PortfolioSort = "importance" | "newest" | "oldest";
export interface PortfolioSelection {
  tags?: string[];
  category?: string;
  technology?: string;
  kind?: "all" | Project["kind"];
  sort?: PortfolioSort;
}
/** Multiple tags combine with AND; unknown dates always sort last. */
export function selectProjects(projects: Project[], selection: PortfolioSelection = {}): Project[] {
  const chronologicalDate = (project: Project) => project.dates.start ?? (project.year === null ? null : String(project.year));
  return projects.filter(project =>
    (selection.tags ?? []).every(tag => project.tags.includes(tag)) &&
    (!selection.technology || project.technologies.includes(selection.technology)) &&
    (!selection.category || project.category === selection.category) &&
    (!selection.kind || selection.kind === "all" || project.kind === selection.kind)
  ).sort((a, b) => {
    if (selection.sort === "newest" || selection.sort === "oldest") {
      const left = chronologicalDate(a), right = chronologicalDate(b);
      if (left === null && right !== null) return 1;
      if (right === null && left !== null) return -1;
      if (left !== null && right !== null) {
        const comparison = left.localeCompare(right);
        if (comparison) return selection.sort === "newest" ? -comparison : comparison;
      }
    }
    return a.sortOrder - b.sortOrder || a.id.localeCompare(b.id);
  });
}

export const statusStyles: Record<ProjectStatus, string> = {
  Live: "text-accent border-accent/40 bg-accent/10",
  Published: "text-accent border-accent/40 bg-accent/10",
  "In Development": "text-steel-soft border-steel/40 bg-steel/10",
  Experiment: "text-steel-soft border-steel/40 bg-steel/10",
  "Coming Soon": "text-chalk-muted border-ink-600 bg-ink-800/60",
  Archived: "text-chalk-faint border-ink-700 bg-ink-850",
  Completed: "text-accent border-accent/40 bg-accent/10",
  Ongoing: "text-steel-soft border-steel/40 bg-steel/10",
  Investigation: "text-steel-soft border-steel/40 bg-steel/10",
};
export const statusDot: Record<ProjectStatus, string> = {
  Live: "bg-accent", Published: "bg-accent", "In Development": "bg-steel",
  Experiment: "bg-steel", "Coming Soon": "bg-chalk-faint", Archived: "bg-ink-600",
  Completed: "bg-accent", Ongoing: "bg-steel", Investigation: "bg-steel",
};
