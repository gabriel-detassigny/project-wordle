import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ word = '', id, answer}) {
  const letters = checkGuess(word, answer);
  const cells = range(5);
  return (
    <p className="guess">
      { !!letters
        ? letters.map( ({ letter, status }, index) => <span key={index} className={`cell ${status}`}>{letter}</span> )
        : cells.map( (cell) => <span className="cell" key={cell} /> )
      }
    </p>
  );
}

export default Guess;
