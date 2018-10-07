
import { GET_ADMIN_REQUESTS, GET_ADMIN_ERROR } from './types';

const url = 'https://maintenance-tracker-app.herokuapp.com/api/v1/requests';

export const getRequests = getAllRequests => ({
  type: GET_ADMIN_REQUESTS,
  payload: getAllRequests,
});

export const errorMessage = userData => ({
  type: GET_ADMIN_ERROR,
  error: userData,
});

const getAdminRequestsAction = () => (dispatch, getstate, http) => {
  const state = getstate();
  const { token } = state.authUser.getAuth;
  return http
    .get(
      url,
      {
        headers: {
          'Content-Type': 'application/json',
          token,
        },
      },
    )
    .then((res) => {
      dispatch(getRequests(res.data.data.request));
    })
    .catch((error) => {
      dispatch(errorMessage(error.response));
    });
};
export default getAdminRequestsAction;
