import React from "react";
import { shallow } from "enzyme";
import Pins from "../../components/pins";

describe("Controls component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Pins activePins={10} gameOver={true} />);
  });

  it("should render all pins (0-10)", () => {
    expect(wrapper.find("button").length).toEqual(11);
  });
});
