import { GET_ADMIN_ERROR, GET_ADMIN_REQUESTS, LOG_OUT } from '../actions/types';

const initialState = {
  requests: [],
  error: {},
};
const adminRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_REQUESTS:
      return {
        ...state,
        adminRequests: action.payload,
      };
    case GET_ADMIN_ERROR:
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

export default adminRequestsReducer;
