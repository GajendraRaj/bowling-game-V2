import React from "react";
import "./index.css";

const Pins = (props) => {
  const getPins = () => {
    const pins = [];
    for (let i = 0; i <= 10; i++) {
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
