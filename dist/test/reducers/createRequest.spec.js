'use strict';

var _createRequestReducer = require('../../reducers/createRequestReducer');

var _createRequestReducer2 = _interopRequireDefault(_createRequestReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Test authReducers', function () {
  var requestDataSuccess = {
    department: 'something',
    equipment: 'something',
    serialnumber: '11111111',
    title: 'something',
    description: 'something'
  };
  var requestDataLoading = {
    checkStatus: {
      error: false,
      isLoading: true,
      success: false
    }
  };

  var requestDataError = {
    checkStatus: {
      error: true,
      isLoading: false,
      success: false
    }
  };

  it('Should return initial state', function () {
    expect((0, _createRequestReducer2.default)({}, {})).toEqual({});
  });

  it('Should return state of sucessful request', function () {
    var actual = (0, _createRequestReducer2.default)({}, {
      type: 'CREATE_REQUEST',
      request: requestDataSuccess
    });
    var expected = {
      checkStatus: {
        error: false,
        isLoading: false,
        success: true
      },
      request: {
        department: 'something',
        equipment: 'something',
        serialnumber: '11111111',
        title: 'something',
        description: 'something'
      }
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of loading request', function () {
    var actual = (0, _createRequestReducer2.default)({}, {
      type: 'CREATE_LOADING_STATUS',
      payload: requestDataLoading
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
  it('Should return state of  request error', function () {
    var actual = (0, _createRequestReducer2.default)({}, {
      type: 'CREATE_ERROR',
      payload: requestDataError
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
  it('Should return state of cleared message', function () {
    var actual = (0, _createRequestReducer2.default)({}, {
      type: 'CLEAR_MESSAGE'
    });

    var expected = {
      error: '',
      checkStatus: {
        error: false,
        isLoading: false,
        success: false
      }
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of logout', function () {
    var actual = (0, _createRequestReducer2.default)({}, {
      type: 'LOG_OUT'
    });

    var expected = {
      checkStatus: {
        error: false,
        isLoading: false,
        success: false
      }
    };
    expect(actual).toEqual(expected);
  });
});