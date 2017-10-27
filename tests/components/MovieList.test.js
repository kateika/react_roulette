import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import { MovieList } from "../../src/components/MovieList";
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });


describe("Empty search results", () => {
  const wrapper = shallow(<MovieList movies={[]} children={<div id="search-id"></div>}/>);
  it("renders empty page", () => {
    expect(wrapper.contains(<div className='container'>No films found</div>)).toEqual(true);
  });

  it("renders empty gray strip even if we have props.children but do not have movies", () => {
    expect(wrapper.find('#search-id').exists()).toEqual(false);
  });
});

describe("Filled search results", () => {
  const wrapper = shallow(<MovieList movies={["not zero length"]} children={<div id="search-id"></div>}/>);
  it("renders list of movies", () => {
    expect(wrapper.find("MovieCard").length).toEqual(1);
  });

  it("renders gray strip with content", () => {
    expect(wrapper.find('#search-id').exists()).toEqual(true);
  });
});

describe("Movie list props for movie card", () => {
  const movies = [{
    title: "test title",
    release_date: "1976-06-17",
    poster: "/wajNlrVDkryVGTzDz9vZE6XKZnC.jpg",
    id: 111,
    type: "movie"
  }];

  const wrapper = shallow(<MovieList movies={movies} />);
  const movieCardProps = wrapper.find("MovieCard").first().props();

  it("passes modified year", () => {
    expect(movieCardProps["release_date"]).toBe("1976");
  });

  it("passes modified url of the poster", () => {
    expect(movieCardProps["poster"]).toBe("https://image.tmdb.org/t/p/w185_and_h278_bestv2/wajNlrVDkryVGTzDz9vZE6XKZnC.jpg");
  });

  it("passes not modified props", () => {
    expect(movieCardProps["title"]).toBe("test title");
    expect(movieCardProps["id"]).toBe(111);
    expect(movieCardProps["type"]).toBe("movie");
  });
});
