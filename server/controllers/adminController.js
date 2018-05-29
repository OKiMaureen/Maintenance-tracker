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
    const request = req.foundRequest;
    if (request.foundRequest.requeststatus !== 'pending') {
      res.status(403).json({
        message: 'request is no longer pending',
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
              request: approvedRequest.rows[0],
            },
            message: 'request approved successfully',
            status: 'success',
          });
      }).catch((err) => {
        res.status(500).send(err.message);
      });
  }
  /**
   * @description -  admin disapprove requests
   * @static
   *
   * @param {object} request - HTTP Request
   * @param {object} response - HTTP Response
   *
   * @memberof requestController
   *
   */
  static disapproveRequests(req, res) {
    const requestId = parseInt(req.params.id, 10);
    const request = req.foundRequest;
    if (request.foundRequest.requeststatus !== 'pending') {
      res.status(403)
        .json({
          message: 'request is no longer pending',
          status: 'fail',
        });
    }
    const disapproveRequest = {
      text: 'UPDATE requests SET requeststatus=$1 WHERE id =$2 RETURNING *',
      values: ['disapproved', requestId,
      ],
    };

    return client.query(disapproveRequest)
      .then((disapprovedRequest) => {
        res.status(200)
          .json({
            data: {
              request: disapprovedRequest.rows[0],
            },
            message: 'request disapproved successfully',
            status: 'success',
          });
      }).catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

