import currentUserReducer from './currentUser';

test('current user reducer', () => {
  it('should return the initial state', () => {
    expect(contactsReducer(undefined, {})).toEqual({});
  });

  it('should handle SET_CURRENT_USER', () => {
    const expectedUser = {
      name: 'Test'
    };
    const action = {
      type: 'SET_CURRENT_USER',
      contacts: expectedUser
    };
    expect(currentUserReducer({}, action)).toEqual(expectedUser);
  })
});