import React from "react";
import "./index.css";

const Pins = (props) => {
  return (
    <div className="Container">
      <button id="pin0" onClick={props.pinsDown}>
        0
      </button>
    </div>
  );
};

export default Pins;
