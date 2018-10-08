'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingStatus = exports.signupUserError = exports.signupUser = undefined;

var _types = require('./types');

var baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/auth/signup/';

var signupUser = exports.signupUser = function signupUser(userData) {
  return {
    type: _types.SIGNUP_SUCCESS,
    user: userData
  };
};

var signupUserError = exports.signupUserError = function signupUserError(userData) {
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

var signUpAction = function signUpAction(userData, history) {
  return function (dispatch, getState, http) {
    dispatch(loadingStatus(_types.AUTH_LOADING_STATUS));
    return http.post(baseUrl, userData).then(function (res) {
      if (res.data.data.user.role === 'user') {
        history.push('/createrequest');
      }
      localStorage.setItem('auth', JSON.stringify(res.data.data));
      dispatch(signupUser(res.data.data));
    }).catch(function (error) {
      if (error.response.status === 409) {
        dispatch(signupUserError('Email already exists'));
      }
    });
  };
};
exports.default = signUpAction;