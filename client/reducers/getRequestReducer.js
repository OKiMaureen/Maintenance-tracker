import { GET_ALL_ERROR, GET_ALL_REQUESTS, LOG_OUT } from '../actions/types';

const initialState = {
  requests: [],
  error: {},
};
const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      };
    case GET_ALL_ERROR:
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

export default requestReducer;
