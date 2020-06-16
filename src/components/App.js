import React, { useState } from "react";
import Constants from "../constants";
import Scorecard from "./scorecard";
import Pins from "./pins";
import "./App.css";

const App = () => {
  const initialState = {
    roll: [],
    totalScore: 0,
    gameOver: false,
  };
  const [gameState, setGameState] = useState(initialState);

  const updateScores = (downPins) => {
    const newRoll = [...gameState.roll, downPins];
    const totalScore =
      newRoll.length > 0 ? getTotalScore(newRoll) : gameState.totalScore;
    const gaveOver = isGameOver(newRoll);

    setGameState((prevState) => {
      return {
        ...prevState,
        roll: newRoll,
        totalScore: totalScore,
        gameOver: gaveOver,
      };
    });
  };

  const getTotalScore = (rolls) => {
    let totalScore = 0;
    for (let i = 0; i < rolls.length; i++) {
      totalScore += rolls[i];
    }

    return totalScore;
  };

  const isGameOver = (rolls) => {
    return rolls.length < 20 ? false : true;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{Constants.APP_TITLE}</h1>
      </header>
      <div className="Game">
        <Scorecard roll={gameState.roll} totalScore={gameState.totalScore} />
        <Pins
          pinsDown={updateScores}
          gameOver={gameState.gameOver}
          roll={gameState.roll}
        />
      </div>
    </div>
  );
};

export default App;
