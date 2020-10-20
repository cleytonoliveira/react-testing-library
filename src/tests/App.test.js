import { getByText } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Tests for App component', () => {
  it('renders the home page with the path `/`', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const heading = getByText(/Pokédex/i);
    expect(heading).toBeInTheDocument();
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('renders links navigation on top', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Home/i);
    expect(home).toBeInTheDocument();
    const about = getByText(/About/i);
    expect(about).toBeInTheDocument();
    const favorites = getByText(/Favorite Pokémons/i);
    expect(favorites).toBeInTheDocument();
  });
});
