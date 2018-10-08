'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _allrequests = require('../../pages/allrequests');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<AllRequest />', function () {
  var wrapper = void 0;
  var props = {
    allRequest: function allRequest() {},
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
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_allrequests.AllRequests, props));

    expect(wrapper).toMatchSnapshot();
  });
  it('Should not display request card when request does not exists', function () {
    props = {
      allRequest: function allRequest() {},
      requests: []
    };

    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_allrequests.AllRequests, props));
    expect(wrapper.find('label').exists()).toBe(false);
  });
  it('Should handle logout method', function () {
    props = {
      allRequest: function allRequest() {},
      logout: function logout() {},
      history: {
        push: jest.fn()
      }
    };
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_allrequests.AllRequests, props));
    expect(wrapper.instance().logout()).toBe(true);
  });
});