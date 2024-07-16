import React from 'react';
import Banner from '../Banner';

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner variant="sad" action={handleRestart} actionText="Play again">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
