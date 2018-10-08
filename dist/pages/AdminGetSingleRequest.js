'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminSingleRequest = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _redux = require('redux');

var _shortId = require('short-id');

var _shortId2 = _interopRequireDefault(_shortId);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _adminSingleRequestAction = require('../actions/adminSingleRequestAction');

var _adminSingleRequestAction2 = _interopRequireDefault(_adminSingleRequestAction);

var _logoutAction = require('../actions/logoutAction');

var _logoutAction2 = _interopRequireDefault(_logoutAction);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminSingleRequest = exports.AdminSingleRequest = function (_Component) {
  _inherits(AdminSingleRequest, _Component);

  function AdminSingleRequest() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AdminSingleRequest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AdminSingleRequest.__proto__ || Object.getPrototypeOf(AdminSingleRequest)).call.apply(_ref, [this].concat(args))), _this), _this.logout = function () {
      var _this$props = _this.props,
          history = _this$props.history,
          logout = _this$props.logout;

      logout();
      localStorage.clear();
      history.push('/');
      return true;
    }, _this.updateRequest = function (e) {
      var status = e.target.id;
      var _this$props2 = _this.props,
          update = _this$props2.update,
          oneRequest = _this$props2.oneRequest;

      update(oneRequest.id, status);
      return true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AdminSingleRequest, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          adminSingleRequest = _props.adminSingleRequest,
          match = _props.match;

      adminSingleRequest(match.params.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var oneRequest = this.props.oneRequest;

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
            { to: '/createrequest' },
            'Create Request'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/adminrequests' },
            'All requests'
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
        _react2.default.createElement(
          'section',
          { className: 'allrequests' },
          oneRequest ? _react2.default.createElement(
            'div',
            { className: 'detailsrequest-card', key: _shortId2.default.generate() },
            _react2.default.createElement(
              'div',
              { className: 'status' },
              oneRequest.requeststatus === 'approved' || oneRequest.requeststatus === 'resolved' ? _react2.default.createElement(
                'button',
                { id: 'approve', className: 'disabled', disabled: true, onClick: this.updateRequest },
                'Approve'
              ) : _react2.default.createElement(
                'button',
                { className: 'green', id: 'approve', onClick: this.updateRequest },
                'Approve'
              ),
              oneRequest.requeststatus === 'disapproved' || oneRequest.requeststatus === 'resolved' ? _react2.default.createElement(
                'button',
                { id: 'disapprove', className: 'disabled', disabled: true, onClick: this.updateRequest },
                'Disapprove'
              ) : _react2.default.createElement(
                'button',
                { className: 'red', id: 'disapprove', onClick: this.updateRequest },
                'Disapprove'
              ),
              oneRequest.requeststatus === 'disapproved' || oneRequest.requeststatus === 'resolved' || oneRequest.requeststatus === 'pending' ? _react2.default.createElement(
                'button',
                { id: 'resolved', className: 'disabled', disabled: true, onClick: this.updateRequest },
                'Resolve'
              ) : _react2.default.createElement(
                'button',
                { className: 'green', id: 'resolve', onClick: this.updateRequest },
                'Resolve'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'label',
                null,
                'Title:'
              ),
              oneRequest.title
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'label',
                null,
                'Department:'
              ),
              oneRequest.department
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'label',
                null,
                'Equipment: '
              ),
              oneRequest.equipment
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'label',
                null,
                'Description: '
              ),
              oneRequest.description
            ),
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'status fixed' },
                oneRequest.requeststatus === 'pending' ? _react2.default.createElement(
                  'label',
                  { className: 'yellow' },
                  oneRequest.requeststatus
                ) : '',
                oneRequest.requeststatus === 'approved' ? _react2.default.createElement(
                  'label',
                  { className: 'green' },
                  oneRequest.requeststatus
                ) : '',
                oneRequest.requeststatus === 'disapproved' ? _react2.default.createElement(
                  'label',
                  { className: 'red' },
                  oneRequest.requeststatus
                ) : '',
                oneRequest.requeststatus === 'resolved' ? _react2.default.createElement(
                  'label',
                  { className: 'green' },
                  oneRequest.requeststatus
                ) : ''
              )
            )
          ) : ''
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return AdminSingleRequest;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    oneRequest: state.adminSingleRequest.request,
    userDetail: state.authUser,
    logout: _logoutAction2.default

  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    adminSingleRequest: _adminSingleRequestAction2.default,
    update: _adminSingleRequestAction.updateReq,
    disapprove: _adminSingleRequestAction.disapproveRequest,
    resolve: _adminSingleRequestAction.resolveRequest

  }, dispatch);
};

AdminSingleRequest.propTypes = {
  oneRequest: _propTypes2.default.shape({
    checkStatus: _propTypes2.default.object,
    error: _propTypes2.default.string
  }).isRequired,
  adminSingleRequest: _propTypes2.default.func.isRequired,
  update: _propTypes2.default.func.isRequired,
  logout: _propTypes2.default.func.isRequired,
  match: _propTypes2.default.func.isRequired,
  history: _propTypes2.default.objectOf(_propTypes2.default.object).isRequired
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AdminSingleRequest);