export const site = {
  name: "Jon-jon Basilan",
  brand: "Jon-jon Basilan",
  domain: "basilan.us",
  canonical: "https://basilan.us",
  email: "jon@basilan.us",
  url: "https://basilan.us",
  tagline: "I build systems that solve real problems.",
  positioning: [
    "Azure infrastructure.",
    "SQL platforms.",
    "Security.",
    "Automation.",
  ],
  description:
    "Explore Jon-jon Basilan’s enterprise technology portfolio: Azure infrastructure, SQL Server, cybersecurity, automation, governance, and human-reviewed AI operations, alongside independent personal projects.",
  // Optional social links — only set values you have verified.
  social: {
    github: "https://github.com/JonBasOrg",
    kofi: "https://ko-fi.com/jonbas",
    linkedin: "https://www.linkedin.com/in/ebasilanjr/",
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
      description: "Browser Classic Games",
    },
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Awards", href: "/awards" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
