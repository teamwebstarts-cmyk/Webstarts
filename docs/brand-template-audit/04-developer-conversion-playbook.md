# 04 — Developer conversion playbook

## Outcome

Convert the visual template into a maintainable brand website without blindly preserving inherited source-site dependencies.

## Phase 0 — Protect the baseline

1. Record a repository backup/commit and capture desktop/mobile screenshots of every page.
2. Obtain template licence/purchase terms and permitted reuse boundaries. Copied code/media are not automatically transferable.
3. Turn the audit into assigned issues with acceptance conditions.
4. Use a non-indexed, non-public staging environment until tracking/copy/rights concerns are cleared.

**Exit:** baseline is recoverable and ownership is understood.

## Phase 1 — Choose a maintainable model

### Static marketing site

Use a static generator or component/partial process and data files for site settings, navigation, services, projects, people, testimonials and posts. This suits a small site with infrequent updates.

### CMS-backed marketing site

Build reusable components and structured content types. Choose this if non-developers need ongoing post/project/team/testimonial/landing-page updates.

Either way, make one source of truth for site name/logo/favicon, navigation, contact/social/CTA, footer/legal links/newsletter and analytics/consent scripts. Do not retain ten hand-copied headers and footers.

**Exit:** a global change is made once and appears everywhere.

## Phase 2 — Detach inherited plumbing

Search the exact terms named in the [independence plan](03-independent-offline-readiness.md), inspect each match, and then:

1. Replace titles, descriptions, canonicals, preview metadata and every source brand string.
2. Remove source Cloudflare tracking and obsolete WordPress/Elementor/emoji configuration.
3. Replace source-hosted video, original article/share links, images/favicons/client logos/awards/testimonials/photos.
4. Remove dead WP profile/API/oEmbed/RSS/generator tags unless deliberately rebuilt for the new platform.
5. Fix every missing or `#` link, invalid phone anchor, duplicate navigation item, fake home variation, false 404 route and dead form.

**Exit:** source scan and network scan have no unapproved source dependency.

## Phase 3 — Build the brand information layer

Use the [content register](02-content-and-asset-register.md). For every item record owner, approval date, public copy, display order, URL, media rights/alt text/crop and evidence for claims.

Implementation order:

1. Site settings, navigation, footer and legal pages.
2. Home hero and primary conversion path.
3. Services and their CTAs.
4. Approved story/proof/team/work/testimonial sections.
5. Contact/newsletter integrations.
6. Blog only after a publishing and SEO workflow has been decided.

**Exit:** every visible item is approved brand material or omitted.

## Phase 4 — Make interactions real

### Contact form

The current primary forms are near `index.html:1707` and `pages/contact.html:363`. Implement visible labels, accessible errors, server-side validation/sanitisation, spam control, secure brand-owned recipient/CRM routing, consent/privacy language, success/failure feedback, and end-to-end test delivery. Store provider secrets outside committed files.

### Newsletter

Use an approved marketing provider, subscription expectation copy, consent/double opt-in where appropriate and unsubscribe process. Never treat the contact inbox as a newsletter system.

### Blog/search/comments

For no active editorial program, remove search/categories/recent-posts/comments. For static publishing, generate listing/article pages during build. For ongoing publishing, use a CMS. Remove comments unless there is a moderation, anti-spam, privacy and response policy.

## Phase 5 — Refactor cautiously

1. List every CSS/JS file and the visible feature it supports.
2. Remove one unused resource at a time in a staging branch and visually/functionally test.
3. Prefer native CSS/JS for simple effects; retain only required libraries.
4. Minimize/cache final assets; preserve readable source and document build/deploy commands.
5. Optimize images, set dimensions, lazy-load below-fold media and prioritize hero media.
6. Respect `prefers-reduced-motion`; reduce marquees/parallax/smooth scrolling/auto-rotation.

## Per-page definition of done

- Correct final URL/canonical, one clear purpose and primary CTA.
- Unique title/description and meaningful heading hierarchy.
- Approved media with correct path/dimensions/alt text.
- Every link intentional; header/footer data centralized.
- Forms work end-to-end or are absent.
- Works at 320px, tablet and desktop; keyboard/focus/mobile menu tested.
- No original-brand content, source request or placeholder link remains.

A page is done when it is truthful, functional, accessible and independent—not when it only looks like the template.
