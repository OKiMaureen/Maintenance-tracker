
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import request from '../../actions/createRequestAction';


describe('create request Action', () => {
  it('should sucessfully create request and redirect to /userdetail', () => {
    const middleware = [thunk.withExtraArgument({
      post: () => Promise.resolve({
        status: 201,
        data: {
          data: {
            request: {
              department: 'technical',
              title: 'bad laptop',
              description: 'a bad computer',
              equipment: 'laptop',
              requeststatus: 'pending',
              serialnumber: '11111111',
              id: 11,
              user_id: 94,
            },

          },
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
    const details = {
      edepartment: 'technical',
      title: 'bad laptop',
      description: 'a bad computer',
      equipment: 'laptop',
      requeststatus: 'pending',
      serialnumber: '11111111',
    };


    const history = {
      push: jest.fn(),
    };

    const store = mockStore(state);

    store.dispatch(request(details, history)).then(() => {
      expect(store.getActions()[1].type).toEqual('CREATE_REQUEST');
      expect(history.push).toHaveBeenCalledWith('/requestdetails');
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
      expect(error.response.status).toEqual(409);
    });
  });
});
