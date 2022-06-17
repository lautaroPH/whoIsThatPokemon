import PlayAgain from '../Buttons/PlayAgain';
import './styles.css';

const GameError = ({ resetPokemon, name }) => {
  return (
    <div>
      <h4 className="try-again">Try again !!!</h4>
      <p className="name-pokemon-wrong-p">
        The pokemon was: <br />{' '}
        <span className="name-wrong-pokemon">{name}</span>
      </p>
      <PlayAgain resetPokemon={resetPokemon} />
    </div>
  );
};

export default GameError;
