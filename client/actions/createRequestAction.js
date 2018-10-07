import axios from 'axios';
import { CREATE_REQUEST, CREATE_ERROR, CREATE_LOADING_STATUS } from './types';

const baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/users/requests/';

export const createRequest = requestData => ({
  type: CREATE_REQUEST,
  request: requestData,
});

export const errorMessage = data => ({
  type: CREATE_ERROR,
  error: data,
});

export const loadingStatus = () => ({
  type: CREATE_LOADING_STATUS,
});

const createRequestAction = (request, history) => (dispatch, getstate, http) => {
  const state = getstate();
  const { token } = state.authUser.getAuth;
  axios.defaults.headers.token = token;
  dispatch(loadingStatus(CREATE_LOADING_STATUS));
  return http
    .post(baseUrl, request)
    .then((res) => {
      if (res.status === 201) {
        const { id } = res.data.data.request;
        history.push(`/singlerequest/${id}`);
        localStorage.setItem('request', JSON.stringify(res.data.data.request));
        dispatch(createRequest(res.data.data.request));
      }
    })
    .catch((error) => {
      if (error.response.status === 409) {
        dispatch(errorMessage('This request has already been created, please create another.'));
      }
    });
};
export default createRequestAction;
