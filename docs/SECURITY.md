# Security and dependency maintenance

This application publishes a static Next.js export. It does not deploy a Node server, Server Actions, middleware/proxy runtime or image-optimizer endpoint. Private evidence, credentials, resume files, raw operational records and confidential identifiers do not belong in this repository or generated output.

## Dependency remediation
The enterprise release replaces the former Next.js 14 / React 18 stack with exact patched versions:
- Next.js and eslint-config-next 16.4.3
- React and React DOM 19.3.1
- Framer Motion 12.43.0
- ESLint 10.14.0
- PostCSS 8.5.32

Targeted compatible transitive updates removed the remaining advisories. The full dependency audit fell from nine vulnerable package entries to zero; production-only audit also reports zero. No blind force upgrade, ignored advisory or development-dependency exclusion was used.

Three package-scoped ESLint peer overrides align lagging plugin metadata with the supported ESLint 10 configuration. Clean installation, dependency-tree inspection and lint were verified; remove the overrides when upstream peer declarations cover ESLint 10 and repeat all checks. One file-scoped hooks performance-rule exception preserves existing navigation behavior; React Compiler is not enabled.

## Maintenance checks

```sh
npm ci --ignore-scripts
npm ls --all
npm audit
npm test
npm run lint
npm run typecheck
npm run build
```

Keep the lockfile and supported runtime requirements. Test browser behavior after framework/React updates. Re-run audits before release; a clean report does not establish the absence of undisclosed vulnerabilities.

## Content confidentiality
Publication requires explicit approved/public/visible metadata and an owner-selected employer ID. Future drafts remain private, and approval is reset for substantive changes. Export checks reject private provenance markers, generic internal-domain patterns, tenant-domain strings and retired PDF/career features. Avoid embedding actual private values even in security-checker blacklists.

No private infrastructure details or original incident records should be added to an issue, public pull request or browser bundle. Coordinate any sensitive finding privately with the repository owner.
