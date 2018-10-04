import { combineReducers } from 'redux';
import authReducer from './authReducer';
import createRequestReducer from './createRequestReducer';

const rootReducer = combineReducers({
  authUser: authReducer,
  createRequest: createRequestReducer,
});

export default rootReducer;

