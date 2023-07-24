import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessList({answer, previousGuesses}) {
  // console.log('range(1,7)', range(1,7));
  
  return (
    <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((itemIndex) => {
      const guessResult = checkGuess(previousGuesses[itemIndex]?.guess, answer);

      return (
      <Guess answer={answer} item={guessResult} key={previousGuesses[itemIndex] ? previousGuesses[itemIndex]?.id : itemIndex} />
    )})}
    </div>
    );
}

export default GuessList;
