import { CREATE_ERROR, CLEAR_MESSAGE, CREATE_REQUEST, CREATE_LOADING_STATUS, LOG_OUT } from '../actions/types';

const initialState = {
  checkStatus: {
    isLoading: false,
    success: false,
    error: false,
  },
};
const createRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state,
        request: action.request,
        checkStatus: {
          isLoading: false,
          success: true,
          error: false,
        },
      };
    case CREATE_LOADING_STATUS:
      return {
        ...state,
        checkStatus: {
          isLoading: true,
          success: false,
          error: false,
        },
      };
    case CREATE_ERROR:
      return {
        ...state,
        error: action.error,
        checkStatus: {
          isLoading: false,
          success: false,
          error: true,
        },
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        error: '',
        checkStatus: {
          isLoading: false,
          success: false,
          error: false,
        },
      };
    case LOG_OUT:
      return {
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

export default createRequestReducer;
