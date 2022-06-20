import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { gameStatus } from '../../gameStatus';
import PokemonImage from './PokemonImage';

describe('PokemonImage', () => {
  const setup = (name, image, status) => {
    const { getByAltText } = render(
      <PokemonImage image={image} name={name} status={status} />,
    );
    const imgElement = getByAltText(name);

    return { imgElement, getByAltText };
  };

  test('Show the corrects props', () => {
    const { imgElement } = setup(
      'bulbasaur',
      'https://img.pokemondb.net/artwork/bulbasaur.jpg',
      gameStatus.playing,
    );

    expect(imgElement).toHaveAttribute(
      'src',
      'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    );
    expect(imgElement).toHaveStyle('filter: brightness(0)');
    expect(imgElement).toBeInTheDocument();
  });

  test('should see the image if status is equal to error', () => {
    const { imgElement } = setup(
      'bulbasaur',
      'https://img.pokemondb.net/artwork/bulbasaur.jpg',
      gameStatus.error,
    );

    expect(imgElement).toHaveStyle('filter: brightness(1)');
  });

  test('should see the image if status is equal to succcess', () => {
    const { imgElement } = setup(
      'bulbasaur',
      'https://img.pokemondb.net/artwork/bulbasaur.jpg',
      gameStatus.success,
    );

    expect(imgElement).toHaveStyle('filter: brightness(1)');
  });
});
