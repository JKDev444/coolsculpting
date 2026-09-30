export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  source: 'Omni website' | 'Pending verified Google review';
  contentStatus: 'verified-first-party' | 'placeholder';
}

// Verified copy below is published on Omni Centers' own website. It is not
// represented as a Google review. Placeholder records intentionally contain
// no invented patient names, ratings, or outcomes and are ready to be swapped
// for an approved Google review feed later.
export const reviewItems: ReviewItem[] = [
  {
    id: 'omni-01',
    quote:
      'I have seen new hair growth and even had my regular Doctor notice the growth! Thank you Karen and Dr. Lauren',
    author: 'A Happy Omni Patient',
    source: 'Omni website',
    contentStatus: 'verified-first-party',
  },
  {
    id: 'omni-02',
    quote:
      'I have been seeing Karen for a year and a half and each appointment tops the last one! THE BEST IN THE INDUSTRY.',
    author: 'Jeanette L.',
    source: 'Omni website',
    contentStatus: 'verified-first-party',
  },
  {
    id: 'omni-03',
    quote:
      'Karen is truly a miracle worker and by her incorporating an algae face mask into my facial…best move ever!',
    author: 'A Happy Omni Patient',
    source: 'Omni website',
    contentStatus: 'verified-first-party',
  },
  {
    id: 'omni-04',
    quote: 'All of my facials with Karen leave my skin feeling smoother, softer, and with more glow.',
    author: 'A Happy Omni Patient',
    source: 'Omni website',
    contentStatus: 'verified-first-party',
  },
  ...Array.from({ length: 8 }, (_, index) => ({
    id: `placeholder-${String(index + 1).padStart(2, '0')}`,
    quote: 'Verified Google review content will appear here after owner approval.',
    author: 'Content placeholder',
    source: 'Pending verified Google review' as const,
    contentStatus: 'placeholder' as const,
  })),
];

export const reviewRows = [
  reviewItems.slice(0, 4).concat(reviewItems.slice(8, 12)),
  reviewItems.slice(4, 8).concat(reviewItems.slice(0, 4)),
  reviewItems.slice(8, 12).concat(reviewItems.slice(4, 8)),
];
