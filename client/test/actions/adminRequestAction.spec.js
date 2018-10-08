
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import request from '../../actions/adminRequestAction';


describe('all user request Action', () => {
  it('should sucessfully get all request', () => {
    const middleware = [thunk.withExtraArgument({
      get: () => Promise.resolve({
        status: 200,
        data: {
          data: [
            {
              id: 1,
              user_id: 1,
              title: 'repair computer',
              department: 'technology',
              equipment: 'computer',
              requeststatus: 'pending',
              description: 'repair laptop',
              serialnumber: 111111111,
            },
            {
              id: 2,
              user_id: 2,
              title: 'repair computer',
              department: 'technology',
              equipment: 'computer',
              requeststatus: 'pending',
              description: 'repair laptop',
              serialnumber: 111111111,
            },
          ],
          message: 'request successfully gotten',
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
      expect(store.getActions()[1].type).toEqual('GET_ADMIN_REQUESTS');
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
