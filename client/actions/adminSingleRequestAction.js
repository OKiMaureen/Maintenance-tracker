
import { GET_ADMIN_SINGLE_REQUEST, GET_ADMIN_SINGLE_ERROR, CHANGE_STATUS } from './types';

export const getRequest = getARequest => ({
  type: GET_ADMIN_SINGLE_REQUEST,
  request: getARequest,
});
export const errorMessage = userData => ({
  type: GET_ADMIN_SINGLE_ERROR,
  error: userData,
});
export const updateStatus = request => ({
  type: CHANGE_STATUS,
  request,
});

export const updateReq = (id, status) => (dispatch, getstate, http) => {
  const state = getstate();
  const { token } = state.authUser.getAuth;
  return http(
    `https://maintenance-tracker-app.herokuapp.com/api/v1/requests/${id}/${status}`,
    {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    },
  )
    .then((res) => {
      dispatch(updateStatus(res.data.data.request));
    })
    .catch((error) => {
      dispatch(errorMessage(error.response));
    });
};

const AdminGetSingleRequestAction = id => (dispatch, getstate, http) => {
  const state = getstate();
  const { token } = state.authUser.getAuth;
  return http
    .get(
      `https://maintenance-tracker-app.herokuapp.com/api/v1/requests/${id}`,

      {
        headers: {
          'Content-Type': 'application/json',
          token,
        },
      },
    )
    .then((res) => {
      dispatch(getRequest(res.data.data.request));
    })
    .catch((error) => {
      dispatch(errorMessage(error.response));
    });
};
export default AdminGetSingleRequestAction;
