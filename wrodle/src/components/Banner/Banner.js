import React from 'react';

function Banner({ variant, numOfGuesses, onRestart, answer }) {
  return (
    <div className={`${variant} banner`}>
      {variant === 'happy' ? (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}

      <button onClick={onRestart} className="resetButton">
        Play again
      </button>
    </div>
  );
}

export default Banner;
