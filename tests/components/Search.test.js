import React from "react";
import { shallow, mount, render } from "enzyme";
import { Search } from "../../src/components/Search";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

const onMoviesClick = jest.fn();
const onTVShowsClick = jest.fn();
const wrapper = shallow(<Search
  isMoviesActive={true}
  isTVShowActive={false}
  onMoviesClick={onMoviesClick}
  onTVShowsClick={onTVShowsClick}
  handleSubmit={jest.fn()}
/>);
const moviesButton = wrapper.find(".choice button").first();
const tvShowsButton = wrapper.find(".choice button").last();

describe("search by movies is active", () => {
  describe("movies button", () => {
    it("has .btn-active class", () => {
      expect(moviesButton.hasClass("btn-active")).toBe(true);
    });

    it("doesn't have onClick handler", () => {
      moviesButton.simulate("click");
      expect(onMoviesClick.mock.calls.length).toBe(0);
    });
  });

  describe("tv shows button", () => {
    it("dosen't have .btn-active class", () => {
      expect(tvShowsButton.hasClass("btn-active")).toBe(false);
    });
    it("has onClick handler", () => {
      tvShowsButton.simulate("click");
      expect(onTVShowsClick.mock.calls.length).toBe(1);
    })
  });
});
