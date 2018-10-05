import axios from 'axios';
import { CREATE_REQUEST, ERROR_MESSAGE, LOADING_STATUS } from './types';

const baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/users/requests/';

export const createRequest = requestData => ({
  type: CREATE_REQUEST,
  request: requestData,
});

export const errorMessage = data => ({
  type: ERROR_MESSAGE,
  error: data,
});

export const loadingStatus = () => ({
  type: LOADING_STATUS,
});
const createRequestAction = (request, history) => (dispatch, getstate, http) => {
  const state = getstate();
  const { token } = state.authUser.getAuth;
  dispatch(loadingStatus(LOADING_STATUS));
  axios.defaults.headers.common.token = token;
  return http
    .post(baseUrl, request)
    .then((res) => {
      if (res.status === 201) {
        history.push('/userdetials');
        localStorage.setItem('request', JSON.stringify(res.data.data.request));
        dispatch(createRequest(res.data.data.request));
      }
    })
    .catch((error) => {
      if (error.response.status === 409) {
        dispatch(errorMessage('The request is already created'));
      }
    });
};
export default createRequestAction;
