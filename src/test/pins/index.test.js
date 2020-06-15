import React from "react";
import { shallow } from "enzyme";
import Pins from "../../components/pins";

describe("Controls component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Pins />);
  });

  it("should render buttons", () => {
    expect(wrapper.find("button").length).toEqual(2);
  });
});
