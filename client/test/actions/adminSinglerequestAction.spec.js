import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import request from '../../actions/adminSingleRequestAction';


describe('a user request Action', () => {
  it('should sucessfully get a single request', () => {
    const middleware = [thunk.withExtraArgument({
      get: () => Promise.resolve({
        status: 200,
        data: {
          data: {
            request: {
              id: 1,
              user_id: 1,
              title: 'repair computer',
              department: 'technology',
              equipment: 'computer',
              requeststatus: 'pending',
              description: 'repair laptop',
              serialnumber: 111111111,
            },
          },
          message: 'single request successfully gotten',
          status: 'success',
        },
      }),
    })];
    const state = {
      authUser: {
        getAuth: {
          token: 'justamocktoken',
        },
      },
    };
    const mockStore = configureMockStore(middleware);
    const store = mockStore(state);

    store.dispatch(request()).then(() => {
      expect(store.getActions()[1].type).toEqual('CHANGE_STATUS');
    });
  });
  it('should sucessfully show error', () => {
    const error = {
      response: {
        status: 500,
      },
    };
    const middleware = [thunk.withExtraArgument({
      get: () => Promise.reject(error),
    })];
    const state = {
      authUser: {
        getAuth: {
          token: 'justamocktoken',
        },
      },
    };
    const mockStore = configureMockStore(middleware);
    const store = mockStore(state);


    return store.dispatch(request(error)).then(() => {
      expect(error.response.status).toEqual(500);
    });
  });
});
