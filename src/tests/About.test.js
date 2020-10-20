import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';

describe('tests About component', () => {
  it('page has a information about the pokédex', () => {
    const { getByText } = render(<About />);
    const about = getByText(/This application simulates a Pokédex/i);
    expect(about).toBeInTheDocument();
  });

  it('page has a heading h2 with text `About Pokédex`', () => {
    const { getByText, getByRole } = render(<About />);
    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeInTheDocument();
    const heading = getByText(/About Pokédex/i);
    expect(heading).toBeInTheDocument();
  });
});
