import { setContacts } from './index';

test('contacts', () => {
  it('should set contacts', () => {
    const newContact = {
      name: 'Test'
    };
    const expectedAction = {
      type: 'SET_CONTACTS',
      contacts: [newContact]
    }

    expect(setContacts(newContact).toEqual(expectedAction));
  });
})