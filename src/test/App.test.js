import React from "react";
import { shallow, mount } from "enzyme";
import App from "../components/App";
import Scorecard from "../components/scorecard";
import Pins from "../components/pins";

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render title correctly", () => {
    expect(wrapper.find("h1").text()).toEqual("Bowling Game");
  });

  it("should render Scorecard component", () => {
    expect(wrapper.find(Scorecard).length).toEqual(1);
  });

  it("should render Controls component", () => {
    expect(wrapper.find(Pins).length).toEqual(1);
  });

  it("should score gutter game", () => {
    const wrapper = mount(<App />);
    const startButton = wrapper.find(Pins).find("button").at(0);
    startButton.simulate("click");

    expect(wrapper.find(Scorecard).props().roll[0]).toEqual(0);
  });

  it("should score gutter game as 0, if all frames score are 0", () => {
    const wrapper = mount(<App />);
    const startButton = wrapper.find(Pins).find("button").at(0);
    for (let i = 0; i < 20; i++) {
      startButton.simulate("click");
    }
    const totalScore = wrapper.find(Scorecard).find("#total-score").text();
    expect(totalScore).toEqual("0");
  });

  it("should score gutter game as 0, if all frames score are 0", () => {
    const wrapper = mount(<App />);
    const startButton = wrapper.find(Pins).find("button").at(0);
    for (let i = 0; i < 20; i++) {
      startButton.simulate("click");
    }
    const totalScore = wrapper.find(Scorecard).find("#total-score").text();
    expect(totalScore).toEqual("0");
  });

  it("should score game as 20, if all frames score are 1", () => {
    const wrapper = mount(<App />);
    const startButton = wrapper.find(Pins).find("button").at(1);
    for (let i = 0; i < 20; i++) {
      startButton.simulate("click");
    }
    const totalScore = wrapper.find(Scorecard).find("#total-score").text();
    expect(totalScore).toEqual("20");
  });
});
