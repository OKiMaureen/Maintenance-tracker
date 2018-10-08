'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _AdminGetSingleRequest = require('../../pages/AdminGetSingleRequest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<AdminSingleRequest />', function () {
  var wrapper = void 0;
  var match = {
    params: {
      id: '1'
    }
  };
  var props = {
    adminSingleRequest: function adminSingleRequest() {},
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
      adminSingleRequest: function adminSingleRequest() {},
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

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AdminGetSingleRequest.AdminSingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.find('label').exists()).toBe(true);
  });
  it('Should handle logout method', function () {
    props = {
      adminSingleRequest: function adminSingleRequest() {},
      logout: function logout() {},
      history: {
        push: jest.fn()
      }
    };
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AdminGetSingleRequest.AdminSingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.instance().logout()).toBe(true);
  });
  it('Should handle updateRequest method', function () {
    var oneRequest = {
      id: 2
    };
    var status = 'pending';
    props = {
      adminSingleRequest: function adminSingleRequest() {}

    };
    var updateRequest = function updateRequest() {};
    var update = function update() {};
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AdminGetSingleRequest.AdminSingleRequest, _extends({}, props, {
      update: update,
      match: match,
      oneRequest: oneRequest,
      updateRequest: updateRequest(oneRequest, status)
    })));
    expect(wrapper.instance().updateRequest({ target: { id: 2 } })).toBe(true);
  });
  it('Should display request label as yellow when status is pending', function () {
    props = {
      adminSingleRequest: function adminSingleRequest() {},
      oneRequest: { requeststatus: 'pending' }
    };

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AdminGetSingleRequest.AdminSingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.find('.yellow').exists()).toBe(true);
  });
  it('Should display request label as green when status is approve', function () {
    props = {
      adminSingleRequest: function adminSingleRequest() {},
      oneRequest: { requeststatus: 'approved' }
    };

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AdminGetSingleRequest.AdminSingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.find('.green').exists()).toBe(true);
  });
  it('Should display request label as red when status is dissapproved', function () {
    props = {
      adminSingleRequest: function adminSingleRequest() {},
      oneRequest: { requeststatus: 'disapproved' }
    };

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AdminGetSingleRequest.AdminSingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.find('.red').exists()).toBe(true);
  });
  it('Should display request label as green when status is resolved', function () {
    props = {
      adminSingleRequest: function adminSingleRequest() {},
      oneRequest: { requeststatus: 'resolved' }
    };

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AdminGetSingleRequest.AdminSingleRequest, _extends({}, props, { match: match })));
    expect(wrapper.find('.green').exists()).toBe(true);
  });
});