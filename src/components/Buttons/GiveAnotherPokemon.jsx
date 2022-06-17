import './styles.css';

const GiveAnotherPokemon = ({ resetPokemon }) => {
  return (
    <button onClick={resetPokemon} className="give-pokemon-button">
      Give me another pokemon!
    </button>
  );
};

export default GiveAnotherPokemon;
