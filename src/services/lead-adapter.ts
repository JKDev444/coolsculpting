import type { LeadSubmission } from '../features/assessment/types';

export interface LeadSubmissionResult {
  accepted: boolean;
  reference: string;
}

export interface LeadSubmissionAdapter {
  submit(submission: LeadSubmission): Promise<LeadSubmissionResult>;
}

export function createLocalLeadAdapter(): LeadSubmissionAdapter {
  return {
    async submit(submission) {
      if (!submission.guidanceOnly || !submission.contact.consent) {
        return { accepted: false, reference: 'local-preview-rejected' };
      }

      return { accepted: true, reference: 'local-preview' };
    },
  };
}
