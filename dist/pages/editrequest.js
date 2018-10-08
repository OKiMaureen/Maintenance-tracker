'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditRequest = undefined;

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

var _editRequestAction = require('../actions/editRequestAction');

var _editRequestAction2 = _interopRequireDefault(_editRequestAction);

var _clearMeassageAction = require('../actions/clearMeassageAction');

var _clearMeassageAction2 = _interopRequireDefault(_clearMeassageAction);

var _logoutAction = require('../actions/logoutAction');

var _logoutAction2 = _interopRequireDefault(_logoutAction);

var _Request = require('../components/Request');

var _Request2 = _interopRequireDefault(_Request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditRequest = exports.EditRequest = function (_Component) {
  _inherits(EditRequest, _Component);

  function EditRequest(props) {
    _classCallCheck(this, EditRequest);

    var _this = _possibleConstructorReturn(this, (EditRequest.__proto__ || Object.getPrototypeOf(EditRequest)).call(this, props));

    _this.validate = function () {
      var validations = new _validatorjs2.default({
        department: _this.state.department,
        equipment: _this.state.equipment,
        serialnumber: _this.state.serialnumber,
        title: _this.state.title,
        description: _this.state.description
      }, {
        title: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i', 'min:5', 'max:20'],
        department: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i'],
        equipment: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i'],
        serialnumber: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i', 'min:8', 'max:8'],
        description: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i', 'min:3', 'max:50']
      }, {
        'min.title': 'The :attribute must not be less than 5 characters.',
        'max.title': 'The :attribute must not be greater than 20 characters.',
        'min.serialnumber': 'The :attribute must be only 8 characters.',
        'max.serialnumber': 'The :attribute must be only 8 characters.',
        'min.description': 'The :attribute must not be less than 3 characters.',
        'max.description': 'The :attribute must not be greater than 50 characters.'
      });
      if (validations.fails()) {
        var errors = validations.errors.all();
        _this.setState({
          errors: errors
        });

        return false;
      }

      return true;
    };

    _this.handleChange = function (e) {
      if (_this.validate()) {
        _this.setState({
          errors: _extends({}, _this.state.errors, _defineProperty({}, e.target.name, ''))
        });
      }
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
      var _this$props = _this.props,
          clearMessage = _this$props.clearMessage,
          requestDetail = _this$props.requestDetail;

      if (requestDetail.error) clearMessage();
      return true;
    };

    _this.handleSubmit = function (event) {
      var _this$props2 = _this.props,
          match = _this$props2.match,
          history = _this$props2.history,
          updateRequest = _this$props2.updateRequest;

      event.preventDefault();
      if (_this.validate()) {
        updateRequest(_this.state, match.params.id, history);
      }
      return true;
    };

    _this.logout = function () {
      var _this$props3 = _this.props,
          history = _this$props3.history,
          logout = _this$props3.logout;

      logout();
      localStorage.clear();
      history.push('/');
      return true;
    };

    var request = props.request;

    _this.state = {
      department: request.department || '',
      equipment: request.equipment || '',
      serialnumber: '11111111',
      title: request.title || '',
      description: request.description || '',
      errors: {}
    };
    return _this;
  }

  _createClass(EditRequest, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          requestDetail = _props.requestDetail,
          userDetail = _props.userDetail,
          editRequest = _props.editRequest;
      var _state = this.state,
          title = _state.title,
          description = _state.description,
          equipment = _state.equipment,
          errors = _state.errors,
          department = _state.department;

      return _react2.default.createElement(_Request2.default, {
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        title: title,
        description: description,
        equipment: equipment,
        logout: this.logout,
        editRequest: editRequest,
        requestDetail: requestDetail,
        userDetail: userDetail,
        errors: errors,
        department: department,
        titleText: 'Edit Article',
        buttonText: 'Submit'
      });
    }
  }]);

  return EditRequest;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    request: state.singleRequest.request,
    requestDetail: state.createRequest,
    userDetail: state.authUser,
    editRequest: state.editRequest
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    clearMessage: _clearMeassageAction2.default,
    logout: _logoutAction2.default,
    updateRequest: _editRequestAction2.default
  }, dispatch);
};

EditRequest.propTypes = {
  request: _propTypes2.default.shape({
    checkStatus: _propTypes2.default.object,
    error: _propTypes2.default.string
  }).isRequired,
  requestDetail: _propTypes2.default.shape({
    checkStatus: _propTypes2.default.object,
    error: _propTypes2.default.string
  }).isRequired,
  userDetail: _propTypes2.default.shape({
    checkStatus: _propTypes2.default.object,
    error: _propTypes2.default.string
  }).isRequired,
  editRequest: _propTypes2.default.shape({
    checkStatus: _propTypes2.default.object,
    error: _propTypes2.default.string
  }).isRequired,
  updateRequest: _propTypes2.default.func.isRequired,
  clearMessage: _propTypes2.default.func.isRequired,
  logout: _propTypes2.default.func.isRequired,
  history: _propTypes2.default.objectOf(_propTypes2.default.object).isRequired,
  match: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditRequest);