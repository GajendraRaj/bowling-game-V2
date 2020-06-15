import React from "react";

const Rolls = (props) => {
  const scorecardRolls = () => {
    const rolls = [];
    for (let i = 0; i < 20; i++) {
      rolls.push(
        <td key={i} id={"r" + i} colSpan="3">
          {props.roll.length > i ? props.roll[i] : ""}
        </td>
      );
    }
    return rolls;
  };

  return <React.Fragment>{scorecardRolls()}</React.Fragment>;
};

export default Rolls;
