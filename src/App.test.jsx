import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('Render App correctly', async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      name: 'bulbasaur',
      image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    }),
  );

  const { getByText, findByAltText } = render(<App />);

  expect(fetch).toHaveBeenCalledTimes(1);
  getByText('¿Who is that pokemon?');
  await findByAltText('bulbasaur');
});
