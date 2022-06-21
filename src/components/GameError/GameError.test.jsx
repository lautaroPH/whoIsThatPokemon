import { fireEvent, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import App from '../../App';
import GameError from './GameError';

describe('GameError', () => {
  test('It should appear gameError if you get wrong answer', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        name: 'bulbasaur',
        image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
      }),
    );

    const { getByText, findByText, findByPlaceholderText } = render(<App />);

    const button = await findByText('Go !');
    const input = await findByPlaceholderText('Pokemon name');
    fireEvent.change(input, { target: { value: 'charizard' } });
    fireEvent.click(button);
    getByText('Try again !!!');
    getByText('The pokemon was:');
    getByText('bulbasaur');
    getByText('Play again');
  });

  test('Show text correctly', async () => {
    const { getByText } = render(<GameError name="bulbasaur" />);

    getByText('Try again !!!');
    getByText('bulbasaur');
    getByText('Play again');
  });
});
