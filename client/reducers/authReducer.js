import { SIGNUP_ERROR } from '../actions/types';


const auth = localStorage.getItem('auth');
const getAuth = JSON.parse(auth);

const authReducer = (state = getAuth, action) => {
  switch (action.type) {
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
