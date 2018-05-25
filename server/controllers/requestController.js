import dotenv from 'dotenv';
import { Client } from 'pg';
import configurations from '../config/config';


dotenv.config();


let config;
if (process.env.NODE_ENV === 'development') {
  config = configurations.development;
} else {
  config = configurations.test;
}
const client = new Client(config);
client.connect();

/**
 * @class requestController
 *
 * @export
 *
 */
export default class userController {
  /**
   * @description - Creates a new user
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof userController
   *
   */
  static getAllRequests(req, res) {
    const { id } = req.token.id;
    const findRequest = `SELECT * FROM requests WHERE id = ${id}`;
    client.query(findRequest)
      .then((foundRequest) => {
        if (!foundRequest.rows[0]) {
          return res.status(404)
            .json({
              message: 'no request available',
              status: 'fail',
            });
        }
        return res.status(200)
          .json({
            data: {
              foundRequest: foundRequest.rows[0],
            },
            message: 'request gotten successfully',
            status: 'success',
          });
      });
  }
  /**
   * @description - Creates a new user
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof userController
   *
   */
  static getRequestById(req, res) {
    const { id } = req.token.id;
    const requestId = parseInt(req.params.id, 10);
    const findRequestById = `SELECT * FROM requests WHERE requests.id = ${requestId}`;

    client.query(findRequestById)
      .then((foundRequestById) => {
        if (!foundRequestById.rows[0]) {
          return res.status(404)
            .json({
              message: 'no request available with given id',
              status: 'fail',
            });
        }
        if (foundRequestById.rows[0].user_id === id) {
          return res.status(200).json({
            data: {
              foundRequest: foundRequestById.rows[0],
            },
            message: 'single request gotten successfully',
            status: 'success',
          });
        }
        return res.status(403).json({
          message: 'request cannot be viewed by you',
          status: 'fail',
        });
      });
  }
}

