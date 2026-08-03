# 05 — SEO, analytics, accessibility and launch QA

## Priority order

1. Trust and legal ownership.
2. Working visitor/conversion journey.
3. Accessibility and mobile performance.
4. Search discoverability.
5. Measurement and improvement.

## SEO requirements

| Area | Current state | Required implementation |
| --- | --- | --- |
| Titles/descriptions | Aigora/template metadata on all pages. | Unique human-readable title/description matching page intent. |
| Canonicals | Relative static values such as `service.html`. | Absolute final HTTPS canonical per indexable page. |
| Indexing | No `robots.txt` or sitemap. | Add robots policy and generated XML sitemap after URLs are final; block staging. |
| Headings | Copied visual heading structure. | One meaningful H1 and logical H2/H3 hierarchy. |
| Social preview | No intentional brand Open Graph/Twitter metadata. | Brand title/description/canonical and 1200×630 approved image. |
| Schema | No intentional brand schema. | Truthful JSON-LD only: Organization/LocalBusiness, WebSite, BreadcrumbList, Service, Article, Person, FAQ when visible/accurate. |
| Images | Blank/generic/source alts. | Purposeful alt text, dimensions, optimized files. |
| Content | Template copy and duplicate routes. | Original useful content and clean internal linking. |

## Measurement and consent

The present Cloudflare beacon belongs to the source export; remove it. Decide what success means, who controls the analytics account, what minimal data is measured, whether consent is required, and how no-consent behaviour is tested. Never send form message contents/sensitive data to analytics.

Possible event names: `cta_click`, `contact_form_start`, `contact_form_submit`, `contact_form_success`, `newsletter_subscribe`, `phone_click`, `email_click`, `calendar_open`, `case_study_view`. Include only non-sensitive context such as page type/CTA label.

## Accessibility acceptance checklist

- Keyboard works for menus, dropdowns, off-canvas menu, sliders, lightbox and forms.
- Focus is visible/logical; Escape closes overlays and restores focus.
- Icon controls have specific accessible names; replace generic `aria-label="name"` values.
- Fields have visible associated labels; placeholders are not labels; errors are announced.
- Text/icon contrast is adequate and colour is not the only status indicator.
- Meaningful images have good alternatives; decorative images use empty alt; video/canvas has an equivalent.
- Motion honors reduced-motion preferences.
- At 200% zoom/reflow there is no lost content or inaccessible horizontal scroll.
- Screen-reader review covers home, mobile navigation, contact form and article.

## Performance/security checks

- Use HTTPS and appropriate host-configured security headers; test integrations against them.
- Never commit form/CRM/email/analytics keys; use protected environment configuration.
- Optimize responsive media, avoid disruptive autoplay, reserve image space and defer below-fold work.
- Every third-party script needs an owner, business purpose, privacy basis, performance cost and fallback.
- Test target desktop/mobile browsers, console errors and failure paths.
- Document provenance/update ownership for any retained copied vendor bundle.

## Launch gate

### Brand and content

- [ ] Source branding, copy, images and URLs are removed/replaced.
- [ ] Rights are recorded for template, media, fonts, icons, logos, testimonials, awards and claims.
- [ ] No duplicate/dead/placeholder navigation, fake 404, invalid phone link or blank `#` anchor remains.
- [ ] Privacy/cookies/terms/accessibility links lead to approved pages.

### Functional

- [ ] Contact form delivers a real test submission with validation, spam protection and feedback.
- [ ] Newsletter test subscription reaches the intended list with correct consent flow.
- [ ] Every primary CTA has a working destination.
- [ ] Search/comments/sharing are implemented for real or removed.
- [ ] Desktop/mobile navigation and desired effects have no console errors.

### Independence and quality

- [ ] Network inspection shows no unapproved ThemeXriver, original WordPress, source Cloudflare, Gravatar, Google Fonts or Fontshare request.
- [ ] Offline/block-original-domain test passes for intended local presentation.
- [ ] New brand measurement/consent works in staging.
- [ ] Responsive, keyboard, screen-reader/reduced-motion checks pass.
- [ ] Titles/descriptions/canonicals/social previews/robots/sitemap are correct.
- [ ] Rollback, backup, monitoring and an ongoing named owner are in place.

## First 30 days

Review form delivery daily at first; check indexing/crawl/sitemap status; compare analytics conversions with CRM records; inspect real-device performance/errors; re-check outbound links and consent; establish a content cadence and quarterly dependency/security review.
