import connection from '../helpers/connection';

const client = connection();
client.connect();

const checkDuplicateRequest = (req, res, next) => {
  const {
    id,
  } = req.token.id;
  const {
    title,
    department,
    equipment,
    serialnumber,
    description,
  } = req.body;
  const checkDuplicate = `SELECT  * from requests WHERE id ='${id}'`;
  client.query(checkDuplicate)
    .then((checkDuplicates) => {
      if (checkDuplicates) {
        const request = checkDuplicates.rows.find(oneRequest => (oneRequest.title === title
          && oneRequest.department === department && oneRequest.equipment === equipment
          && oneRequest.serialnumber === serialnumber && oneRequest.description === description));
        if (request) {
          res.status(409)
            .json({
              message: 'request already exists',
              status: 'fail',
            });
          return null;
        }
      }
    });
};
export default checkDuplicateRequest;
