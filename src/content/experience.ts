// Public-safe professional profile. No fabricated employers, dates, or titles.
// Derived from documented project work and long-running infrastructure
// engineering responsibilities in the Hermes memory-vault.

export interface ExpertiseArea {
  title: string;
  items: string[];
}

export interface TechGroup {
  group: string;
  items: string[];
}

export const profile = {
  name: "Jon-jon Basilan",
  role: "Engineer · Builder · Technologist",
  summary:
    "I turn ideas into working systems. Over the years I've built and operated enterprise infrastructure, automated repeatable work, and increasingly used AI-assisted development to ship personal products — from trading research tools to games. I care about software that actually runs, is observable, and solves a real problem.",
  story: [
    "I started out deep in infrastructure and operations: keeping large Microsoft environments healthy, automating the tedious work, and making systems observable. That background shapes how I build everything else — I assume things will break, so I design for recovery, monitoring, and clarity.",
    "More recently I've leaned into AI-assisted development to build products I actually use. A personal trading research platform, a collection of classic games, and a growing set of experiments. The through-line is the same: find a real problem, build something that works, put it in the world, and improve it.",
  ],
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Infrastructure & Cloud",
    items: [
      "Microsoft 365, Exchange Online, and Microsoft Graph",
      "Entra ID, app registrations, and identity governance",
      "Azure tenants, subscriptions, networking, DNS, and cost management",
      "SQL Server and Azure SQL — tuning, HA, and reporting",
      "Windows Server, virtualization, storage, and RDS/Citrix access",
      "Monitoring, backups, and operational resilience",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "AI-assisted development and multi-agent workflows",
      "PowerShell and Python automation for operations",
      "Scheduled jobs, monitors, and alerting pipelines",
      "Local, privacy-respecting AI tooling",
      "Practical experimentation over hype",
    ],
  },
  {
    title: "Software & Products",
    items: [
      "Trading research, backtesting, and paper-trading tools",
      "Native and web games",
      "Dashboards, utilities, and personal tools",
      "Full product lifecycle: design, build, test, deploy, improve",
    ],
  },
];

// Technologies are only listed where supported by documented project history.
export const techGroups: TechGroup[] = [
  {
    group: "Cloud & Infrastructure",
    items: [
      "Azure",
      "Microsoft 365",
      "Exchange Online",
      "Microsoft Graph",
      "Entra ID",
      "SQL Server",
      "Windows Server",
      "Virtualization",
      "Networking / DNS",
    ],
  },
  {
    group: "AI & Automation",
    items: [
      "AI-assisted development",
      "Multi-agent workflows",
      "PowerShell",
      "Python",
      "Automation pipelines",
      "Local LLM tooling",
    ],
  },
  {
    group: "Development",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "Dart / Flutter",
      "REST APIs",
      "HTML / CSS",
    ],
  },
  {
    group: "Data",
    items: [
      "SQL Server",
      "Azure SQL",
      "Reporting",
      "Backtesting",
      "Time-series analysis",
    ],
  },
  {
    group: "Security",
    items: [
      "Identity governance",
      "Least-privilege access",
      "Secrets management",
      "Audit & compliance",
      "Secure automation",
    ],
  },
  {
    group: "Platforms",
    items: [
      "Windows",
      "Android",
      "Web",
      "Tailscale",
      "Cloudflare",
      "Git / GitHub",
    ],
  },
];

// Selected public-safe projects are rendered inline from the content/projects.ts
// data so there is a single source of truth. This file intentionally avoids
// fabricating employment history, certifications, or education.
