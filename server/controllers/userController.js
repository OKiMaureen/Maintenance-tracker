import dotenv from 'dotenv';
import { Client } from 'pg';
import bcrypt from 'bcrypt';
import createToken from '../helper/token';
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
 * @class userController
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
  static signupUser(req, res) {
    const password = bcrypt.hashSync(req.body.password.trim(), 10);
    const {
      name,
      email,
    } = req.body;

    const user = `
    INSERT INTO users (
      name,
      email,
      password
    )
    VALUES (
      '${name}',
      '${email}',
      '${password}'
    ) RETURNING *;`;
    client.query(user)
      .then((newUser) => {
        const token = createToken(newUser.rows[0].id);
        return res.status(201)
          .json({
            data: {
              newUser: newUser.rows[0],
              token,
            },
            message: 'user created successfully',
            status: 'success',
          });
      }).catch((err) => { res.status(500).send(err); });
  }
}

