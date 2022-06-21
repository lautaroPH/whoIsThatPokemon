import { fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import GiveAnotherPokemon from './GiveAnotherPokemon';
import PlayAgain from './PlayAgain';

describe('Buttons', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should call resetPokemon in giveAnotherPokemon', () => {
    const mockHandler = vi.fn();

    const { getByText } = render(
      <GiveAnotherPokemon resetPokemon={mockHandler} />,
    );

    const button = getByText('Give me another pokemon!');
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test('should call resetPokemon in PlayAgain', () => {
    const mockHandler = vi.fn();

    const { getByText } = render(<PlayAgain resetPokemon={mockHandler} />);

    const button = getByText('Play again');
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
