import signUpReducer from '../../reducers/authReducer';


describe('Test authReducers', () => {
  const userDataSuccess = {
    checkStatus: {
      error: false,
      isLoading: false,
      success: true,
    },
  };
  const userDataLoading = {
    checkStatus: {
      error: false,
      isLoading: true,
      success: false,
    },
  };

  const userDataError = {
    checkStatus: {
      error: true,
      isLoading: false,
      success: false,
    },
  };

  it('Should return initial state', () => {
    expect(signUpReducer({}, {})).toEqual({});
  });

  it('Should return state of sucessful signup', () => {
    const actual = signUpReducer({}, {
      type: 'SIGNUP_SUCCESS',
      payload: userDataSuccess,
    });

    const expected = {
      checkStatus: {
        error: false,
        isLoading: false,
        success: true,
      },
    };
    expect(actual).toEqual(expected);
  });
  it('Should return state of loading signup', () => {
    const actual = signUpReducer({}, {
      type: 'LOADING_STATUS',
      payload: userDataLoading,
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
    const actual = signUpReducer({}, {
      type: 'ERROR_MESSAGE',
      payload: userDataError,
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
  it('Should return state of logout', () => {
    const actual = signUpReducer({}, {
      type: 'LOG_OUT',
    });

    const expected = {
      getAuth: {},
      checkStatus: {
        error: false,
        isLoading: false,
        success: false,
      },
    };
    expect(actual).toEqual(expected);
  });
});
