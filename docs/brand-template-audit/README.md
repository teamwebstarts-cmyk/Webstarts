# Brand conversion documentation pack

## Purpose

This folder is the handoff guide for converting the current visual template into an independent brand website. It documents what exists, what must be supplied, what must be replaced, and how to validate the finished site. It is planning/audit guidance only; no production page, asset, URL, or behaviour has been changed.

## Read in order

1. [Project audit](01-project-audit.md)
2. [Content and asset register](02-content-and-asset-register.md)
3. [Independent/offline readiness](03-independent-offline-readiness.md)
4. [Developer conversion playbook](04-developer-conversion-playbook.md)
5. [Launch quality and measurement](05-launch-quality-and-measurement.md)
6. [Master conversion task list](06-master-conversion-task-list.md) — exact order, owners, dependencies and the immediate next steps.

## Present condition

- This is a static export of the Aigora WordPress/Elementor template: 10 HTML files, copied assets and hard-coded content.
- It has no build system, CMS, API, database, deployment configuration, sitemap, robots file, or working backend.
- Its appearance is mostly local, but it is not independent/offline-ready: it still calls source fonts, source tracking, WordPress configuration, source media and Gravatar.
- Contact, newsletter, search and comments are visual forms only. They do not provide a safe production workflow.
- Confirm the template licence and replace all source branding, imagery, claims, testimonials, client marks and URLs before publication.

## Before development starts

| Owner | Provide / decide |
| --- | --- |
| Brand owner | Brand/legal name, positioning, logo, final domain, service names, contact details and approved claims. |
| Content owner | Copy, case studies, team bios, testimonials with permission, FAQs, CTAs, legal-page text. |
| Designer/photographer | Licensed media library, crop guidance, image intent and icon direction. |
| Developer | Hosting, maintainability approach, forms/newsletter provider, URL plan, analytics/consent and structured data. |
| Legal/privacy reviewer | Template/media permissions, privacy/cookies/terms, marketing claims and regional requirements. |

## Recommended sequence

1. Complete the content/asset register.
2. Freeze site map and URL plan.
3. Detach source branding and online dependencies.
4. Centralize shared header/footer and replace global identity/contact data.
5. Replace page content and media.
6. Connect real forms, measurement, legal pages and blog/search behaviour.
7. Run launch QA on staging before publishing.
