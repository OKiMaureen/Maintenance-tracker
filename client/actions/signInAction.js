import { SIGNUP_SUCCESS, AUTH_ERROR, AUTH_LOADING_STATUS } from './types';


const baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/auth/login/';

export const signinUser = userData => ({
  type: SIGNUP_SUCCESS,
  user: userData,
});

export const signinUserError = userData => ({
  type: AUTH_ERROR,
  error: userData,
});

export const loadingStatus = () => ({
  type: AUTH_LOADING_STATUS,
});
/**
 * @description This method add new user to the database
 * @param {object} userData
 * @param {object} history
 * @returns {promise}
 */


const signInAction = (userData, history) => (dispatch, getState, http) => {
  dispatch(loadingStatus(AUTH_LOADING_STATUS));
  return http
    .post(baseUrl, userData)
    .then((res) => {
      if (res.data.data.user.role === 'user') {
        history.push('/createrequest');
      } else if (res.data.data.user.role === 'admin') {
        history.push('/adminrequest');
      }
      const user = res.data.data;
      localStorage.setItem('auth', JSON.stringify(user));
      dispatch(signinUser(user));
    })
    .catch((error) => {
      if (error.response.status === 401) {
        dispatch(signinUserError(error.response.data.message));
      }
    });
};
export default signInAction;
