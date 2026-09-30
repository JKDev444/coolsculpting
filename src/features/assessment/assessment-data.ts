import type { BodyAreaId, GoalId, SituationId, TimingId } from './types';

export interface BodyAreaOption {
  id: BodyAreaId;
  label: string;
  image?: string;
  imageAlt: string;
  zoneClass: string;
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
    image: '/assets/images/abdomen-detail.jpg',
    imageAlt: 'Cropped abdomen treatment area',
    zoneClass: 'zone-abdomen',
    width: 320,
    height: 320,
  },
  {
    id: 'flanks',
    label: 'Flanks / Love Handles',
    image: '/assets/images/hero-body.jpg',
    imageAlt: 'Cropped flank treatment area',
    zoneClass: 'zone-flanks',
    width: 1858,
    height: 612,
  },
  {
    id: 'upper-arms',
    label: 'Upper Arms',
    image: '/assets/images/result-05.jpg',
    imageAlt: 'Cropped upper arm treatment area',
    zoneClass: 'zone-arms',
    width: 858,
    height: 377,
  },
  {
    id: 'thighs',
    label: 'Thighs',
    image: '/assets/images/result-08.jpg',
    imageAlt: 'Cropped thigh treatment area',
    zoneClass: 'zone-thighs',
    width: 858,
    height: 390,
  },
  {
    id: 'lower-back',
    label: 'Lower Back / Bra Area',
    imageAlt: 'Treatment-area visual placeholder',
    zoneClass: 'zone-lower-back',
    width: 320,
    height: 320,
  },
  {
    id: 'chin',
    label: 'Chin / Jawline',
    image: '/assets/images/result-09.jpg',
    imageAlt: 'Cropped chin and jawline treatment area',
    zoneClass: 'zone-chin',
    width: 858,
    height: 378,
  },
  {
    id: 'banana-roll',
    label: 'Banana Roll / Under Buttocks',
    image: '/assets/images/result-07.jpg',
    imageAlt: 'Cropped lower body treatment area',
    zoneClass: 'zone-banana',
    width: 857,
    height: 297,
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
