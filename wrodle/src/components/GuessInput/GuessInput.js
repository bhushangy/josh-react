import React from 'react';

const inputPattern = /^[A-Z]{0,5}$/; // Only allow up to 5 uppercase letters.

function GuessInput({ handleNewGuess, gameState }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) return; // We need this because, the input accepts less than 5 characters also, which is wierd and seems like a bug on HTML side.
    setGuess('');
    handleNewGuess(guess);
  }

  function handleInputChange(e) {
    const nextGuess = e.target.value.toUpperCase();
    if (!inputPattern.test(nextGuess)) return;

    setGuess(nextGuess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleInputChange}
        disabled={gameState !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
