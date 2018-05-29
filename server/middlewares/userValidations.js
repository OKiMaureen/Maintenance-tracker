import isEmpty from 'lodash.isempty';
import Validator from 'validator';

/**
 * @class Validate User SIgn In and Sign Up input
 */
export default class ValidateUser {
  /**
   * validate user sign in input string
   *
   * @param {Object} request
   * @param {Object} response
   *
   * @param {Function} next
   *
   * @return {Object}
   */
  static validateSigninInput(req, res, next) {
    const {
      email,
      password,
    } = req.body;
    const error = {};
    if (!email) {
      error.email = 'email is required';
    }

    if (email && !Validator.isEmail(email.trim() || '')) {
      error.email = 'please provide a valid email address';
    }
    if (!password) {
      error.password = 'password is required';
    }

    if (password && Validator.isEmpty(password.trim() || '')) {
      error.password = 'password is required';
    }
    if (isEmpty(error)) {
      return next();
    }
    return res.status(406).json({
      error,
    });
  }

  /**
   * validate user sign up input string
   *
   * @param {Object} request
   * @param {Object} response
   * @param {Function} next
   *
   * @return {Object}
   */
  static validateSignupInput(req, res, next) {
    const {
      email,
      password,
      name,
    } = req.body;
    const error = {};
    if (!name) {
      error.name = 'name is required';
    }

    if (name && Validator.isEmpty(name.trim() || '')) {
      error.name = 'name is required';
    }
    if (!password) {
      error.password = 'password is required';
    }

    if (password && Validator.isEmpty(password.trim() || '')) {
      error.password = 'password is required';
    }
    if (!email) {
      error.email = 'email is required';
    }

    if (email && !Validator.isEmail(email.trim() || '')) {
      error.email = 'email address is invalid';
    }

    if (isEmpty(error)) {
      return next();
    }
    return res.status(406).json({
      error,
    });
  }
  /**
   * validate password length
   *
   * @param {Object} request
   * @param {Object} response
   *
   * @param {Function} next
   *
   * @return {Object}
   */

  static inputLength(req, res, next) {
    const {
      name, password,
    } = req.body;

    // check for username characters
    if (!Validator.isAlphanumeric(name)) {
      return res.status(406)
        .send({
          status: 'fail',
          message: 'only alphabets and numbers are allowed.',
        });
    }
    // Check for name Length
    if (!Validator.isLength(name, { min: 3, max: 15 })) {
      return res.status(406)
        .send({
          status: 'fail',
          message: 'name can only be between 3 to 15 characters',
        });
    }
    // Check for Password
    if (!Validator.isLength(password, { min: 6, max: 50 })) {
      return res.status(406)
        .send({
          status: 'fail',
          message: 'password must be between 6 to 50 characters',
        });
    }
    return next();
  }
}
