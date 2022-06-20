import { useState } from 'react';
import { gameStatus } from '../../gameStatus';
import './styles.css';

const FormPokemon = ({ name, setSuccess, setError, status }) => {
  const [pokemonNameInput, setPokemonNameInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    pokemonNameInput.toLowerCase().trim() === name.toLowerCase()
      ? setSuccess()
      : setError();

    setPokemonNameInput('');
  };

  return (
    <form className="form-container" aria-label="form" onSubmit={handleSubmit}>
      <div className="div-input-button-container">
        <input
          className="input-pokemon-name"
          type="text"
          placeholder="Pokemon name"
          onChange={(e) => setPokemonNameInput(e.target.value)}
          value={pokemonNameInput}
        />
        <button
          disabled={status !== gameStatus.playing}
          className="input-button"
          type="submit"
        >
          Go !
        </button>
      </div>
    </form>
  );
};

export default FormPokemon;
