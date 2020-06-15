import React from "react";
import { shallow } from "enzyme";
import Scorecard from "../../components/scorecard";

describe("Scorecard component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Scorecard />);
  });

  it("should render table with 11 columns", () => {
    expect(wrapper.find("th").length).toEqual(11);
  });

  it("should render the correct columns heading", () => {
    expect(wrapper.find("th").at(0).text()).toEqual("Frame 1");
    expect(wrapper.find("th").at(1).text()).toEqual("Frame 2");
    expect(wrapper.find("th").at(2).text()).toEqual("Frame 3");
    expect(wrapper.find("th").at(3).text()).toEqual("Frame 4");
    expect(wrapper.find("th").at(4).text()).toEqual("Frame 5");
    expect(wrapper.find("th").at(5).text()).toEqual("Frame 6");
    expect(wrapper.find("th").at(6).text()).toEqual("Frame 7");
    expect(wrapper.find("th").at(7).text()).toEqual("Frame 8");
    expect(wrapper.find("th").at(8).text()).toEqual("Frame 9");
    expect(wrapper.find("th").at(9).text()).toEqual("Frame 10");
    expect(wrapper.find("th").at(10).text()).toEqual("Total Score");
  });
});
