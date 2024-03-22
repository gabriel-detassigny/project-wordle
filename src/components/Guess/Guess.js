import React from 'react';
import { range } from '../../utils';

function Guess({ word = '', id}) {
  const cells = range(5);
  return (
    <p className="guess">
      { cells.map((cell) => (
        <span className="cell" key={`${id}-${cell}`}>
          {word.charAt(cell)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
