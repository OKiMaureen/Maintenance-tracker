'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _shortId = require('short-id');

var _shortId2 = _interopRequireDefault(_shortId);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AllRequestsComponent = function AllRequestsComponent(_ref) {
  var requests = _ref.requests,
      route = _ref.route;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'section',
      { className: 'allrequests' },
      requests && requests.length !== 0 ? requests.map(function (request) {
        return _react2.default.createElement(
          'div',
          { className: 'requests-card', key: _shortId2.default.generate },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'label',
              null,
              'Title:'
            ),
            request.title
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'label',
              null,
              'Description: '
            ),
            request.description
          ),
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'status fixed' },
              request.requeststatus === 'pending' ? _react2.default.createElement(
                'label',
                { className: 'yellow' },
                request.requeststatus
              ) : '',
              request.requeststatus === 'approved' ? _react2.default.createElement(
                'label',
                { className: 'green' },
                request.requeststatus
              ) : '',
              request.requeststatus === 'disapproved' ? _react2.default.createElement(
                'label',
                { className: 'red' },
                request.requeststatus
              ) : '',
              request.requeststatus === 'resolved' ? _react2.default.createElement(
                'label',
                { className: 'green' },
                request.requeststatus
              ) : ''
            ),
            _react2.default.createElement(
              'div',
              { className: 'status flex-item ' },
              _react2.default.createElement(
                'p',
                null,
                request && request.id ? _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '' + route + request.id },
                  ' More'
                ) : _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '' + route + request.requestid },
                  ' More'
                )
              )
            )
          )
        );
      }) : _react2.default.createElement(
        'div',
        { className: 'requests-card no-request' },
        _react2.default.createElement(
          'p',
          { className: 'message-centered' },
          'You do not have any requests to yet!!!'
        )
      )
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
};

AllRequestsComponent.propTypes = {
  requests: _propTypes2.default.shape([{
    title: _propTypes2.default.string,
    description: _propTypes2.default.string,
    requeststatus: _propTypes2.default.bool
  }, {
    title: _propTypes2.default.string,
    description: _propTypes2.default.string,
    requeststatus: _propTypes2.default.bool
  }]).isRequired,
  route: _propTypes2.default.string.isRequired
};

exports.default = AllRequestsComponent;