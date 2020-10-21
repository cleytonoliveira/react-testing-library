import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const pokemonList = [
  'Cartepie', 'Ekans', 'Alakazam', 'Mew', 'Rapidash', 'Snorlax', 'Dragonair'];

describe('test Pokedex component', () => {
  it('render a next pokemon when click in `Próximo pokémon`', () => {
    const { getByText, getByRole } = renderWithRouter(<App />);
    const button = getByRole('button', { name: 'Próximo pokémon' });
    expect(button).toBeInTheDocument();
    const pikachu = getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
    fireEvent.click(button);
    const charmander = getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();
    pokemonList.forEach(() => fireEvent.click(button));
    const dragonair = getByText(/Dragonair/i);
    expect(dragonair).toBeInTheDocument();
    fireEvent.click(button);
    expect(pikachu).toBeInTheDocument();
  });

  it('option to filter by type', () => {
    const { getByRole } = renderWithRouter(<App />);
    const eletric = getByRole('button', { name: 'Electric' });
    fireEvent.click(eletric);
    expect(eletric).toBeEnabled();
  });
});
