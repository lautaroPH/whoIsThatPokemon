import { useState, useEffect } from 'react';
import { url } from '../url';
import useStatus from './useStatus';

const usePokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const { status, setLoading, setSuccess, setError, setPlaying } = useStatus();

  const offset = Math.floor(Math.random() * 898) + 1;
  const getPokemonUrl = `${url}/${offset}`;

  const getPokemon = () => {
    fetch(getPokemonUrl)
      .then((result) => result.json())
      .then((pokemon) => {
        setPokemon({
          image: pokemon?.sprites?.front_default,
          name: pokemon?.name,
        });
        setPlaying();
      });
  };

  useEffect(() => getPokemon(), []);

  const resetPokemon = () => {
    getPokemon();
  };

  return {
    pokemon,
    resetPokemon,
    status,
    setLoading,
    setSuccess,
    setError,
    setPlaying,
  };
};

export default usePokemon;
