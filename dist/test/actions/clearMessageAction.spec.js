'use strict';

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _clearMeassageAction = require('../../actions/clearMeassageAction');

var _clearMeassageAction2 = _interopRequireDefault(_clearMeassageAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('clear message Action', function () {
  it('should sucessfully clear error message', function () {
    var middleware = [_reduxThunk2.default.withExtraArgument()];

    var mockStore = (0, _reduxMockStore2.default)(middleware);
    var store = mockStore({ error: '' });
    var expectedAction = [{ type: 'CLEAR_MESSAGE' }];
    store.dispatch((0, _clearMeassageAction2.default)());
    expect(store.getActions()).toEqual(expectedAction);
  });
});