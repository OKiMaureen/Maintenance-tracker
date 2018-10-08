'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = require('../actions/types');

var initialState = {
  request: {},
  error: {}
};
var adminSingleRequestReducer = function adminSingleRequestReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.GET_ADMIN_SINGLE_REQUEST:

      return _extends({}, state, {
        request: action.request
      });

    case _types.GET_ADMIN_SINGLE_ERROR:
      return _extends({}, state, {
        error: action.error

      });
    case _types.CHANGE_STATUS:
      return _extends({}, state, {
        request: action.request

      });
    case _types.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

exports.default = adminSingleRequestReducer;