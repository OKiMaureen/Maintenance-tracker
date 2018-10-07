import axios from 'axios';
import { EDIT_REQUEST, EDIT_ERROR, EDIT_LOADING_STATUS } from './types';

export const editRequest = requestData => ({
  type: EDIT_REQUEST,
  request: requestData,
});

export const errorMessage = data => ({
  type: EDIT_ERROR,
  error: data,
});

export const loadingStatus = () => ({
  type: EDIT_LOADING_STATUS,
});

const editRequestAction = (request, requestId, history) => (dispatch, getstate, http) => {
  const state = getstate();
  const { token } = state.authUser.getAuth;
  axios.defaults.headers.token = token;
  dispatch(loadingStatus(EDIT_LOADING_STATUS));
  return http
    .put(
      `https://maintenance-tracker-app.herokuapp.com/api/v1/users/requests/${requestId}`, request,
      {
        headers: {
          'Content-Type': 'application/json',
          token,
        },
      },
    )
    .then((res) => {
      if (res.status === 200) {
        const { id } = res.data.data.updatedRequest;
        history.push(`/singlerequest/${id}`);
        localStorage.setItem('request', JSON.stringify(res.data.data.updatedRequest));
        dispatch(editRequest(res.data.data.updatedRequest));
      }
    })
    .catch((error) => {
      if (error.response.status === 409) {
        dispatch(errorMessage('This request has already been created, please create another.'));
      }
    });
};
export default editRequestAction;
