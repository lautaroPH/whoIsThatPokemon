import './styles.css';

const PlayAgain = ({ resetPokemon }) => {
  return (
    <button onClick={resetPokemon} className="button-play-again">
      Play again
    </button>
  );
};

export default PlayAgain;
