import React from 'react';
import { render } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';

describe('tests for Favorite Pokemons component', () => {
  it('render a message `No favorite pokemon found` without a favorite pokemons', () => {
    const { getByText } = render(<FavoritePokemons />);
    const favorite = getByText(/No favorite pokemon found/i);
    expect(favorite).toBeInTheDocument();
  });
});
