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
   *
   * @returns {Object} adds new request
   *
   *  @memberof Request
   */
  static addRequest(req, res) {
    const {
      title,
      department,
      equipment,
      serialNumber,
      description,
    } = req.body;
    const requestSize = requestsDb.length + 1;
    const request = {
      id: requestSize,
      title,
      department,
      equipment,
      serialNumber,
      description,
    };
    requestsDb.push(request);
    return res.status(201)
      .json({
        data: {
          request,
        },
        message: 'Request Added',
        status: 'success',
      });
  }
  /**
   * gets all request
   * @param {Object} req
   * @param {Object} res
   *
   * @returns {Object} gets all request
   *
   * @memberof Request
   */
  static getAllRequests(req, res) {
    return res.status(200)
      .json({
        data: {
          request: requestsDb,
        },
        message: 'request gotten',
        status: 'success',
      });
  }
  /**
   * gets request by id
   * @param {Object} req
   * @param {Object} res
   *
   * @returns {Object} gets request by id
   *
   * @memberof Request
   */
  static getRequestById(req, res) {
    const { id } = req.params;
    requestsDb.forEach((request) => {
      if (request.id === parseInt(id, 10)) {
        return res.status(200).json({
          data: {
            request,
          },
          message: `request with id ${id}`,
          status: 'success',
        });
      }
      return res.status(404).json({
        message: `request with id ${id} cannot be found`,
        status: 'fail',
      });
    });
  }
}
