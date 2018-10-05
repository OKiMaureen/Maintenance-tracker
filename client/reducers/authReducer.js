import { AUTH_ERROR, SIGNUP_SUCCESS, AUTH_LOADING_STATUS, LOG_OUT } from '../actions/types';

const auth = localStorage.getItem('auth');
const getAuth = JSON.parse(auth);

const initialState = {
  getAuth,
  checkStatus: {
    isLoading: false,
    success: false,
    error: false,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        getAuth: action.user,
        checkStatus: {
          isLoading: false,
          success: true,
          error: false,
        },
      };
    case AUTH_LOADING_STATUS:
      return {
        ...state,
        checkStatus: {
          isLoading: true,
          success: false,
          error: false,
        },
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.error,
        checkStatus: {
          isLoading: false,
          success: false,
          error: true,
        },
      };
    case LOG_OUT:
      return {
        getAuth: {},
        checkStatus: {
          isLoading: false,
          success: false,
          error: false,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
