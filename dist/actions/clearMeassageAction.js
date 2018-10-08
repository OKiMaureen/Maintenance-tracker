'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('./types');

var clearMessage = function clearMessage() {
  return function (dispatch) {
    return dispatch({ type: _types.CLEAR_MESSAGE });
  };
};

exports.default = clearMessage;