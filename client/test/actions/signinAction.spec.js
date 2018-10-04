import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import signIn from '../../actions/signInAction';


describe('signin Action', () => {
  it('should sucessfully sign in users and redirect to /createrequest', () => {
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
      email: 'email',
      password: 'password',
      errors: {},
      role: 'user',
    };
    const history = {
      push: jest.fn(),
    };
    const store = mockStore({});

    return store.dispatch(signIn(details, history)).then(() => {
      expect(history.push).toHaveBeenCalledWith('/createrequest');
    });
  });
  it('should sucessfully sign in admin and redirect to /adminrequest', () => {
    const middleware = [thunk.withExtraArgument({
      post: () => Promise.resolve({
        data: {
          data: {
            user: {
              role: 'admin',
              id: 1,
            },
          },
        },
      }),
    })];
    const mockStore = configureMockStore(middleware);
    const details = {
      email: 'email',
      password: 'password',
      errors: {},
      role: 'admin',
    };
    const history = {
      push: jest.fn(),
    };
    const store = mockStore({});
    return store.dispatch(signIn(details, history)).then(() => {
      expect(history.push).toHaveBeenCalledWith('/adminrequest');
    });
  });
  it('should sucessfully show error if email or password is not correct', () => {
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
    const error = {
      response: {
        status: 401,
      },
      message: 'email or password is not correct',
    };
    const mockStore = configureMockStore(middleware);
    const store = mockStore({});


    return store.dispatch(signIn(error)).catch(() => {
      expect(error.response.status).toEqual(401);
      expect(error.message).toEqual('email or password is not correct');
    });
  });
});
