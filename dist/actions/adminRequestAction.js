'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessage = exports.getRequests = undefined;

var _types = require('./types');

var url = 'https://maintenance-tracker-app.herokuapp.com/api/v1/requests';

var getRequests = exports.getRequests = function getRequests(getAllRequests) {
  return {
    type: _types.GET_ADMIN_REQUESTS,
    payload: getAllRequests
  };
};

var errorMessage = exports.errorMessage = function errorMessage(userData) {
  return {
    type: _types.GET_ADMIN_ERROR,
    error: userData
  };
};

var getAdminRequestsAction = function getAdminRequestsAction() {
  return function (dispatch, getstate, http) {
    var state = getstate();
    var token = state.authUser.getAuth.token;

    return http.get(url, {
      headers: {
        'Content-Type': 'application/json',
        token: token
      }
    }).then(function (res) {
      dispatch(getRequests(res.data.data.request));
    }).catch(function (error) {
      dispatch(errorMessage(error.response));
    });
  };
};
exports.default = getAdminRequestsAction;