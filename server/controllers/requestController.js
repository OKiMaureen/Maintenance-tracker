import requestsDb from '../dummyModel/request';
/**
 * class Request controls all request methods
 * @class request
 */
export default class Requests {
	/**
	 * adds a new request
	 * @param {Object} req
	 * @param {Object} res
	 * @returns {Object} adds new request
	 * @memberof Request
	 */
	static addRequest(req, res) {
    const { title, department, equipment,serialNumber,description } = req.body;
    const requestSize = requestsDb.length;
    const request = {
      id:requestSize,
      title,
      department,
      equipment,
      serialNumber,
      description
    };
    requestsDb.push(request);
    return res.status(201)
      .json({
        data: {request},
        message: 'Request Added',
        status: "success"
     });
  }
}