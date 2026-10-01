import type { BodyAreaId, GoalId, SituationId, TimingId } from './types';

export interface BodyAreaOption {
  id: BodyAreaId;
  label: string;
  image: string;
  width: number;
  height: number;
}

export interface ChoiceOption<T extends string> {
  id: T;
  label: string;
  description: string;
}

export const bodyAreas: BodyAreaOption[] = [
  {
    id: 'abdomen',
    label: 'Abdomen',
    image: '/assets/assessment/abdomen.svg',
    width: 180,
    height: 120,
  },
  {
    id: 'flanks',
    label: 'Flanks / Love Handles',
    image: '/assets/assessment/flanks.svg',
    width: 180,
    height: 120,
  },
  {
    id: 'upper-arms',
    label: 'Upper Arms',
    image: '/assets/assessment/upper-arms.svg',
    width: 180,
    height: 120,
  },
  {
    id: 'thighs',
    label: 'Thighs',
    image: '/assets/assessment/thighs.svg',
    width: 180,
    height: 120,
  },
  {
    id: 'lower-back',
    label: 'Lower Back / Bra Area',
    image: '/assets/assessment/lower-back.svg',
    width: 180,
    height: 120,
  },
  {
    id: 'chin',
    label: 'Chin / Jawline',
    image: '/assets/assessment/chin.svg',
    width: 180,
    height: 120,
  },
  {
    id: 'banana-roll',
    label: 'Banana Roll / Under Buttocks',
    image: '/assets/assessment/banana-roll.svg',
    width: 180,
    height: 120,
  },
  {
    id: 'other' as BodyAreaId,
    label: 'Other',
    image: '/assets/assessment/other.svg',
    width: 180,
    height: 120,
  },
];

export const goals: ChoiceOption<GoalId>[] = [
  {
    id: 'reduce-stubborn-fat',
    label: 'Reduce stubborn fat',
    description: 'Focus on a specific pocket that has not responded to diet or exercise.',
  },
  {
    id: 'smooth-silhouette',
    label: 'Smooth my silhouette',
    description: 'Create a more balanced contour through clothing and swimwear.',
  },
  {
    id: 'feel-confident',
    label: 'Feel more confident',
    description: 'Address an area that changes how I feel in my body.',
  },
  {
    id: 'explore-options',
    label: 'Explore my options',
    description: 'Get professional guidance before choosing a treatment path.',
  },
];

export const situations: ChoiceOption<SituationId>[] = [
  {
    id: 'near-goal-weight',
    label: 'Close to my goal weight',
    description: 'My weight is fairly stable, but localized areas remain.',
  },
  {
    id: 'still-losing-weight',
    label: 'Still losing weight',
    description: 'I am actively working toward a target weight.',
  },
  {
    id: 'post-pregnancy',
    label: 'Post-pregnancy changes',
    description: 'My body composition has changed and I want guidance.',
  },
  {
    id: 'tried-other-approaches',
    label: 'Tried other approaches',
    description: 'Diet and movement have not shifted this particular area.',
  },
];

export const timings: ChoiceOption<TimingId>[] = [
  {
    id: 'as-soon-as-possible',
    label: 'As soon as possible',
    description: 'I am ready to discuss a plan now.',
  },
  {
    id: 'one-to-three-months',
    label: 'Within 1–3 months',
    description: 'I have a near-term goal or event in mind.',
  },
  {
    id: 'three-to-six-months',
    label: 'In 3–6 months',
    description: 'I am planning ahead and comparing options.',
  },
  {
    id: 'researching',
    label: 'Just researching',
    description: 'I want clear information without pressure.',
  },
];

export const areaLabel = (id: BodyAreaId) =>
  bodyAreas.find((area) => area.id === id)?.label ?? id;

export const goalLabel = (id: GoalId | '') => goals.find((option) => option.id === id)?.label ?? id;
export const situationLabel = (id: SituationId | '') =>
  situations.find((option) => option.id === id)?.label ?? id;
export const timingLabel = (id: TimingId | '') =>
  timings.find((option) => option.id === id)?.label ?? id;
