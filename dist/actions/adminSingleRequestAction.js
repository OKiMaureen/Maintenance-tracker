'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateReq = exports.updateStatus = exports.errorMessage = exports.getRequest = undefined;

var _types = require('./types');

var getRequest = exports.getRequest = function getRequest(getARequest) {
  return {
    type: _types.GET_ADMIN_SINGLE_REQUEST,
    request: getARequest
  };
};
var errorMessage = exports.errorMessage = function errorMessage(userData) {
  return {
    type: _types.GET_ADMIN_SINGLE_ERROR,
    error: userData
  };
};
var updateStatus = exports.updateStatus = function updateStatus(request) {
  return {
    type: _types.CHANGE_STATUS,
    request: request
  };
};

var updateReq = exports.updateReq = function updateReq(id, status) {
  return function (dispatch, getstate, http) {
    var state = getstate();
    var token = state.authUser.getAuth.token;

    return http('https://maintenance-tracker-app.herokuapp.com/api/v1/requests/' + id + '/' + status, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        token: token
      }
    }).then(function (res) {
      dispatch(updateStatus(res.data.data.request));
    }).catch(function (error) {
      dispatch(errorMessage(error.response));
    });
  };
};

var AdminGetSingleRequestAction = function AdminGetSingleRequestAction(id) {
  return function (dispatch, getstate, http) {
    var state = getstate();
    var token = state.authUser.getAuth.token;

    return http.get('https://maintenance-tracker-app.herokuapp.com/api/v1/requests/' + id, {
      headers: {
        'Content-Type': 'application/json',
        token: token
      }
    }).then(function (res) {
      dispatch(getRequest(res.data.data.request));
    }).catch(function (error) {
      dispatch(errorMessage(error.response));
    });
  };
};
exports.default = AdminGetSingleRequestAction;