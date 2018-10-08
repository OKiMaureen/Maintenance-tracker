'use strict';

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _createRequestAction = require('../../actions/createRequestAction');

var _createRequestAction2 = _interopRequireDefault(_createRequestAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('create request Action', function () {
  it('should sucessfully create request and redirect to /userdetail', function () {
    var middleware = [_reduxThunk2.default.withExtraArgument({
      post: function post() {
        return Promise.resolve({
          status: 201,
          data: {
            data: {
              request: {
                department: 'technical',
                title: 'bad laptop',
                description: 'a bad computer',
                equipment: 'laptop',
                requeststatus: 'pending',
                serialnumber: '11111111',
                id: 11,
                user_id: 94
              }

            }
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
    var details = {
      edepartment: 'technical',
      title: 'bad laptop',
      description: 'a bad computer',
      equipment: 'laptop',
      requeststatus: 'pending',
      serialnumber: '11111111'
    };

    var history = {
      push: jest.fn()
    };

    var store = mockStore(state);

    store.dispatch((0, _createRequestAction2.default)(details, history)).then(function () {
      expect(store.getActions()[1].type).toEqual('CREATE_REQUEST');
      expect(history.push).toHaveBeenCalledWith('/singlerequest');
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
    var state = {
      authUser: {
        getAuth: {
          token: 'justamocktoken'
        }
      }
    };
    var mockStore = (0, _reduxMockStore2.default)(middleware);
    var store = mockStore(state);

    return store.dispatch((0, _createRequestAction2.default)(error)).then(function () {
      expect(error.response.status).toEqual(409);
    });
  });
});