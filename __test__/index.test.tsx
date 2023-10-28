/**
 * @jest-environment jsdom
 */
import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('button', {
      name: /This is my First Button/i
    });

    expect(heading).toBeInTheDocument();
  });
});
