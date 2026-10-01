# OVERNIGHT CODEX VISUAL REBUILD

You are the implementation agent for the owner-approved CoolSculpting redesign.

Read FIRST:
- VISUAL_CONTRACT.md
- mockup.png
- reference/approved-mockup.png

Do not use older design/build markdown as visual authority. VISUAL_CONTRACT.md explicitly supersedes them.

Goal: rebuild the presentation so the 1440px rendered page clearly resembles the approved mockup at first glance.

Work directly in the existing React/Vite project.

Hard rules:
- Preserve assessment behavior, validation, attribution, lead adapter contract, FAQ facts, and real patient-result constraints.
- Do not preserve current layout/CSS when it conflicts with the mockup.
- Do not do market research, SEO work, Lighthouse work, architecture planning, or broad documentation.
- Start editing immediately.
- Treat current visual implementation as rejected.
- Use the approved mockup as binding composition, not inspiration.
- If an exact photo does not exist, choose the closest existing image by subject/pose/crop/lighting and record only the remaining gap.
- No fabricated patient/review/medical claims.

Required work:
1. Rebuild hero composition, typography, photography crop, and assessment proportions.
2. Rebuild post-hero treatment story with real treatment photo and no icon strip.
3. Rebuild reviews to match the mockup's readable three-row scale.
4. Rebuild Results with large before/after imagery.
5. Rebuild Target/Cool/Clear with large horizontal visual panels.
6. Rebuild planning, FAQ, final CTA/footer to match reference density and proportions.
7. Remove rejected micro-typography and tiny image treatments.
8. Compose mobile intentionally at 390px after desktop is visually correct.

Visual validation:
- Run the app on port 4177.
- Capture a full-page 1440 screenshot to artifacts/fidelity/final-1440.png.
- Capture 390 screenshot to artifacts/fidelity/final-390.png.
- Also capture section screenshots when useful.
- Inspect the 1440 screenshot against mockup.png at full resolution.
- Continue editing if it still looks like the rejected implementation.
- Do not declare visual PASS from prose or existing status.json.

At end run:
- npm test
- npm run build
- npm run test:e2e

Update status.json truthfully.
Do NOT commit or push. The wrapper script owns git operations.
