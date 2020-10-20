import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';

describe('tests About component', () => {
  it('page has a information about the pokédex', () => {
    const { getByText } = render(<About />);
    const about = getByText(/This application simulates a Pokédex/i);
    expect(about).toBeInTheDocument();
  });
});
