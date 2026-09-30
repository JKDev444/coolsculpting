# COOLSCULPTING FAST VISUAL FIDELITY REPAIR

You are repairing the existing implementation in C:\JK\PROJECTS\coolsculpting.

The owner has already APPROVED the visual mockup. Do NOT redesign it.
Do NOT do more market research, ideation, brainstorming, architecture work, or broad audits.
Do NOT create another mockup.
Start editing immediately.

LOCKED REFERENCE:
- Full: reference\approved-mockup.png
- Hero: reference\sections\01-hero.png
- Post-hero directional crop: reference\sections\02-posthero-direction.png
- Reviews: reference\sections\03-reviews.png
- Results: reference\sections\04-results.png
- Science: reference\sections\05-science.png
- Final CTA/footer: reference\sections\06-final-cta-footer.png

The current build was rejected because it only matched the mood, not the composition.
This repair is about visual fidelity, not interpretation.

Use ONLY the skills needed for this repair:
- frontend-design
- frontend-design-premium
- design-acceptance-gate
- playwright-cli
- visual-reference-fidelity from C:\JK\PROJECTS\usaheat\.agents\skills\visual-reference-fidelity\SKILL.md

Do not invoke the long Superpowers planning pipeline. Do not redo TDD unless a functional regression appears.
The existing React/Vite codebase, assessment behavior, data, and assets should be preserved wherever possible.

PRIMARY TARGET:
At 1440px wide, the page should look recognizably like the approved mockup at a glance.
A reasonable total page height target after the owner's extra-spacing overrides is approximately 3600-4500 CSS px, not the current ~8000px.

HERO MUST MATCH:
- Full-width photographic hero, not a narrow centered editorial composition.
- Large model image should dominate the center/right background like the reference.
- Large headline on the left with similar scale, line breaks, and placement.
- Assessment card on the right, large and visually prominent, similar proportions to reference.
- Keep the assessment IN the hero.
- Keep wording: "Let's See If You May Qualify for CoolSculpting".
- Simplify stray proof clutter, but preserve the reference's strong overall balance.
- Header/nav proportions should look like the reference.
- Do not shrink the whole hero content into a small central frame.

POST-HERO OWNER OVERRIDE:
- Do NOT copy the icon row shown in the original mockup crop.
- Use the real CoolSculpting treatment image already localized in the project.
- Two-column editorial layout: large treatment image + "8 Years of CoolSculpting Experience / More Than a Treatment. A Better You." story.
- No icons in this section.
- Give it comfortable, not excessive, vertical breathing room.

REVIEWS MUST MATCH THE REFERENCE SCALE:
- Large section headline and supporting copy.
- Three horizontal rows of Google-style review cards.
- Cards should be substantially larger and more readable than the rejected implementation.
- Use most of the viewport width, like the mockup.
- Preserve the existing no-fabrication safeguards for review content.
- Keep slow marquee motion, but fidelity comes before motion polish.

RESULTS MUST MATCH:
- The reference shows one strong horizontal results presentation with large before/after pairs.
- Do not make the photos tiny.
- Increase visual prominence, image height, labels, and spacing to match the approved reference.
- Use existing real Omni assets only.

SCIENCE MUST MATCH:
- Match the mockup's horizontal Target / Cool / Clear storytelling.
- Use large visuals across the row.
- Do not use a tiny 2x2 illustration block with a large empty right side.
- Typography and content hierarchy should resemble the reference.

PLAN/PRICING + FAQ:
- Keep existing functional content, but reduce excessive empty space and tiny typography.
- Match the reference's visual density and width.
- These are supporting sections, not giant editorial canvases.

FINAL CTA / FOOTER:
- Match the reference's strong full-width dark CTA treatment and image balance.
- Keep footer compact and proportional.

FAST QA LOOP:
1. Fix hero first.
2. Capture 1440 screenshot and visually compare to 01-hero.png.
3. Fix post-hero.
4. Fix reviews.
5. Fix results.
6. Fix science.
7. Fix final CTA/footer.
8. Then run one full-page 1440 capture and one 390 mobile capture.
9. Run unit tests/build and the existing Playwright suite once after visual parity is achieved.

For each major section, capture an implementation screenshot under artifacts\fidelity\.
Create simple side-by-side or overlay artifacts against the matching reference crop.
Do NOT write PASS from prose alone.
If a section visibly differs in composition, scale, typography, imagery balance, or whitespace, keep repairing it.

Do not spend time on Lighthouse, dependency auditing, SEO auditing, broad accessibility auditing, or new architecture unless a new regression is introduced. Those already passed and are not the current problem.

Do not change approved marketing content merely for taste.
Do not deploy.
Do not ask the owner implementation questions.

At completion update status.json only after full-resolution visual comparison.
Final output:
COOLSCULPTING_FAST_REPAIR
STATUS: PASS/FAIL
LOCAL_URL: http://127.0.0.1:4177/
HERO_FIDELITY: PASS/FAIL
REVIEWS_FIDELITY: PASS/FAIL
RESULTS_FIDELITY: PASS/FAIL
SCIENCE_FIDELITY: PASS/FAIL
MOBILE: PASS/FAIL
TESTS: PASS/FAIL
OWNER_REVIEW_READY: YES/NO
