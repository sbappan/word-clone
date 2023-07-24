import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form/Form';
import GuessList from '../GuessList/GuessList';
import GameOverResult from '../GameOverResult/GameOverResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const gameStatus = getGameStatus();

  function getGameStatus() {
    if (answer === previousGuesses.at(-1)?.guess) {
      return 'win';
    } else if (previousGuesses.length >= 6) {
      return 'lose';
    }
    return null;
  }

  function updateGuessList(guess) {
    setPreviousGuesses([...previousGuesses, {
      guess: guess,
      id: crypto.randomUUID()
    }])
  }

  return <>
    <GuessList previousGuesses={previousGuesses} answer={answer} />
    <Form updateGuessList={updateGuessList} gameStatus={gameStatus} />
    <GameOverResult answer={answer} previousGuesses={previousGuesses} gameStatus={gameStatus} />
  </>;
}

export default Game;
