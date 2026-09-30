export type BodyAreaId =
  | 'abdomen'
  | 'flanks'
  | 'upper-arms'
  | 'thighs'
  | 'lower-back'
  | 'chin'
  | 'banana-roll';

export type GoalId =
  | 'reduce-stubborn-fat'
  | 'smooth-silhouette'
  | 'feel-confident'
  | 'explore-options';

export type SituationId =
  | 'near-goal-weight'
  | 'still-losing-weight'
  | 'post-pregnancy'
  | 'tried-other-approaches';

export type TimingId =
  | 'as-soon-as-possible'
  | 'one-to-three-months'
  | 'three-to-six-months'
  | 'researching';

export interface AssessmentAnswers {
  areas: BodyAreaId[];
  goal: GoalId | '';
  situation: SituationId | '';
  timing: TimingId | '';
}

export interface ContactDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
}

export interface Attribution {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  landingUrl: string;
  capturedAt: string;
}

export interface LeadSubmission {
  source: 'coolsculpting-assessment';
  guidanceOnly: true;
  answers: AssessmentAnswers;
  contact: ContactDetails;
  attribution: Attribution;
  submittedAt: string;
}

export type ContactErrors = Partial<Record<keyof ContactDetails, string>>;
