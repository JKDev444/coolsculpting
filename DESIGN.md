---
version: alpha
colors:
  primary: "#0A2946"
  canvas: "#FFFFFF"
  pearl: "#F7FAFB"
  mist: "#EAF6F8"
  ice: "#83D3E4"
  ice-deep: "#1595B4"
  navy: "#0A2946"
  navy-soft: "#173C5A"
  ink-muted: "#5B7080"
  line: "#D8E6EA"
  success: "#2F7B6D"
  error: "#A5443D"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
  body:
    fontFamily: "Archivo, Arial, sans-serif"
rounded:
  control: "0.25rem"
  card: "0.75rem"
  capsule: "999px"
spacing:
  unit: "0.25rem"
  section-mobile: "5rem"
  section-desktop: "8.75rem"
components:
  primary-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.capsule}"
  assessment-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.navy}"
    rounded: "{rounded.card}"
  focus-ring:
    backgroundColor: "{colors.ice-deep}"
    size: "3px"
---

# Overview

The site is a premium clinical editorial experience for adults in the South Sound considering non-surgical body contouring. Its North Star is an established medical-aesthetic journal with the clarity of a candidacy consultation: polished, calm, specific, and never sales-widget-like. The register is brand-forward marketing with a functional assessment.

The signature is the treatment-zone body map inside the hero assessment. One icy-blue highlight language connects selection states, the science sequence, and quiet dividers. Restraint wins everywhere else.

Anti-references: generic SaaS gradients, crowded proof-icon rows, rounded-card walls, hospital sterility, beauty-influencer gloss, gimmicky animation, fabricated patient claims, and tiny utility text.

# Colors

White is the dominant canvas. Pearl and mist create large low-contrast editorial bands. Navy carries headings and primary actions. Ice is used only for treatment-zone highlights, progress, focus, and science. Error and success colors are semantic and are never the only signal.

Runtime ownership model: `src/styles/tokens.css` is canonical. This file mirrors accepted values and explains intent. Components consume semantic CSS variables rather than raw color literals.

# Typography

Instrument Serif is the restrained editorial display face for page and section headings. Archivo is the reading, label, form, and navigation face. Display type remains proportional to the viewport and never consumes the entire mobile first screen. Essential form guidance is never smaller than 14px; body copy targets 16–18px.

# Layout

The page uses a fluid 1280px content frame with 24px mobile, 40px tablet, and 64px desktop gutters. Desktop sections generally breathe at 120–160px vertically, varied by content. The hero composes three layers—copy, first-party body photography, assessment—without stacking additional testimonial or icon modules.

Mobile is a separate composition: short header, headline, restrained trust line, assessment, then photography. The assessment stays early and tap targets are at least 44px. No route may create horizontal page overflow.

# Elevation & Depth

Static editorial sections are flat. The hero assessment gets the only pronounced shadow to establish conversion hierarchy. Other surfaces use borders, background contrast, and spacing before shadow.

# Shapes

Buttons are capsules. Forms and content cards use small 4–12px radii. Photography uses clipped rectangular editorial frames, not ubiquitous pills or blobs.

# Components

- Assessment: five steps, native semantic controls, back/forward state retention, text-associated validation, first-error focus, and a non-medical personalized guidance result.
- Review rail: three independently moving horizontal rows, many data-driven cards, hover/focus pause, manual touch scrolling, and static overflow in reduced motion.
- Results: first-party Omni before/after images only, paired without invented outcome copy; include an individual-results disclaimer.
- FAQ: native button disclosures with visible focus and correct `aria-expanded`/`aria-controls`.
- Lead handoff: calls a typed adapter contract only. No secret or live GHL endpoint ships in the browser.

# Do's and Don'ts

- Do use one strong image and one strong story in the eight-year experience section.
- Do keep the assessment visually easy and clearly describe consultation as candidacy confirmation.
- Do maintain spacious section rhythm and readable line lengths.
- Do label content placeholders honestly in data and UI.
- Don't add an icon grid after the hero.
- Don't invent ratings, review counts, patient quotes, names, treatment outcomes, or medical clearance.
- Don't hide controls behind hover, remove scrollbars, or animate for spectacle.
