import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import signUp from '../../actions/signUpAction';

describe('signup Action', () => {
  it('should sucessfully sign up users and redirect to /createrequest', () => {
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
      expect(history.push).toHaveBeenCalledWith('/createrequest');
    });
  });
  it('should sucessfully show error if email is already registered', () => {
    const error = {
      response: {
        status: 409,
      },
      message: 'email already exists',
    };
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
    const store = mockStore({});

    return store.dispatch(signUp(error)).catch(() => {
      expect(error.response.status).toEqual(409);
      expect(error.message).toEqual('email already exists');
    });
  });
  it('should sucessfully show error', () => {
    const error = {
      response: {
        status: 409,
      },
    };
    const middleware = [thunk.withExtraArgument({
      post: () => Promise.reject(error),
    })];
    const mockStore = configureMockStore(middleware);
    const store = mockStore({});


    return store.dispatch(signUp(error)).then(() => {
      expect(error.response.status).toEqual(409);
    });
  });
});
