import React from 'react';
import { Pokemon } from '../components';
import pokemons from '../data';
import renderWithRouter from '../renderWithRouter';

describe('test Pokemon Component', () => {
  it('render a card with the pokemon informations', () => {
    const { getByTestId, getByAltText } = renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
    />);
    const name = getByTestId('pokemon-name');
    expect(name).toBeInTheDocument();
    const weight = getByTestId('pokemon-weight');
    expect(weight).toBeInTheDocument();
    expect(weight).toHaveTextContent(/Average weight: 6.0 kg/i);
    const image = getByAltText(/Pikachu sprite/i);
    expect(image).toHaveAttribute('src', 'https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
});
