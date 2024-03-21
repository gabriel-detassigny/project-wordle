import React from 'react';

function GuessInput() {
  const [ guess, setGuess ] = React.useState('');

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log({guess});
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={formSubmitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={ guess }
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
      />
    </form>
  );
}

export default GuessInput;