import { SIGNUP_SUCCESS, ERROR_MESSAGE, LOADING_STATUS } from './types';


const baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/auth/login/';

export const signinUser = userData => ({
  type: SIGNUP_SUCCESS,
  user: userData,
});

export const signinUserError = userData => ({
  type: ERROR_MESSAGE,
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
        history.push('/createrequest');
      } else if (res.data.data.user.role === 'admin') {
        history.push('/adminrequest');
      }
      localStorage.setItem('auth', JSON.stringify(res.data.data));
      dispatch(signinUser(res.data.data));
    })
    .catch((error) => {
      if (error.response.status === 401) {
        dispatch(signinUserError(error.response.data.message));
      }
    });
};
export default signInAction;
