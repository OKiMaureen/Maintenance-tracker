'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};
var middleware = [_reduxThunk2.default.withExtraArgument(_axios2.default)];
var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, middleware)));

exports.default = store;