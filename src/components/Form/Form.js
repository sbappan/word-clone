import React, { useState } from "react";

function Form({updateGuessList, gameStatus}) {
  const [guess, setGuess] = useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
      console.log({guess});
      updateGuessList(guess);
      setGuess('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guess}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={event => {
          setGuess(event.target.value?.toUpperCase());
        }}
        disabled={Boolean(gameStatus)}
      />
    </form>
  );
}

export default Form;
