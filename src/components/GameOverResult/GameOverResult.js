import React from "react";

function GameOverResult({ answer, previousGuesses, gameStatus }) {
  if (!gameStatus) {
    return null;
  }

  if (gameStatus === 'lose') {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  }

  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations! </strong>
        Got it in <strong>{previousGuesses.length} guesses</strong>.
      </p>
    </div>
  );
}

export default GameOverResult;
