import { GET_SINGLE_REQUEST, SINGLE_REQUEST_ERROR } from './types';

export const getARequest = getSingleRequest => ({
  type: GET_SINGLE_REQUEST,
  request: getSingleRequest,
});

export const errorMessage = userData => ({
  type: SINGLE_REQUEST_ERROR,
  error: userData,
});

const getARequestAction = id => (dispatch, getstate, http) => {
  const state = getstate();
  const { token } = state.authUser.getAuth;
  return http
    .get(
      `https://maintenance-tracker-app.herokuapp.com/api/v1/users/requests/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          token,
        },
      },
    ).then((res) => {
      dispatch(getARequest(res.data.data.request));
    })
    .catch((error) => {
      dispatch(errorMessage(error.response));
    });
};
export default getARequestAction;

