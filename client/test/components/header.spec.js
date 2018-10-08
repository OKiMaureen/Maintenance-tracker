import sinon from 'sinon';
import { Link } from 'react-router-dom';
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


describe('Header component testing', () => {
  const toggleNavBar = () => {};
  it('Should render properly', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Header><Link to="/" /> <Link to="/" /></Header>);
    wrapper.find('a').simulate('click');
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('.btn').length).toEqual(1);
    expect(wrapper.find('.bar').length).toEqual(3);
    expect((toggleNavBar).toHaveBeenCalled);
    expect((onButtonClick).toHaveBeenCalled);
  });
});
