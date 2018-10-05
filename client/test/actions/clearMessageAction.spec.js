
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import clearMessage from '../../actions/clearMeassageAction';


describe('clear message Action', () => {
  it('should sucessfully clear error message', () => {
    const middleware = [thunk.withExtraArgument()];

    const mockStore = configureMockStore(middleware);
    const store = mockStore({ error: '' });
    const expectedAction = [
      { type: 'CLEAR_MESSAGE' },
    ];
    store.dispatch(clearMessage());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
