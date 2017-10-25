import React from "react";
import { shallow, mount, render } from "enzyme";
import { ListResult } from "../../src/components/ListResult";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe("single and plural version of text", () => {
  describe("1 result", () => {
    it("render single version", () => {
      const wrapper = shallow(<ListResult movies={["1"]} />);
      expect(wrapper.contains([
        <span>1 result was found</span>
      ]));
    });

  });

  describe("many results", () => {
    it("render single version", () => {
      const wrapper = shallow(<ListResult movies={["1", "2"]} />);
      expect(wrapper.contains([
        <span>2 results was found</span>
      ]));
    });
  });
});
