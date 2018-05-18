import requestsController from '../controllers/requestController';
import validations from '../middleware/requestValidations';

// default route
const routes = (app) => {
  // default route
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to Maintenance Tracker API');
  });

  app.post('/api/v1/users/requests', validations.validateString, validations.checkLength, requestsController.addRequest);
  app.get('/api/v1/users/requests', requestsController.getAllRequests);
};
export default routes;

