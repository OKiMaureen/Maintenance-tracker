'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _AllRequests = require('../../components/AllRequests');

var _AllRequests2 = _interopRequireDefault(_AllRequests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Create  all requests component test', function () {
  var props = {
    requests: [{
      description: 'description',
      title: 'title'

    }, {
      description: 'description',
      title: 'title'

    }],
    logout: function logout() {}

  };
  it('Should render properly', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AllRequests2.default, {
      props: props
    }));
    expect(wrapper.find('.allrequests').length).toEqual(1);
  });
  it('Should display request card when request loads and it exists', function () {
    props = {
      logout: function logout() {}

    };

    var requests = [{
      description: 'description',
      title: 'title'

    }, {
      description: 'description',
      title: 'title'

    }];

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AllRequests2.default, { props: props, requests: requests }));

    expect(wrapper.find('.message-centered').length).toEqual(0);
  });
  it('Should not display request card when request loads and it does not exists', function () {
    props = {
      logout: function logout() {},
      requests: {
        length: 0
      }
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AllRequests2.default, { props: props }));

    expect(wrapper.find('.message-centered').length).toEqual(1);
  });
  it('Should display request label as yellow when status is pending', function () {
    props = {
      allRequest: function allRequest() {},
      requests: [{ requeststatus: 'pending' }]
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AllRequests2.default, props));
    expect(wrapper.find('.yellow').exists()).toBe(true);
  });
  it('Should display request label as green when status is approved', function () {
    props = {
      allRequest: function allRequest() {},
      requests: [{ requeststatus: 'approved' }]
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AllRequests2.default, props));
    expect(wrapper.find('.green').exists()).toBe(true);
  });
  it('Should display request label as red when status is disapproved', function () {
    props = {
      allRequest: function allRequest() {},
      requests: [{ requeststatus: 'disapproved' }]
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AllRequests2.default, props));
    expect(wrapper.find('.red').exists()).toBe(true);
  });
  it('Should display request label as green when status is resolved', function () {
    props = {
      allRequest: function allRequest() {},
      requests: [{ requeststatus: 'resolved' }]
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AllRequests2.default, props));
    expect(wrapper.find('.green').exists()).toBe(true);
  });
});