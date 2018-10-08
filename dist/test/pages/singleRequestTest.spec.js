'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SingleRequest = require('../../pages/SingleRequest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<SingleRequest />', function () {
  var wrapper = void 0;
  var match = {
    params: {
      id: '1'
    }
  };
  var props = {
    aRequest: function aRequest() {},
    logout: function logout() {},
    oneRequest: {
      id: 1,
      user_id: 1,
      title: 'repair computer',
      department: 'technology',
      equipment: 'computer',
      requeststatus: 'pending',
      description: 'repair laptop',
      serialnumber: 111111111
    },
    history: {
      push: jest.fn()
    }

  };
  it('Should display request card when request loads and it exists', function () {
    props = {
      aRequest: function aRequest() {},
      oneRequest: {
        id: 1,
        user_id: 1,
        title: 'repair computer',
        department: 'technology',
        equipment: 'computer',
        requeststatus: 'pending',
        description: 'repair laptop',
        serialnumber: 111111111
      }
    };

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SingleRequest.SingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.find('label').exists()).toBe(true);
  });
  it('Should handle logout method', function () {
    props = {
      aRequest: function aRequest() {},
      logout: function logout() {},
      history: {
        push: jest.fn()
      }
    };
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SingleRequest.SingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.instance().logout()).toBe(true);
  });
  it('Should display request label as yellow when status is pending', function () {
    props = {
      aRequest: function aRequest() {},
      oneRequest: { requeststatus: 'pending' }
    };

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SingleRequest.SingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.find('.yellow').exists()).toBe(true);
  });
  it('Should display request label as green when status is approve', function () {
    props = {
      aRequest: function aRequest() {},
      oneRequest: { requeststatus: 'approved' }
    };

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SingleRequest.SingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.find('.green').exists()).toBe(true);
  });
  it('Should display request label as red when status is dissapproved', function () {
    props = {
      aRequest: function aRequest() {},
      oneRequest: { requeststatus: 'disapproved' }
    };

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SingleRequest.SingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.find('.red').exists()).toBe(true);
  });
  it('Should display request label as green when status is resolved', function () {
    props = {
      aRequest: function aRequest() {},
      oneRequest: { requeststatus: 'resolved' }
    };

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SingleRequest.SingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.find('.green').exists()).toBe(true);
  });
});