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
    activePins: 10,
  };
  const [gameState, setGameState] = useState(initialState);

  const updateScores = (downPins) => {
    const newRoll = [...gameState.roll, downPins];
    const totalScore =
      newRoll.length > 0 ? getTotalScore(newRoll) : gameState.totalScore;
    const gaveOver = isGameOver(newRoll);
    const activePins = getActivePins(newRoll);

    setGameState((prevState) => {
      return {
        ...prevState,
        roll: newRoll,
        totalScore: totalScore,
        gameOver: gaveOver,
        activePins: activePins,
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

  const getActivePins = (roll) => {
    if (isEven(roll)) {
      return 10;
    } else {
      const lastRoll = roll[roll.length - 1];
      return 10 - lastRoll;
    }
  };

  const isEven = (roll) => {
    return roll.length % 2 === 0;
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
          activePins={gameState.activePins}
        />
      </div>
    </div>
  );
};

export default App;
