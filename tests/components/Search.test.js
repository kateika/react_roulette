import React from "react";
import { shallow, mount, render } from "enzyme";
import { Search } from "../../src/components/Search";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe("search by movies is active", () => {
  describe("movies button", () => {
    //it("has .btn-active class", () => {
    //  const wrapper = shallow(<Search isMoviesActive={true} isTVShowActive={false} handleSubmit={() => {}}/>);
    //  expect(wrapper.find(".choice .btn-active").length).toEqual(1);
    //});
    it("doesn't have onClick handler", () => {
      const wrapper = shallow(<Search isMoviesActive={true} isTVShowActive={false} handleSubmit={() => {}}/>);
      console.log(wrapper.debug());
      expect(wrapper.find(".choice").length).toEqual(1);
    });
  });

  //describe("tv shows button", () => {
  //  it("dosen't have .btn-active class")
  //  it("has onClick handler")
  //});
});
