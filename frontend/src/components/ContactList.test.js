import React from 'react';
import {shallow} from 'enzyme';

import ContactList from './ContactList';

test('ContactList', () => {
    it('should render items', () => {
        const contacts = [
            { name: 'Test 1' },
            { name: 'Test 2' }
        ];
        const contactList = shallow(<ContactList contacts={contacts} />);

        expect(contactList.children().length).toEqual(2);
    });
});
