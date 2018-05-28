import connection from '../helpers/connection';


const client = connection();
client.connect();

/**
 * @class adminController
 *
 * @export
 *
 */
export default class AdminController {
  /**
   * @description -  admin gets all requests
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof requestController
   *
   */
  static adminGetAllRequests(req, res) {
    const allrequests = 'SELECT requests.title, requests.department,requests.equipment,requests.serialNumber,requests.description,users.name AS user FROM requests INNER JOIN users ON requests.user_id = users.id';
    client.query(allrequests)
      .then((foundAllRequests) => {
        res.status(200)
          .json({
            data: {
              request: foundAllRequests.rows[0],
            },
            message: 'all request gotten successfully',
            status: 'success',
          });
      }).catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

