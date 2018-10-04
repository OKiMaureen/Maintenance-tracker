import { ERROR_MESSAGE, CREATE_REQUEST, LOADING_STATUS } from '../actions/types';

const createRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return action.request;

    case LOADING_STATUS:
      return {
        ...state,
        checkStatus: {
          isLoading: true,
          success: false,
          error: false,
        },
      };
    case ERROR_MESSAGE:
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

export default createRequestReducer;
