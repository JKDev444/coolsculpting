# INDEPENDENT VISUAL REVIEW + REPAIR

You are the second-pass visual reviewer and repair agent.

Read VISUAL_CONTRACT.md.
Compare:
- mockup.png = approved reference
- artifacts/fidelity/final-1440.png = implementation

Do not trust status.json or prior PASS reports.
Do not merely critique. FIX the implementation yourself.

Inspect at full resolution and compare:
- hero model/body crop and negative space;
- headline placement, line breaks, font scale, line-height;
- assessment size, position, tile scale, card proportions;
- post-hero image/copy balance;
- review heading and card scale;
- before/after image prominence;
- Target/Cool/Clear horizontal composition;
- navy planning section density;
- FAQ proportions;
- final CTA image/copy split;
- overall page length and vertical rhythm.

If the implementation still reads as the old rejected page, rewrite the layout/CSS further.

Use geometry from VISUAL_CONTRACT.md. Preserve functionality but not rejected presentation.

After repairs:
- recapture artifacts/fidelity/final-1440.png at 1440px;
- recapture artifacts/fidelity/final-390.png at 390px;
- inspect again against mockup.png;
- run npm test, npm run build, npm run test:e2e.

Do NOT commit or push.
Do not mark PASS unless the implementation visibly resembles the mockup at first glance.
