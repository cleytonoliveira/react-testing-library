import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('tests for Favorite Pokemons component', () => {
  it('render a message `No favorite pokemon found` without a favorite pokemons', () => {
    const { getByText } = render(<FavoritePokemons />);
    const favorite = getByText(/No favorite pokemon found/i);
    expect(favorite).toBeInTheDocument();
  });

  it('render all favorites pokemons', () => {
    const { getByText, getByRole, history } = renderWithRouter(<App />);
    history.push('/pokemons/25');
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
    history.push('/pokemons/4');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
    history.push('/favorites');
    const pikachu = getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
    const charmander = getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();
  });
});
