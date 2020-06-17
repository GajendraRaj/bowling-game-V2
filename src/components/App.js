import React, { useState } from "react";
import Constants from "../constants";
import Scorecard from "./scorecard";
import Pins from "./pins";
import "./App.css";

const App = () => {
  const initialState = {
    roll: [],
    score: [],
    totalScore: Constants.TOTAL_SCORE,
    activePins: Constants.ACTIVE_PINS,
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
    if (roll.length >= 19) {
      if (roll.length < 21) {
        if (roll.length === 19) {
          const lastRoll = roll[roll.length - 1];
          return Constants.ACTIVE_PINS - lastRoll;
        } else {
          if (isSpare(roll[roll.length - 1], roll[roll.length - 2])) {
            return Constants.ACTIVE_PINS;
          } else if (isStrike(roll[roll.length - 2])) {
            const lastRoll = roll[roll.length - 1];
            return Constants.ACTIVE_PINS - lastRoll;
          } else {
            return -1;
          }
        }
      }
      return -1;
    } else if (isEven(roll)) {
      return Constants.ACTIVE_PINS;
    } else {
      const lastRoll = roll[roll.length - 1];
      return Constants.ACTIVE_PINS - lastRoll;
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
        const roll3 = isRollExist(roll + 2, rolls);

        if (isStrike(roll1)) {
          if (roll3 !== "") {
            total += calculateStrikeBonus(roll, roll3, rolls);
            frameScore.push(total);
          }
        } else if (isSpare(roll1, roll2)) {
          if (roll3 !== "") {
            total += roll3;
            frameScore.push(total);
          }
        } else {
          frameScore.push(total);
        }
      }
    }

    return frameScore;
  };

  const calculateStrikeBonus = (roll, roll3, rolls) => {
    let total = roll3;
    if (isStrike(roll3)) {
      const roll4 = isRollExist(roll + 4, rolls);
      if (roll4 !== "") {
        total += roll4;
      }
    } else {
      const roll4 = isRollExist(roll + 3, rolls);
      if (roll4 !== "") {
        total += roll4;
      }
    }

    return total;
  };

  const isRollExist = (roll, rolls) => {
    return rolls[roll] !== undefined ? rolls[roll] : "";
  };

  const isSpare = (roll1, roll2) => {
    return roll1 + roll2 === 10;
  };

  const isStrike = (roll1) => {
    return roll1 === 10;
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
