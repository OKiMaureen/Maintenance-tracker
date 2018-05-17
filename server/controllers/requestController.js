import requestsDb from '../dummyModel/requests';
/**
 * class Request controls all request methods
 * @class request
 */
export default class Requests {
	/**
	 * adds a new request
	 * @param {object} req
	 * @param {object} res
	 * @returns {json} adds new request
	 * @memberof Request
	 */
	static addRequest(req, res) {
    const { title, department, equipment,serialNumber,description } = req.body;
    const id = requestsDb.length;
    const request = {
      title,
      department,
      equipment,
      serialNumber,
      decription
    };
    requestsDb.push(request);
    return res.status(201)
      .json({
        status: 'sucessfully created',
        message: 'request added',
        request
      });
  }
}