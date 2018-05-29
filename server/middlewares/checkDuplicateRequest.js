import connection from '../helpers/connection';

const client = connection();
client.connect();

const checkDuplicate = (req, res, next) => {
  const
    userId = req.token.id.id;
  const {
    title,
    department,
    equipment,
    serialnumber,
    description,
  } = req.body;

  const checkRequestDuplicate = {
    text: 'SELECT * FROM requests WHERE title = $1 AND department =$2  AND equipment =$3 AND serialnumber = $4 AND description = $5 AND user_id = $6',
    values: [title, department, equipment, serialnumber, description, userId],
  };
  client.query(checkRequestDuplicate)
    .then((checkRequestDuplicates) => {
      if (checkRequestDuplicates.rows[0]) {
        res.status(409)
          .json({
            message: 'request already exists',
            status: 'fail',
          });
      } return next();
    }).catch((err) => { res.status(500).send(err.message); });
};
export default checkDuplicate;
