//import React from "react";
//import { shallow, mount, render } from "enzyme";
//import { FilmDescription } from "../../src/components/FilmDescription";
//import { configure } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-15';
//
//configure({ adapter: new Adapter() });
//
//describe("FilmDescription", () => {
//  describe("Empty movie list bar", () => {
//    it("render gray strip without text", () => {
//      const wrapper = shallow(<FilmDescription currentMovie={{one: "one"}} relatedMovies={() => {}} />);
//      console.log(wrapper.debug());
//      //expect(wrapper.contains([
//      //  <span>1 result was found</span>
//      //]));
//    });
//
//  });
//});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
