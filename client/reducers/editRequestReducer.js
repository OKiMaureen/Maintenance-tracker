import { EDIT_ERROR, CLEAR_MESSAGE, EDIT_REQUEST, EDIT_LOADING_STATUS, LOG_OUT } from '../actions/types';

const initialState = {
  checkStatus: {
    isLoading: false,
    success: false,
    error: false,
  },
};
const editRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_REQUEST:
      return {
        ...state,
        request: action.request,
        checkStatus: {
          isLoading: false,
          success: true,
          error: false,
        },
      };
    case EDIT_LOADING_STATUS:
      return {
        ...state,
        checkStatus: {
          isLoading: true,
          success: false,
          error: false,
        },
      };
    case EDIT_ERROR:
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

export default editRequestReducer;
