'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _spinloader = require('../assets/images/spinloader.gif');

var _spinloader2 = _interopRequireDefault(_spinloader);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateRequest = function CreateRequest(_ref) {
  var handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      title = _ref.title,
      description = _ref.description,
      department = _ref.department,
      equipment = _ref.equipment,
      logout = _ref.logout,
      requestDetail = _ref.requestDetail,
      userDetail = _ref.userDetail,
      errors = _ref.errors,
      titleText = _ref.titleText,
      buttonText = _ref.buttonText,
      editRequest = _ref.editRequest;
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
        'Create request'
      ),
      ' ',
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/allrequests' },
        'My requests'
      ),
      ' ',
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'button',
          { className: 'header-btn', onClick: logout },
          'Logout'
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { className: 'request' },
      _react2.default.createElement(
        'article',
        { className: 'request-card' },
        _react2.default.createElement(
          'form',
          { className: 'request-form' },
          _react2.default.createElement(
            'h3',
            null,
            titleText
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            null,
            'Fill the form below to indicate equipments in need of repair or maintenance'
          ),
          _react2.default.createElement('br', null),
          editRequest.error ? _react2.default.createElement(
            'span',
            { className: 'validation-error' },
            editRequest.error
          ) : '',
          requestDetail.error ? _react2.default.createElement(
            'span',
            { className: 'validation-error' },
            requestDetail.error
          ) : '',
          userDetail.checkStatus.isLoading ? _react2.default.createElement(
            'span',
            { className: 'loader' },
            _react2.default.createElement('img', { src: _spinloader2.default, alt: 'loader' })
          ) : '',
          _react2.default.createElement('input', { type: 'text', name: 'department', value: department, id: 'department', placeholder: 'Department', onChange: handleChange }),
          errors.department ? errors.department.map(function (error) {
            return _react2.default.createElement(
              'span',
              { className: 'validation-error', key: error },
              error
            );
          }) : '',
          _react2.default.createElement('p', { className: 'message', id: 'departmentE' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('input', { type: 'text', name: 'equipment', value: equipment, id: 'equipment', placeholder: 'Equipment', onChange: handleChange }),
          errors.equipment ? errors.equipment.map(function (error) {
            return _react2.default.createElement(
              'span',
              { className: 'validation-error', key: error },
              error
            );
          }) : '',
          _react2.default.createElement('p', { className: 'message', id: 'equipmentE' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('input', { type: 'text', name: 'title', value: title, id: 'requestTitle', placeholder: 'Request Title', onChange: handleChange }),
          errors.title ? errors.title.map(function (error) {
            return _react2.default.createElement(
              'span',
              { className: 'validation-error', key: error },
              error
            );
          }) : '',
          _react2.default.createElement('p', { className: 'message', id: 'titleE' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('textarea', { name: 'description', value: description, id: 'requestDescription', cols: '20', rows: '5', placeholder: 'Request Description', onChange: handleChange }),
          errors.description ? errors.description.map(function (error) {
            return _react2.default.createElement(
              'span',
              { className: 'validation-error', key: error },
              error
            );
          }) : '',
          _react2.default.createElement('p', { className: 'message', id: 'descriptionE' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'button', id: 'createRequest', onClick: handleSubmit },
            buttonText
          )
        )
      )
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
};

CreateRequest.propTypes = {
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
  }),
  logout: _propTypes2.default.func.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  errors: _propTypes2.default.shape({}).isRequired,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  department: _propTypes2.default.string,
  equipment: _propTypes2.default.string,
  titleText: _propTypes2.default.string,
  buttonText: _propTypes2.default.string
};

CreateRequest.defaultProps = {
  title: '',
  description: '',
  department: '',
  equipment: '',
  titleText: '',
  buttonText: '',
  editRequest: _propTypes2.default.shape({
    checkStatus: _propTypes2.default.object,
    error: _propTypes2.default.string
  })
};

exports.default = CreateRequest;