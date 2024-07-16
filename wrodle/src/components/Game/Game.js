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
  const [guessList, setGuessList] = React.useState([]);
  const [gameState, setGameState] = React.useState('running'); // Use enums like this instead of an object with boolean values tracking game state.

  function handleNewGuess(newGuess) {
    const newGuessList = [...guessList, newGuess];
    setGuessList(newGuessList);

    if (newGuess === answer) {
      setGameState('won');
    } else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
    }
  }

  function handleRestart() {
    setGuessList([]);
    setGameState('running');
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessResult guessList={guessList} answer={answer} />
      <GuessInput handleNewGuess={handleNewGuess} gameState={gameState} />
      {gameState === 'won' && (
        <WonBanner
          numOfGuesses={guessList.length}
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
