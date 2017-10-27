import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import { FilmDescription } from "../../src/components/FilmDescription";
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe("FilmDescription", () => {
  const props = {
    match: {
      params: {
        type: "movie",
        filmId: "111"
      }
    },
    loadMovieInfo: jest.fn(),
    relatedMovies: []
  };

  describe("Empty movie list bar", () => {
    it("render gray strip with director name", () => {
      const wrapper = shallow(<FilmDescription currentMovie={{director: "some cool director"}} {...props} />);
      expect(wrapper.contains("Films by some cool director")).toBe(true);
    });

    it("render gray strip without text when director was not found", () => {
      const wrapper = shallow(<FilmDescription currentMovie={{nodirector: "nobody here"}} {...props} />);
      const children = wrapper.find("MovieList").children();
      let text = "";
      if(children.length > 0) {
        text = children.text();
      }
      expect(text).not.toMatch("Films by");
    });
  });
});
