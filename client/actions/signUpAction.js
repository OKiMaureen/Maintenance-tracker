import axios from 'axios';
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from './types';


const baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/auth/signup/';

export const signupUser = userData => ({
  type: SIGNUP_SUCCESS,
  user: userData,
});

export const signupUserError = userData => ({
  type: SIGNUP_ERROR,
  error: userData,
});
/**
 * @description This method add new user to the database
 * @param {object} userData
 * @param {object} history
 * @returns {promise}
 */


const signUp = (userData, history) => dispatch => axios
  .post(baseUrl, userData)
  .then((res) => {
    if (res.data.data.user.role) {
      history.push('/allrequests');
    } else {
      history.push('/adminrequests');
    }
    localStorage.setItem('auth', JSON.stringify(res.data.data.user));
    dispatch(signupUser(res.data.data));
  })
  .catch((error) => {
    if (error.response.status === 409) {
      dispatch(signupUserError('Email already exists'));
    }
  });
export default signUp;
