import React from "react";
import { shallow } from "enzyme";
import MainTitle from './componets/title/index'

it("should render title", () => {
  const wrapper = shallow(<MainTitle />);
  const element = wrapper.find('#title')  
  expect(element.text()).toBe('Movie Search App');
});

