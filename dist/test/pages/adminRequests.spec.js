'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _adminrequests = require('../../pages/adminrequests');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Admin Requests />', function () {
  var wrapper = void 0;
  var props = {
    adminRequests: function adminRequests() {},
    logout: function logout() {},
    requests: [{
      id: 1,
      user_id: 1,
      title: 'repair computer',
      department: 'technology',
      equipment: 'computer',
      requeststatus: 'pending',
      description: 'repair laptop',
      serialnumber: 111111111
    }, {
      id: 2,
      user_id: 2,
      title: 'repair computer',
      department: 'technology',
      equipment: 'computer',
      requeststatus: 'pending',
      description: 'repair laptop',
      serialnumber: 111111111
    }],
    history: {
      push: jest.fn()
    }
  };

  it('stores a snapshot of the component', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_adminrequests.AdminRequests, props));

    expect(wrapper).toMatchSnapshot();
  });
  it('Should not display request card when request does not exists', function () {
    props = {
      adminRequests: function adminRequests() {},
      requests: []
    };

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_adminrequests.AdminRequests, props));
    expect(wrapper.find('label').exists()).toBe(false);
  });
  it('Should handle logout method', function () {
    props = {
      adminRequests: function adminRequests() {},
      logout: function logout() {},
      history: {
        push: jest.fn()
      }
    };
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_adminrequests.AdminRequests, props));
    expect(wrapper.instance().logout()).toBe(true);
  });
});