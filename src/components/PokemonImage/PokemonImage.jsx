import { gameStatus } from '../../gameStatus';
import './styles.css';

const PokemonImage = ({ image, status }) => {
  return (
    <div className="image-container">
      {image && (
        <img
          src={image}
          alt="pokemon"
          className="pokemon-image"
          style={{
            imageRendering: 'pixelated',
            transition: 'filter 0.2s',
            filter: `brightness(${
              status === gameStatus.error || status === gameStatus.success
                ? 1
                : 0
            })`,
          }}
        />
      )}
    </div>
  );
};

export default PokemonImage;
