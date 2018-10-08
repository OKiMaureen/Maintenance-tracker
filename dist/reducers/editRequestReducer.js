'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = require('../actions/types');

var initialState = {
  checkStatus: {
    isLoading: false,
    success: false,
    error: false
  }
};
var editRequestReducer = function editRequestReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.EDIT_REQUEST:
      return _extends({}, state, {
        request: action.request,
        checkStatus: {
          isLoading: false,
          success: true,
          error: false
        }
      });
    case _types.EDIT_LOADING_STATUS:
      return _extends({}, state, {
        checkStatus: {
          isLoading: true,
          success: false,
          error: false
        }
      });
    case _types.EDIT_ERROR:
      return _extends({}, state, {
        error: action.error,
        checkStatus: {
          isLoading: false,
          success: false,
          error: true
        }
      });
    case _types.CLEAR_MESSAGE:
      return _extends({}, state, {
        error: '',
        checkStatus: {
          isLoading: false,
          success: false,
          error: false
        }
      });
    case _types.LOG_OUT:
      return {
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

exports.default = editRequestReducer;