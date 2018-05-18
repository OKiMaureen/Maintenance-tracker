import requestsController from '../controllers/requestController';
import validations from '../middleware/requestValidations';

// default route
const routes = (app) => {
  // default route
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to Maintenance Tracker API');
  });

  app.use('*', validations.validateString, validations.checkLength);
  app.post('/api/v1/users/requests', requestsController.addRequest);
};
export default routes;
