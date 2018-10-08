'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

require('./assets/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint:disable react/jsx-filename-extension */

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_router2.default, null)
  );
};
(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));