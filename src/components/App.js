import React, { useState } from "react";
import Constants from "../constants";
import Scorecard from "./scorecard";
import Pins from "./pins";
import "./App.css";

const App = () => {
  const initialState = {
    roll: [],
    score: [],
    totalScore: 0,
    activePins: 10,
  };
  const [gameState, setGameState] = useState(initialState);

  const updateScores = (downPins) => {
    const newRoll = [...gameState.roll, downPins];
    const totalScore =
      newRoll.length > 0 ? getTotalScore(newRoll) : gameState.totalScore;
    const activePins = getActivePins(newRoll);
    const score = getFramesScore(newRoll);

    setGameState((prevState) => {
      return {
        ...prevState,
        roll: newRoll,
        totalScore: totalScore,
        activePins: activePins,
        score: score,
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

  const getActivePins = (roll) => {
    if (roll.length === 20) {
      return -1;
    } else if (isEven(roll)) {
      return 10;
    } else {
      const lastRoll = roll[roll.length - 1];
      return 10 - lastRoll;
    }
  };

  const isEven = (roll) => {
    return roll.length % 2 === 0;
  };

  const getFramesScore = (rolls) => {
    let frameScore = [];
    if (rolls.length >= 2) {
      for (let roll = 0; roll < rolls.length; roll = roll + 2) {
        if (rolls[roll + 1] !== undefined) {
          frameScore.push(rolls[roll] + rolls[roll + 1]);
        }
      }
    }

    return frameScore;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{Constants.APP_TITLE}</h1>
      </header>
      <div className="Game">
        <Scorecard
          roll={gameState.roll}
          score={gameState.score}
          totalScore={gameState.totalScore}
        />
        <Pins pinsDown={updateScores} activePins={gameState.activePins} />
      </div>
    </div>
  );
};

export default App;
