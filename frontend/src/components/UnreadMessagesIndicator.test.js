import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UnreadMessagesIndicator from './UnreadMessagesIndicator';

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

describe('UnreadMessagesIndicator', () => {
    it('should check if component shows when count is greater than zero', () => {
        const unreadMessagesIndicator = shallow(<UnreadMessagesIndicator count={1} />);

        expect(unreadMessagesIndicator.find('div').hasClass('hidden')).toEqual(false);
    });

    it('should show unread messages count', () => {
        const expectedMessagesCount = 1;
        const unreadMessagesIndicator = shallow(<UnreadMessagesIndicator count={expectedMessagesCount} />);

        expect(Number(unreadMessagesIndicator.find('div').text())).toEqual(expectedMessagesCount);
    });

    it('should check if component dissapears when count is equal zero', () => {
        const unreadMessagesIndicator = shallow(<UnreadMessagesIndicator count={0} />);

        expect(unreadMessagesIndicator.find('div').hasClass('hidden')).toEqual(true);
    });
});
