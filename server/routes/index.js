import UsersController from '../controllers/userController';
import RequestsController from '../controllers/requestController';
import ValidateUserEmail from '../middlewares/checkEmail';
import ValidateUser from '../middlewares/userValidations';
import ValidateRequest from '../middlewares/requestValidations';
import AuthenticateUserLogin from '../middlewares/authenticateUserLogin';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to Maintenance Tracker API');
  });
<<<<<<< HEAD
  app.post('/api/v1/auth/signup', ValidateUserEmail.checkEmail, ValidateUser.validateSignupInput, ValidateUser.inputLength, UsersController.signupUser);
  app.post('/api/v1/auth/login', ValidateUser.validateSigninInput, UsersController.signinUser);
  app.get('/api/v1/users/requests', AuthenticateUserLogin.authenticateUser, RequestsController.getAllRequests);
  app.get('/api/v1/users/requests/:id', AuthenticateUserLogin.authenticateUser, ValidateRequest.idIsNumber, RequestsController.getRequestById);
  app.post('/api/v1/users/requests', AuthenticateUserLogin.authenticateUser, ValidateRequest.validateString, ValidateRequest.checkLength, RequestsController.createRequest);
  app.put('/api/v1/users/requests/:id', AuthenticateUserLogin.authenticateUser, ValidateRequest.idIsNumber, RequestsController.updateRequest);
=======
  app.post('/api/v1/auth/signup', validateEmail.checkEmail, user.validateSignupInput, user.inputLength, usersController.signupUser);
  app.post('/api/v1/auth/login', user.validateSigninInput, usersController.signinUser);
  app.get('/api/v1/users/requests', userAuthentication.authenticateUser, requestsController.getAllRequests);
  app.get('/api/v1/users/requests/:id', userAuthentication.authenticateUser, request.checkLength, requestsController.getRequestById);
  app.post('/api/v1/users/requests', userAuthentication.authenticateUser, request.validateString, request.checkLength, requestsController.createRequest);
  app.put('/api/v1/users/requests/:id', userAuthentication.authenticateUser, request.idIsNumber, request.checkLength, requestsController.updateRequest);
>>>>>>> ac93c393130094f8dd03f73b8e5e93777b53d0eb
};
export default routes;
