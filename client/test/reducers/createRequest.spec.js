import requestReducer from '../../reducers/createRequestReducer';


describe('Test authReducers', () => {
  const requestDataSuccess = {
    department: 'something',
    equipment: 'something',
    serialnumber: '11111111',
    title: 'something',
    description: 'something',
  };
  const requestDataLoading = {
    checkStatus: {
      error: false,
      isLoading: true,
      success: false,
    },
  };

  const requestDataError = {
    checkStatus: {
      error: true,
      isLoading: false,
      success: false,
    },
  };

  it('Should return initial state', () => {
    expect(requestReducer({}, {})).toEqual({});
  });

  it('Should return state of sucessful request', () => {
    const actual = requestReducer({}, {
      type: 'CREATE_REQUEST',
      request: requestDataSuccess,
    });
    expect(actual).toEqual(requestDataSuccess);
  });
  it('Should return state of loading request', () => {
    const actual = requestReducer({}, {
      type: 'LOADING_STATUS',
      payload: requestDataLoading,
    });

    const expected = {
      checkStatus: {
        error: false,
        isLoading: true,
        success: false,
      },
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of  signup error', () => {
    const actual = requestReducer({}, {
      type: 'ERROR_MESSAGE',
      payload: requestDataError,
    });

    const expected = {
      checkStatus: {
        error: true,
        isLoading: false,
        success: false,
      },
    };
    expect(actual).toEqual(expected);
  });
});
