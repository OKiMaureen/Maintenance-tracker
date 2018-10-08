'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _home = require('./pages/home');

var _home2 = _interopRequireDefault(_home);

var _Signin = require('./pages/Signin');

var _Signin2 = _interopRequireDefault(_Signin);

var _Signup = require('./pages/Signup');

var _Signup2 = _interopRequireDefault(_Signup);

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _AllRequests = require('./pages/AllRequests');

var _AllRequests2 = _interopRequireDefault(_AllRequests);

var _CreateRequest = require('./pages/CreateRequest');

var _CreateRequest2 = _interopRequireDefault(_CreateRequest);

var _AdminCreateRequest = require('./pages/AdminCreateRequest');

var _AdminCreateRequest2 = _interopRequireDefault(_AdminCreateRequest);

var _editrequest = require('./pages/editrequest');

var _editrequest2 = _interopRequireDefault(_editrequest);

var _AdminRequests = require('./pages/AdminRequests');

var _AdminRequests2 = _interopRequireDefault(_AdminRequests);

var _SingleRequest = require('./pages/SingleRequest');

var _SingleRequest2 = _interopRequireDefault(_SingleRequest);

var _AdminGetSingleRequest = require('./pages/AdminGetSingleRequest');

var _AdminGetSingleRequest2 = _interopRequireDefault(_AdminGetSingleRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/signin', component: _Signin2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _Signup2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/allrequests', component: _AllRequests2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/createrequest', component: _CreateRequest2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/admincreaterequest', component: _AdminCreateRequest2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/editrequest/:id', component: _editrequest2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/adminrequests', component: _AdminRequests2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/singlerequest/:id', component: _SingleRequest2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/requestdetails/:id', component: _AdminGetSingleRequest2.default })
    )
  );
};

exports.default = Routes;