import { ERROR_MESSAGE, GET_ALL_REQUESTS } from '../actions/types';

const requestReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_REQUESTS:
      return [
        ...state,
        ...action.payload,
      ];
    case ERROR_MESSAGE:
      return {

        error: action.error,

      };
    default:
      return state;
  }
};

export default requestReducer;
