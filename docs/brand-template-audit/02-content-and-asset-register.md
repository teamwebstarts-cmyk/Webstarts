# 02 — Content and asset register

## How to use this register

Collect approved inputs before developers replace content. Each item should have an owner, source, approval status and target URL. If an item is undecided, hide/remove its section for launch rather than leaving template content live.

## One-time brand inputs

| Input | Required detail | Used in |
| --- | --- | --- |
| Identity | Brand/legal name, tagline, capitalization rules. | Titles, logo alt text, copyright, schema. |
| Domain plan | Final domain, HTTPS/WWW policy, page slugs, redirects. | Links, canonicals, sitemap, analytics. |
| Logo set | Primary/small SVG, light/dark versions, favicon/app icons. | Header/footer/preloader/browser/social. |
| Contact data | Email, phone with country code, address, hours, legal entity. | Footer/contact/schema/forms. |
| Voice | Audience, tone, approved/prohibited claims and terminology. | All copy and metadata. |
| Design | Palette/tokens, licensed fonts, motion/image treatment. | CSS/accessibility/performance. |
| Conversion | Primary/secondary visitor actions and qualifying questions. | Navigation/CTAs/forms/analytics. |
| Legal | Privacy/cookies/terms/accessibility and consent wording. | Footer/forms/legal pages. |

## Local image library replacement map

All listed files are template placeholders unless separately cleared for use.

| Files | Likely placement | Replacement brief |
| --- | --- | --- |
| `logo-1*.svg`, `logo-2-1.svg`, `*-favicon.svg` | Header/footer/preloader/favicon. | Approved logo/icon set with dark/light contrast. |
| `h1-*` | Home hero/decorative/client strip. | Brand-story hero art and only approved proof logos. |
| `a1-*`, `s1-*`, `c1-*` | About/services/contact background/icons. | Real service imagery and meaningful owned icons. |
| `p1-*`, `p2-logo-*`, `p3-*` | Project cards/client logos. | Approved case covers, results and client permissions. |
| `t1-*`, `t3-*`, `author-*.jpg` | Team/testimonials/authors/review badges. | Consented real people/quotes; remove unsupported badges. |
| `b1-*`, `hr2.1-1024x474.webp` | Blog listing/article media. | Topic-specific licensed editorial media. |
| `img-1.jpg` to `img-4.jpg` | Off-canvas “Instagram” gallery. | Real gallery/social images or remove. |
| `breadcrumb-img.jpg`, `breadcrumb.png` | Inner-page banner. | Reusable brand texture/image. |

## Home workbook — `index.html`

| Section / approximate line | Input required | Decision |
| --- | --- | --- |
| Header ~76 | Final menu, CTA, social URLs, gallery policy. | Keep/simplify/remove. |
| Hero ~260 | Audience, primary outcome, support line, CTA, owned media/video poster. | Must be specific. |
| About ~477 | 60–120 word positioning and proof points. | Avoid duplication. |
| Marquees ~545/~1014/~1389 | Approved short terms or remove. | Do not use empty decoration. |
| Services ~560 | Name, problem, outcome, description, icon, URL for each service. | Match real offers. |
| Why choose ~751 | Evidence-backed differentiators. | No generic claims. |
| Projects ~910 | Case title/industry/result/cover/detail URL/permission. | Omit until genuine. |
| Process ~1029 | 3–5 real operating steps/expectations. | Keep only if true. |
| Team ~1113 | Name/role/photo/bio/profile consent. | Remove if private. |
| Features ~1232 | Verified benefits/metrics. | Consolidate if weak. |
| Pricing ~1404 | Price/currency/tax/limits, or consultation CTA. | Never publish placeholders. |
| Contact ~1638 | Fields, recipient, privacy copy, success state. | Must be connected. |
| Blog ~1759 | Article titles/excerpts/dates/authors/images/slugs. | Requires workflow. |
| Footer ~1881 | Legal links, socials, newsletter provider, copyright. | Centralize globally. |

## Inner-page workbook

| File | Page-specific materials |
| --- | --- |
| `pages/about.html` | Origin, mission, method, real tools, team/proof/awards and FAQs. |
| `pages/service.html` | Scope, deliverables, exclusions, proof, process, pricing/consult CTA and FAQs. |
| `pages/project.html` | Case-study cards/destinations, outcomes and permissions. |
| `pages/team.html` | Names, roles, bios, image consent and professional links. |
| `pages/testimonial.html` | Quote, name, role/company/logo/headshot and written permission. |
| `pages/contact.html` | Contact purpose, routing, consent, hours/address/map policy. |
| `pages/blog.html` | Listing/card/category data; decide if search is real. |
| `pages/blogSingle.html` | Article, author, publish/update dates, feature image, related links and comments choice. |

## Media acceptance rules

- Use commissioned, original or explicitly licensed assets; retain rights records outside the public repository.
- Create responsive WebP/AVIF derivatives and compatible fallbacks; state width, height, focal crop and owner.
- Write concise purposeful alt text; empty alt is reserved for decorative images.
- Rename media by meaning, for example `security-dashboard-case-study.webp`, rather than template sequences.
- Obtain evidence/permission for people, client logos, review badges, awards and numerical claims.
- Video needs optimized format, poster, captions/transcript when material, and reduced-motion/no-autoplay fallback.

## Recommended final URLs

| Destination | Suggested URL | Existing file |
| --- | --- | --- |
| Home | `/` | `index.html` |
| About | `/about/` | `pages/about.html` |
| Services | `/services/` | `pages/service.html` |
| Work | `/work/` or `/case-studies/` | `pages/project.html` |
| Team | `/team/` | `pages/team.html` |
| Testimonials | `/testimonials/` | `pages/testimonial.html` |
| Contact | `/contact/` | `pages/contact.html` |
| Insights | `/insights/` or `/blog/` | `pages/blog.html` |
| Article | `/insights/<meaningful-slug>/` | `pages/blogSingle.html` |
| Legal | Separate actual pages | Missing today |

Every CTA must have an intentional destination. Never leave `#` in a published link.
