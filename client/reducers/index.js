import { combineReducers } from 'redux';
import authReducer from './authReducer';
import requestReducer from './getRequestReducer';
import createRequestReducer from './createRequestReducer';

const rootReducer = combineReducers({
  authUser: authReducer,
  requests: requestReducer,
  createRequest: createRequestReducer,
});

export default rootReducer;

