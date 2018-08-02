import contactsReducer from './contacts';

test('contacts reducer', () => {
  it('should return the initial state', () => {
    expect(contactsReducer(undefined, {})).toEqual([]);
  });

  it('should handle SET_CONTACTS', () => {
    const expectedContacts = [
      { name: 'Contact 1' },
      { name: 'Contact 2' }
    ];
    const action = {
      type: 'SET_CONTACTS',
      contacts: expectedContacts
    };
    expect(contactsReducer([], action)).toEqual(expectedContacts);
  })
});