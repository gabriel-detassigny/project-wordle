import React from 'react';
import Guess from '../Guess';

function Grid({ guesses, answer }) {
  return (
    <div className="guess-results">
      { guesses.map((value, index) => (
          <Guess key={index} id={index} word={value} answer={answer} />
      ))}
    </div>
  );
}

export default Grid;
