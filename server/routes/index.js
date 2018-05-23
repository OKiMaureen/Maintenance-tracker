import usersController from '../controllers/userController';
import validateEmail from '../middleware/checkEmail';
import user from '../middleware/userValidations';


const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to Maintenance Tracker API');
  });
  app.post('/api/v1/auth/signup', validateEmail.checkEmail, user.validateSignupInput, user.inputLength, usersController.signupUser);
};
export default routes;
