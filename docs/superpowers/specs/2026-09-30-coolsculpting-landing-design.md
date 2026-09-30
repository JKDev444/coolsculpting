# CoolSculpting Landing Page Design Specification

## Intent and success

Build a local acquisition page for Omni Centers that helps a prospective patient answer, in order: could this fit my goals, can I trust Omni, does it work, how does it work, what could a plan cost, and what should I do next. The primary conversion is completion of the in-hero five-step assessment; the online result is personalized guidance, never medical clearance.

This specification records the owner's approved mockup and written overrides. The written brief wins wherever it conflicts with `mockup.png`.

## Chosen approach

Use a React + TypeScript + Vite single-page application with focused components, local data modules, CSS custom-property tokens, Vitest/Testing Library for behavior, and Playwright for end-to-end/browser QA. Preserve `Body Sculpting Olympia Landing.html` untouched. Extract first-party bundled assets and download source-site Omni assets into local `public/assets` with a provenance manifest.

Rejected approaches:

1. Continue the bundled single-file artifact: fastest initially, but not maintainable, testable, or appropriate for the required data/adapter boundaries.
2. Server-rendered framework: unnecessary for this local artifact and adds deployment/API assumptions the owner explicitly withheld.

## Page and hierarchy

Route: `/`.

Audience: adults in Olympia, Tumwater, Lacey, and the South Sound considering targeted non-surgical body contouring.

Sections, in order:

1. Compact Omni header with essential anchors, phone, and consultation action.
2. Hero: editorial headline, concise support copy, one restrained trust line, first-party body photography, and the large assessment card.
3. Eight-year experience: real Omni patient + CoolSculpting applicator/device image, editorial story, no icons.
4. Patient voices: three horizontal review rows, data-driven verified first-party copy plus honest content placeholders, no invented review count.
5. Results: first-party Omni before/after imagery and individual-results disclaimer.
6. Target → Cool → Clear: three-step science explanation using the source illustrations.
7. Treatment plan: pricing starting point, financing, and Omni Body Guarantee with current-terms caveats.
8. FAQ: sourced, concise, medically careful answers.
9. Dark final consultation CTA.
10. Footer with phone, location/service links, privacy/accessibility placeholders, safety and results language.

Elements explicitly removed: hero proof-icon rows, hero testimonial quote, decorative handwritten notes, post-hero icon grid, separate pre-assessment jump CTA, generic “Multiple Areas,” fabricated star/review totals, and placeholder-style stick-figure body icons.

## Assessment contract

Step 1 allows one to three selections from: Abdomen; Flanks / Love Handles; Upper Arms; Thighs; Lower Back / Bra Area; Chin / Jawline; Banana Roll / Under Buttocks. Each uses a photographic crop and icy treatment-zone highlight. The continue action stays unavailable until at least one area is selected; attempting a fourth area produces inline guidance without clearing prior choices.

Steps 2–4 collect primary goal, current situation, and desired timing. Step 5 captures first name, last name, email, phone, and consultation consent. Validation is app-owned (`noValidate`), preserves values, associates error text, and focuses the first invalid field.

Submission builds a typed `LeadSubmission` including answers, captured `utm_*`/`gclid` attribution, landing URL, timestamp, and source identifier. The default local adapter returns a simulated accepted response and never sends PII externally. A future server-side GHL adapter may implement the same interface; secrets and endpoint credentials never enter client code.

The result summarizes selected body areas and planning inputs, says the person “may be a candidate,” and directs them to a complimentary consultation for eligibility and treatment planning. Back/forward navigation preserves all answers.

## Content truthfulness

Medical and pricing language comes from Omni's current CoolSculpting page and the preserved local artifact, with conservative editing. Pricing is framed as “starting at $2,999” and financing as “6–12 month 0% options, subject to approval and current terms.” The Omni Body Guarantee is described with a prompt to review exact terms with the specialist.

Review entries carry `verified`, `source`, and `contentStatus`. Only copy published on Omni's first-party site is used as a quote in this prototype. Remaining cards visibly say verified Google review content is pending. No review count or rating aggregate is shown.

Before/after results use existing Omni-hosted images only. No generated patient result or invented treatment metadata is allowed.

## Visual contract

Use the tokens and rules in project-root `DESIGN.md`. Exact runtime values map to `src/styles/tokens.css`. The signature is the icy treatment-zone body map. The approved mockup controls brand/nav tone, serif/sans pairing, navy/ice palette, results/science bands, and final CTA rhythm; the owner's written overrides control simplification and spacing.

Desktop uses a 1280px frame, generous 120–160px section padding, and a layered hero that keeps the assessment primary. At 768px the hero becomes a two-part editorial stack; at 390px the assessment appears immediately after concise hero copy and all controls remain at least 44px. Review rails remain manually scrollable without page overflow.

## Accessibility and motion

Target WCAG 2.2 AA. Use one `h1`, sequential headings, semantic form elements, visible labels, generous focus rings, descriptive alt text, and no color-only state. All marquee motion pauses on hover and focus-within. `prefers-reduced-motion: reduce` removes automatic translation while preserving horizontal scrolling. Reveals are optional and disabled under reduced motion.

## Verification and acceptance

Required evidence:

- Unit/component tests for selection cap, step navigation, contact validation, attribution, payload construction, and local adapter behavior.
- Playwright tests for the complete five-step assessment, back/forward retention, fourth-area guard, contact validation, success result, reduced-motion review rails, keyboard behavior, and horizontal-overflow checks.
- Axe accessibility scan and console/request failure checks.
- Full-page screenshots at 1440, 1280, 768, and 390 in `artifacts/qa/`.
- Production build and bundle review.
- Manual `view_image` comparison of `mockup.png` and final desktop/mobile screenshots, followed by the Creative Director Gate and Design Acceptance Gate.

Owner-review readiness remains NO until every material gate passes.
