import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Star from '..';

Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

describe('Star', () => {
  it('renders star correctly', () => {
    const wrapper = mount(<Star />);
    expect(wrapper.find('i').length).toBe(1);
    expect(wrapper.find('.required-star').length).toBe(1);
  });
});
