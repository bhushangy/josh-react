import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput from '../WordInput';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guessList, setGuessList] = React.useState([]);
  const [gameState, setGameState] = React.useState({
    isGameOver: false,
    gameWon: false,
  });

  function handleNewGuess(newGuess) {
    const result = checkGuess(newGuess, answer);

    const newGuessList = [...guessList, result];
    setGuessList(newGuessList);

    checkGameState(newGuessList.length, result);
  }

  function checkGameState(numOfGuesses, result) {
    if (numOfGuesses === NUM_OF_GUESSES_ALLOWED) {
      setGameState({
        isGameOver: true,
      });
    }

    if (chekResult(result)) {
      setGameState({
        isGameOver: true,
        gameWon: true,
      });
    }
  }

  function chekResult(result) {
    return result.every(({ status }) => status === 'correct');
  }

  function handleRestart() {
    setGuessList([]);
    setGameState({
      isGameOver: false,
      gameWon: false,
    });
    setAnswer(sample(WORDS));
  }

  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} word={guessList[index]} />
      ))}
      <WordInput
        handleNewGuess={handleNewGuess}
        isGameOver={gameState.isGameOver}
      />
      {gameState.isGameOver && (
        <Banner
          variant={gameState.gameWon ? 'happy' : 'sad'}
          numOfGuesses={guessList.length}
          onRestart={handleRestart}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
