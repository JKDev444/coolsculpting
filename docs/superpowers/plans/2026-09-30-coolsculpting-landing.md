# CoolSculpting Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a production-quality, local Omni Centers CoolSculpting landing page with an in-hero five-step assessment.

**Architecture:** React + TypeScript + Vite renders one data-driven marketing route. Assessment domain logic, attribution capture, and lead submission are separated from presentation; a local adapter implements the future server/API contract without external submission. CSS tokens and section/component styles implement the frozen editorial design contract.

**Tech Stack:** React 19, TypeScript, Vite, Vitest, Testing Library, Playwright, axe-core, CSS custom properties.

**Spec:** `docs/superpowers/specs/2026-09-30-coolsculpting-landing-design.md`

## Global Constraints

- Preserve `Body Sculpting Olympia Landing.html` unchanged.
- Do not fabricate reviews, ratings, review counts, patient outcomes, or medical claims.
- Do not connect GoHighLevel or expose secrets in browser code.
- Preserve UTM/gclid attribution.
- Use first-party Omni treatment and before/after imagery with provenance.
- Required viewports: 1440, 1280, 768, and 390; no horizontal overflow.
- The assessment is guidance only; consultation confirms candidacy.

## Review Focus

- A fourth body-area selection must be rejected without losing the original three.
- Back/forward navigation must retain selections and field values.
- Empty, malformed, and partially complete contact data must produce associated errors and focus the first invalid field.
- LocalStorage being unavailable must not block attribution or assessment completion.
- Reduced-motion users must receive stationary, manually scrollable review rows.

---

### Task 1: Project foundation, assets, and design system

**Files:**
- Create: `package.json`, Vite/TypeScript/Vitest/Playwright config files, `index.html`
- Create: `public/assets/**`, `public/assets/PROVENANCE.md`
- Create: `src/styles/tokens.css`, `src/styles/global.css`
- Create: `src/main.tsx`, `src/App.tsx`

**Interfaces:**
- Produces: semantic runtime tokens, local first-party asset paths, React test/build entry points.

- [ ] Extract/download verified source assets and record URL/origin/role.
- [ ] Scaffold the minimal React/Vite/TypeScript test harness.
- [ ] Map every `DESIGN.md` token to `src/styles/tokens.css` and add global accessibility/layout baselines.
- [ ] Run `npm install`, typecheck, and the empty test suite.

### Task 2: Assessment domain, attribution, and adapter (TDD)

**Files:**
- Create: `src/features/assessment/types.ts`
- Create: `src/features/assessment/assessment-model.test.ts`
- Create: `src/features/assessment/assessment-model.ts`
- Create: `src/lib/attribution.test.ts`, `src/lib/attribution.ts`
- Create: `src/services/lead-adapter.test.ts`, `src/services/lead-adapter.ts`

**Interfaces:**
- Produces: `toggleBodyArea`, `validateContact`, `buildLeadSubmission`, `captureAttribution`, and `LeadSubmissionAdapter.submit`.
- Consumes: no UI code.

- [ ] Write failing tests for selection cap, validation, attribution fallback, payload shape, and local adapter acceptance.
- [ ] Run focused tests and confirm failures are caused by missing behavior.
- [ ] Implement the smallest typed domain functions and adapter to pass.
- [ ] Run the focused tests and full suite.

### Task 3: Functional assessment UI (TDD)

**Files:**
- Create: `src/features/assessment/Assessment.tsx`
- Create: `src/features/assessment/Assessment.test.tsx`
- Create: `src/features/assessment/assessment-data.ts`
- Create: `src/features/assessment/assessment.css`

**Interfaces:**
- Consumes: Task 2 domain functions/types and Task 1 asset/tokens.
- Produces: accessible five-step assessment with retained state and result summary.

- [ ] Write failing component tests for step one multi-select, cap messaging, navigation retention, contact errors, and successful local submission.
- [ ] Run the component tests and confirm RED.
- [ ] Implement semantic fieldsets/buttons/form/focus/result behavior.
- [ ] Run component tests and full suite; refactor only while green.

### Task 4: Data-driven editorial page

**Files:**
- Create: `src/data/reviews.ts`, `src/data/results.ts`, `src/data/faq.ts`
- Create: `src/components/**`
- Modify: `src/App.tsx`, `src/styles/global.css`

**Interfaces:**
- Consumes: Task 3 `Assessment` and Task 1 tokens/assets.
- Produces: complete section journey and responsive page.

- [ ] Implement header and simplified hero around the assessment.
- [ ] Implement the eight-year real-treatment editorial section with no icon grid.
- [ ] Implement three review rails with verified/placeholder data states and reduced-motion CSS.
- [ ] Implement first-party results, Target/Cool/Clear, plan/pricing/guarantee, FAQ, final CTA, and safety footer.
- [ ] Run unit/component tests, typecheck, and build.

### Task 5: Playwright workflows, accessibility, and visual QA

**Files:**
- Create: `tests/e2e/assessment.spec.ts`, `tests/e2e/visual.spec.ts`
- Create: `artifacts/qa/*.png`, `artifacts/qa/qa-report.md`, `artifacts/qa/fidelity-ledger.md`
- Modify: relevant source files found by the repair loop.

**Interfaces:**
- Consumes: the complete app.
- Produces: repeatable interaction, accessibility, geometry, and screenshot evidence.

- [ ] Start the local server at the documented URL and verify page identity/console/network health.
- [ ] Run assessment end-to-end including back/forward, cap, validation, success, keyboard, and attribution.
- [ ] Run axe, reduced-motion, overflow, and breakpoint geometry checks.
- [ ] Capture full-page screenshots at 1440, 1280, 768, and 390.
- [ ] Inspect screenshots against `mockup.png` and the written overrides; repair density, typography, cropping, hierarchy, and responsive issues until clean.
- [ ] Run current Web Interface Guidelines review, strict premium UI audit, design lint, test suite, typecheck, build, and a Lighthouse/performance measurement when available.

### Task 6: Final gates and status

**Files:**
- Modify: `status.json`, `codex-build.log`, `artifacts/qa/qa-report.md`, `artifacts/qa/fidelity-ledger.md`

**Interfaces:**
- Consumes: all verification evidence.
- Produces: PASS/FAIL truthfully reflecting the owner-review gate.

- [ ] Run Creative Director Gate and Design Acceptance Gate line by line.
- [ ] Perform a fresh whole-change review and fix Critical/Important findings with RED→GREEN tests.
- [ ] Rerun fresh verification commands and read complete results.
- [ ] Update status/log and print the required `COOLSCULPTING_BUILD` block.
