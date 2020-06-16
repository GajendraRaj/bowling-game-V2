import React from "react";
import "./index.css";

const Pins = (props) => {
  const getPins = () => {
    const pins = [];
    for (let i = 0; i < 2; i++) {
      pins.push(
        <button id={"pin" + i} key={i} onClick={() => props.pinsDown(i)}>
          {i}
        </button>
      );
    }

    return pins;
  };
  return <div className="Container">{getPins()}</div>;
};

export default Pins;
