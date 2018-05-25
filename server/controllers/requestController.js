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
export default class requestController {
  /**
   * @description - gets all requests
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof requestController
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
      }).catch((err) => { res.status(500).send(err.message); });
  }
  /**
   * @description - get a single request
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof requestController
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
      }).catch((err) => { res.status(500).send(err.message); });
  }
  /**
   * @description - create a  request
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof requestController
   *
   */
  static createRequest(req, res) {
    const { id } = req.token.id;
    const {
      title,
      department,
      equipment,
      serialNumber,
      description,
    } = req.body;
    const requests = `
    INSERT INTO requests (
      user_id,
      title,
      department,
      equipment,
      serialNumber,
      description
    )
    VALUES (
      '${id}',
      '${title}',
      '${department}',
      '${equipment}',
      '${serialNumber}',
      '${description}'
    ) RETURNING *;`;
    client.query(requests)
      .then((newRequest) => {
        res.status(201)
          .json({
            data: {
              newRequest: newRequest.rows[0],
            },
            message: 'request created successfully',
            status: 'success',
          });
      }).catch((err) => { res.status(500).send(err.message); });
  }
  /**
   * @description - update a request
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof requestController
   *
   */
  static updateRequest(req, res) {
    const requestId = parseInt(req.params.id, 10);
    const { id } = req.token.id;
    const {
      title,
      department,
      equipment,
      serialNumber,
      description,
    } = req.body;

    const requestUpdate = {

      text: 'UPDATE requests SET title=$1, department=$2, equipment=$3, serialNumber=$4,description=$5 WHERE id= $6 AND user_id =$7 RETURNING *',
      values: [title, department, equipment, serialNumber, description, requestId, id],
    };
    client.query(requestUpdate)
      .then((newRequestUpdated) => {
        res.status(200)
          .json({
            data: {
              updatedRequest: newRequestUpdated.rows[0],
            },
            message: 'request updated successfully',
            status: 'success',
          });
      }).catch((err) => { res.status(500).send(err.message); });
  }
}

