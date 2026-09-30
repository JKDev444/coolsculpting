import type {
  AssessmentAnswers,
  Attribution,
  BodyAreaId,
  ContactDetails,
  ContactErrors,
  LeadSubmission,
} from './types';

export function toggleBodyArea(selected: BodyAreaId[], area: BodyAreaId) {
  if (selected.includes(area)) {
    return {
      selected: selected.filter((item) => item !== area),
      limitReached: false,
    };
  }

  if (selected.length >= 3) {
    return { selected, limitReached: true };
  }

  return { selected: [...selected, area], limitReached: false };
}

export function validateContact(contact: ContactDetails): ContactErrors {
  const errors: ContactErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneDigits = contact.phone.replace(/\D/g, '');

  if (!contact.firstName.trim()) errors.firstName = 'Enter your first name.';
  if (!contact.lastName.trim()) errors.lastName = 'Enter your last name.';
  if (!emailPattern.test(contact.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (phoneDigits.length !== 10) {
    errors.phone = 'Enter a 10-digit phone number.';
  }
  if (!contact.consent) {
    errors.consent = 'Confirm that Omni may contact you about this assessment.';
  }

  return errors;
}

export function buildLeadSubmission(input: {
  answers: AssessmentAnswers;
  contact: ContactDetails;
  attribution: Attribution;
  submittedAt: string;
}): LeadSubmission {
  return {
    source: 'coolsculpting-assessment',
    guidanceOnly: true,
    answers: {
      ...input.answers,
      areas: [...input.answers.areas],
    },
    contact: {
      firstName: input.contact.firstName.trim(),
      lastName: input.contact.lastName.trim(),
      email: input.contact.email.trim().toLowerCase(),
      phone: input.contact.phone.replace(/\D/g, ''),
      consent: input.contact.consent,
    },
    attribution: { ...input.attribution },
    submittedAt: input.submittedAt,
  };
}
