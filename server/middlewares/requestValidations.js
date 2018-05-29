import isEmpty from 'lodash.isempty';
import Validator from 'validator';


/**
 * @class Validate Request
 */
export default class ValidateRequest {
  /**
   * validate Request input string
   *
   * @param {Object} req
   * @param {Object} res
   *
   * @param {Function} next
   *
   * @return {Object}
   */
  static validateString(req, res, next) {
    const {
      title,
      department,
      equipment,
      serialnumber,
      description,
    } = req.body;
    const error = {};
    if (!title) {
      error.title = 'title is required';
    }
    if (title && Validator.isEmpty(title.trim() || '')) {
      error.title = 'title is required';
    }
    if (!department) {
      error.department = 'department is required';
    }

    if (department && Validator.isEmpty(department.trim() || '')) {
      error.department = 'department is required';
    }
    if (!equipment) {
      error.equipment = 'equipment is required';
    }
    if (equipment && Validator.isEmpty(equipment.trim() || '')) {
      error.equipment = 'equipment is required';
    }
    if (!serialnumber) {
      error.serialNumber = 'serialnumber is required';
    }
    if (serialnumber && Validator.isEmpty(serialnumber.trim() || '')) {
      error.serialnumber = 'serialnumber is required';
    }
    if (!description) {
      error.description = 'description is required';
    }
    if (description && Validator.isEmpty(description.trim() || '')) {
      error.description = 'description is required';
    }
    if (isEmpty(error)) {
      return next();
    }
    return res.status(406).json({
      error,
    });
  }
  /**
   * validate Request input length
   * @param {Object} request
   * @param {Object} response
   *
   *  @param {Function} next
   *
   *  @return {Object}
   */
  static checkLength(req, res, next) {
    const {
      title,
      serialnumber,
      description,
    } = req.body;

    if (!Validator.isLength(title, {
      min: 5,
      max: 20,
    })) {
      return res.status(406)
        .json({
          message: 'title must be between 5 and 20 characters',
          status: 'fail',
        });
    }
    if (!Validator.isLength(serialnumber, {
      min: 8,
      max: 8,
    })) {
      return res.status(406)
        .json({
          message: 'serialnumber must be only 8 characters',
          status: 'fail',
        });
    }
    if (!Validator.isLength(description, {
      min: 3,
      max: 50,
    })) {
      return res.status(406)
        .json({
          message: 'description must be between 3 and 50 characters',
          status: 'fail',
        });
    }
    return next();
  }
  /**
   * validate Request id parameter
   * @param {Object} req
   * @param {Object} res
   *
   * @param {Function} next
   *
   * @return {Object} json
   */
  static idIsNumber(req, res, next) {
    const {
      id,
    } = req.params;
    const error = {};
    if (!id) {
      error.id = 'id is required';
    }
    if (id < 0) {
      error.id = 'id is required';
    }
    if (id && Validator.isEmpty(id.trim() || '')) {
      error.id = 'id is required';
    }
    if (Number.isNaN(parseInt(id, 10))) {
      error.id = 'id must be a number';
      if (isEmpty(error)) return next();
      return res.status(406).json({
        error,
      });
    }
    return next();
  }
}