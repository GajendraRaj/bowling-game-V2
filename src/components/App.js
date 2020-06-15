import React, { useState } from "react";
import Constants from "../constants";
import Scorecard from "./scorecard";
import Pins from "./pins";
import "./App.css";

const App = () => {
  const initialState = {
    roll: [],
  };
  const [gameState, setGameState] = useState(initialState);

  const updateScores = () => {
    const newRoll = [...gameState.roll, 0];

    setGameState((prevState) => {
      return {
        ...prevState,
        roll: newRoll,
      };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{Constants.APP_TITLE}</h1>
      </header>
      <div className="Game">
        <Scorecard roll={gameState.roll} />
        <Pins pinsDown={updateScores} />
      </div>
    </div>
  );
};

export default App;
