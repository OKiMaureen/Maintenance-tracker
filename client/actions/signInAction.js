import { SIGNUP_SUCCESS, SIGNUP_ERROR, LOADING_STATUS } from './types';


const baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/auth/login/';

export const signinUser = userData => ({
  type: SIGNUP_SUCCESS,
  user: userData,
});

export const signinUserError = userData => ({
  type: SIGNUP_ERROR,
  error: userData,
});

export const loadingStatus = () => ({
  type: LOADING_STATUS,
});
/**
 * @description This method add new user to the database
 * @param {object} userData
 * @param {object} history
 * @returns {promise}
 */


const signInAction = (userData, history) => (dispatch, getState, http) => {
  dispatch(loadingStatus(LOADING_STATUS));
  return http
    .post(baseUrl, userData)
    .then((res) => {
      if (res.data.data.user.role === 'user') {
        history.push('/allrequests');
      } else if (res.data.data.user.role === 'admin') {
        history.push('/adminrequests');
      }
      localStorage.setItem('auth', JSON.stringify(res.data.data.user));
      dispatch(signinUser(res.data.data));
    })
    .catch((error) => {
      if (error.response.status === 401) {
        dispatch(signinUserError(error.response.data.message));
      }
    });
};
export default signInAction;
