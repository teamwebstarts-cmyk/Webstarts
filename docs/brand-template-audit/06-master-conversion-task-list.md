# 06 — Master conversion task list

## Start here

This is the one-by-one execution order. Complete phases in order; do not start a later phase while its dependency is incomplete. **Owner decision** means the brand owner must answer; the developer should not guess. The immediate next step is Phase 1.

```text
Brand decisions → approved content/media → site map → shared technical base
→ remove source template → build pages → integrations → QA/SEO → launch
```

## Phase 1 — Essential brand decisions

**When:** Start now.  
**Owner:** Brand owner, with content/legal input.  
**Why:** No safe content or technical implementation can start without these answers.

- [ ] **Owner decision:** Confirm final public brand name, spelling, tagline and legal business name.
- [ ] **Owner decision:** Confirm final domain and who owns the domain/DNS account.
- [ ] **Owner decision:** State the website’s main business result: qualified enquiry, booked call, sale, application, newsletter or awareness.
- [ ] **Owner decision:** Identify target audiences and the primary action each should take.
- [ ] **Owner decision:** Choose final navigation. Decide which pages remain: Home, About, Services, Work, Team, Testimonials, Blog, Contact.
- [ ] **Owner decision:** Remove any section without truthful material: pricing, projects, awards, testimonials, team cards, client logos, statistics, partner logos or articles.
- [ ] **Owner decision:** Approve brand voice, key terminology and prohibited/unsupported claims.
- [ ] **Owner decision:** Confirm public email, international-format phone, address/hours, legal entity and social URLs.
- [ ] **Owner decision:** Decide public pricing, “from” pricing, or enquiry-only.
- [ ] **Owner decision:** Decide whether blog, search, newsletter, social gallery, video and comments are needed.
- [ ] **Owner decision:** Confirm template licence and rights to any retained code, designs, fonts, icons and assets.

**Complete when:** a written one-page brand brief and final keep/remove/add page list exist.

## Phase 2 — Collect approved material

**When:** Immediately after Phase 1; can run alongside technical planning.  
**Owner:** Brand/content owner and designer; developer advises on media formats.  
**Dependency:** Final page list and brand direction.

- [ ] Supply primary/small/light/dark logos plus favicon/app icons.
- [ ] Supply approved colours, fonts and font-licence evidence or choose system/self-hosted fonts.
- [ ] Approve home hero headline, support sentence, CTA and owned hero media/video poster.
- [ ] Approve service names, buyer problems, outcomes, scope, exclusions, descriptions and CTA destinations.
- [ ] Approve About story, method, differentiators, process and FAQs.
- [ ] Supply genuine evidence only: case studies, outcomes, permitted client logos, awards and statistics with sources.
- [ ] Supply consented team details: name, role, biography, photo and profile link.
- [ ] Supply approved testimonial quote, person, role/company, image/logo and written permission.
- [ ] Supply licensed/owned hero/project/team/blog/decorative media with focal crop and desired placement.
- [ ] Write alt text for every informative image.
- [ ] Define contact form fields, required status, routing inbox/CRM, qualifying questions and response promise.
- [ ] Supply privacy, cookies, terms, accessibility and form-consent content.
- [ ] If retaining blog, define workflow and provide initial articles/authors/dates/images/slugs/categories.

**Complete when:** every kept section has approved material, or is marked for removal.

## Phase 3 — Freeze the site map and URL plan

**When:** After Phase 1; before links/SEO are implemented.  
**Owner:** Brand owner approves; developer implements.

- [ ] Approve final navigation labels/order.
- [ ] Approve final URLs: for example `/services/`, `/work/`, `/contact/`, `/insights/`.
- [ ] List individual service, case-study and article URLs if they exist.
- [ ] List removed current pages and their redirects.
- [ ] Define the primary CTA target on each page.
- [ ] Define footer links, including privacy/cookies/terms/accessibility.
- [ ] Define form success/error/thank-you destinations.
- [ ] Define a real 404 page and either a genuine search experience or no search.

**Complete when:** the developer has an approved site map and URL table with no route to invent.

## Phase 4 — Build a maintainable foundation

**When:** After Phase 3, before broad page editing.  
**Owner:** Developer.

- [ ] Decide static site with reusable components/data versus CMS-backed site for ongoing editor-managed content.
- [ ] Back up/tag current template and capture baseline desktop/mobile screenshots.
- [ ] Set up local development, private staging and production environments.
- [ ] Ensure staging is not indexable or publicly promoted.
- [ ] Create one shared source for header, footer, navigation, contact data, social links and legal links.
- [ ] Create meaningful asset directories/naming rules for new brand media.
- [ ] Document build, deployment, backup/rollback and secrets/environment-variable process.
- [ ] Define who edits content, who approves, and how a change is reviewed.

**Complete when:** global content is updated once, not ten times.

## Phase 5 — Remove all inherited template/source material

**When:** After Phase 4; complete before public staging.  
**Owner:** Developer; brand owner reviews.

- [ ] Replace all `Aigora`, `aigora`, `ThemeXriver`, original footer/loader/logo/alt-text/copyright references.
- [ ] Remove source Cloudflare Insights tracking and token from every page.
- [ ] Remove obsolete copied WordPress, Elementor, Contact Form 7 and emoji configuration.
- [ ] Remove all ThemeXriver URLs, including source video and blog sharing/article URLs.
- [ ] Replace Gravatar with owned author images or remove it.
- [ ] Remove Google Fonts/Fontshare remote links; self-host approved fonts or use system fonts.
- [ ] Replace/remove template images, badges, logos, photos, testimonials, statistics and pricing.
- [ ] Remove dead WordPress profile/API/RSS/oEmbed/generator metadata.
- [ ] Remove duplicate nav, false home variants and fake 404 destination.
- [ ] Fix every `href="#"`, empty CTA, invalid phone link and placeholder destination.
- [ ] Search code and inspect browser network until no original-source request remains.

**Complete when:** the site neither displays, links to, tracks through nor loads from the original source template.

## Phase 6 — Convert global brand elements

**When:** After Phase 5 starts; before individual page refinement.  
**Owner:** Developer, with brand/design approval.

- [ ] Replace logo, mobile logo, preloader logo and favicon.
- [ ] Replace desktop/mobile navigation, active state and primary CTA.
- [ ] Replace social URLs; remove unused social icons and gallery.
- [ ] Replace phone, email, address and hours consistently.
- [ ] Build/enable footer and legal links.
- [ ] Connect newsletter or remove its field.
- [ ] Set global type, colour, focus, image and reduced-motion rules.
- [ ] Set sensible global title/description/canonical/social-preview defaults.

**Complete when:** every page has truthful shared identity, contact, legal and navigation information.

## Phase 7 — Convert pages in this exact order

**When:** After Phases 2–6.  
**Owner:** Developer implements; brand/content owner approves.

1. [ ] **Home:** hero, services, proof, process and primary conversion path; remove unused template sections.
2. [ ] **Services:** real scope/outcomes/deliverables, service CTAs and FAQs.
3. [ ] **Contact:** real contact options, routed form, privacy and success/error state.
4. [ ] **About:** authentic story, methodology and approved proof.
5. [ ] **Work/case studies:** only real projects/results/permitted logos; otherwise remove page.
6. [ ] **Team:** only consented real people; otherwise remove page.
7. [ ] **Testimonials:** only approved attributed statements; otherwise remove page.
8. [ ] **Blog/listing/article:** only after an editorial workflow is active; remove fake search/comments/categories.
9. [ ] **Legal, real 404 and thank-you pages:** create and connect.

For every page, verify:

- [ ] One clear goal and primary CTA.
- [ ] No template copy, image, alt text or claim remains.
- [ ] Every link works.
- [ ] Meaningful H1, logical headings and unique metadata.
- [ ] Desktop, tablet and mobile presentation works.

**Complete when:** each live page supports an approved, truthful visitor journey.

## Phase 8 — Connect real business tools

**When:** After global/contact elements exist; before launch.  
**Owner:** Developer; brand owns provider accounts.

- [ ] Test contact-form delivery to correct inbox/CRM.
- [ ] Add server-side validation, spam protection, accessible errors and safe failure state.
- [ ] Configure who receives/responds to leads and response time.
- [ ] Configure newsletter consent, provider list, welcome/unsubscribe process—or remove it.
- [ ] Add booking, telephone/email click, map or chat only if needed.
- [ ] Create brand-owned analytics account(s), not only developer-owned access.
- [ ] Implement consent behavior if required and ensure tracking honors it.
- [ ] Track essential non-sensitive conversion events only.
- [ ] Implement final-URL social sharing or remove it.
- [ ] Implement search/comments only with an actual technical/moderation plan, or remove them.

**Complete when:** every enabled interaction finishes a real business process and passes an end-to-end test.

## Phase 9 — Finish quality, SEO and security

**When:** Once content/integrations are almost complete; repeat after major changes.  
**Owner:** Developer; brand owner confirms accuracy.

- [ ] Add unique titles, meta descriptions, absolute canonicals and social previews.
- [ ] Add truthful schema for organization/services/articles/people/FAQs as applicable.
- [ ] Add production `robots.txt` and XML sitemap; keep staging disallowed.
- [ ] Optimize media, specify dimensions and lazy-load suitable below-fold resources.
- [ ] Respect `prefers-reduced-motion`.
- [ ] Test keyboard, focus, Escape for overlays, form labels/errors, contrast, alt text, heading order, zoom/reflow and screen-reader journey.
- [ ] Remove unused CSS/JS only one dependency at a time with visual regression checks.
- [ ] Configure HTTPS, appropriate security headers and protected secrets.
- [ ] Test mobile/desktop browser console, network and performance.

**Complete when:** the site is useful, fast, accessible, discoverable and safe enough for its intended audience.

## Phase 10 — Staging and launch

**When:** Only after Phases 1–9.  
**Owner:** Developer prepares; brand owner/legal reviewer approve.

- [ ] Test every URL, menu, CTA, form, social/telephone/email link and download.
- [ ] Submit real form/newsletter tests and verify recipient, CRM mapping, confirmation and error behavior.
- [ ] Test phone/tablet/desktop plus keyboard and reduced-motion modes.
- [ ] Inspect network: no ThemeXriver, original WordPress, source Cloudflare, Gravatar, Google Fonts or Fontshare requests remain unless intentionally documented.
- [ ] Test with original-template domains blocked/offline.
- [ ] Verify rights/claims/legal/privacy/consent approval.
- [ ] Verify metadata, canonicals, sitemap, robots and social previews.
- [ ] Obtain written launch approval, publish, submit sitemap and monitor errors/form delivery.

**Launch only when:** every required item in [05 — Launch quality and measurement](05-launch-quality-and-measurement.md) is complete.

## Phase 11 — First 30 days

- [ ] Check form/newsletter delivery daily for the first week.
- [ ] Compare analytics conversions with CRM records and fix gaps/duplicates.
- [ ] Check search indexing, sitemap/crawl status and canonical/title issues.
- [ ] Review real-device performance and console errors.
- [ ] Recheck links, consent and newly added content.
- [ ] Set monthly content review and quarterly dependency/security review.

## What you do today

1. Complete Phase 1 decisions.
2. Put approved copy, media, logos and legal material in one shared folder/spreadsheet.
3. Complete Phases 2 and 3 with your content owner.
4. Hand the results to the developer for Phases 4 and 5.
5. The developer should not start mass content replacement until the shared structure and original-source detachment are safe.
