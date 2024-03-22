import React from 'react';
import Guess from '../Guess';

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      { guesses.map((value, index) => (
          <Guess key={index} id={index} word={value} />
      ))}
    </div>
  );
}

export default GuessList;
