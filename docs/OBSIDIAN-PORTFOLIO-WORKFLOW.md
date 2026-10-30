# Obsidian → portfolio workflow

## Reusable requests
- “Review my recent Obsidian notes and suggest portfolio updates.”
- “Add my latest completed Azure project to my portfolio.”
- “Update the Azure cost optimization project with recent accomplishments.”
- “Review my SQL investigations and identify achievements worth highlighting.”
- “Find new cloud security projects I have completed.”
- “Update my AI-assisted operations portfolio.”

Load the default-profile `basilan-portfolio` skill, then the active checkout's content and implementation guides. Use the existing authorized filesystem-first Obsidian integration; do not create another connector or upload the vault. The initial review branch is feat/enterprise-portfolio-review; inspect actual Git state rather than assuming it remains current.

## Procedure
1. Inspect repository status, fetch origin, read current content, selection manifest and deployment workflow. Preserve unrelated work. The repository is public, and main pushes automatically deploy.
2. Read relevant Obsidian README indexes first, then actual primary notes. Scope searches by requested subject/time interval. File modification dates are discovery hints, not accomplishment/completion dates.
3. If curated notes are empty or suspiciously narrow, search the authorized original conversation archive. Distinguish direct user statements and performed actions from questions, planned changes, assistant recommendations, pasted third-party text and agent self-reports.
4. Confirm actual involvement, work scope, implemented versus investigated state and technical outcomes. Read referenced code only when needed to establish a claim; never execute proprietary tools or query production just to write a portfolio entry. Do not copy scripts, raw configuration or incident records.
5. Compare existing IDs and semantic scope. Update a matching record rather than duplicating it. Do not count one access correction as several independent implementations. Preserve employer/personal distinctions. Additional significant projects go in a separate recommendation list; they are not added automatically to the selected 14.
6. Draft two to four simple sentences and short technology badges. Preserve completed/ongoing/investigation/experimental distinctions. Avoid unsupported titles, years of experience, leadership, certification, audit-success, savings or performance claims. The resume is outdated private background, not proof of current responsibility.
7. Keep source paths, original message locations, attribution evidence, confidence and unresolved questions in the private source register outside the website repository. Public records contain only an opaque sourceReference. Never publish internal names/URLs/IPs, tenant/subscription IDs, customer or patient information, credentials, security findings, incident records, private financials, confidential architecture, proprietary code or personal contacts.
8. Write future proposals outside website content files. Present exact proposed public text, supporting evidence scope, duplication check and confidentiality concerns. **Stop for content approval.** Initial selected-project fixtures exist only because this implementation request explicitly asks for a preview; they remain pending and are excluded from normal output.
9. Only after approval update the matching structured content, source register and explicit approval/public/visible metadata. Material edits reset approval. Awards need exact title, issuer, year, supported description and explicit approval. Do not embed or publish the resume or add an employment chronology.
10. Run schema/gating tests, default-build exclusion and review builds, artifact privacy checks, link/navigation/filter tests, mobile/accessibility and screenshot checks. Review dependency advisories rather than blindly upgrading.
11. Show the local preview and content packet. Public GitHub pushes publish source even on a feature branch; obtain public-content approval for the complete pushed snapshot. **Stop again for separate explicit production deployment approval** tied to the exact reviewed commit. Do not infer deployment permission from content approval.
12. After deployment is specifically authorized, prepare a clean public-safe branch/diff from main, with approved current content only. The earlier local resume-preview ancestor is superseded; do not push its history or private evidence blindly. Do not rewrite or force-push existing remote history. Validate, commit, push review branch, verify remote SHA, and merge/deploy only within approved scope.
13. Read back exact production routes, assets, all relevant app links, navigation and removed-resume behavior. Record actual CI/deployment IDs and prior-production rollback reference. Never report success from a deployment tool response alone.

## Operational boundaries

Review exports use PORTFOLIO_REVIEW_PREVIEW=1 and loopback only. No scheduled auto-publisher, background crawler or automatic production update is part of this workflow. Keep experimental AI operations distinct from production operational controls. Security/confidentiality review and content approval remain mandatory even for generalized employer descriptions.

## Rollback

Local review changes do not require production rollback. For an authorized deployment, retain the previous Cloudflare Pages deployment ID and prior Git SHA. Prefer a reviewed revert or Pages previous-deployment rollback; no force push. Production rollback needs authorization unless explicitly included in the release approval.
