import { SINGLE_REQUEST_ERROR, GET_SINGLE_REQUEST, LOG_OUT } from '../actions/types';

const initialState = {
  request: {},
  error: {},
};
const singleRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_REQUEST:

      return {
        ...state,
        request: action.request,
      };

    case SINGLE_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,

      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default singleRequestReducer;
