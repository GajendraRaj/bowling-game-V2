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

  it("should disabled the input buttons if 20 rolls completed.", () => {
    const wrapper = mount(<App />);
    for (let i = 0; i < 10; i++) {
      const startButton1 = wrapper.find(Pins).find("button").at(0);
      const startButton2 = wrapper.find(Pins).find("button").at(1);
      startButton1.simulate("click");
      startButton2.simulate("click");
    }

    expect(wrapper.find(Pins).find("button").at(0).prop("disabled")).toEqual(
      true
    );
    expect(wrapper.find(Pins).find("button").at(1).prop("disabled")).toEqual(
      true
    );
  });

  it("should disable the pin if sum of the last roll and its value is greater than 10", () => {
    const wrapper = mount(<App />);
    const pin5 = wrapper.find(Pins).find("button").at(5);
    pin5.simulate("click");

    expect(wrapper.find(Pins).find("button").at(0).prop("disabled")).toEqual(
      false
    );
    expect(wrapper.find(Pins).find("button").at(1).prop("disabled")).toEqual(
      false
    );
    expect(wrapper.find(Pins).find("button").at(2).prop("disabled")).toEqual(
      false
    );
    expect(wrapper.find(Pins).find("button").at(3).prop("disabled")).toEqual(
      false
    );
    expect(wrapper.find(Pins).find("button").at(4).prop("disabled")).toEqual(
      false
    );
    expect(wrapper.find(Pins).find("button").at(5).prop("disabled")).toEqual(
      false
    );
    expect(wrapper.find(Pins).find("button").at(6).prop("disabled")).toEqual(
      true
    );
    expect(wrapper.find(Pins).find("button").at(7).prop("disabled")).toEqual(
      true
    );
    expect(wrapper.find(Pins).find("button").at(8).prop("disabled")).toEqual(
      true
    );
    expect(wrapper.find(Pins).find("button").at(9).prop("disabled")).toEqual(
      true
    );
    expect(wrapper.find(Pins).find("button").at(10).prop("disabled")).toEqual(
      true
    );
  });
});
