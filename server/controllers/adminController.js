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
   * @param {object} request - HTTP Request
   * @param {object} response - HTTP Response
   *
   * @memberof requestController
   *
   */
  static adminGetAllRequests(req, res) {
    const allrequests = 'SELECT requests.title, requests.department,requests.equipment,requests.serialNumber,requests.description,requests.requestStatus,users.name AS user FROM requests INNER JOIN users ON requests.user_id = users.id';
    client.query(allrequests)
      .then((foundAllRequests) => {
        res.status(200)
          .json({
            data: {
              request: foundAllRequests.rows,
            },
            message: 'all request gotten successfully',
            status: 'success',
          });
      }).catch((err) => {
        res.status(500).send(err.message);
      });
  }
  /**
   * @description -  admin approve requests
   * @static
   *
   * @param {object} request - HTTP Request
   * @param {object} response - HTTP Response
   *
   * @memberof requestController
   *
   */
  static approveRequests(req, res) {
    const requestId = parseInt(req.params.id, 10);
    const findRequestById = `SELECT * FROM requests WHERE id = '${requestId}'`;
    client.query(findRequestById)
      .then((foundRequestById) => {
        if (!foundRequestById.rows[0]) {
          return res.status(404)
            .json({
              message: 'request with id not available',
              status: 'fail',
            });
        }
        if (foundRequestById.rows[0].requeststatus !== 'pending') {
          res.status(403)
            .json({
              message: 'request must have a status of pending',
              status: 'fail',
            });
        }
        const approveRequests = {
          text: 'UPDATE requests SET requeststatus=$1 WHERE id =$2 RETURNING *',
          values: ['approved', requestId,
          ],
        };

        return client.query(approveRequests)
          .then((approvedRequest) => {
            res.status(200)
              .json({
                data: {
                  Request: approvedRequest.rows[0],
                },
                message: 'request approved successfully',
                status: 'success',
              });
          }).catch((err) => {
            res.status(500).send(err.message);
          });
      });
  }
}

