'use strict';

var _authReducer = require('../../reducers/authReducer');

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Test authReducers', function () {
  var userDataSuccess = {
    checkStatus: {
      error: false,
      isLoading: false,
      success: true
    }
  };
  var userDataLoading = {
    checkStatus: {
      error: false,
      isLoading: true,
      success: false
    }
  };

  var userDataError = {
    checkStatus: {
      error: true,
      isLoading: false,
      success: false
    }
  };

  it('Should return initial state', function () {
    expect((0, _authReducer2.default)({}, {})).toEqual({});
  });

  it('Should return state of sucessful signup', function () {
    var actual = (0, _authReducer2.default)({}, {
      type: 'SIGNUP_SUCCESS',
      payload: userDataSuccess
    });

    var expected = {
      checkStatus: {
        error: false,
        isLoading: false,
        success: true
      }
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of loading signup', function () {
    var actual = (0, _authReducer2.default)({}, {
      type: 'LOADING_STATUS',
      payload: userDataLoading
    });

    var expected = {
      checkStatus: {
        error: false,
        isLoading: true,
        success: false
      }
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of  signup error', function () {
    var actual = (0, _authReducer2.default)({}, {
      type: 'ERROR_MESSAGE',
      payload: userDataError
    });

    var expected = {
      checkStatus: {
        error: true,
        isLoading: false,
        success: false
      }
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of logout', function () {
    var actual = (0, _authReducer2.default)({}, {
      type: 'LOG_OUT'
    });

    var expected = {
      getAuth: {},
      checkStatus: {
        error: false,
        isLoading: false,
        success: false
      }
    };
    expect(actual).toEqual(expected);
  });
});