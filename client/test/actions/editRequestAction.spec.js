
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import request from '../../actions/editRequestAction';


describe('create request Action', () => {
  it('should sucessfully create request and redirect to /userdetail', () => {
    const middleware = [thunk.withExtraArgument({
      put: () => Promise.resolve({
        status: 200,
        data: {
          data: {
            updatedRequest: {
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
      editRequest: {
        checkStatus: {
          isLoading: false,
          success: true,
          error: false,
        },
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
    };
    const mockStore = configureMockStore(middleware);
    const singleRequest = {
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
    store.dispatch(request(singleRequest, history)).then(() => {
      expect(store.getActions()[1].type).toEqual('EDIT_REQUEST');
      expect(history.push).toHaveBeenCalledWith('/singleRequest/');
    });
  });

  it('should sucessfully show error', () => {
    const error = {
      response: {
        status: 409,
      },
    };
    const middleware = [thunk.withExtraArgument({
      put: () => Promise.reject(error),
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
