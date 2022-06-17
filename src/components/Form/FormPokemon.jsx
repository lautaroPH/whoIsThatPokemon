import { useState } from 'react';
import './styles.css';

const FormPokemon = ({ name, setSuccess, setError }) => {
  const [pokemonNameInput, setPokemonNameInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    pokemonNameInput.toLowerCase() === name.toLowerCase()
      ? setSuccess()
      : setError();

    setPokemonNameInput('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="div-input-button-container">
        <input
          className="input-pokemon-name"
          type="text"
          placeholder="Pokemon name"
          onChange={(e) => setPokemonNameInput(e.target.value)}
          value={pokemonNameInput}
        />
        <button className="input-button" type="submit">
          Go !
        </button>
      </div>
    </form>
  );
};

export default FormPokemon;
