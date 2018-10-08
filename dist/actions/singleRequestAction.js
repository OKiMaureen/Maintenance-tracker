'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessage = exports.getARequest = undefined;

var _types = require('./types');

var getARequest = exports.getARequest = function getARequest(getSingleRequest) {
  return {
    type: _types.GET_SINGLE_REQUEST,
    request: getSingleRequest
  };
};

var errorMessage = exports.errorMessage = function errorMessage(userData) {
  return {
    type: _types.SINGLE_REQUEST_ERROR,
    error: userData
  };
};

var getARequestAction = function getARequestAction(id) {
  return function (dispatch, getstate, http) {
    var state = getstate();
    var token = state.authUser.getAuth.token;

    return http.get('https://maintenance-tracker-app.herokuapp.com/api/v1/users/requests/' + id, {
      headers: {
        'Content-Type': 'application/json',
        token: token
      }
    }).then(function (res) {
      dispatch(getARequest(res.data.data.request));
    }).catch(function (error) {
      dispatch(errorMessage(error.response));
    });
  };
};
exports.default = getARequestAction;