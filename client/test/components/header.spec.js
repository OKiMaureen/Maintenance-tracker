import { Link } from 'react-router-dom';
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


describe('Header component testing', () => {
  it('Should render properly', () => {
    const wrapper = shallow(<Header><Link to="/" /> <Link to="/" /></Header>);
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('.btn').length).toEqual(1);
    expect(wrapper.find('.bar').length).toEqual(3);
    expect(wrapper.find('.logo').length).toEqual(1);
  });
});
