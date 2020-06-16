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
          disabled={disablePin(i)}
          onClick={() => props.pinsDown(i)}
        >
          {i}
        </button>
      );
    }

    return pins;
  };

  const disablePin = (number) => {
    if (props.gameOver) {
      return true;
    }
    if (props.roll.length % 2 === 0 || props.roll.length === 0) {
      return false;
    }
    return props.roll[props.roll.length - 1] + number > 10;
  };

  return <div className="Container">{getPins()}</div>;
};

export default Pins;
