import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReviewMarquee } from './ReviewMarquee';

describe('ReviewMarquee', () => {
  it('does not present an unverified star rating for first-party stories', () => {
    render(<ReviewMarquee />);

    expect(screen.queryByText('★★★★★')).not.toBeInTheDocument();
    expect(screen.getAllByText('Omni website').length).toBeGreaterThan(0);
  });
});
