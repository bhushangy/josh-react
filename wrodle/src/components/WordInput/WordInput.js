import React from 'react';

const inputPattern = /^[A-Z]{0,5}$/; // Only allow up to 5 uppercase letters.

function WordInput({ handleNewGuess, isGameOver }) {
  const [word, setWord] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (word.length < 5) return;
    setWord('');
    handleNewGuess(word);
  }

  function handleInputChange(e) {
    const value = e.target.value.toUpperCase();
    if (!inputPattern.test(value)) return;

    setWord(value);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={word}
        onChange={handleInputChange}
        disabled={isGameOver}
      />
    </form>
  );
}

export default WordInput;
