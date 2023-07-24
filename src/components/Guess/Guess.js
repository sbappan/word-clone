import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ item }) {
  // console.log('item: ', item);
  
  return (
    <p className="guess">
      {range(5).map((letterIndex) => {
        const letterObj = item ? item[letterIndex] : null;

        return (
        <span className={`cell${letterObj ? (' ' + letterObj?.status) : ''}`} key={letterIndex}>
          {letterObj?.letter}
        </span>
      )})}
    </p>);
}

export default Guess;
