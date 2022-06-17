import { gameStatus } from '../gameStatus';
import { useState } from 'react';

const useStatus = () => {
  const [status, setStatus] = useState(gameStatus.loading);

  const setLoading = () => {
    setStatus(gameStatus.loading);
  };
  const setSuccess = () => {
    setStatus(gameStatus.success);
  };
  const setError = () => {
    setStatus(gameStatus.error);
  };
  const setPlaying = () => {
    setStatus(gameStatus.playing);
  };

  return { status, setLoading, setSuccess, setError, setPlaying };
};

export default useStatus;
