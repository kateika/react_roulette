import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import { FilmDescription } from "../../src/components/FilmDescription";
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe("FilmDescription", () => {
  const loadMovieInfo = jest.fn();
  beforeEach(() => {
    loadMovieInfo.mockClear();
  });

  const props = {
    match: {
      params: {
        type: "movie",
        filmId: 111
      }
    },
    loadMovieInfo: loadMovieInfo,
    relatedMovies: []
  };

  describe("Empty movie list bar", () => {
    it("renders gray strip with director name", () => {
      const wrapper = shallow(<FilmDescription currentMovie={{director: "some cool director"}} {...props} />);
      expect(wrapper.contains("Films by some cool director")).toBe(true);
    });

    it("renders gray strip without text when director was not found", () => {
      const wrapper = shallow(<FilmDescription currentMovie={{nodirector: "nobody here"}} {...props} />);
      const children = wrapper.find("MovieList").children();
      let text = "";
      if(children.length > 0) {
        text = children.text();
      }
      expect(text).not.toMatch("Films by");
    });
  });

  it("calls componentWillMount", () => {
    const wrapper = shallow(<FilmDescription currentMovie={{director: "some cool director"}} {...props} />);
    expect(loadMovieInfo).toHaveBeenCalledWith(111, "movie");
  });

  describe("calls componentWillReceiveProps", () => {
    it("sets new filmId and rerenders component", () => {
      const newProps = {
        match: {
          params: {
            type: "movie",
            filmId: 222
          }
        },
        loadMovieInfo: loadMovieInfo,
        relatedMovies: []
      };
      const wrapper = shallow(<FilmDescription currentMovie={{director: "some cool director"}} {...props} />);
      wrapper.setProps(newProps);
      expect(loadMovieInfo).toHaveBeenCalledWith(222, "movie");
    });

    it("sets same filmId and does not rerender component", () => {
      const newProps = {
        match: {
          params: {
            type: "movie",
            filmId: 333
          }
        },
        loadMovieInfo: loadMovieInfo,
        relatedMovies: []
      };
      const wrapper = shallow(<FilmDescription currentMovie={{director: "some cool director"}} {...props} />);
      wrapper.setProps(newProps);
      wrapper.setProps(newProps);
      expect(loadMovieInfo.mock.calls).toEqual([[111, "movie"], [333, "movie"]]);
    });
  })
});
