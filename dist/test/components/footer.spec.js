'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Footer = require('../../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Footer component testing', function () {
  it('Should render properly', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Footer2.default, null));
    expect(wrapper.find('footer').length).toEqual(1);
  });
});