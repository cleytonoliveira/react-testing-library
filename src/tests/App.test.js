import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Test for App component', () => {
  it('renders the home page with the path `/`', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  })
});
