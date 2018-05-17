import Validator from 'validator';

/**
 * @class Validate Request
 */
export default class validateRequest {
	/**
	 * validate Request input string
	 *
	 * @param {object} req
	 * @param {object} res
	 * @param {function} next
	 * @return {void}
	 */
	static validateRequest = (req, res, next) => {
		const {
			title,
			department,
			equipment,
			serialNumber,
			description
		} = req.body;
		const error = {};
		if (!title) {
			error.title = 'title is required'
		}
		if (title && Validator.isEmpty(title.trim() || '')) {
			error.title = 'title is required'
		}
		if (!department) {
			error.department = 'department is required'
		}

		if (department && Validator.isEmpty(department.trim() || '')) {
			error.department = 'department is required'
		}
		if (!equipment) {
			error.equipment = 'equipment is required'
		}
		if (equipment && Validator.isEmpty(equipment.trim() || '')) {
			error.equipment = 'equipment is required'
		}
		if (!serialNumber) {
			error.serialNumber = 'serialNumber is required'
		}
		if (serialNumber && Validator.isEmpty(serialNumber.trim() || '')) {
			error.serialNumber = 'serialNumber is required'
		}
		if (!description) {
			error.description = 'description is required'
		}
		if (description && Validator.isEmpty(description.trim() || '')) {
			error.description = 'description is required'
		}
		if (isEmpty(error)) return next();
		return res.status(406).json({
			error
		});
	}
	/**
	 * validate Request input length
	 * @param {object} req
	 * @param {object} res
	 * @param {function} next
	 * @return {void}
	 */
	static checkLength = (req, res, next) => {
		const {
			title,
			serialNumber,
			description
		} = req.body;

		if (!Validator.isLength(title, {
				min: 5,
				max: 20
			})) {
			return res.status(406)
				.json({
					status: 'Fail',
					message: 'Title must be between 5 and 20 characters',
				});
		}
		if (!Validator.isLength(serialNumber, {
				min: 8,
				max: 8
			})) {
			return res.status(406)
				.json({
					status: 'Fail',
					message: 'SerialNumber must be only 8 characters',
				});
		}
		if (!Validator.isLength(description, {
				min: 10,
				max: 50
			})) {
			res.status(406)
				.json({
					status: 'Fail',
					message: 'Description must be between 10 and 50 characters',
				});
		}
		next();
	}
	/**
	 * validate Request id parameter
	 * @param {object} req
	 * @param {object} res
	 * @param {function} next
	 * @return {void}
	 */
	static idIsNumber = (req, res, next) => {
		const {
			id
		} = req.params;
		const error = {};
		if (!id) {
			error.id = 'id is required'
		}
		if (!id < 0) {
			error.id = 'id is required'
		}
		if (id && Validator.isEmpty(id.trim() || '')) {
			error.id = 'id is required'
		}
		if (Number.isNaN(parseInt(id, 10))) {
			error.id = 'id must be a number'
			if (isEmpty(error)) return next();
			return res.status(400).json({
				error
			});
		}
	}
}