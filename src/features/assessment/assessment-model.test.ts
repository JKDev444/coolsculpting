import { describe, expect, it } from 'vitest';
import {
  buildLeadSubmission,
  toggleBodyArea,
  validateContact,
} from './assessment-model';
import type { AssessmentAnswers, ContactDetails } from './types';

describe('toggleBodyArea', () => {
  it('preserves the first three selections when a fourth area is requested', () => {
    const current = ['abdomen', 'flanks', 'upper-arms'] as const;

    expect(toggleBodyArea([...current], 'thighs')).toEqual({
      selected: [...current],
      limitReached: true,
    });
  });

  it('removes an already selected area', () => {
    expect(toggleBodyArea(['abdomen', 'flanks'], 'abdomen')).toEqual({
      selected: ['flanks'],
      limitReached: false,
    });
  });
});

describe('validateContact', () => {
  it('returns field-specific guidance for empty and malformed values', () => {
    const contact: ContactDetails = {
      firstName: '',
      lastName: ' ',
      email: 'not-an-email',
      phone: '123',
      consent: false,
    };

    expect(validateContact(contact)).toEqual({
      firstName: 'Enter your first name.',
      lastName: 'Enter your last name.',
      email: 'Enter a valid email address.',
      phone: 'Enter a 10-digit phone number.',
      consent: 'Confirm that Omni may contact you about this assessment.',
    });
  });

  it('accepts a complete contact record', () => {
    expect(
      validateContact({
        firstName: 'Avery',
        lastName: 'Cole',
        email: 'avery@example.com',
        phone: '(360) 555-0199',
        consent: true,
      }),
    ).toEqual({});
  });
});

describe('buildLeadSubmission', () => {
  it('builds the future API contract without claiming medical clearance', () => {
    const answers: AssessmentAnswers = {
      areas: ['abdomen', 'flanks'],
      goal: 'reduce-stubborn-fat',
      situation: 'near-goal-weight',
      timing: 'one-to-three-months',
    };
    const contact: ContactDetails = {
      firstName: ' Avery ',
      lastName: ' Cole ',
      email: ' AVERY@EXAMPLE.COM ',
      phone: '(360) 555-0199',
      consent: true,
    };

    expect(
      buildLeadSubmission({
        answers,
        contact,
        attribution: {
          utmSource: 'google',
          gclid: 'click-123',
          landingUrl: 'https://example.test/?utm_source=google',
          capturedAt: '2026-09-30T19:00:00.000Z',
        },
        submittedAt: '2026-09-30T19:05:00.000Z',
      }),
    ).toEqual({
      source: 'coolsculpting-assessment',
      guidanceOnly: true,
      answers,
      contact: {
        firstName: 'Avery',
        lastName: 'Cole',
        email: 'avery@example.com',
        phone: '3605550199',
        consent: true,
      },
      attribution: {
        utmSource: 'google',
        gclid: 'click-123',
        landingUrl: 'https://example.test/?utm_source=google',
        capturedAt: '2026-09-30T19:00:00.000Z',
      },
      submittedAt: '2026-09-30T19:05:00.000Z',
    });
  });
});
