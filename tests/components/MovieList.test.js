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

