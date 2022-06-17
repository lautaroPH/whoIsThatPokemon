import Title from './components/Title/Title';
import { useEffect } from 'react';
import usePokemon from './hooks/usePokemon';
import { gameStatus } from './gameStatus';
import GameError from './components/GameError/GameError';
import GameSuccess from './components/GameSuccess/GameSuccess';
import FormPokemon from './components/Form/FormPokemon';
import GiveAnotherPokemon from './components/Buttons/GiveAnotherPokemon';
import PokemonImage from './components/PokemonImage/PokemonImage';

function App() {
  const { pokemon, getPokemon, resetPokemon, setError, setSuccess, status } =
    usePokemon();

  useEffect(() => getPokemon(), []);

  return (
    <div>
      {status !== gameStatus.loading && (
        <>
          <Title />
          <PokemonImage image={pokemon?.image} status={status} />
          {status === gameStatus.error && (
            <GameError resetPokemon={resetPokemon} name={pokemon?.name} />
          )}
          {status === gameStatus.success && (
            <GameSuccess resetPokemon={resetPokemon} name={pokemon?.name} />
          )}
          <FormPokemon
            name={pokemon?.name}
            setSuccess={setSuccess}
            setError={setError}
          />
          <GiveAnotherPokemon resetPokemon={resetPokemon} />
        </>
      )}
    </div>
  );
}

export default App;
