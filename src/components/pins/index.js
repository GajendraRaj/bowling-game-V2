import React from "react";
import "./index.css";
import { number } from "prop-types";

const Pins = (props) => {
  const getPins = () => {
    const pins = [];
    for (let i = 0; i <= props.activePins; i++) {
      pins.push(
        <button
          id={"pin" + i}
          key={i}
          disabled={props.gameOver}
          onClick={() => props.pinsDown(i)}
        >
          {i}
        </button>
      );
    }

    return pins;
  };

  return <div className="Container">{getPins()}</div>;
};

export default Pins;
