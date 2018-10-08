'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signup = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validatorjs = require('validatorjs');

var _validatorjs2 = _interopRequireDefault(_validatorjs);

var _redux = require('redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _signUpAction = require('../actions/signUpAction');

var _signUpAction2 = _interopRequireDefault(_signUpAction);

var _spinloader = require('../assets/images/spinloader.gif');

var _spinloader2 = _interopRequireDefault(_spinloader);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = exports.Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {}
    }, _this.validate = function () {
      var validations = new _validatorjs2.default({
        name: _this.state.name,
        email: _this.state.email,
        password: _this.state.password,
        password_confirmation: _this.state.password_confirmation
      }, {
        name: ['required', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i', 'min:3', 'max:15', 'string'],
        email: 'required|email|string',
        password: 'required|min:8|max:30|string',
        password_confirmation: 'required'
      }, {
        'min.password': 'The :attribute must not be less than 9 characters.',
        'max.password': 'The :attribute must not be greater than 30 characters.'
      });
      if (validations.fails()) {
        var errors = validations.errors.all();
        _this.setState({
          errors: errors
        });

        return false;
      }

      return true;
    }, _this.handleChange = function (e) {
      if (_this.validate()) {
        _this.setState({
          errors: _extends({}, _this.state.errors, _defineProperty({}, e.target.name, ''))
        });
      }
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
      return true;
    }, _this.handleSubmit = function (event) {
      event.preventDefault();
      if (_this.state.password !== _this.state.password_confirmation) {
        _this.setState({
          errors: {
            password_confirmation: ['Password and password confirmation must be the same']
          }
        });
      }

      if (_this.validate()) {
        _this.props.signUpAction(_this.state, _this.props.history);
      }
      return true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /**
   * @constructor
   * @param {*} props
   */


  _createClass(Signup, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Header2.default,
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'Home'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/signin' },
            'Sign In'
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'form' },
          _react2.default.createElement(
            'article',
            { className: 'card' },
            _react2.default.createElement(
              'form',
              { id: 'signupForm' },
              _react2.default.createElement(
                'h3',
                null,
                'Sign Up'
              ),
              _react2.default.createElement('br', null),
              this.props.userDetail.checkStatus.isLoading ? _react2.default.createElement(
                'span',
                { className: 'loader' },
                _react2.default.createElement('img', { src: _spinloader2.default, alt: 'loader' })
              ) : '',
              _react2.default.createElement('input', { type: 'text', id: 'name', name: 'name', placeholder: 'Name', onChange: this.handleChange }),
              this.state.errors.name ? this.state.errors.name.map(function (error) {
                return _react2.default.createElement(
                  'span',
                  { className: 'validation-error', key: error },
                  error
                );
              }) : '',
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { type: 'text', id: 'email', name: 'email', placeholder: 'Email', onChange: this.handleChange, required: true }),
              this.state.errors.email ? this.state.errors.email.map(function (error) {
                return _react2.default.createElement(
                  'span',
                  { className: 'validation-error', key: error },
                  error
                );
              }) : '',
              this.props.userDetail.error ? _react2.default.createElement(
                'span',
                { className: 'validation-error' },
                this.props.userDetail.error
              ) : '',
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { type: 'password', id: 'password', name: 'password', placeholder: 'Password', onChange: this.handleChange, required: true }),
              this.state.errors.password ? this.state.errors.password.map(function (error) {
                return _react2.default.createElement(
                  'span',
                  { className: 'validation-error', key: error },
                  error
                );
              }) : '',
              _react2.default.createElement('br', null),
              _react2.default.createElement('input', { type: 'password', id: 'confirmPassword', name: 'password_confirmation', placeholder: 'Confirm Password', onChange: this.handleChange, required: true }),
              this.state.errors.password_confirmation ? this.state.errors.password_confirmation.map(function (error) {
                return _react2.default.createElement(
                  'span',
                  { className: 'validation-error', key: error },
                  error
                );
              }) : '',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'button',
                { type: 'submit', className: 'button', id: 'signupBtn', onClick: this.handleSubmit },
                'Sign Up'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Already have an account?',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/signin' },
                  'Sign In'
                )
              )
            )
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Signup;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userDetail: state.authUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    signUpAction: _signUpAction2.default
  }, dispatch);
};

Signup.propTypes = {
  userDetail: _propTypes2.default.shape({
    checkStatus: _propTypes2.default.object,
    error: _propTypes2.default.string
  }).isRequired,
  signUpAction: _propTypes2.default.func.isRequired,
  history: _propTypes2.default.objectOf(_propTypes2.default.object).isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Signup);