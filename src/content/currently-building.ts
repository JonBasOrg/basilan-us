export interface BuildStep {
  key: string;
  label: string;
  blurb: string;
}

export const ideaToSoftware: BuildStep[] = [
  {
    key: "idea",
    label: "Idea",
    blurb: "Find a real problem worth solving.",
  },
  {
    key: "design",
    label: "Design",
    blurb: "Map the system and the experience.",
  },
  {
    key: "build",
    label: "Build",
    blurb: "Ship working software, not just mockups.",
  },
  {
    key: "test",
    label: "Test",
    blurb: "Validate against reality, not assumptions.",
  },
  {
    key: "deploy",
    label: "Deploy",
    blurb: "Put it in the world, where it can be used.",
  },
  {
    key: "improve",
    label: "Improve",
    blurb: "Keep learning and keep making it better.",
  },
];

export interface CurrentlyBuilding {
  title: string;
  note: string;
  status: "building" | "research" | "planning";
}

export const currentlyBuilding: CurrentlyBuilding[] = [
  {
    title: "AI Trading Platform", // keep name generic/safe
    note: "Expanding strategy research, backtesting, and paper-trading tooling.",
    status: "building",
  },
  {
    title: "Classic Games — Web", // safe generic name
    note: "Bringing the game collection to the browser at games.basilan.us.",
    status: "building",
  },
  {
    title: "New AI experiments",
    note: "Exploring practical, privacy-respecting uses of AI assistants.",
    status: "research",
  },
];
