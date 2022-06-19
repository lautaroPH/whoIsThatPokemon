import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { gameStatus } from '../../gameStatus';
import PokemonImage from './PokemonImage';

describe('PokemonImage', () => {
  test('Show the corrects props', () => {
    const { getByAltText } = render(
      <PokemonImage
        image="https://img.pokemondb.net/artwork/bulbasaur.jpg"
        name="bulbasaur"
        status={gameStatus.playing}
      />,
    );

    const image = getByAltText('bulbasaur');
    expect(image).toHaveAttribute(
      'src',
      'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    );
    expect(getByAltText('bulbasaur')).toHaveStyle('filter: brightness(0)');
  });

  test('should see the image if status is equal to error', () => {
    const { getByAltText } = render(
      <PokemonImage
        image="https://img.pokemondb.net/artwork/bulbasaur.jpg"
        name="bulbasaur"
        status={gameStatus.error}
      />,
    );

    expect(getByAltText('bulbasaur')).toHaveStyle('filter: brightness(1)');
  });

  test('should see the image if status is equal to succcess', () => {
    const { getByAltText } = render(
      <PokemonImage
        image="https://img.pokemondb.net/artwork/bulbasaur.jpg"
        name="bulbasaur"
        status={gameStatus.success}
      />,
    );

    expect(getByAltText('bulbasaur')).toHaveStyle('filter: brightness(1)');
  });
});
