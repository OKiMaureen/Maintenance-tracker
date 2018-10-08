'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingStatus = exports.errorMessage = exports.createRequest = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/users/requests/';

var createRequest = exports.createRequest = function createRequest(requestData) {
  return {
    type: _types.CREATE_REQUEST,
    request: requestData
  };
};

var errorMessage = exports.errorMessage = function errorMessage(data) {
  return {
    type: _types.CREATE_ERROR,
    error: data
  };
};

var loadingStatus = exports.loadingStatus = function loadingStatus() {
  return {
    type: _types.CREATE_LOADING_STATUS
  };
};

var createRequestAction = function createRequestAction(request, history) {
  return function (dispatch, getstate, http) {
    var state = getstate();
    var token = state.authUser.getAuth.token;

    _axios2.default.defaults.headers.token = token;
    dispatch(loadingStatus(_types.CREATE_LOADING_STATUS));
    return http.post(baseUrl, request).then(function (res) {
      if (res.status === 201) {
        var id = res.data.data.request.id;

        history.push('/singlerequest/' + id);
        localStorage.setItem('request', JSON.stringify(res.data.data.request));
        dispatch(createRequest(res.data.data.request));
      }
    }).catch(function (error) {
      if (error.response.status === 409) {
        dispatch(errorMessage('This request has already been created, please create another.'));
      }
    });
  };
};
exports.default = createRequestAction;