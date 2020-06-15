import React from "react";
import Rolls from "./roll";
import Constants from "../../constants";
import "./index.css";

const Scorecard = (props) => {
  const header = Constants.SCORECARD_TITLES.map((title) => (
    <th key={title} colSpan="6">
      {title}
    </th>
  ));

  const footer = () => {
    let bottomLine = [];
    for (let i = 0; i < 11; i++) {
      bottomLine.push(<td id={"frame" + i} key={"frame" + i} colSpan="6"></td>);
    }
    return bottomLine;
  };

  return (
    <div className="Container">
      <table id="table" className="Scorecard" cellPadding="1" cellSpacing="0">
        <tbody>
          <tr>{header}</tr>
          <tr>
            <Rolls roll={props.roll} />
            <td id="total-score" colSpan="6">
              {props.totalScore}
            </td>
          </tr>
          <tr>{footer()}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default Scorecard;
