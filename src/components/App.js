import React, { useState } from "react";
import Constants from "../constants";
import Scorecard from "./scorecard";
import Pins from "./pins";
import "./App.css";

const App = () => {
  const initialState = {
    roll: [],
    totalScore: 0,
  };
  const [gameState, setGameState] = useState(initialState);

  const updateScores = (downPins) => {
    const newRoll = [...gameState.roll, downPins];
    let totalScore = 0;
    if (newRoll.length > 0) {
      for (let i = 0; i < newRoll.length; i++) {
        totalScore += newRoll[i];
      }
    }

    setGameState((prevState) => {
      return {
        ...prevState,
        roll: newRoll,
        totalScore: totalScore,
      };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{Constants.APP_TITLE}</h1>
      </header>
      <div className="Game">
        <Scorecard roll={gameState.roll} totalScore={gameState.totalScore} />
        <Pins pinsDown={updateScores} />
      </div>
    </div>
  );
};

export default App;
