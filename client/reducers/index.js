import { combineReducers } from 'redux';
import authReducer from './authReducer';
import requestReducer from './getRequestReducer';
import createRequestReducer from './createRequestReducer';
import singleRequestReducer from './singleRequestReducer';


const rootReducer = combineReducers({
  authUser: authReducer,
  requests: requestReducer,
  createRequest: createRequestReducer,
  singleRequest: singleRequestReducer,
});

export default rootReducer;

