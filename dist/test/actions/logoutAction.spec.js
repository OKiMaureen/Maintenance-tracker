'use strict';

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _logoutAction = require('../../actions/logoutAction');

var _logoutAction2 = _interopRequireDefault(_logoutAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('clear message Action', function () {
  it('should sucessfully clear error message', function () {
    var middleware = [_reduxThunk2.default.withExtraArgument()];

    var mockStore = (0, _reduxMockStore2.default)(middleware);
    var store = mockStore({ error: '' });
    var expectedAction = [{ type: 'LOG_OUT' }];
    store.dispatch((0, _logoutAction2.default)());
    expect(store.getActions()).toEqual(expectedAction);
  });
});