# 01 — Deep project audit

## Executive finding

The repository is a hand-saved static snapshot of the **Aigora** WordPress/Elementor template, apparently from ThemeXriver. It is a visual starting point, not a working WordPress installation or an editable Elementor project. HTML contains content, menu/footer markup and source-server configuration copied from the original site.

There are 10 HTML pages, local CSS/JS/font files, and local images. There is no `package.json`, generator, CMS source, API, server code, environment configuration, deployment setup, `robots.txt`, sitemap, or licence file.

## Repository map

| Location | Current role | Conversion implication |
| --- | --- | --- |
| `index.html` | Home; 2,062 lines. | Highest priority page and contains shared contact/footer patterns. |
| `pages/*.html` | About, service, project, team, testimonial, contact, blog, blog article. | Standalone pages that duplicate global layout. |
| `downloaded_images/` | 100+ local original images/logos/icons/favicons. | Placeholders unless licensed for the new brand. |
| `downloaded_assets/css/` | Theme/Bootstrap/Elementor/Font Awesome/plugin styles. | Heavy copied dependency layer. |
| `downloaded_assets/js/` | jQuery, GSAP, Bootstrap, Elementor, Swiper, popup and form support. | Much is legacy/source output; audit before retaining. |
| `style.css`, `css/*.css` | Small WordPress/Elementor global styles. | Not a true brand design system. |

## Site map

| Page | File | Current sections | Brand decision needed |
| --- | --- | --- | --- |
| Home | `index.html` | Hero, about, services, differentiators, projects, process, team, features, pricing, contact, blog. | Keep only sections with an evidence-based brand purpose. |
| About | `pages/about.html` | About, tools, team, testimonials, awards, FAQ, form. | Story, proof, real team/awards/FAQs. |
| Services | `pages/service.html` | Services, process, partners, pricing, FAQ, form. | Real service scope, outcomes, price policy. |
| Projects | `pages/project.html` | Project cards, pricing, FAQ, form. | Case-study strategy and permission. |
| Team | `pages/team.html` | Team grid. | Real staff/profile permission or remove. |
| Testimonials | `pages/testimonial.html` | Testimonial cards. | Attributable approved quotes or remove. |
| Contact | `pages/contact.html` | Contact form. | Form destination, consent, response path. |
| Blog | `pages/blog.html` | Three cards, search/sidebar/categories. | Whether a real editorial workflow exists. |
| Article | `pages/blogSingle.html` | Article, share buttons, author, comments. | Author, canonical/share design and comments policy. |

There is no project-detail page, real 404 page, legal page, search-results page, or thank-you page. The navigation’s “404” item incorrectly points to `pages/about.html`.

## Shared-layout reality

No shared partial/component system exists: each page duplicates header and footer. A logo, navigation, CTA, social, copyright, newsletter or legal-link update must currently be repeated across all pages. Root paths use `downloaded_images/...`; pages use `../downloaded_images/...`, so moving assets is error-prone.

## Functionality audit

| Area | Current state | Required conversion |
| --- | --- | --- |
| CTAs | Many anchors have no destination or `href="#"`. | Give every CTA a deliberate page, in-page, email, phone, calendar or form destination. |
| Contact forms | At `index.html` ~1707 and `pages/contact.html` ~363; `action="#"` and copied Contact Form 7 fields. | Real endpoint/CRM, validation, spam protection, consent, success/failure state and notifications. |
| Newsletter | Footer email form on every page; no endpoint. | Brand-owned email provider and consent/unsubscribe workflow. |
| Search | `pages/blog.html` ~403 submits to home. | Build search, use a service, or remove. |
| Comments | `pages/blogSingle.html` ~398; no endpoint. | Add moderated backend or remove. |
| Social | Most source/social links are `#`; article shares original source URL. | Approved profiles and canonical final share links. |
| Telephone | Placeholder `tel:01545454`; three invalid telephone anchors. | International click-to-call number and matching visible text/schema. |
| Video | Home points to ThemeXriver-hosted `h1-video.mp4`. | Owned local optimized media or remove. |
| Motion | GSAP, Lenis, WOW, Swiper, marquee, popup, odometer, Three.js. | Keep only tested, accessible, necessary effects. |

## Original-source and external-dependency findings

All pages retain Aigora/ThemeXriver, WordPress, Elementor and Contact Form 7 fingerprints. High-priority active external links include Google Fonts, Fontshare, Cloudflare Insights with a source token, ThemeXriver WordPress endpoints/media, WordPress emoji assets, and Gravatar.

| Dependency | Location | Why it matters |
| --- | --- | --- |
| Fonts | Every page head. | Not offline; privacy/licence/performance decision needed. |
| Cloudflare beacon | End of every HTML file. | Source tracking must not receive new-brand visitors. |
| ThemeXriver/WordPress URLs | Inline configs, video, article/share links. | Source-brand leakage and unstable external dependency. |
| Emoji/Gravatar | Inline WordPress config and blog pages. | Unneeded third-party traffic and incorrect author identity. |

Treat the site as **not publishable**, including public staging, until these are removed/replaced and rights are confirmed.

## Content and trust risks

- Titles/meta descriptions retain Aigora and “AI Agency WordPress Theme”; loader, alt text and footer credit do too.
- Client logos, awards, statistics (including `1.2M+`), pricing, testimonials, employees, author profiles and project imagery are template content—not transferable proof.
- “Testimonial” appears twice in navigation; all home variations point to home; the faux 404 points to About.
- The audit found 277 `href="#"` anchors plus empty/missing CTA links.
- Alt text is often blank, generic or source-branded.

## Maintainability assessment

The site is easy to preview but expensive to update safely: content edits repeat across pages, copied WordPress/Elementor configuration is noisy, and vendor bundles have no declared dependency manifest. Choose before broad edits:

1. **Controlled static conversion:** add a static-site generator/partial/data layer; best for a small, infrequently updated marketing site.
2. **CMS-backed rebuild:** reusable components and structured content; best if non-developers will add posts/projects/people/landing pages.

Do not plan to edit this through Elementor: Elementor is not installed here.

## Audit boundary

This audit covers the repository available on 3 August 2026. It does not prove template/media rights, live-host ownership, account ownership or legal compliance; those need evidence from the brand owner and providers.
