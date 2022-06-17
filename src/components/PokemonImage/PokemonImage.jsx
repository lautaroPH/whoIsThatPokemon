import { gameStatus } from '../../gameStatus';
import './styles.css';

const PokemonImage = ({ image, status }) => {
  return (
    <div className="image-container">
      {image && (
        <img
          src={image}
          alt="pokemon"
          className={`${
            status === gameStatus.error || status === gameStatus.success
              ? 'show-pokemon'
              : 'no-show-pokemon'
          } pokemon-image`}
        />
      )}
    </div>
  );
};

export default PokemonImage;
