import Title from './components/Title/Title';
import usePokemon from './hooks/usePokemon';
import { gameStatus } from './gameStatus';
import GameError from './components/GameError/GameError';
import GameSuccess from './components/GameSuccess/GameSuccess';
import FormPokemon from './components/Form/FormPokemon';
import GiveAnotherPokemon from './components/Buttons/GiveAnotherPokemon';
import PokemonImage from './components/PokemonImage/PokemonImage';

function App() {
  const { pokemon, resetPokemon, setError, setSuccess, status } = usePokemon();

  return (
    <div>
      <Title />
      {status !== gameStatus.loading && (
        <>
          <PokemonImage
            image={pokemon?.image}
            status={status}
            name={pokemon?.name}
          />
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
            status={status}
          />
          <GiveAnotherPokemon resetPokemon={resetPokemon} />
        </>
      )}
    </div>
  );
}

export default App;
