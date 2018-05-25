import connection from '../helpers/connection';

const client = connection();
client.connect();

/**
 * @class Validate User
 */
export default class ValidateUserEmail {
/**
   * validate Request input string
   *
   * @param {Object} req
   * @param {Object} res
   *
   * @param {Function} next
   *
   * @return {Object}
   */
  static checkEmail(req, res, done) {
    const { email } = req.body;
    const mailCheck = `
      SELECT * FROM users WHERE email = '${email}'`;
    client.query(mailCheck)
      .then((foundEmail) => {
        if (foundEmail.rows[0]) {
          return res.status(409)
            .json({
              message: 'email already exists',
              status: 'error',
            });
        }
        return done();
      }).catch((err) => { res.status(500).send(err.message); });
  }
}
