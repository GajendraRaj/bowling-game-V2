import React from "react";

const Rolls = (props) => {
  const scorecardRolls = () => {
    const rolls = [];
    for (let i = 0; i <= 20; i++) {
      const colSpanValue = i > 17 ? "2" : "3";
      rolls.push(
        <td key={i} id={"r" + i} colSpan={colSpanValue}>
          {props.roll.length > i ? props.roll[i] : ""}
        </td>
      );
    }
    return rolls;
  };

  return <React.Fragment>{scorecardRolls()}</React.Fragment>;
};

export default Rolls;
