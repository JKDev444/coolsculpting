# VISUAL CONTRACT — COOLSCULPTING

## Authority
This file is the only visual authority for the fidelity repair.

Priority:
1. `mockup.png` / `reference/approved-mockup.png`
2. This file
3. Owner-written overrides explicitly listed below
4. Existing functionality/data
5. All older design/build documents

For visual decisions, IGNORE conflicting guidance in `CODEX_BUILD_PROMPT.md`, `DESIGN.md`, `FAST_VISUAL_REPAIR.md`, prior status reports, and existing CSS.

The approved mockup is NOT inspiration. It is the visual target.

## Non-negotiable implementation rule
Preserve behavior, not presentation.

Keep:
- assessment state/validation and lead payload behavior;
- attribution handling;
- real Omni result/treatment assets;
- FAQ facts/safety content;
- existing unit behavior.

You MAY replace/rewrite:
- all section markup needed for composition;
- `src/styles/page.css`;
- most of `src/features/assessment/assessment.css`;
- hero/section component structure;
- image selection/cropping;
- typography sizing/spacing.

Do not preserve existing layout merely because it works.

## Approved desktop composition
Reference artwork: 841 × 1870 px. At 1440px viewport, preserve its RELATIVE geometry and hierarchy rather than stretching individual pixel values blindly.

### Header
- Compact white/transparent header.
- Logo left, short nav center, phone/consult action right.
- Header is visually quiet and secondary to hero.
- No oversized nav gaps or tiny unreadable labels.

### Hero
Target: approximately 31–34% of the desktop viewport/page visual story.
- Full-width photographic canvas.
- Model/body is central visual subject, not an extreme belly crop.
- Left copy occupies roughly 28–32% width.
- Central photography occupies roughly 36–42% width.
- Assessment occupies roughly 31–35% width.
- H1 line breaks EXACTLY:
  Same You.
  A More
  Confident You.
- H1 should be visually comparable to the reference, not micro-scaled.
- Short supporting copy only.
- Assessment card begins high in hero and is vertically balanced with the headline.
- Assessment first step uses large image tiles in a 4-column desktop grid.
- Remove extraneous trust bullets/icon strips if they reduce reference fidelity.

### Post-hero treatment story
Owner override to reference:
- two-column editorial composition;
- real CoolSculpting treatment image with patient/device;
- no icon grid;
- “More Than a Treatment. A Better You.”;
- visible 8-years experience treatment;
- approximately 45/55 or 50/50 image/copy balance.

### Reviews
- Light icy-blue band spanning full width.
- Large heading and readable support copy.
- Three horizontal review rows.
- Cards must be readable at normal 100% browser zoom.
- Desktop card target approximately 300–360 CSS px wide and 150–190 CSS px tall.
- Do not shrink cards to fit huge counts on one screen.
- Motion is secondary; composition first.

### Results
- White editorial section.
- Large horizontal before/after groups.
- Result imagery must dominate the section.
- Desktop image-group height target approximately 220–300 CSS px.
- Labels immediately below images.
- No tiny thumbnail strip.

### Science
- Soft neutral/ice background.
- Left editorial intro approximately 28–32% width.
- Three large Target / Cool / Clear visual panels across remaining width.
- Each panel target approximately 230–300 CSS px wide and 180–240 CSS px visual height.
- Clear horizontal arrow/progression rhythm.
- No tiny cards with large unused whitespace.

### Planning
- Full-width deep navy band.
- Compact intro plus three horizontal columns.
- Supporting section; do not let it become taller than Results or Hero.

### FAQ
- White two-column composition.
- Editorial headline left; accordion list right.
- Compact, readable, balanced.

### Final CTA
- Wide dark navy band.
- Large body photo left, copy/button right.
- Strong image/copy split comparable to reference.
- Compact footer directly after.

## Owner overrides
- Hero assessment remains the primary CTA.
- Post-hero section uses real treatment photography and NO icon strip.
- Reviews use three rows.
- Real before/after images only.
- Do not fabricate reviews, counts, patient outcomes, or medical claims.
- Result of assessment is guidance, not medical clearance.

## Asset rule
If the exact reference photo is unavailable, choose the closest existing asset by:
1. subject/body pose;
2. crop/aspect ratio;
3. lighting/background;
4. color temperature.

Do NOT keep a visibly wrong asset merely because it was previously wired in.
If no existing asset can plausibly match the reference, record that specific asset as `ASSET_GAP` and continue matching geometry around it.

## Readability floors
At 1440px desktop:
- body copy: generally >= 15px;
- review copy: generally >= 14px;
- nav/labels: generally >= 12px;
- major section headings: generally 46–72px depending on role.
No 9–11px body-copy look.

## Fidelity gate
A build is NOT PASS because:
- unit tests pass;
- Playwright interaction tests pass;
- axe passes;
- screenshots exist;
- the agent says it is close.

PASS requires:
- full-resolution screenshot comparison to the approved mockup;
- matching overall composition at first glance;
- matching section proportions;
- matching typography hierarchy;
- matching image prominence/crop strategy;
- no obvious reuse of the rejected layout.

When uncertain, favor the mockup over the old implementation.
