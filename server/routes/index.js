import AdminController from '../controllers/adminController';
import AuthenticateUserLogin from '../middlewares/authenticateLogin';
import RequestsController from '../controllers/requestController';
import UsersController from '../controllers/userController';
import ValidateUserEmail from '../middlewares/checkEmail';
import ValidateUser from '../middlewares/userValidations';
import ValidateRequest from '../middlewares/requestValidations';

const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to Maintenance Tracker API');
  });
  app.post('/api/v1/auth/signup', ValidateUserEmail.checkEmail, ValidateUser.validateSignupInput, ValidateUser.inputLength, UsersController.signupUser);
  app.post('/api/v1/auth/login', ValidateUser.validateSigninInput, UsersController.signinUser);
  app.get('/api/v1/users/requests', AuthenticateUserLogin.authenticateUser, RequestsController.getAllRequests);
  app.get('/api/v1/users/requests/:id', AuthenticateUserLogin.authenticateUser, ValidateRequest.idIsNumber, RequestsController.getRequestById);
  app.post('/api/v1/users/requests', AuthenticateUserLogin.authenticateUser, ValidateRequest.validateString, ValidateRequest.checkLength, RequestsController.createRequest);
  app.put('/api/v1/users/requests/:id', AuthenticateUserLogin.authenticateUser, ValidateRequest.idIsNumber, RequestsController.updateRequest);
  app.get('/api/v1/requests/', AuthenticateUserLogin.authenticateAdmin, AdminController.adminGetAllRequests);
  app.put('/api/v1/requests/:id/approve', AuthenticateUserLogin.authenticateAdmin, ValidateRequest.idIsNumber, AdminController.approveRequests);
};
export default routes;
