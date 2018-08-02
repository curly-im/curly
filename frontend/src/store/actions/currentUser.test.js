import { setCurrentUser } from './index';

test('contacts', () => {
  it('should set current user', () => {
    const user = {
      name: 'Test'
    };
    const expectedAction = {
      type: 'SET_CURRENT_USER',
      currentUser: user
    }

    expect(setCurrentUser(user).toEqual(expectedAction));
  });
})