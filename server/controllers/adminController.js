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
    const allrequests = 'SELECT  users.id AS userId, users.name AS user, requests.id AS requestId, requests.title, requests.department,requests.equipment,requests.serialNumber,requests.description,requests.requestStatus FROM requests INNER JOIN users ON requests.user_id = users.id';
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
  static approveRequests(req, res, done) {
    const requestId = parseInt(req.params.id, 10);
    const request = req.foundRequest;
    if (request.foundRequest.requeststatus === 'resolved') {
      res.status(403).json({
        message: 'you cannot approve, request is already resolved.',
        status: 'fail',
      });
      return done();
    } else if (request.foundRequest.requeststatus === 'approved') {
      res.status(403).json({
        message: 'you cannot approve, request is already approved.',
        status: 'fail',
      });
      return done();
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
  static disapproveRequests(req, res, done) {
    const requestId = parseInt(req.params.id, 10);
    const request = req.foundRequest;
    if (request.foundRequest.requeststatus === 'disapproved') {
      res.status(403)
        .json({
          message: 'you cannot disapprove, request is already disapproved',
          status: 'fail',
        });
      return done();
    } else if (request.foundRequest.requeststatus === 'resolved') {
      res.status(403)
        .json({
          message: 'you cannot disapprove, request is already resolved',
          status: 'fail',
        });
      return done();
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
  /**
   * @description -  admin resolve requests
   * @static
   *
   * @param {object} request - HTTP Request
   * @param {object} response - HTTP Response
   *
   * @memberof requestController
   *
   */
  static resolveRequests(req, res, done) {
    const requestId = parseInt(req.params.id, 10);
    const request = req.foundRequest;
    if (request.foundRequest.requeststatus !== 'approved') {
      res.status(403)
        .json({
          message: 'Unapproved request cannot be resolved',
          status: 'fail',
        });
      return done();
    }
    const resolvedRequest = {
      text: 'UPDATE requests SET requeststatus=$1 WHERE id =$2 RETURNING *',
      values: ['resolved', requestId,
      ],
    };

    return client.query(resolvedRequest)
      .then((resolvedRequests) => {
        res.status(200)
          .json({
            data: {
              request: resolvedRequests.rows[0],
            },
            message: 'request resolved successfully',
            status: 'success',
          });
      }).catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

