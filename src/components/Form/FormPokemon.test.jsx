import { fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { gameStatus } from '../../gameStatus';
import FormPokemon from './FormPokemon';

describe('FormPokemon', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const setup = (status = gameStatus.playing) => {
    const mockHandlerError = vi.fn();
    const mockHandlerSuccess = vi.fn();

    const { getByPlaceholderText, getByText, getByLabelText } = render(
      <FormPokemon
        name="bulbasaur"
        setError={mockHandlerError}
        setSuccess={mockHandlerSuccess}
        status={status}
      />,
    );
    const input = getByPlaceholderText('Pokemon name');
    const form = getByLabelText('form');
    const button = getByText('Go !');

    return {
      input,
      getByText,
      mockHandlerSuccess,
      mockHandlerError,
      form,
      button,
    };
  };

  test('should render form', () => {
    const { input, getByText } = setup();

    expect(input).toBeInTheDocument();
    getByText('Go !');
  });

  test('It should not press the button if status !== playing', () => {
    const { button } = setup(gameStatus.error);

    expect(button).toBeDisabled();
  });

  test('It should press the button if status === playing', () => {
    const { button } = setup(gameStatus.playing);

    expect(button).not.toBeDisabled();
  });

  test('It should change the value', () => {
    const { input } = setup();

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'charizar' } });
    expect(input.value).toBe('charizar');
  });

  test('It should restart the value submt and call mockhandlerError', () => {
    const { input, form, mockHandlerError } = setup();

    fireEvent.change(input, { target: { value: 'charizar' } });
    fireEvent.submit(form);
    expect(mockHandlerError).toHaveBeenCalled(1);
    expect(input.value).toBe('');
  });

  test('It should restart the value submt and call mockhandlerSucess', () => {
    const { input, form, mockHandlerSuccess } = setup();

    fireEvent.change(input, { target: { value: 'bulbasaur' } });
    fireEvent.submit(form);
    expect(mockHandlerSuccess).toHaveBeenCalled(1);
    expect(input.value).toBe('');
  });
});
