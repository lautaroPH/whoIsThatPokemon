import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Title from './components/Title/Title';

describe('Simple working test', () => {
  it('the title is visible', () => {
    const { getByText } = render(<Title />);
    expect(getByText('¿Who is that pokemon?')).toBeInTheDocument();
  });
});
