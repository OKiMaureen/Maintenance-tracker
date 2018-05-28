import bcrypt from 'bcrypt';
import connection from '../helpers/connection';

import createToken from '../helpers/createToken';


const client = connection();
client.connect();

/**
 * @class userController
 *
 * @export
 *
 */
export default class UserController {
  /**
   * @description - Creates a new user
   * @static
   *
   * @param {object} request - HTTP Request
   * @param {object} response- HTTP Response
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
        const token = createToken(newUser.rows[0]);
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
  /**
  * @description - logs in a user
   * @static
   *
   * @param {object} request - HTTP Request
   * @param {object} response - HTTP Response
   *
   * @memberof userController
   *
   */
  static signinUser(req, res) {
    const { email, password } = req.body;
    const findUser = `SELECT * FROM users WHERE  email = '${email}'`;
    client.query(findUser)
      .then((foundUser) => {
        if (!foundUser.rows[0]) {
          return res.status(404)
            .json({
              message: 'user does not exist',
              status: 'fail',
            });
        }
        if (!bcrypt.compareSync(password.trim(), foundUser.rows[0].password)) {
          return res.status(401)
            .json({
              message: 'please try again, you entered a wrong password',
              status: 'fail',
            });
        }
        const token = createToken(foundUser.rows[0]);
        return res.status(200)
          .json({
            data: {
              user: foundUser.rows[0],
              token,
            },
            message: 'user logged in successfully',
            status: 'success',
          });
      }).catch((err) => {
        res.status(500).send(err);
      });
  }
}

