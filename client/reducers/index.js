import { combineReducers } from 'redux';
import authReducer from './authReducer';
import requestReducer from './getRequestReducer';
import createRequestReducer from './createRequestReducer';
import editRequestReducer from './editRequestReducer';
import singleRequestReducer from './singleRequestReducer';


const rootReducer = combineReducers({
  authUser: authReducer,
  requests: requestReducer,
  createRequest: createRequestReducer,
  editRequest: editRequestReducer,
  singleRequest: singleRequestReducer,
});

export default rootReducer;

