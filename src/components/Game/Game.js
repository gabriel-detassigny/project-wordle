import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Grid from '../Grid';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(Array(NUM_OF_GUESSES_ALLOWED).fill(''));
  const [numGuessed, setNumGuessed] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState('');

  function addGuessHandler(guessInput) {
    if (gameStatus) {
      return;
    }

    const nextGuesses = [...guesses];
    nextGuesses[numGuessed] = guessInput;
    setNumGuessed(numGuessed + 1);
    setGuesses(nextGuesses);

    if (guessInput === answer) {
      setGameStatus('won');
    } else if (numGuessed + 1 === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <Grid guesses={guesses} answer={answer} />
      <GuessInput addGuessHandler={addGuessHandler} disabled={!!gameStatus} />
      { gameStatus === 'won' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{numGuessed} guess{numGuessed > 1 && 'es'}</strong>.
          </p>
        </div>
      ) }
      { gameStatus === 'lost' && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      ) }
    </>
  );
}

export default Game;
