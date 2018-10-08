'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logoutAction = function logoutAction() {
  return function (dispatch) {
    delete _axios2.default.defaults.headers;
    return dispatch({ type: _types.LOG_OUT });
  };
};

exports.default = logoutAction;