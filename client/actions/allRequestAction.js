import axios from 'axios';
import { GET_ALL_REQUESTS, LOADING_STATUS, ERROR_MESSAGE } from './types';

const url = 'https://maintenance-tracker-app.herokuapp.com/api/v1/users/requests';

export const getRequests = getaAllRequests => ({
  type: GET_ALL_REQUESTS,
  payload: getaAllRequests,
});

export const loadingStatus = () => ({
  type: LOADING_STATUS,
});

export const errorMessage = userData => ({
  type: ERROR_MESSAGE,
  error: userData,
});

const getAllRequestsAction = () => (dispatch, getstate, http) => {
  const state = getstate();

  const { token } = state.authUser.getAuth;
  dispatch(loadingStatus(LOADING_STATUS));
  axios.defaults.headers.common.token = token;
  return http
    .get(url)
    .then((res) => {
      dispatch(getRequests(res.data.data.request));
    })
    .catch((error) => {
      dispatch(errorMessage(error.response));
    });
};
export default getAllRequestsAction;
