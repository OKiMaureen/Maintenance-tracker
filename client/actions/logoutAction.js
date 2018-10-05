import axios from 'axios';
import { LOG_OUT } from './types';


const logoutAction = () => (dispatch) => {
  delete axios.defaults.headers;
  return dispatch({ type: LOG_OUT });
};

export default logoutAction;
