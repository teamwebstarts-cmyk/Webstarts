# 03 — Independent and offline-readiness plan

## Definition

The finished site must not request code, media, tracking, fonts, analytics, data, branding or URLs from the original template owner or its WordPress installation. It should still work if the original template site disappears.

“Independent” does not mean that production forms, newsletters, maps, analytics or hosting must be offline. Those may be legitimate external services, but each must be intentional, brand-owned, privacy-reviewed, documented and have a safe fallback.

## Current readiness: not independent

| Finding | Evidence | Required action | Release blocker |
| --- | --- | --- | --- |
| Source tracking | Cloudflare Insights module/token at the end of all HTML pages. | Remove; only add new-brand measurement after ownership/consent decision. | Yes |
| External fonts | Google Fonts and Fontshare links in every head. | Self-host permitted WOFF2 or use system fonts; remove remote links/prefetch. | Yes for offline/privacy goal |
| Source video | `index.html` points to ThemeXriver `h1-video.mp4`. | Replace with local owned optimized media or remove. | Yes |
| WordPress/Elementor config | Inline configurations refer to `themexriver.com`, `wp-admin`, `wp-json`, uploads/assets. | Strip obsolete config after testing visual behaviour. | Yes |
| Emoji fallback | Inline WordPress emoji configuration requests `s.w.org`. | Remove unless explicitly needed. | Yes for offline |
| Gravatar | Blog pages call `secure.gravatar.com`. | Local author imagery or remove author avatar. | Yes |
| Source identity | Titles, footer, loader, alt text and inline data include Aigora/ThemeXriver. | Replace/remove throughout, subject to licence attribution terms. | Yes |
| Source share URLs | Blog sharing points to original article. | Generate from final canonical URL or remove controls. | Yes |
| Forms | Contact Form 7 remnants with `action="#"`. | Build a real brand-owned integration. | Yes for lead capture |

## Detachment sequence

1. Make a private backup/tag of the baseline and retain purchase/licence evidence separately.
2. Choose static-with-components or CMS-backed delivery before mass content editing.
3. Centralize header/footer, then replace logo, favicon, navigation, social, CTA, copyright and legal links once.
4. Search every source file for: `themexriver`, `aigora`, `ThemeXriver`, `wp-admin`, `wp-json`, `wp-content`, `wpcf7`, `cloudflareinsights`, `gravatar`, `googleapis`, `fontshare`.
5. Remove/replace every original tracking tag, domain URL, source video, article share URL and avatar.
6. Choose a font policy: preferably self-host licensed fonts with `font-display: swap` and system fallbacks.
7. Replace all images/logos/video and update alt text, dimensions and responsive sources.
8. Add brand-owned forms, newsletter, analytics and consent. Keep accounts/secrets outside version control.
9. Inspect browser network traffic and block original domains; no request should reach the original template owner.

## What is local today

`downloaded_assets/` contains local copies of much CSS, JavaScript and fonts; `downloaded_images/` contains local visual assets. That supports visual preview without the source web server, but it does not grant rights or create a maintenance policy. Review the licence/provenance of every retained library, icon, font and image.

## Minimum offline acceptance test

1. Run from a local static server rather than only `file://`.
2. Disable internet or block all remote hosts.
3. Visit all pages on desktop and mobile.
4. Verify type, images, navigation, sliders/lightboxes, back-to-top and desired animation work or safely degrade.
5. Inspect the network tab: no request may go to ThemeXriver, original WordPress, source Cloudflare token, Gravatar, Google Fonts or Fontshare.
6. Verify deliberate fallbacks: forms report a clear state; video has a poster; remote-only embeds do not leave broken blank areas.
7. Record every intentionally retained third-party host, owner, purpose, privacy basis and fallback.

Removing scripts is not itself readiness: it may break menus, lightboxes, mobile navigation, lazy loading and animation. Ready means the chosen visitor journey works independently, with real brand-owned integrations and no accidental source exposure.
