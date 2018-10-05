import requestReducer from '../../reducers/getRequestReducer';


describe('Test all request reducers', () => {
  const requestDataSuccess = [
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
    {
      id: 2,
      user_id: 2,
      title: 'repair computer',
      department: 'technology',
      equipment: 'computer',
      requeststatus: 'pending',
      description: 'repair laptop',
      serialnumber: 111111111,
    },
  ];
  const requestDataError = {
    error: 'server error',
  };

  it('Should return initial state', () => {
    expect(requestReducer({}, {})).toEqual({});
  });

  it('Should return state of sucessful request gotten', () => {
    const actual = requestReducer({}, {
      type: 'GET_ALL_REQUESTS',
      payload: requestDataSuccess,
    });
    expect(actual).toEqual(requestDataSuccess);
  });
  it('Should return state oferror', () => {
    const actual = requestReducer({}, {
      type: 'ERROR_MESSAGE',
      error: requestDataError,
    });
    const expected = {
      error: {
        error: 'server error',
      },
    };
    expect(actual).toEqual(expected);
  });
});

