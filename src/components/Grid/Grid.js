import React from 'react';
import Guess from '../Guess';

function Grid({ guesses }) {
  return (
    <div className="guess-results">
      { guesses.map((value, index) => (
          <Guess key={index} id={index} word={value} />
      ))}
    </div>
  );
}

export default Grid;
