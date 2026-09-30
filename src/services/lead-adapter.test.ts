import { describe, expect, it } from 'vitest';
import { createLocalLeadAdapter } from './lead-adapter';
import type { LeadSubmission } from '../features/assessment/types';

const submission: LeadSubmission = {
  source: 'coolsculpting-assessment',
  guidanceOnly: true,
  answers: {
    areas: ['abdomen'],
    goal: 'reduce-stubborn-fat',
    situation: 'near-goal-weight',
    timing: 'one-to-three-months',
  },
  contact: {
    firstName: 'Avery',
    lastName: 'Cole',
    email: 'avery@example.com',
    phone: '3605550199',
    consent: true,
  },
  attribution: {
    landingUrl: 'https://example.test/',
    capturedAt: '2026-09-30T19:00:00.000Z',
  },
  submittedAt: '2026-09-30T19:05:00.000Z',
};

describe('createLocalLeadAdapter', () => {
  it('accepts a valid local submission without making an external request', async () => {
    const adapter = createLocalLeadAdapter();

    await expect(adapter.submit(submission)).resolves.toEqual({
      accepted: true,
      reference: 'local-preview',
    });
  });
});
