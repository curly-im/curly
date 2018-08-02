import React from 'react';
import {shallow} from 'enzyme';

import Messages from './Messages';

test('Messages', () => {
    it('should render items', () => {
        const messages = [
            { content: 'Test 1' },
            { content: 'Test 2' }
        ];
        const contact = { name: 'Test '};
        const Messages = shallow(<Messages messages={messages} contact={contact} />);

        expect(Messages.children().length).toEqual(2);
    });
});
