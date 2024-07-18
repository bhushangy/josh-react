import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner';
import GuessResult from '../GuessResult';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('running'); // Use enums like this instead of an object with boolean values tracking game state.

  function handleNewGuess(newGuess) {
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);

    if (newGuess === answer) {
      setGameState('won');
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
    }
  }

  function handleRestart() {
    setGuesses([]);
    setGameState('running');
    setAnswer(sample(WORDS)); // This is wrong. If you set like this, its difficult to understand, why we are setting the answer again.
    // Instead do this
    // const newAnswer = sample(WORDS);
    // setAnswer(newAnswer);
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResult validatedGuesses={validatedGuesses} />
      <GuessInput handleNewGuess={handleNewGuess} gameState={gameState} />
      {gameState === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameState === 'lost' && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
