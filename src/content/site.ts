export const site = {
  name: "Jon-jon Basilan",
  brand: "Jon-jon Basilan",
  domain: "basilan.us",
  canonical: "https://basilan.us",
  email: "jon@basilan.us",
  url: "https://basilan.us",
  tagline: "I build systems that solve real problems.",
  positioning: [
    "Cloud infrastructure.",
    "AI & automation.",
    "Trading systems.",
    "Games.",
  ],
  description:
    "Jon-jon Basilan is an engineer and technologist who builds real, working software — cloud infrastructure, AI automation, trading systems, and games. Explore his projects at basilan.us.",
  // Optional social links — only set values you have verified.
  social: {
    github: "https://github.com/JonBasOrg",
    kofi: "https://ko-fi.com/jonbas",
    linkedin: "", // add verified profile URL to enable
    x: "", // add verified profile URL to enable
  },
  // Sub-project hubs (separate applications / subdomains).
  hubs: {
    invest: {
      label: "invest.basilan.us",
      url: "https://invest.basilan.us",
      description: "Trading Dashboard",
    },
    games: {
      label: "games.basilan.us",
      url: "https://games.basilan.us",
      description: "Browser Classic Games (coming soon)",
    },
  },
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
