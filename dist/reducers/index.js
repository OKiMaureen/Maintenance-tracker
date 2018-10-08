'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _authReducer = require('./authReducer');

var _authReducer2 = _interopRequireDefault(_authReducer);

var _getAllRequestsReducer = require('./getAllRequestsReducer');

var _getAllRequestsReducer2 = _interopRequireDefault(_getAllRequestsReducer);

var _adminRequestsReducer = require('./adminRequestsReducer');

var _adminRequestsReducer2 = _interopRequireDefault(_adminRequestsReducer);

var _createRequestReducer = require('./createRequestReducer');

var _createRequestReducer2 = _interopRequireDefault(_createRequestReducer);

var _editRequestReducer = require('./editRequestReducer');

var _editRequestReducer2 = _interopRequireDefault(_editRequestReducer);

var _singleRequestReducer = require('./singleRequestReducer');

var _singleRequestReducer2 = _interopRequireDefault(_singleRequestReducer);

var _adminGetSingleRequest = require('./adminGetSingleRequest');

var _adminGetSingleRequest2 = _interopRequireDefault(_adminGetSingleRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  authUser: _authReducer2.default,
  requests: _getAllRequestsReducer2.default,
  adminRequests: _adminRequestsReducer2.default,
  createRequest: _createRequestReducer2.default,
  editRequest: _editRequestReducer2.default,
  singleRequest: _singleRequestReducer2.default,
  adminSingleRequest: _adminGetSingleRequest2.default
});

exports.default = rootReducer;