import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Assessment } from './Assessment';

async function reachContactStep(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('button', { name: /abdomen/i }));
  await user.click(screen.getByRole('button', { name: /^continue$/i }));
  await user.click(screen.getByRole('radio', { name: /reduce stubborn fat/i }));
  await user.click(screen.getByRole('button', { name: /^continue$/i }));
  await user.click(screen.getByRole('radio', { name: /close to my goal weight/i }));
  await user.click(screen.getByRole('button', { name: /^continue$/i }));
  await user.click(screen.getByRole('radio', { name: /within 1–3 months/i }));
  await user.click(screen.getByRole('button', { name: /^continue$/i }));
}

describe('Assessment', () => {
  it('selects up to three areas and explains why a fourth is not added', async () => {
    const user = userEvent.setup();
    render(<Assessment />);

    const abdomen = screen.getByRole('button', { name: /abdomen/i });
    const flanks = screen.getByRole('button', { name: /flanks/i });
    const arms = screen.getByRole('button', { name: /upper arms/i });
    const thighs = screen.getByRole('button', { name: /^thighs/i });

    await user.click(abdomen);
    await user.click(flanks);
    await user.click(arms);
    await user.click(thighs);

    expect(abdomen).toHaveAttribute('aria-pressed', 'true');
    expect(flanks).toHaveAttribute('aria-pressed', 'true');
    expect(arms).toHaveAttribute('aria-pressed', 'true');
    expect(thighs).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByRole('status')).toHaveTextContent('Choose up to three areas');
  });

  it('retains selected areas when moving forward and back', async () => {
    const user = userEvent.setup();
    render(<Assessment />);

    await user.click(screen.getByRole('button', { name: /abdomen/i }));
    await user.click(screen.getByRole('button', { name: /^continue$/i }));
    expect(screen.getByText('What would you most like this to do for you?')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /back/i }));

    expect(screen.getByRole('button', { name: /abdomen/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('shows associated contact errors and focuses the first invalid field', async () => {
    const user = userEvent.setup();
    render(<Assessment />);
    await reachContactStep(user);

    await user.click(screen.getByRole('button', { name: /see my guidance/i }));

    const firstName = screen.getByLabelText('First name');
    expect(firstName).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Enter your first name.')).toBeInTheDocument();
    await waitFor(() => expect(firstName).toHaveFocus());

    await user.type(firstName, 'Alex');
    expect(firstName).toHaveValue('Alex');
    expect(firstName).toHaveFocus();
  });

  it('submits the local preview and frames the result as possible candidacy', async () => {
    const user = userEvent.setup();
    render(<Assessment />);
    await reachContactStep(user);

    await user.type(screen.getByLabelText('First name'), 'Avery');
    await user.type(screen.getByLabelText('Last name'), 'Cole');
    await user.type(screen.getByLabelText('Email'), 'avery@example.com');
    await user.type(screen.getByLabelText('Phone'), '3605550199');
    await user.click(screen.getByRole('checkbox', { name: /contact me about this assessment/i }));
    await user.click(screen.getByRole('button', { name: /see my guidance/i }));

    expect(
      await screen.findByRole('heading', { name: /you may be a candidate/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/consultation confirms candidacy/i)).toBeInTheDocument();
    expect(screen.queryByText(/medically cleared/i)).not.toBeInTheDocument();
  });
});
