import React from "react";
import "./index.css";

const Pins = (props) => {
  return (
    <div className="Container">
      <button id="pin0" onClick={() => props.pinsDown(0)}>
        0
      </button>
      <button id="pin1" onClick={() => props.pinsDown(1)}>
        1
      </button>
    </div>
  );
};

export default Pins;
