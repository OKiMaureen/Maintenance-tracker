'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = require('../actions/types');

var auth = localStorage.getItem('auth');
var getAuth = JSON.parse(auth);

var initialState = {
  getAuth: getAuth,
  checkStatus: {
    isLoading: false,
    success: false,
    error: false
  }
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.SIGNUP_SUCCESS:
      return _extends({}, state, {
        getAuth: action.user,
        checkStatus: {
          isLoading: false,
          success: true,
          error: false
        }
      });
    case _types.AUTH_LOADING_STATUS:
      return _extends({}, state, {
        checkStatus: {
          isLoading: true,
          success: false,
          error: false
        }
      });
    case _types.AUTH_ERROR:
      return _extends({}, state, {
        error: action.error,
        checkStatus: {
          isLoading: false,
          success: false,
          error: true
        }
      });
    case _types.LOG_OUT:
      return {
        getAuth: {},
        checkStatus: {
          isLoading: false,
          success: false,
          error: false
        }
      };
    default:
      return state;
  }
};

exports.default = authReducer;