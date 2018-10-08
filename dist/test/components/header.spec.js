'use strict';

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _reactRouterDom = require('react-router-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Header = require('../../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Header component testing', function () {
  var toggleNavBar = function toggleNavBar() {};
  it('Should render properly', function () {
    var onButtonClick = _sinon2.default.spy();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _Header2.default,
      null,
      _react2.default.createElement(_reactRouterDom.Link, { to: '/' }),
      ' ',
      _react2.default.createElement(_reactRouterDom.Link, { to: '/' })
    ));
    wrapper.find('a').simulate('click');
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('.btn').length).toEqual(1);
    expect(wrapper.find('.bar').length).toEqual(3);
    expect(toggleNavBar.toHaveBeenCalled);
    expect(onButtonClick.toHaveBeenCalled);
  });
});