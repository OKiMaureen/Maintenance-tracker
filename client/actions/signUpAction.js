import { SIGNUP_SUCCESS, ERROR_MESSAGE, LOADING_STATUS } from './types';


const baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/auth/signup/';

export const signupUser = userData => ({
  type: SIGNUP_SUCCESS,
  user: userData,
});

export const signupUserError = userData => ({
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


const signUpAction = (userData, history) => (dispatch, getState, http) => {
  dispatch(loadingStatus(LOADING_STATUS));
  return http
    .post(baseUrl, userData)
    .then((res) => {
      if (res.data.data.user.role === 'user') {
        history.push('/createrequest');
      }
      localStorage.setItem('auth', JSON.stringify(res.data.data));
      dispatch(signupUser(res.data.data));
    })
    .catch((error) => {
      if (error.response.status === 409) {
        dispatch(signupUserError('Email already exists'));
      }
    });
};
export default signUpAction;
