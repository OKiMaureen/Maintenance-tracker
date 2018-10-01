import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import signUp from '../../actions/signUpAction';

describe('signup Action', () => {
  const middleware = [thunk.withExtraArgument({
    post: () => Promise.resolve({
      data: {
        data: {
          user: {
            role: 'user',
            id: 1,
          },
        },
      },
    }),
  })];
  const mockStore = configureMockStore(middleware);
  it('should sucessfully sign up users and redirect to /allrequests', () => {
    const details = {
      name: 'name',
      email: 'email',
      password: 'password',
      password_confirmation: 'confirm',
      errors: {},
      role: 'user',
    };
    const history = {
      push: jest.fn(),
    };
    const store = mockStore({});

    return store.dispatch(signUp(details, history)).then(() => {
      expect(history.push).toHaveBeenCalledWith('/allrequests');
    });
  });
  it('should sucessfully show error if email is already registered', () => {
    const error = {
      response: {
        status: 409,
      },
      message: 'email already exists',
    };
    const store = mockStore({});

    return store.dispatch(signUp(error)).catch(() => {
      expect(error.response.status).toEqual(409);
      expect(error.message).toEqual('email already exists');
    });
  });
});
