import { act, renderHook } from '@testing-library/react';
import { describe, test } from 'vitest';
import { gameStatus } from '../gameStatus';
import useStatus from './useStatus';

describe('useStatus', () => {
  test('should status to be loading at first', () => {
    const { result } = renderHook(() => useStatus());

    expect(result.current.status).toBe(gameStatus.loading);
  });

  test('should change status to error', () => {
    const { result } = renderHook(() => useStatus());
    act(() => {
      result.current.setError();
    });

    expect(result.current.status).toBe(gameStatus.error);
  });

  test('should change status to loading', () => {
    const { result } = renderHook(() => useStatus());
    act(() => {
      result.current.setLoading();
    });

    expect(result.current.status).toBe(gameStatus.loading);
  });

  test('should change status to success', () => {
    const { result } = renderHook(() => useStatus());
    act(() => {
      result.current.setSuccess();
    });

    expect(result.current.status).toBe(gameStatus.success);
  });

  test('should change status to playing', () => {
    const { result } = renderHook(() => useStatus());
    act(() => {
      result.current.setPlaying();
    });

    expect(result.current.status).toBe(gameStatus.playing);
  });
});
