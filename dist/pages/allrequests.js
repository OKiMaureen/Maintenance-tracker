'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllRequests = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _allRequestAction = require('../actions/allRequestAction');

var _allRequestAction2 = _interopRequireDefault(_allRequestAction);

var _AllRequests = require('../components/AllRequests');

var _AllRequests2 = _interopRequireDefault(_AllRequests);

var _logoutAction = require('../actions/logoutAction');

var _logoutAction2 = _interopRequireDefault(_logoutAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllRequests = exports.AllRequests = function (_Component) {
  _inherits(AllRequests, _Component);

  function AllRequests() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AllRequests);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AllRequests.__proto__ || Object.getPrototypeOf(AllRequests)).call.apply(_ref, [this].concat(args))), _this), _this.logout = function () {
      var _this$props = _this.props,
          history = _this$props.history,
          logout = _this$props.logout;

      logout();
      localStorage.clear();
      history.push('/');
      return true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AllRequests, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var allRequest = this.props.allRequest;

      allRequest();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$requests = this.props.requests,
          requests = _props$requests === undefined ? [] : _props$requests;

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
            { to: 'admincreaterequest' },
            'Create Request'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'current', to: 'adminrequest' },
            'All Request'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              { className: 'header-btn', onClick: this.logout },
              'Logout'
            )
          )
        ),
        _react2.default.createElement(_AllRequests2.default, {
          requests: requests,
          logout: this.logout,
          linkRoute: '/allrequests',
          linkText: 'My Requests',
          route: '/singlerequest/'
        })
      );
    }
  }]);

  return AllRequests;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    requests: state.requests.requests,
    error: state.requests.error,
    userDetail: state.authUser

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    allRequest: _allRequestAction2.default,
    logout: _logoutAction2.default
  }, dispatch);
};

AllRequests.propTypes = {
  requests: _propTypes2.default.shape({
    checkStatus: _propTypes2.default.object,
    error: _propTypes2.default.string
  }).isRequired,
  allRequest: _propTypes2.default.func.isRequired,
  logout: _propTypes2.default.func.isRequired,
  history: _propTypes2.default.objectOf(_propTypes2.default.object).isRequired
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AllRequests);