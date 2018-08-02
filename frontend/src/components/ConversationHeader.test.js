import React from 'react';
import {shallow} from 'enzyme';

import ConversationHeader from './ConversationHeader';

test('ConversationHeader', () => {
  it('should render contact\'s name', () => {
    const contact = { name: 'Test' };
    const conversationHeader = shallow(<ConversationHeader contact={contact} />);

    expect(conversationHeader.text()).toEqual(contact.name);
  }) 
})