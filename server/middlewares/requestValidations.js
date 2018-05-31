import Validate from 'validatorjs';

/**
 * @class Validate Request
 */
export default class ValidateRequest {
  /**
   * validate Request input length
   * @param {Object} request
   * @param {Object} response
   *
   *  @param {Function} next
   *
   *  @return {Object}
   */
  static vallidateRequest(req, res, next) {
    const {
      title,
      department,
      equipment,
      serialnumber,
      description,
    } = req.body;


    const data = {
      title,
      department,
      equipment,
      serialnumber,
      description,
    };

    const rules = {
      title: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i', 'min:5', 'max:20'],
      department: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i'],
      equipment: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i'],
      serialnumber: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i', 'min:8', 'max:8'],
      description: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i', 'min:3', 'max:50'],
    };

    const validations = new Validate(data, rules);

    if (validations.passes()) {
      return next();
    }

    return res.status(406).json({
      status: 'fail',
      data: {
        errors: validations.errors.all(),
      },
    });
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

    const data = {
      id,
    };
    const rules = {
      id: ['required', 'integer'],
    };
    const validations = new Validate(data, rules);

    if (validations.passes()) {
      return next();
    }

    return res.status(406).json({
      status: 'fail',
      data: {
        errors: validations.errors.all(),
      },
    });
  }
}

