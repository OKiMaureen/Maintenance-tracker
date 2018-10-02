import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';


describe('Footer component testing', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').length).toEqual(1);
  });
});
