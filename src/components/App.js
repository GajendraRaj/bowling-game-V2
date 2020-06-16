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
    const activePins = getActivePins(newRoll);
    const score = getFramesScore(newRoll);
    const totalScore =
      score.length > 0 ? score[score.length - 1] : gameState.totalScore;

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
    let total = 0;
    for (let roll = 0; roll < rolls.length; roll = roll + 2) {
      const roll1 = rolls[roll];
      const roll2 = rolls[roll + 1] !== undefined ? rolls[roll + 1] : "";

      if (roll2 !== "") {
        total += roll1 + roll2;

        if (roll1 + roll2 === 10) {
          if (rolls[roll + 2] !== undefined) {
            frameScore.push(total + rolls[roll + 2]);
            total += rolls[roll + 2];
          }
        } else {
          frameScore.push(total);
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
