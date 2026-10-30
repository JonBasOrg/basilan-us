# Enterprise portfolio release

The owner explicitly approved the reviewed content and requested publication. This release is prepared directly from the existing main branch, applying only the approved final tree; superseded resume-preview history and private review records are not part of the public branch history.

## Scope
- 14 enterprise projects and six equal-size homepage features.
- Project-linked About/expertise, two AGS awards and Microsoft Certified Professional.
- Separate existing personal products, consistent Contact page navigation and LinkedIn.
- Structured JSON content, strict approval/visibility gates and private-provenance stripping.
- No resume, employment chronology or career timeline.
- Patched Next.js/React/build dependencies while retaining the static-export hosting model.

## Verification
The clean release installation, 23 regression tests, lint, TypeScript and default static build pass. The full npm audit reports zero vulnerabilities, including development dependencies. Generated output contains 14 approved enterprise projects, six featured flags, no private provenance markers and no PDF assets. Browser acceptance uses scripts/audit-enterprise.cjs across 22 routes and four viewport widths, including mobile navigation, category filters, recognition, removed routes and local link crawling.

A zero-advisory audit is point-in-time registry evidence, not a guarantee against undisclosed vulnerabilities or a security/accessibility certification. Recheck dependencies and live behavior before future releases.

## Deployment and rollback
The unchanged GitHub workflow builds and deploys main pushes to the existing Cloudflare Pages project. Keep the prior main SHA and successful Pages deployment reference in the owner's private release record. If an approved rollback is needed, use a reviewed Git revert or Cloudflare's previous-deployment rollback; do not force-push remote history.

Future proposed text is reviewed privately before content changes are approved. Deployment approval remains separate from content approval. Never upload a pending-review export.
