import usersController from '../controllers/userController';
import requestsController from '../controllers/requestController';
import validateEmail from '../middleware/checkEmail';
import user from '../middleware/userValidations';
import userAuthentication from '../middleware/authenticateUserLogin';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to Maintenance Tracker API');
  });
  app.post('/api/v1/auth/signup', validateEmail.checkEmail, user.validateSignupInput, user.inputLength, usersController.signupUser);
  app.post('/api/v1/auth/login', user.validateSigninInput, usersController.signinUser);
  app.get('/api/v1/users/requests', userAuthentication.authenticateUser, requestsController.getAllRequests);
};
export default routes;
