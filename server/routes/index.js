import requestsController from '../controllers/requestController';
import validations from '../middleware/requestValidations';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to Maintenance Tracker API');
  });

  app.post(
    '/api/v1/users/requests', validations.validateString, validations.checkLength,
    requestsController.addRequest,
  );
  app.get('/api/v1/users/requests', requestsController.getAllRequests);
  app.put('/api/v1/users/requests/:id', validations.idIsNumber, requestsController.updateRequest);
  app.get('/api/v1/users/requests/:id', validations.idIsNumber, requestsController.getRequestById);
};
export default routes;
