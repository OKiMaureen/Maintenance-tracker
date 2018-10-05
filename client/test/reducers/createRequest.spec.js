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
    const expected = {
      checkStatus: {
        error: false,
        isLoading: false,
        success: true,
      },
      request: {
        department: 'something',
        equipment: 'something',
        serialnumber: '11111111',
        title: 'something',
        description: 'something',
      },
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of loading request', () => {
    const actual = requestReducer({}, {
      type: 'CREATE_LOADING_STATUS',
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
  it('Should return state of  request error', () => {
    const actual = requestReducer({}, {
      type: 'CREATE_ERROR',
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
  it('Should return state of cleared message', () => {
    const actual = requestReducer({}, {
      type: 'CLEAR_MESSAGE',
    });

    const expected = {
      error: '',
      checkStatus: {
        error: false,
        isLoading: false,
        success: false,
      },
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of logout', () => {
    const actual = requestReducer({}, {
      type: 'LOG_OUT',
    });

    const expected = {
      checkStatus: {
        error: false,
        isLoading: false,
        success: false,
      },
    };
    expect(actual).toEqual(expected);
  });
});
