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
    const { id } = req.token;
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
}

