import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import { Pokedex } from '../components';

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

  it('button to reset the filter', () => {
    const { getByRole, getByText } = renderWithRouter(<App />);
    const button = getByRole('button', { name: 'All' });
    const btnNext = getByRole('button', { name: 'Próximo pokémon' });
    fireEvent.click(btnNext);
    const charmander = getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();
    fireEvent.click(button);
    const pikachu = getByText(/Pikachu/i);
    expect(button).toBeEnabled();
    expect(pikachu).toBeInTheDocument();
    fireEvent.click(btnNext);
    expect(charmander).toBeInTheDocument();
  });
});
