import React from 'react';
import {shallow} from 'enzyme';

import UnreadMessagesIndicator from './UnreadMessagesIndicator';

test('UnreadMessagesIndicator', () => {
    it('should check if component shows when count is greater than zero', () => {
        const unreadMessagesIndicator = shallow(<UnreadMessagesIndicator count={1} />);
        expect(unreadMessagesIndicator.find('div').hasClass('hidden')).toEqual(false);
        });
    
    it('should show unread messages count', () => {
        const expectedMessagesCount = {count: 1}
        const unreadMessagesIndicator = shallow(<UnreadMessagesIndicator count={count} />);
        expect(unreadMessagesIndicator.find('div').toEqual(expectedMessagesCount.count));
        });

    it('should check if component dissapears when count is equal zero', () => {

        const unreadMessagesIndicator = shallow(<UnreadMessagesIndicator count={0} />);
        expect(unreadMessagesIndicator.find('div').hasClass('hidden')).toEqual(true);
        });
    
    }
)