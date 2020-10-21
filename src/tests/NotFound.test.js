import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('tests of NotFound component', () => {
  it('render a heading `h2` with de text `Page requested not found`', () => {
    const { getByRole, getByText } = render(<NotFound />);
    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeInTheDocument();
    const text = getByText(/Page requested not found/i);
    expect(text).toBeInTheDocument();
  });
});
