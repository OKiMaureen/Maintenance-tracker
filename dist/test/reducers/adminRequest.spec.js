'use strict';

var _adminRequestsReducer = require('../../reducers/adminRequestsReducer');

var _adminRequestsReducer2 = _interopRequireDefault(_adminRequestsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Test all request reducers', function () {
  var requestDataSuccess = [{
    id: 1,
    user_id: 1,
    title: 'repair computer',
    department: 'technology',
    equipment: 'computer',
    requeststatus: 'pending',
    description: 'repair laptop',
    serialnumber: 111111111
  }, {
    id: 2,
    user_id: 2,
    title: 'repair computer',
    department: 'technology',
    equipment: 'computer',
    requeststatus: 'pending',
    description: 'repair laptop',
    serialnumber: 111111111
  }];
  var requestDataError = {
    error: 'server error'
  };

  it('Should return initial state', function () {
    expect((0, _adminRequestsReducer2.default)({}, {})).toEqual({});
  });

  it('Should return state of sucessful request gotten', function () {
    var actual = (0, _adminRequestsReducer2.default)({}, {
      type: 'GET_ADMIN_REQUESTS',
      payload: requestDataSuccess
    });
    var expected = {
      adminRequests: [{
        id: 1,
        user_id: 1,
        title: 'repair computer',
        department: 'technology',
        equipment: 'computer',
        requeststatus: 'pending',
        description: 'repair laptop',
        serialnumber: 111111111
      }, {
        id: 2,
        user_id: 2,
        title: 'repair computer',
        department: 'technology',
        equipment: 'computer',
        requeststatus: 'pending',
        description: 'repair laptop',
        serialnumber: 111111111
      }]
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of error', function () {
    var actual = (0, _adminRequestsReducer2.default)({}, {
      type: 'GET_ADMIN_ERROR',
      error: requestDataError
    });
    var expected = {
      error: {
        error: 'server error'
      }
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of logout', function () {
    var actual = (0, _adminRequestsReducer2.default)({}, {
      type: 'LOG_OUT'
    });

    var expected = {
      requests: [],
      error: {}
    };
    expect(actual).toEqual(expected);
  });
});