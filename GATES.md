# Gates: Master Blueprint 2026 Enterprise Full Remediation

OWNS: index.html, pages/project.html, pages/project-detail.html, pages/privacy-policy.html, pages/terms-of-service.html, sitemap.xml, robots.txt, vercel.json, package.json, llms.txt, llms-full.txt, scripts/verify-blueprint.mjs

Scope: Complete end-to-end execution of the Master SEO, GEO, Technical, Performance, Conversion, and Compliance Blueprint for WebStarts.

- [x] G1: Geographic meta headers and Indian English locale present across all HTML pages
  CHECK: node scripts/verify-blueprint.mjs --gate G1
  EXPECT: G1_PASS: Locale and Geo headers verified across all pages
  EVIDENCE: Passed. Confirmed lang="en-IN", geo.region="IN-MP", geo.placename="Indore", geo.position and ICBM coordinates across index.html, pages/project.html, and pages/project-detail.html.

- [x] G2: Comprehensive LocalBusiness & ProfessionalService JSON-LD Schema with Indore NAP and GPS coords deployed
  CHECK: node scripts/verify-blueprint.mjs --gate G2
  EXPECT: G2_PASS: Enhanced Schema.org JSON-LD verified
  EVIDENCE: Passed. Verified Organization + LocalBusiness + ProfessionalService JSON-LD schema with exact GPS coords (22.7196, 75.8577), opening hours, sameAs social links, areaServed Wikidata entities, and OfferCatalog.

- [x] G3: Root llms.txt and llms-full.txt deployed with AI agent discovery format
  CHECK: node scripts/verify-blueprint.mjs --gate G3
  EXPECT: G3_PASS: llms.txt and llms-full.txt verified
  EVIDENCE: Passed. Created both standard llms.txt and comprehensive llms-full.txt capability specifications at repository root.

- [x] G4: robots.txt updated with AI crawler permissions (OAI-SearchBot, PerplexityBot, Claude-SearchBot) and clean sitemap reference
  CHECK: node scripts/verify-blueprint.mjs --gate G4
  EXPECT: G4_PASS: robots.txt verified
  EVIDENCE: Passed. Added explicit user-agent rules for OAI-SearchBot, PerplexityBot, Claude-SearchBot, Applebot, Googlebot, Bingbot.

- [x] G5: Bento grid category query parameters and HTTPS protocol links aligned
  CHECK: node scripts/verify-blueprint.mjs --gate G5
  EXPECT: G5_PASS: Bento grid and protocol links verified
  EVIDENCE: Passed. Fixed Bento UI/UX and Cloud card query params and updated Adipelli Admin live URL to https://.

- [x] G6: Heading hierarchy, marquee headings, stray tags, and subtitle kickers cleaned up
  CHECK: node scripts/verify-blueprint.mjs --gate G6
  EXPECT: G6_PASS: Semantic heading hierarchy and clean markup verified
  EVIDENCE: Passed. Merged split hero heading into clean H1, converted 12 marquee H5s to spans, removed stray closing section tag, and fixed alt="List" attributes to aria-hidden.

- [x] G7: Accessibility defects fixed (decorative icon alt tags, form labels for/id, FAQ accordion aria state)
  CHECK: node scripts/verify-blueprint.mjs --gate G7
  EXPECT: G7_PASS: Accessibility and ARIA attributes verified
  EVIDENCE: Passed. Added explicit for/id pairings (ws-first-name, ws-last-name, ws-email, ws-company, ws-message) and synchronized active accordion aria-expanded state.

- [x] G8: Asset bloat reduced (Three.js and duplicate FontAwesome stylesheets stripped from index.html)
  CHECK: node scripts/verify-blueprint.mjs --gate G8
  EXPECT: G8_PASS: Asset bloat removed
  EVIDENCE: Passed. Stripped 615 KB three.min.js and duplicate all.min_1.css from index.html.

- [x] G9: Web3Forms honeypot botcheck and DPDP compliance notices added to contact form
  CHECK: node scripts/verify-blueprint.mjs --gate G9
  EXPECT: G9_PASS: Lead pipeline security and DPDP compliance verified
  EVIDENCE: Passed. Integrated invisible botcheck honeypot, DPDP Act 2023 compliance notice, and consent checkbox.

- [x] G10: Legal compliance pages (privacy-policy.html & terms-of-service.html) created and linked in footers
  CHECK: node scripts/verify-blueprint.mjs --gate G10
  EXPECT: G10_PASS: Legal pages created and footer links verified
  EVIDENCE: Passed. Created pages/privacy-policy.html and pages/terms-of-service.html with DPDP & Grievance Officer disclosures and linked them in all page footers.

- [x] G11: vercel.json upgraded with enterprise security headers and static caching rules
  CHECK: node scripts/verify-blueprint.mjs --gate G11
  EXPECT: G11_PASS: vercel.json configuration verified
  EVIDENCE: Passed. Added 1-year immutable caching for static assets and enterprise security headers (X-Content-Type-Options, X-Frame-Options, CSP/Permissions-Policy).

- [x] G12: PWA Web App Manifest, root favicons, and RFC 9116 security.txt deployed
  CHECK: node scripts/verify-blueprint.mjs --gate G12
  EXPECT: G12_PASS: PWA manifest, root favicons, and RFC 9116 security.txt verified
  EVIDENCE: Passed. Deployed site.webmanifest, root favicon.svg / favicon.ico, and RFC 9116 .well-known/security.txt vulnerability disclosure policy.

