
import { GET_ALL_REQUESTS, GET_ALL_ERROR } from './types';

const url = 'https://maintenance-tracker-app.herokuapp.com/api/v1/users/requests';

export const getRequests = getaAllRequests => ({
  type: GET_ALL_REQUESTS,
  payload: getaAllRequests,
});

export const errorMessage = userData => ({
  type: GET_ALL_ERROR,
  error: userData,
});

const getAllRequestsAction = () => (dispatch, getstate, http) => {
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
export default getAllRequestsAction;
