'use strict';

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _singleRequestAction = require('../../actions/singleRequestAction');

var _singleRequestAction2 = _interopRequireDefault(_singleRequestAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('a user request Action', function () {
  it('should sucessfully get a single request', function () {
    var middleware = [_reduxThunk2.default.withExtraArgument({
      get: function get() {
        return Promise.resolve({
          status: 200,
          data: {
            data: {
              id: 1,
              user_id: 1,
              title: 'repair computer',
              department: 'technology',
              equipment: 'computer',
              requeststatus: 'pending',
              description: 'repair laptop',
              serialnumber: 111111111
            },
            message: 'single request successfully gotten',
            status: 'success'
          }
        });
      }
    })];
    var state = {
      authUser: {
        getAuth: {
          token: 'justamocktoken'
        }
      }
    };
    var mockStore = (0, _reduxMockStore2.default)(middleware);
    var store = mockStore(state);

    store.dispatch((0, _singleRequestAction2.default)()).then(function () {
      expect(store.getActions()[1].type).toEqual('GET_SINGLE_REQUESTS');
    });
  });

  it('should sucessfully show error', function () {
    var error = {
      response: {
        status: 500
      }
    };
    var middleware = [_reduxThunk2.default.withExtraArgument({
      get: function get() {
        return Promise.reject(error);
      }
    })];
    var state = {
      authUser: {
        getAuth: {
          token: 'justamocktoken'
        }
      }
    };
    var mockStore = (0, _reduxMockStore2.default)(middleware);
    var store = mockStore(state);

    return store.dispatch((0, _singleRequestAction2.default)(error)).then(function () {
      expect(error.response.status).toEqual(500);
    });
  });
});