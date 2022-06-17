import { useState } from 'react';
import { url } from '../url';
import useStatus from './useStatus';

const usePokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const { status, setLoading, setSuccess, setError, setPlaying } = useStatus();

  const getPokemon = () => {
    const offset = Math.floor(Math.random() * 898) + 1;
    const getPokemonUrl = `${url}/${offset}`;

    fetch(getPokemonUrl)
      .then((result) => result.json())
      .then((pokemon) => {
        setPokemon({
          image: pokemon.sprites.front_default,
          name: pokemon?.name,
        });
        setPlaying();
      });
  };

  const resetPokemon = () => {
    getPokemon();
  };

  return {
    pokemon,
    getPokemon,
    resetPokemon,
    status,
    setLoading,
    setSuccess,
    setError,
    setPlaying,
  };
};

export default usePokemon;
