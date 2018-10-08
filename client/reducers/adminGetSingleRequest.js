import { CHANGE_STATUS, GET_ADMIN_SINGLE_ERROR, GET_ADMIN_SINGLE_REQUEST, LOG_OUT } from '../actions/types';

const initialState = {
  request: {},
  error: {},
};
const adminSingleRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_SINGLE_REQUEST:

      return {
        ...state,
        request: action.request,
      };

    case GET_ADMIN_SINGLE_ERROR:
      return {
        ...state,
        error: action.error,

      };
    case CHANGE_STATUS:
      return {
        ...state,
        request: action.request,

      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default adminSingleRequestReducer;
