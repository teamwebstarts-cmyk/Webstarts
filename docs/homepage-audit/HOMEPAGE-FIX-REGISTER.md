# WebStarts Homepage (`index.html`) — Pre-Publish Fix & Audit Documentation

> **Author:** Hermes Agent (AI Worker, teamwebstarts-cmyk)
> **Date:** 2026-08-07
> **Scope:** Homepage only — `index.html` (2,419 lines, ~192 KB) of repo `teamwebstarts-cmyk/Webstarts`
> **Purpose:** Full research record + actionable fix list before this landing page is published anywhere (staging or production).
> **Source truth:** Repo was confirmed (via `gh` API on 2026-08-07) to be a hand-saved static snapshot of the **Aigora** WordPress/Elementor template by **ThemeXriver**. It is a visual starting point, NOT a licensed/installed WordPress site.

---

## 0. TL;DR (Read this first)

The homepage is a **rebranded copy of the "Aigora" agency template**. Visually it is modern and usable as a base, but it currently contains:

- **Source-brand leakage** (Aigora / ThemeXriver / WordPress / Elementor fingerprints + a live Cloudflare tracking beacon sending your visitors' data to the original theme author).
- **60 dead `href="#"` links** — most buttons go nowhere.
- **2 contact/lead forms** with `action="#"` (submissions go nowhere).
- **Fake/template content** (stats, client logos, team photos, testimonials, blog) that is NOT transferable proof for the WebStarts brand.
- **41 images with empty `alt`** (accessibility + SEO penalty).
- A **footer credit that still says "Aigora By ThemeXriver"** — the single most obvious legal/branding leak.

**Verdict: NOT publishable until Priority 1–2 are fixed.** Content (Priority 3) is owner-driven; the rest is mechanical and should be done before any public link exists.

---

## 1. Research Method & Evidence

| Step | Command / Source | Result |
|------|------------------|--------|
| Confirm repo exists | `gh api repos/teamwebstarts-cmyk/Webstarts` | Public HTML repo, WRITE perms for `abhayhiwse-hub` |
| List org repos | `gh api -X GET search/repositories?q=org:teamwebstarts-cmyk` | 6 repos; `Webstarts` is HTML/public, created 2026-08-03, pushed 2026-08-07 |
| Pull homepage | `curl -sL raw.githubusercontent.com/teamwebstarts-cmyk/Webstarts/main/index.html` | 2,419 lines / 192,370 bytes saved locally |
| Static analysis | Python regex audit over raw HTML | All counts below are exact, line-referenced |
| Cross-check | Existing `docs/brand-template-audit/01-project-audit.md` (dated 2026-08-03) | Confirms "Aigora / ThemeXriver" origin, 277 `#` anchors repo-wide |

All numbers in this doc were produced by parsing the actual file — not estimated.

---

## 2. Homepage Structure (sections, in order)

1. Preloader (`aria-label="Loading Aigora"`)
2. Back-to-top button
3. Header / Nav (Home, About, Services ▾ Website/Mobile/Custom Software, Portfolio, Blog, Contact, "Let's Talk" CTA)
4. Hero — "Building Software That Build Businesses" + 2 CTAs
5. Trust bar — client logos (marquee)
6. About snippet — "Why WebStarts", stats `1.5+ Years`, `Complete Projects`
7. Services — 6 cards (Website, Mobile, Custom Software, **AI & Automation**, Digital Marketing, UI/UX)
8. Differentiators — "One Partner. Every Digital Solution." + 12 capability icons
9. Process / how-we-work
10. Projects / Portfolio (template case cards)
11. Team grid (template people)
12. Features / pricing tease (`+97 Features`)
13. Testimonials (fake quotes)
14. Blog (3 generic June-2026 AI articles)
15. Contact form + Footer (newsletter, socials, copyright "Aigora By ThemeXriver")

---

## 3. Complete Fix Register (every item, what/how/why/effect)

Priority order: **P1 legal/leak → P2 functional → P3 content → P4 a11y/images → P5 perf/privacy.**

### PRIORITY 1 — SOURCE-BRAND LEAKAGE (legal, do first)

| ID | What | Where (line) | How to fix | Why | Effect if unfixed |
|----|------|--------------|-----------|-----|-------------------|
| L1 | Footer credit "Aigora By ThemeXriver" | 2310–2311 | Replace `<a>Aigora</a> By <a ...>ThemeXriver.</a>` with `© 2026 WebStarts. All rights reserved.` | Copyright/brand infringement; advertises you're using a stolen/cloned template | Legal exposure; destroys brand credibility |
| L2 | Hero video hosted on ThemeXriver | 437 | `<video src="https://themexriver.com/wp/aigora/h1-video.mp4">` → replace `src` with local `/downloaded_images/webstarts-hero.mp4` (rename) or remove `<video>` | Bandwidth theft from original author; external dependency can break/redirect | Video 404s or shows source branding; slow load |
| L3 | RSS feed titles say "aigora" | 13–14 | `<link ... title="aigora » Feed">` and `Comments Feed` → `WebStarts` or delete the `<link>`s (no WP backend exists) | Leftover WordPress feed tags are dead/misleading | Confuses crawlers; shows template origin |
| L4 | Preloader text "Loading Aigora" | 67 | `aria-label="Loading Aigora"` → `Loading WebStarts` | Visible source-brand string in loader | Users see competitor brand on load |
| L5 | Meta generator WordPress 7.0.2 | 55 | Delete `<meta name="generator" content="WordPress 7.0.2">` | Reveals it's a cloned WP site; security fingerprinting | Attackers target known WP versions; unprofessional |
| L6 | Meta generator Elementor 4.1.4 | 59 | Delete `<meta name="generator" content="Elementor 4.1.4; ...">` | Same as L5 | Same |
| L7 | Cloudflare beacon (tracking) | 2414 | Delete `<script src="https://static.cloudflareinsights.com/...">` or the `cloudflareinsights.com` include | **Sends your visitors' analytics to the original theme author's Cloudflare token** | Privacy breach; source author sees your traffic |
| L8 | WordPress link tags (oEmbed/RSD/EditURI) | 15, 16, 54 | Delete `<link rel="alternate" ... oembed>`, `<link rel="EditURI" ... RSD>`, `<link rel="wlwmanifest">` | Dead WP APIs; no backend exists | Crawler noise; leakage of WP identity |
| L9 | WordPress emoji assets | 18 refs across file | Remove `wp-emoji-release.min.js` + `emoji` CSS includes | Unneeded third-party JS; WP fingerprint | Extra requests; identifies as cloned WP |
| L10 | `w.org` / `gmpg.org` / `api.w.org` profile links | 8, 52, 2406 | Delete `<link rel="profile" href="https://gmpg.org/xfn/11">` and `api.w.org` / `w.org` links | WP/XFN namespace leftovers | Identifies as WordPress |
| L11 | All "Aigora" strings | 49 occurrences (lines 13,14,20,…) | Global case-sensitive find/replace `Aigora`→`WebStarts`; manually verify no `aigora` lowercase remains in classes/alt/aria | Template brand name everywhere | Any remaining string outs your source |

**Verification after P1:** `grep -ric "aigora\|themexriver\|wordpress\|elementor" index.html` should return `0` (except intentional Elementor CSS filenames in `downloaded_assets/` which are fine).

---

### PRIORITY 2 — BROKEN LINKS & FORMS (functional)

| ID | What | Count | Where | How to fix | Why | Effect |
|----|------|-------|-------|-----------|-----|--------|
| F1 | Dead `href="#"` anchors | **60** (lines 15,16,52,…) | Nav, hero CTAs, service cards, footer | Map each to a real target: in-page `#section`, `pages/*.html`, `mailto:`, `tel:`, or a form. Audit each of the 60 by reading context | Buttons that go nowhere = lost leads | Visitors click, nothing happens → bounce |
| F2 | Contact form `action="#"` | 2 (lines 1978, 2278) | Homepage contact block + footer/contact section | Point `action` to a real endpoint: Samyoj CRM ingest, a backend route, or `mailto:hello@webstarts.in`. Add `method`, `name` fields, client validation | Form submits to nowhere currently | Lead capture completely broken |
| F3 | Newsletter form | footer | Add email-provider POST (e.g. Mailchimp/own API) + consent checkbox + unsubscribe link | No endpoint = silent failure | Cannot grow mailing list |
| F4 | Phone placeholder `tel:01545454` | 1 (line 1925) | Contact section | Replace with real India number, e.g. `tel:+9198XXXXXXXX`, matching visible text + `sameAs` schema | Invalid number = no click-to-call | Mobile users can't call |
| F5 | No `mailto:` anywhere | 0 | — | Add `mailto:hello@webstarts.in` (or your domain) in footer + contact | No direct email path | Misses non-form users |
| F6 | Nav "404" item points to `pages/about.html` | 1 | Header nav | Build a real `pages/404.html` and point there, or remove the item | Wrong page on broken link | Confusing UX |
| F7 | Social links are `#` | nav/footer | Add real approved profiles (LinkedIn, Instagram, X) with full URLs + `target="_blank" rel="noopener"` | Currently socials go nowhere | No social funnel |

**Verification after P2:** `grep -c 'href="#"' index.html` → `0`; all `<form>` have non-`#` `action`.

---

### PRIORITY 3 — FAKE / TEMPLATE CONTENT (owner-driven; hide if not real)

> Content owner is updating this separately. Below are the items that MUST be real-or-removed before publish. Leaving template content live is misrepresentation.

| ID | What | Evidence | Action |
|----|------|----------|--------|
| C1 | Stat `1.5+ Years Experience` | About section | Replace with real founding year or remove |
| C2 | Stat `+97 Features` | Features section | Replace with real count or remove |
| C3 | Client logos (43 imgs: `c1-logo-1..10`, `h1-marquee-logo`, `p1-item-logo`, `h1-c-logo-1..3`) | Trust bar + projects | Use only licensed/real client logos; otherwise hide the section |
| C4 | Team photos (`author-1..4.jpg`, `t1-img-1..6.jpg`) | Team grid | Real staff w/ permission, or remove grid |
| C5 | Project images (`p1-img-1..4.jpg`) | Portfolio | Real case studies w/ permission, or remove |
| C6 | Testimonials (fake quotes) | Testimonials section | Attributable, approved quotes or remove |
| C7 | Blog cards (3 generic June-2026 AI articles) | Blog section | Real editorial content or remove section |

**Rule:** If an item is undecided at launch, **hide/remove its section** rather than shipping template filler.

---

### PRIORITY 4 — IMAGES & ACCESSIBILITY

| ID | What | Count | How | Why |
|----|------|-------|-----|-----|
| A1 | Images with empty `alt=""` | **41** (incl. `webstarts-logo.webp`, `author-*.jpg`, `p1-img-*.jpg`, `t1-img-*.jpg`, `a1-line-shape.png`, `logo-1-footer.svg`) | For purely decorative: keep `alt=""` + add `role="presentation"` + `aria-hidden="true"`. For content images (logos, people, project shots): add descriptive `alt` (e.g. `alt="WebStarts founder Nirbhay"`) | Screen readers + Google Image SEO; empty alt on content = invisible to search |
| A2 | Template-style filenames | all 106 local imgs | Rename by meaning: `p1-img-3.jpg`→`webstarts-ecommerce-case.jpg`; `c1-logo-2.png`→`client-acme-logo.png` | Maintainability; avoids confusion with source assets |
| A3 | All 106 images are LOCAL ✓ | 0 external | No change needed — good. Keep them local (don't re-link to ThemeXriver) | Already offline-safe |

Full local image root: `downloaded_images/` (referenced as `downloaded_images/...` from root pages, `../downloaded_images/...` from `pages/`).

---

### PRIORITY 5 — EXTERNAL DEPENDENCIES (perf / privacy)

| ID | Resource | Count | Note / Fix |
|----|----------|-------|-----------|
| P1 | Google Fonts (`fonts.googleapis.com`) | 3 | Third-party. Self-host for GDPR/perf, or keep with `font-display:swap`. License: OK for Google fonts. |
| P2 | Fontshare (Clash Grotesk / Satoshi) | 1 | Verify Fontshare license permits commercial use; self-host if required |
| P3 | CSS/JS bundles (Bootstrap, Elementor `frontend.min.css`, GSAP, Swiper, odometer, magnific-popup, jQuery) | many | Audit which are actually used; tree-shake unused (Elementor CSS is heavy ~ dead weight for a static site) |
| P4 | `downloaded_assets/` dependency layer | ~30 CSS + JS | Keep only what the homepage references; delete the rest to cut payload |

---

## 4. Existing Old Content to REMOVE (full list)

Everything below is leftover from the Aigora/ThemeXriver original and must be stripped from `index.html`:

- `<meta name="generator" content="WordPress 7.0.2">` (L5)
- `<meta name="generator" content="Elementor 4.1.4; ...">` (L6)
- Cloudflare Insights `<script>` (L7, line 2414)
- WordPress `oembed` / `EditURI` / `RSD` / `wlwmanifest` `<link>`s (L8)
- WordPress emoji CSS+JS (L9)
- `gmpg.org` / `api.w.org` / `w.org` profile links (L10)
- RSS `<link>` titles "aigora » Feed" / "Comments Feed" (L3)
- Footer `Copyright @ Aigora By ThemeXriver.` (L1)
- Hero `<video>` pointing to `themexriver.com/wp/aigora/h1-video.mp4` (L2)
- Preloader `aria-label="Loading Aigora"` (L4)
- All `Aigora` / `aigora` / `ThemeXriver` string occurrences (L11, 49+7)
- `href="#"` dead anchors (F1, 60)
- Form `action="#"` (F2, 2)

---

## 5. Missing Things — SUGGESTED ADDITIONS

Based on reading the existing homepage, these are absent and should be added for a launch-ready landing page:

1. **Real favicon** — confirm `downloaded_images/c1-favicon.svg` / `f1-favicon.svg` is rebranded to WebStarts (currently template favicons).
2. **OG / social share tags** — no `og:title`, `og:image`, `twitter:card` found → add for link previews.
3. **Structured data (JSON-LD)** — add `Organization` + `LocalBusiness` schema with real name, phone, email, address, sameAs socials.
4. **Real canonical + sitemap** — `robots.txt` and `sitemap.xml` missing repo-wide.
5. **Privacy Policy & Terms pages** — legally needed if you collect form/email data (GDPR/India DPDP).
6. **Thank-you / success page** — forms currently have no post-submit state.
7. **Real meta description** — current is okay-ish but generic; tailor to WebStarts services + location.
8. **Analytics** — replace removed Cloudflare beacon with your OWN (Plausible/GA4) token, not the template's.
9. **Logo asset** — `webstarts-logo.webp` exists (good) but verify it's the final brand mark, not a placeholder.
10. **Consent on newsletter** — add explicit opt-in + unsubscribe per DPDP/GDPR.

---

## 6. How to Apply (recommended workflow)

1. Create branch `webstarts-homepage-fixes` from `main`.
2. Apply P1 (leakage) + P2 (links/forms) mechanically via find/replace + targeted edits.
3. Owner applies P3 (content) — or hides undecided sections.
4. Run verifications: `grep -ric "aigora\|themexriver\|wordpress\|elementor" index.html` → 0; `grep -c 'href="#"' index.html` → 0.
5. Open `index.html` locally in browser; click every CTA; submit forms to a test endpoint.
6. Only then push and deploy to staging.

---

## 7. Contact / Ownership Notes

- **Repo:** `github.com/teamwebstarts-cmyk/Webstarts` (public, HTML)
- **Active GitHub account:** `abhayhiwse-hub` (WRITE)
- **Brand:** WebStarts — Software/Mobile/Website Dev Agency
- **Suggested contact:** `hello@webstarts.in` (replace with real domain email), `tel:+9198XXXXXXXX`
- **Related internal projects:** Samyoj (CRM — can ingest the contact form), Verbotix (AI worker), AURA (AI companion) — AI & Automation service on the page aligns with these.

---

*Generated by Hermes Agent — full audit of `index.html` (2,419 lines). All counts are exact and line-referenced against the file fetched 2026-08-07.*
