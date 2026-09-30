# COOLSCULPTING LANDING PAGE — APPROVED BUILD BRIEF

You are the primary implementation agent for C:\JK\PROJECTS\coolsculpting.

## Mission
Build a production-quality local CoolSculpting landing page for Omni Centers from the approved visual reference:
- C:\JK\PROJECTS\coolsculpting\mockup.png
- Preserve C:\JK\PROJECTS\coolsculpting\Body Sculpting Olympia Landing.html as source/reference material. Do not destroy it.

The mockup is the visual baseline, but the owner's latest written changes below OVERRIDE the image wherever they conflict.

## Mandatory skill workflow
Before coding, read and follow these installed skills:
1. using-superpowers
2. brainstorming / writing-plans where applicable
3. frontend-design
4. frontend-design-premium
5. creative-director-gate
6. frontend-app-builder
7. frontend-ui-engineering
8. ux-audit-harness

During implementation / QA also use:
- test-driven-development where practical
- frontend-testing-debugging
- playwright-cli
- web-design-guidelines
- performance-optimization
- vercel-react-best-practices if React is used
- verification-before-completion
- design-acceptance-gate

Do not claim the build is ready merely because it compiles. The owner has had repeated problems with agents presenting visually weak builds. The browser result must be manually reviewed against mockup.png and corrected before PASS.

## Locked design direction
Premium Clinical Editorial / Cold Precision.
Elegant medical-aesthetic, not generic SaaS, not sterile hospital design, not a crowded card wall.
Use luxurious whitespace, restrained navy + icy blue accents, natural skin photography, serif editorial display type paired with a highly readable sans serif.
Avoid clutter. Avoid tiny typography. Avoid gimmicky animation. Motion should feel expensive and subtle.

## CRITICAL owner changes to the saved mockup
1. HERO:
   - Assessment MUST remain directly in the hero and be a primary visual element.
   - Wording should be: “Let’s See If You May Qualify for CoolSculpting®” or a polished equivalent retaining “may qualify”.
   - Hero in mockup is still too busy. SIMPLIFY it.
   - Do not stack multiple competing proof/icon rows, testimonial callouts, decorative quotes, and CTAs in the hero.
   - Left side: strong headline, concise support copy, one restrained trust line at most, premium photography.
   - Right side: large assessment card.
   - Assessment Step 1 is body-area selection and should feel visual and easy.
   - The assessment is the hero CTA itself; do not require a separate jump CTA before the user can begin.

2. SECTION IMMEDIATELY AFTER HERO:
   - Remove ALL icons from this section.
   - Restore/use a real CoolSculpting treatment image showing an actual patient + applicator/device. Inspect the original bundled HTML and Omni source assets and reuse the best treatment image available.
   - Make this an editorial two-column section with “8 Years of CoolSculpting Experience” / “More Than a Treatment. A Better You.” messaging.
   - One strong image + one strong story. NO icon grid.
   - The owner explicitly states Omni has been doing CoolSculpting for 8 years.

3. SPACING / RHYTHM:
   - Every section below hero needs substantially more vertical breathing room than mockup.png.
   - Desktop target: usually ~120–160px top/bottom padding depending on section; never mechanically identical if visual rhythm calls for adjustment.
   - Tablet/mobile should scale proportionally but still feel spacious.
   - No sections visually jammed together.
   - Use generous max-widths and readable line lengths.

4. GOOGLE REVIEW SOCIAL PROOF:
   - Build a substantial 3-row horizontally scrolling testimonial/review area.
   - Each row should contain many Google-review-style cards and move slowly; alternate directions per row.
   - Pause on hover/focus; touch/manual horizontal scrolling must work on mobile.
   - Cards need comfortable spacing and should not resemble a cheap third-party widget.
   - IMPORTANT: do not fabricate customer quotes, names, ratings, or review counts.
   - Build review content from a data module so verified Google reviews can be dropped in later.
   - For the local visual prototype, use any REAL first-party Omni testimonial copy found in the existing source/site and clearly mark remaining entries as content placeholders in code/data, not invented patient claims.
   - Do not hard-code a “408 Google reviews” claim; public sources conflict and it is not yet verified.

5. ASSESSMENT:
   - 5-step interaction.
   - Step 1: “Where does stubborn fat bother you most? Select up to 3 areas.”
   - Areas should include Abdomen, Flanks / Love Handles, Upper Arms, Thighs, Lower Back / Bra Area, Chin / Jawline, Banana Roll / Under Buttocks.
   - Remove generic “Multiple Areas”; multi-select solves that problem.
   - Body-area visuals need obvious icy-blue treatment-zone highlighting.
   - DO NOT regress to tiny black stick-figure icons. If perfect final treatment-zone assets are not available yet, use tasteful photo/illustration crops or polished placeholders structured for asset replacement; do not invent crude SVG people.
   - Subsequent questions can cover primary goal, current situation, desired timing, then contact capture.
   - Result should be framed as personalized guidance / body map, not a medical clearance.

6. REMAINING PAGE JOURNEY:
   - Hero + assessment
   - 8-year experience / real CoolSculpting treatment photography
   - three-row Google-review social proof
   - real before/after results
   - Target → Cool → Clear science explainer
   - treatment planning / pricing / financing / Omni Body Guarantee where appropriate
   - FAQ
   - final complimentary-consultation CTA
   - footer / safety information
   The flow should answer: Could this work for me? Can I trust Omni? Does it work? How does it work? What would my plan look like? What do I do next?

## Content / medical-claim constraints
Use the existing Omni CoolSculpting page and original local artifact as primary content references.
Do not invent patient outcomes or medical claims.
Do not present the online assessment as medical clearance.
Use “may qualify” / “may be a candidate” language and make consultation the candidacy confirmation.
Keep appropriate “individual results may vary” and safety language.
Do not AI-fabricate before/after patient outcomes.

## Technical build
Turn this folder into a clean maintainable frontend project. Prefer React + TypeScript + Vite unless inspection reveals a better reason not to.
Preserve original artifact under a reference/original path or leave it untouched.
Create reusable components and a data-driven content model.
Do not deploy or push anywhere.
Do not connect a live GoHighLevel automation yet because no approved endpoint/credentials are supplied.
Create a clean lead-submission adapter/API contract so GHL can be connected later without putting secrets in the browser.
Keep UTM/gclid attribution support from the original artifact.
Make the local assessment fully functional end-to-end.

## Motion
Use subtle premium motion only:
- assessment selection/highlight transitions
- gentle section/media reveals or parallax where appropriate
- review marquees
- optional restrained Target/Cool/Clear progression
Honor prefers-reduced-motion.
Do not add motion just to demonstrate GSAP.

## Responsive / accessibility
Explicitly design for 1440, 1280, 768, and 390 widths.
No horizontal overflow.
Minimum comfortable mobile tap targets.
Keyboard navigation, labels, focus states, semantic form controls, alt text, reduced-motion behavior.

## Required QA
Use Playwright, not visual guessing.
Capture full-page screenshots at 1440, 1280, 768 and 390 under artifacts/qa/.
Test all five assessment steps and back/forward behavior.
Test selecting up to 3 areas.
Test validation on contact step.
Test review marquee reduced-motion behavior.
Run accessibility checks available in the project/tooling.
Run build.
Review screenshots against mockup.png AND the written overrides above.
Fix visual mismatches and density problems before marking PASS.

## Owner-review gate
A PASS requires:
- hero assessment polished and not cluttered
- post-hero treatment section uses a real treatment image and NO icons
- strong whitespace between every section
- 3 review rows with polished marquee behavior
- desktop + mobile screenshots manually reviewed
- no obvious placeholder-style generic UI
- all relevant tests/build pass

Create status.json in project root and maintain:
QUEUED → RUNNING → PASS / FAIL / BLOCKED.
Create codex-build.log or another durable log.
At completion print a clear block:
COOLSCULPTING_BUILD
STATUS: ...
LOCAL_URL: ...
BUILD: ...
PLAYWRIGHT: ...
1440: ...
1280: ...
768: ...
390: ...
DESIGN_ACCEPTANCE_GATE: ...
OWNER_REVIEW_READY: YES/NO

Start now. Do not ask the owner routine implementation questions; make strong design decisions inside this contract. Stop only for a real blocker requiring owner input.
