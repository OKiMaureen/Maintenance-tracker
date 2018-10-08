import { combineReducers } from 'redux';
import authReducer from './authReducer';
import requestReducer from './getAllRequestsReducer';
import adminRequestsReducer from './adminRequestsReducer';
import createRequestReducer from './createRequestReducer';
import editRequestReducer from './editRequestReducer';
import singleRequestReducer from './singleRequestReducer';
import adminSingleRequestReducer from './adminGetSingleRequest';


const rootReducer = combineReducers({
  authUser: authReducer,
  requests: requestReducer,
  adminRequests: adminRequestsReducer,
  createRequest: createRequestReducer,
  editRequest: editRequestReducer,
  singleRequest: singleRequestReducer,
  adminSingleRequest: adminSingleRequestReducer,
});

export default rootReducer;

