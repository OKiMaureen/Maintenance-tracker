'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Request = require('../../components/Request');

var _Request2 = _interopRequireDefault(_Request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Create request component test', function () {
  var props = {
    handleChange: function handleChange() {},
    handleSubmit: function handleSubmit() {},
    title: 'title',
    description: 'description',
    equipment: 'equipment',
    logout: function logout() {}

  };
  var requestDetail = {
    error: 'error'
  };
  var userDetail = {
    checkStatus: {
      isLoading: 'isloading'
    }
  };
  var errors = {
    department: [],
    equipment: [],
    title: [],
    description: []
  };
  it('Should render properly', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Request2.default, {
      props: props,
      requestDetail: requestDetail,
      userDetail: userDetail,
      errors: errors
    }));
    expect(wrapper.find('article').length).toEqual(1);
  });
  it('Should show errors for department', function () {
    errors = {
      department: ['department error'],
      equipment: ['equipment error'],
      title: ['title error'],
      description: ['description error']
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Request2.default, {
      props: props,
      requestDetail: requestDetail,
      userDetail: userDetail,
      errors: errors
    }));
    expect(wrapper.find('.validation-error').length).toEqual(5);
  });
  it('Should not show errors for department', function () {
    errors = {};
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Request2.default, {
      props: props,
      requestDetail: requestDetail,
      userDetail: userDetail,
      errors: errors
    }));
    expect(wrapper.find('.validation-error').length).toEqual(1);
  });
  it('Should show loader when loading', function () {
    userDetail = {
      checkStatus: {
        isLoading: true
      }
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Request2.default, {
      props: props,
      requestDetail: requestDetail,
      userDetail: userDetail,
      errors: errors
    }));
    expect(wrapper.find('.loader').length).toEqual(1);
  });
  it('Should not show loader when not loading', function () {
    userDetail = {
      checkStatus: {
        isLoading: false
      }
    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Request2.default, {
      props: props,
      requestDetail: requestDetail,
      userDetail: userDetail,
      errors: errors
    }));
    expect(wrapper.find('.loader').length).toEqual(0);
  });
  it('Should  show error when no request is available', function () {
    requestDetail = {

      error: true

    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Request2.default, {
      props: props,
      requestDetail: requestDetail,
      userDetail: userDetail,
      errors: errors
    }));
    expect(wrapper.find('.validation-error').length).toEqual(1);
  });
  it('Should not show error when  request is available', function () {
    requestDetail = {

      error: false

    };
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Request2.default, {
      props: props,
      requestDetail: requestDetail,
      userDetail: userDetail,
      errors: errors
    }));
    expect(wrapper.find('.validation-error').length).toEqual(0);
  });
});