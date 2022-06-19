import { gameStatus } from '../../gameStatus';
import './styles.css';

const PokemonImage = ({ image, status, name }) => {
  return (
    <div className="image-container">
      <img
        src={image}
        alt={name}
        className="pokemon-image"
        style={{
          imageRendering: 'pixelated',
          transition: 'filter 0.2s',
          filter: `brightness(${
            status === gameStatus.error || status === gameStatus.success ? 1 : 0
          })`,
        }}
      />
    </div>
  );
};

export default PokemonImage;
