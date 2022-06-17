import PlayAgain from '../Buttons/PlayAgain';
import './styles.css';

const GameSuccess = ({ resetPokemon, name }) => {
  return (
    <div>
      <p className="name-correct-pokemon">
        {name} <span className="name-correct-pokemon-tick">✔</span>
      </p>
      <PlayAgain resetPokemon={resetPokemon} />
    </div>
  );
};

export default GameSuccess;
