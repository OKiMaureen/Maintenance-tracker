'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminRequests = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _adminRequestAction = require('../actions/adminRequestAction');

var _adminRequestAction2 = _interopRequireDefault(_adminRequestAction);

var _AllRequests = require('../components/AllRequests');

var _AllRequests2 = _interopRequireDefault(_AllRequests);

var _logoutAction = require('../actions/logoutAction');

var _logoutAction2 = _interopRequireDefault(_logoutAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminRequests = exports.AdminRequests = function (_Component) {
  _inherits(AdminRequests, _Component);

  function AdminRequests() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AdminRequests);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AdminRequests.__proto__ || Object.getPrototypeOf(AdminRequests)).call.apply(_ref, [this].concat(args))), _this), _this.logout = function () {
      var _this$props = _this.props,
          history = _this$props.history,
          logout = _this$props.logout;

      logout();
      localStorage.clear();
      history.push('/');
      return true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AdminRequests, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var adminRequests = this.props.adminRequests;

      adminRequests();
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
          linkRoute: '/adminrequests',
          linkText: 'All Requests',
          route: '/requestdetails/'
        })
      );
    }
  }]);

  return AdminRequests;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    requests: state.adminRequests.adminRequests,
    error: state.adminRequests.error,
    userDetail: state.authUser

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    adminRequests: _adminRequestAction2.default,
    logout: _logoutAction2.default
  }, dispatch);
};

AdminRequests.propTypes = {
  requests: _propTypes2.default.shape({
    checkStatus: _propTypes2.default.object,
    error: _propTypes2.default.string
  }).isRequired,
  adminRequests: _propTypes2.default.func.isRequired,
  logout: _propTypes2.default.func.isRequired,
  history: _propTypes2.default.objectOf(_propTypes2.default.object).isRequired
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AdminRequests);