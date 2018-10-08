'use strict';

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _signInAction = require('../../actions/signInAction');

var _signInAction2 = _interopRequireDefault(_signInAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('signin Action', function () {
  it('should sucessfully sign in users and redirect to /createrequest', function () {
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
      email: 'email',
      password: 'password',
      errors: {},
      role: 'user'
    };
    var history = {
      push: jest.fn()
    };
    var store = mockStore({});

    return store.dispatch((0, _signInAction2.default)(details, history)).then(function () {
      expect(history.push).toHaveBeenCalledWith('/createrequest');
    });
  });
  it('should sucessfully sign in admin and redirect to /adminrequest', function () {
    var middleware = [_reduxThunk2.default.withExtraArgument({
      post: function post() {
        return Promise.resolve({
          data: {
            data: {
              user: {
                role: 'admin',
                id: 1
              }
            }
          }
        });
      }
    })];
    var mockStore = (0, _reduxMockStore2.default)(middleware);
    var details = {
      email: 'email',
      password: 'password',
      errors: {},
      role: 'admin'
    };
    var history = {
      push: jest.fn()
    };
    var store = mockStore({});
    return store.dispatch((0, _signInAction2.default)(details, history)).then(function () {
      expect(history.push).toHaveBeenCalledWith('/admincreaterequest');
    });
  });
  it('should sucessfully show error if email or password is not correct', function () {
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
    var error = {
      response: {
        status: 401
      },
      message: 'email or password is not correct'
    };
    var mockStore = (0, _reduxMockStore2.default)(middleware);
    var store = mockStore({});

    return store.dispatch((0, _signInAction2.default)(error)).catch(function () {
      expect(error.response.status).toEqual(401);
      expect(error.message).toEqual('email or password is not correct');
    });
  });
});