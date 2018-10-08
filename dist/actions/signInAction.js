'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingStatus = exports.signinUserError = exports.signinUser = undefined;

var _types = require('./types');

var baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/auth/login/';

var signinUser = exports.signinUser = function signinUser(userData) {
  return {
    type: _types.SIGNUP_SUCCESS,
    user: userData
  };
};

var signinUserError = exports.signinUserError = function signinUserError(userData) {
  return {
    type: _types.AUTH_ERROR,
    error: userData
  };
};

var loadingStatus = exports.loadingStatus = function loadingStatus() {
  return {
    type: _types.AUTH_LOADING_STATUS
  };
};
/**
 * @description This method add new user to the database
 * @param {object} userData
 * @param {object} history
 * @returns {promise}
 */

var signInAction = function signInAction(userData, history) {
  return function (dispatch, getState, http) {
    dispatch(loadingStatus(_types.AUTH_LOADING_STATUS));
    return http.post(baseUrl, userData).then(function (res) {
      if (res.data.data.user.role === 'user') {
        history.push('/createrequest');
      } else if (res.data.data.user.role === 'admin') {
        history.push('/admincreaterequest');
      }
      localStorage.setItem('auth', JSON.stringify(res.data.data));
      localStorage.setItem('token', JSON.stringify(res.data.data.token));
      dispatch(signinUser(res.data.data));
    }).catch(function (error) {
      if (error.response.status === 401) {
        dispatch(signinUserError(error.response.data.message));
      }
    });
  };
};
exports.default = signInAction;