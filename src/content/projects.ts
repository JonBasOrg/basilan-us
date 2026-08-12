export type ProjectStatus =
  | "Live"
  | "Published"
  | "In Development"
  | "Experiment"
  | "Coming Soon"
  | "Archived";

export type ProjectCategory =
  | "AI"
  | "Trading"
  | "Games"
  | "Automation"
  | "Web"
  | "Experiments";

export interface Project {
  slug: string;
  name: string;
  /** Short one-line descriptor shown on cards. */
  tagline: string;
  /** Longer public-safe description (1–3 sentences). */
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  /** Launch / major-version year. */
  year: number;
  featured: boolean;
  /** Lower number = higher in ordered lists. */
  sortOrder: number;
  /** Primary hero image under /public. null when a bespoke mockup is used. */
  image: string | null;
  /** Use a bespoke generated mockup instead of a screenshot (e.g. trading). */
  useMockup?: "trading" | "games";
  /** Optional screenshot gallery (paths under /public). */
  gallery?: string[];
  technologies: string[];
  /** External project URL (live app / subdomain). */
  url?: string;
  /** Internal case-study page route. */
  caseStudy?: string;
  /** Google Play URL — only set when publicly published. */
  googlePlay?: string;
  /** Marks a subdomain hub entry (invest/games). */
  hub?: boolean;
  accent?: "gold" | "steel";
}

export const projects: Project[] = [
  {
    slug: "trading-platform",
    name: "AI Personal Trading Platform",
    tagline: "An experimental AI-assisted market research & paper-trading lab.",
    description:
      "A personal research platform for market analysis, strategy testing, backtesting, and paper trading. It explores how automation and AI can assist trading research and decision-making — built as a safe, paper-only laboratory, not a live broker.",
    category: "Trading",
    status: "Live",
    year: 2026,
    featured: true,
    sortOrder: 1,
    image: null,
    useMockup: "trading",
    technologies: [
      "Python",
      "Schwab Trader API (read-only)",
      "Multi-agent AI",
      "Backtesting",
      "Paper Trading",
      "Risk Controls",
      "Telegram Alerts",
    ],
    url: "https://invest.basilan.us",
    caseStudy: "/projects/trading-platform",
    accent: "gold",
  },
  {
    slug: "classic-games",
    name: "Classic Games Collection",
    tagline: "The games you remember, rebuilt for today.",
    description:
      "A local-first collection of classic board, card, and puzzle games — no ads, no analytics, no accounts. Eleven polished games in one offline-friendly app, built with Flutter for Android.",
    category: "Games",
    status: "Published",
    year: 2026,
    featured: true,
    sortOrder: 2,
    image: "/projects/classic-games/hero.jpg",
    useMockup: "games",
    gallery: [
      "/projects/classic-games/01-home.jpg",
      "/projects/classic-games/chess.jpg",
      "/projects/classic-games/sudoku.jpg",
      "/projects/classic-games/solitaire.jpg",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Android",
      "Local-first Storage",
      "Custom Game Engines",
      "Responsive UI",
    ],
    caseStudy: "/projects/classic-games",
    // NOTE: Google Play submission is prepared but NOT yet published.
    // Add the real URL here once the listing goes live:
    googlePlay: "",
    accent: "gold",
  },
  {
    slug: "classic-games-web",
    name: "Classic Games — Web",
    tagline: "Play the collection right in your browser.",
    description:
      "The browser-native home for the Classic Games Collection. A fast, install-free way to play the same games on desktop and mobile — no app store required.",
    category: "Web",
    status: "Coming Soon",
    year: 2026,
    featured: true,
    sortOrder: 3,
    image: null,
    useMockup: "games",
    technologies: ["Web", "TypeScript", "Canvas", "Responsive"],
    url: "https://games.basilan.us",
    hub: true,
    accent: "steel",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const statusStyles: Record<ProjectStatus, string> = {
  Live: "text-accent border-accent/40 bg-accent/10",
  Published: "text-accent border-accent/40 bg-accent/10",
  "In Development": "text-steel-soft border-steel/40 bg-steel/10",
  Experiment: "text-steel-soft border-steel/40 bg-steel/10",
  "Coming Soon": "text-chalk-muted border-ink-600 bg-ink-800/60",
  Archived: "text-chalk-faint border-ink-700 bg-ink-850",
};

export const statusDot: Record<ProjectStatus, string> = {
  Live: "bg-accent",
  Published: "bg-accent",
  "In Development": "bg-steel",
  Experiment: "bg-steel",
  "Coming Soon": "bg-chalk-faint",
  Archived: "bg-ink-600",
};
