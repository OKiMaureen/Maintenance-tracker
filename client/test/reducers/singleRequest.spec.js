import requestReducer from '../../reducers/singleRequestReducer';


describe('Test all request reducers', () => {
  const requestDataSuccess = {
    id: 1,
    user_id: 1,
    title: 'repair computer',
    department: 'technology',
    equipment: 'computer',
    requeststatus: 'pending',
    description: 'repair laptop',
    serialnumber: 111111111,
  };

  const requestDataError = {
    error: 'server error',
  };

  it('Should return initial state', () => {
    expect(requestReducer({}, {})).toEqual({});
  });

  it('Should return state of sucessful request gotten', () => {
    const actual = requestReducer({}, {
      type: 'GET_SINGLE_REQUEST',
      request: requestDataSuccess,
    });
    const expected = {
      request:
        {
          id: 1,
          user_id: 1,
          title: 'repair computer',
          department: 'technology',
          equipment: 'computer',
          requeststatus: 'pending',
          description: 'repair laptop',
          serialnumber: 111111111,
        },
        
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of error', () => {
    const actual = requestReducer({}, {
      type: 'SINGLE_REQUEST_ERROR',
      error: requestDataError,
    });
    const expected = {
      error: {
        error: 'server error',
      },
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of logout', () => {
    const actual = requestReducer({}, {
      type: 'LOG_OUT',
    });

    const expected = {
      request: {},
      error: {},
    };
    expect(actual).toEqual(expected);
  });
});

