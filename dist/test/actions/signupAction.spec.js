'use strict';

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _signUpAction = require('../../actions/signUpAction');

var _signUpAction2 = _interopRequireDefault(_signUpAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('signup Action', function () {
  it('should sucessfully sign up users and redirect to /createrequest', function () {
    var middleware = [_reduxThunk2.default.withExtraArgument({
      post: function post() {
        return Promise.resolve({
          data: {
            data: {
              user: {
                role: 'user',
                id: 1
              }
            }
          }
        });
      }
    })];
    var mockStore = (0, _reduxMockStore2.default)(middleware);
    var details = {
      name: 'name',
      email: 'email',
      password: 'password',
      password_confirmation: 'confirm',
      errors: {},
      role: 'user'
    };
    var history = {
      push: jest.fn()
    };
    var store = mockStore({});

    return store.dispatch((0, _signUpAction2.default)(details, history)).then(function () {
      expect(history.push).toHaveBeenCalledWith('/createrequest');
    });
  });
  it('should sucessfully show error if email is already registered', function () {
    var error = {
      response: {
        status: 409
      },
      message: 'email already exists'
    };
    var middleware = [_reduxThunk2.default.withExtraArgument({
      post: function post() {
        return Promise.resolve({
          data: {
            data: {
              user: {
                role: 'user',
                id: 1
              }
            }
          }
        });
      }
    })];
    var mockStore = (0, _reduxMockStore2.default)(middleware);
    var store = mockStore({});

    return store.dispatch((0, _signUpAction2.default)(error)).catch(function () {
      expect(error.response.status).toEqual(409);
      expect(error.message).toEqual('email already exists');
    });
  });
  it('should sucessfully show error', function () {
    var error = {
      response: {
        status: 409
      }
    };
    var middleware = [_reduxThunk2.default.withExtraArgument({
      post: function post() {
        return Promise.reject(error);
      }
    })];
    var mockStore = (0, _reduxMockStore2.default)(middleware);
    var store = mockStore({});

    return store.dispatch((0, _signUpAction2.default)(error)).then(function () {
      expect(error.response.status).toEqual(409);
    });
  });
});