import { fireEvent, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import App from '../../App';
import GameSuccess from './GameSuccess';

describe('GameSucccess', () => {
  test('It should appear gameSuccess if you get right answer', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        name: 'bulbasaur',
        image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
      }),
    );

    const { getByText, findByText, findByPlaceholderText } = render(<App />);

    const button = await findByText('Go !');
    const input = await findByPlaceholderText('Pokemon name');
    fireEvent.change(input, { target: { value: 'bulbasaur' } });
    fireEvent.click(button);
    getByText('bulbasaur');
    getByText('✔');
  });

  test('Show the name correctly', async () => {
    const { getByText } = render(<GameSuccess name="bulbasaur" />);

    getByText('bulbasaur');
  });
});
