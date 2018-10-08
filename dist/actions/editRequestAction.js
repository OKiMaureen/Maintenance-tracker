'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingStatus = exports.errorMessage = exports.editRequest = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editRequest = exports.editRequest = function editRequest(requestData) {
  return {
    type: _types.EDIT_REQUEST,
    request: requestData
  };
};

var errorMessage = exports.errorMessage = function errorMessage(data) {
  return {
    type: _types.EDIT_ERROR,
    error: data
  };
};

var loadingStatus = exports.loadingStatus = function loadingStatus() {
  return {
    type: _types.EDIT_LOADING_STATUS
  };
};

var editRequestAction = function editRequestAction(request, requestId, history) {
  return function (dispatch, getstate, http) {
    var state = getstate();
    var token = state.authUser.getAuth.token;

    _axios2.default.defaults.headers.token = token;
    dispatch(loadingStatus(_types.EDIT_LOADING_STATUS));
    return http.put('https://maintenance-tracker-app.herokuapp.com/api/v1/users/requests/' + requestId, request, {
      headers: {
        'Content-Type': 'application/json',
        token: token
      }
    }).then(function (res) {
      if (res.status === 200) {
        var id = res.data.data.updatedRequest.id;

        history.push('/singlerequest/' + id);
        localStorage.setItem('request', JSON.stringify(res.data.data.updatedRequest));
        dispatch(editRequest(res.data.data.updatedRequest));
      }
    }).catch(function (error) {
      if (error.response.status === 409) {
        dispatch(errorMessage('This request has already been created, please create another.'));
      }
    });
  };
};
exports.default = editRequestAction;