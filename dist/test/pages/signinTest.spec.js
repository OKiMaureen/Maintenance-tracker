'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Signin = require('../../pages/Signin');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<SignIn />', function () {
  var wrapper = void 0;
  var props = {
    signInAction: function signInAction() {},
    userDetail: {
      authUser: {
        id: 1,
        name: 'maureen',
        email: 'ccureen.eloho@gmail.com',
        role: 'user'
      },
      checkStatus: {
        isLoading: false,
        success: false,
        error: false
      }
    },
    history: {},
    error: ''
  };
  it('Should return number of input field on Signin page', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    (0, _chai.expect)(wrapper.find('input')).to.have.length(2);
  });
  it('stores a snapshot of the component', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));

    expect(wrapper).toMatchSnapshot();
  });
  it('Should return number of button on Signin page', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    (0, _chai.expect)(wrapper.find('button')).to.have.length(1);
  });
  it('Should check if the wrapper contains instance of Signin page', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    (0, _chai.expect)(wrapper.instance()).to.be.instanceof(_Signin.Signin);
  });

  it('the validator function should return true when validation is successfull', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    wrapper.setState({
      email: 'maureen@mail.ru',
      password: 'password'
    });

    var _wrapper$instance = wrapper.instance(),
        validate = _wrapper$instance.validate;

    var result = validate();

    expect(result).toBe(true);
  });
  it('the handlechange function should clear the errors  when valid input is written', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    wrapper.setState({
      email: 'maureen@mail.com',
      password: 'password',
      errors: {
        password: ''
      }
    });

    var _wrapper$instance2 = wrapper.instance(),
        handleChange = _wrapper$instance2.handleChange;

    handleChange({
      target: {
        value: 'password',
        name: 'password'
      }
    });

    expect(wrapper.state().errors.password).toBe('');
  });
  it('Should check if email is supplied on successful Signin', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    var initialState = wrapper.state();
    wrapper.setState(_extends({}, initialState, { email: 'maureen@gmail.com' }));
    (0, _chai.expect)(wrapper.state().email).to.be.equal('maureen@gmail.com');
  });
  it('Should check if password is supplied on successful Signin', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    var initialState = wrapper.state();
    wrapper.setState(_extends({}, initialState, { password: 'maureen' }));
    (0, _chai.expect)(wrapper.state().password).to.be.equal('maureen');
  });
  it('Should handle and store user details', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    (0, _chai.expect)(wrapper.instance().handleChange({ target: { value: 'email' } })).to.be.equal(true);
  });
  it('Should handle and store user details', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    (0, _chai.expect)(wrapper.instance().handleChange({ target: { value: 'password' } })).to.be.equal(true);
  });

  it('Should handle user details validation', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    (0, _chai.expect)(wrapper.instance().validate()).to.be.equal(false);
  });

  it('Should handle signing in a user', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    (0, _chai.expect)(wrapper.instance().handleSubmit({ preventDefault: function preventDefault() {} })).to.be.equal(true);
  });
  it('Should handle loading a loader', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, _extends({}, props, {
      userDetail: {
        checkStatus: {
          isLoading: true
        }
      }
    })));
    expect(wrapper.find('.loader').length).toBe(1);
  });
  it('Should handle loading a not loading on success or error', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, _extends({}, props, {
      userDetail: {
        checkStatus: {
          isLoading: false
        }
      }
    })));
    expect(wrapper.find('.loader').length).toBe(0);
  });
  it('Should handle loading the error message', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, _extends({}, props, {
      userDetail: {
        checkStatus: {
          isLoading: false
        },

        error: 'Email already exists'
      }
    })));
    expect(wrapper.find('.validation-error').length).toBe(1);
  });
  it('Should handle  not loading the error message on success or loading', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, _extends({}, props, {
      userDetail: {
        checkStatus: {
          isLoading: false
        },

        error: ''
      }
    })));
    expect(wrapper.find('.validation-error').length).toBe(0);
  });
  it('Should handle submit method', function () {
    var actual = wrapper.instance().handleSubmit({ preventDefault: function preventDefault() {} });
    expect(actual).toBeDefined();
  });
  it('Should handle submit', function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signin.Signin, props));
    var event = {
      preventDefault: function preventDefault() {}
    };
    expect(wrapper.instance().handleSubmit(event)).toBe(true);
  });
});