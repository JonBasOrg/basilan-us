import "server-only";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { statusStyles, type Project } from "./portfolio";

function validateProject(record: Project): Project {
  const text = (value: unknown) => typeof value === "string";
  const strings = (value: unknown) => Array.isArray(value) && value.every(text);
  const date = (value: unknown) => value === null || (text(value) && /^\d{4}(-\d{2}(-\d{2})?)?$/.test(value as string));
  const identifier = (value: unknown) => text(value) && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value as string);
  const safeDescription = (value: unknown) => text(value) && !/(?:[A-Za-z]:[\\/]|\\\\|file:|internalReference|memory-vault)/i.test(value as string);
  if (!identifier(record.id) || !identifier(record.slug) ||
    ![record.name, record.tagline, record.description, record.category].every(text) ||
    ![record.tags, record.technologies, record.responsibilities, record.implementation].every(strings) ||
    !Object.hasOwn(statusStyles, record.status) ||
    !record.dates || !date(record.dates.start) || !date(record.dates.end) ||
    !(record.year === null || Number.isInteger(record.year)) ||
    !Number.isFinite(record.sortOrder) || typeof record.featured !== "boolean" ||
    !["personal", "employer"].includes(record.kind) ||
    !(record.challenge === null || text(record.challenge)) || !(record.outcome === null || text(record.outcome)) ||
    !(record.image === null || (text(record.image) && /^\/(?!\/)/.test(record.image))) ||
    (record.gallery !== undefined && (!strings(record.gallery) || record.gallery.some(image => !/^\/(?!\/)/.test(image)))) ||
    [record.url, record.googlePlay].some(url => url !== undefined && url !== "" && (!text(url) || !/^https:\/\//.test(url))) ||
    (record.caseStudy !== undefined && (!text(record.caseStudy) || record.caseStudy !== `/projects/${record.slug}`)) ||
    (record.useMockup !== undefined && !["trading", "games"].includes(record.useMockup)) ||
    (record.accent !== undefined && !["gold", "steel"].includes(record.accent)) ||
    (record.hub !== undefined && typeof record.hub !== "boolean") ||
    !Array.isArray(record.sources) || !record.sources.every(source => safeDescription(source.description))) {
    throw new Error(`Invalid project: ${String(record.id ?? "unknown")}`);
  }
  return record;
}

/** Explicit projection: never spread raw source records into page props. */
const publicFields = ["id", "slug", "name", "tagline", "description", "category", "tags", "status", "year", "featured", "sortOrder", "kind", "approval", "confidentiality", "publicVisible", "challenge", "responsibilities", "implementation", "outcome", "image", "useMockup", "gallery", "technologies", "url", "caseStudy", "googlePlay", "hub", "accent"] as const;

export function loadPortfolio(
  directory = join(process.cwd(), "content/projects"),
  { reviewPreview = process.env.PORTFOLIO_REVIEW_PREVIEW }: { reviewPreview?: string } = {},
): Project[] {
  const selectionFile=join(dirname(directory), "selection.json");
  const selected: Set<string>|null=existsSync(selectionFile)?new Set(JSON.parse(readFileSync(selectionFile,"utf8")).enterpriseProjects.map((item:{id:string})=>item.id)):null;
  const ids = new Set<string>();
  const slugs = new Set<string>();
  return readdirSync(directory).filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(readFileSync(join(directory, file), "utf8")) as Project)
    .filter((record) => record.publicVisible === true && (record.kind !== "employer" || selected && selected.has(record.id)) && record.confidentiality === "public" &&
      (record.approval === "approved" || (reviewPreview === "1" && record.approval === "pending")))
    .map(validateProject)
    .map((record) => {
      if (ids.has(record.id) || slugs.has(record.slug)) throw new Error(`Duplicate project: ${record.id}`);
      ids.add(record.id); slugs.add(record.slug);
      return record;
    })
    .map((record) => ({
      ...Object.fromEntries(publicFields.map((key) => [key, record[key]])),
      dates: {start: record.dates.start, end: record.dates.end},
      sources: (record.sources ?? []).map(({description}) => ({description})),
    }) as Project)
    .sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id));
}
