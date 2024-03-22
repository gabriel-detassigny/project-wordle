import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(Array(NUM_OF_GUESSES_ALLOWED).fill(''));
  const [numGuessed, setNumGuessed] = React.useState(0);

  function addGuessHandler(guessInput) {
    if ( numGuessed >= NUM_OF_GUESSES_ALLOWED ) {
      return;
    }

    const nextGuesses = [...guesses];
    nextGuesses[numGuessed] = guessInput;
    setNumGuessed(numGuessed + 1);
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput addGuessHandler={addGuessHandler} />
    </>
  );
}

export default Game;
