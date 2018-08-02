import React from 'react';
import {shallow} from 'enzyme';

import ContactListItem from './ContactListItem';

test('ContactListItem', () => {
  it('should render contact\'s name', () => {
    const contact = { name: 'Test' };
    const contactListItem = shallow(<ContactListItem contact={contact} />);

    expect(contactListItem.text()).toEqual(contact.name);
  }) 
})