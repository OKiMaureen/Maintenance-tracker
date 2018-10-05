
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import logout from '../../actions/logoutAction';


describe('clear message Action', () => {
  it('should sucessfully clear error message', () => {
    const middleware = [thunk.withExtraArgument()];

    const mockStore = configureMockStore(middleware);
    const store = mockStore({ error: '' });
    const expectedAction = [
      { type: 'LOG_OUT' },
    ];
    store.dispatch(logout());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
