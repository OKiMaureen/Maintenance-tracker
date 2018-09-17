import { SIGNUP_ERROR, SIGNUP_SUCCESS, LOADING_STATUS } from '../actions/types';

const auth = localStorage.getItem('auth');
const getAuth = JSON.parse(auth);

const initialState = {
  authUser: getAuth,
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
        checkStatus: {
          isLoading: false,
          success: true,
          error: false,
        },
      };
    case LOADING_STATUS:
      return {
        ...state,
        checkStatus: {
          isLoading: true,
          success: false,
          error: false,
        },
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.error,
        checkStatus: {
          isLoading: false,
          success: false,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
