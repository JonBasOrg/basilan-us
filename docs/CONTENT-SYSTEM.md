# Portfolio content structure

## Files, not hardcoded pages

```text
content/
  selection.json              # owner-selected enterprise IDs/order/six featured flags
  projects/*.json             # one reusable project per file (14 enterprise + 3 existing personal)
  editorial/
    about.json                # short biography, gated for public display
    expertise.json            # seven supported areas with links to selected projects
    awards.json               # owner-confirmed AGS recognition
    certifications.json       # verified Microsoft credential; no invented dates/IDs
```

The server-only loader discovers JSON automatically. `src/content/projects.ts` exposes only display-safe data to the server pages; `PortfolioGrid` receives sanitized props. Never import filesystem loaders or private source registers from a client component. Private provenance stays outside the repository; sourceReference is an opaque key and is not projected into client props.

## Project fields

| Field | Purpose |
|---|---|
| id / slug | Stable unique hyphenated identifier and URL |
| name | Owner-selected project title |
| category | One of the five enterprise categories, or a preserved personal category |
| description | Two to four natural, concise sentences about evidenced work and why it matters |
| tagline | Short supporting text for the optional detail route |
| technologies | Short, evidence-backed technology badges; do not promote evaluated tools to expertise |
| status | Ongoing, Completed, Investigation, Experiment, or legacy product statuses |
| featured | Homepage feature flag; six owner-selected enterprise records are featured |
| publicVisible | Must be explicitly true to include a record in any display mode |
| approval | pending until exact text is approved; approved only on owner instruction |
| confidentiality | Only public is displayable; private/missing classifications are denied |
| sourceReference | Opaque private source-register key; no note paths, IDs or source excerpts |
| kind | employer or personal |
| sortOrder | Owner-preferred initial ordering, not a displayed ranking |
| dates / year | Keep null unless independently supported; no employment date substitution |
| image / gallery | Optional optimized public-safe local media |
| caseStudy / url | Optional internal detail page or verified external product link |

Legacy challenge/responsibilities/implementation/outcome/sources fields remain empty on enterprise records for compatibility; they are not shown as report-style headings or public source notes. Future schema simplification can remove them without changing layout. Do not put raw evidence in them.

## Approval and visibility

Normal build: publicVisible true **and** confidentiality public **and** approval approved. Review build additionally accepts pending public projects only when PORTFOLIO_REVIEW_PREVIEW is exactly 1. Missing metadata fails closed. Review output is local-only and must never be uploaded as a production artifact.

Only employer IDs listed in selection.json appear; adding another enterprise topic requires owner approval to alter that manifest. The initial list contains exactly the 14 requested projects and six selected features. Recommendations for additional work stay in a separate private review list, not automatic site entries.

About and expertise use the same pending/public/visible gate. Awards and certifications are stricter: they require approved/public/visible and a verified issuer even during project preview. The owner confirmed AGS as the award issuer and authorized adding Microsoft Certified Professional; the final content and production deployment were subsequently explicitly approved by the owner. Future substantive changes require fresh approval. No credential IDs, validity dates or active-status claims are invented. No resume, career timeline, employment-history page or PDF download is generated.

## Description style

Prefer natural prose such as: “Reviewed cloud spending and project allocation to make infrastructure costs easier to understand. Built reusable reporting artifacts and assessed commitment options without claiming savings that have not been measured.”

Avoid formal report headings, “the supplied resume”, “according to the documentation”, unsupported first-person delivery verbs and invented metrics. Keep evidence gaps in the separate review packet. If a claim cannot be supported, narrow it or mark the project as an investigation rather than presenting a completed implementation.

## Updating an approved project

1. Review relevant authorized Obsidian notes and private provenance.
2. Compare scope with existing entries; avoid duplicate accomplishments or counting shared evidence twice.
3. Propose the exact text outside the website content tree and flag confidentiality/verification gaps.
4. Obtain content approval, then edit the matching JSON using existing components and explicit metadata.
5. Run tests/default exclusion build/review build/browser and privacy checks.
6. Present preview. Request separate deployment approval before public push, main merge or Cloudflare deployment.

## Filtering and order

Category, technology, employer/personal and optional topics narrow results. Multiple topics combine with AND. The default ordering follows owner-preferred scope/importance; no numeric rank is shown on cards. Chronological modes keep unknown dates last and never invent dates. Reset clears all controls. Enterprise and personal projects render in distinct sections.

## Verification

```powershell
npm test
npm run typecheck
npm run lint
npm run build
$env:PORTFOLIO_REVIEW_PREVIEW = '1'
npm run build
node scripts/audit-enterprise.cjs
```

The browser audit requires the loopback server. Automated accessibility scanning is supplemented by rendered screenshot and keyboard checks; it is not a complete WCAG certification. See RELEASE.md for release verification and SECURITY.md for dependency security information.
