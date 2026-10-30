# basilan.us — enterprise technology portfolio

Professional portfolio at https://basilan.us: 14 enterprise technology projects, six homepage features, project-linked expertise, AGS recognition and Microsoft certification, alongside independent personal products.

Built with Next.js App Router, React, TypeScript and Tailwind; statically exported to Cloudflare Pages.

## Documentation
- [Content structure and editing](docs/CONTENT-SYSTEM.md)
- [Obsidian maintenance and approval workflow](docs/OBSIDIAN-PORTFOLIO-WORKFLOW.md)
- [Release verification](docs/RELEASE.md)
- [Security and dependency maintenance](docs/SECURITY.md)

## Local development and verification

```powershell
npm ci --ignore-scripts
npm test
npm run lint
npm run typecheck
npm run build
python -m http.server 8094 --bind 127.0.0.1 --directory out
# Separate terminal, after the server starts:
node scripts/audit-enterprise.cjs
npm audit
```

The default build includes approved public content only. For future pending drafts, PORTFOLIO_REVIEW_PREVIEW=1 enables a loopback-only review build; never deploy that output. The build checks approved visibility, strips private provenance, and rejects retired resume/PDF features. The browser audit uses installed Microsoft Edge.

The legacy npm start script invokes next start, which is not the serving mechanism for output: export. Use the static-server command above.

## Deployment and approval

The existing GitHub workflow deploys pushes to main to Cloudflare Pages. The initial enterprise release and its content were explicitly approved by the owner. Future substantive content changes require review, and production deployment requires explicit approval for the reviewed snapshot. A public GitHub branch also publishes source: keep drafts, private evidence and operational records outside this repository.

Personal applications at invest.basilan.us and games.basilan.us are separate deployments; this portfolio preserves their links without modifying them. No resume download, career timeline or employment history is included.
