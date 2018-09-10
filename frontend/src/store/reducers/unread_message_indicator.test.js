import unreadMessagesIndicator from './unread_message_indicator';

test('undread messages indicator reducer', () => {
    it('should return the initial state', () => {
        expect(unreadMessagesIndicator(undefined, {})).toEqual(new Map());
    });

    it('should handle SET', () => {
        const contactId = 1;
        const expectedState = 5;
        const action = {
            type: 'SET_UNREAD_MESSAGES_INDICATOR',
            contactId: contactId,
            count: expectedState
        };
        const map = unreadMessagesIndicator(undefined, action);
        expect(map.get(contactId)).toEqual(expectedState);
    });

    it('should handle CLEAR', () => {
        const contactId = 1;
        const action = {
            type: 'CLEAR_UNREAD_MESSAGES_INDICATOR',
            contactId: contactId
        };
        const map = unreadMessagesIndicator(undefined, action);
        expect(map.get(contactId)).toBeFalsy();
    });

    it('should handle INCREMENT', () => {
        const contactId = 1;
        const expectedState = 2;
        const action = {
            type: 'INCREMENT_UNREAD_MESSAGES_INDICATOR',
            contactId: contactId
        };
        const map = unreadMessagesIndicator(new Map([ [ contactId, 1 ] ]), action);
        expect(map.get(contactId)).toEqual(expectedState);
    });

    it('should handle DECREMENT', () => {
        const contactId = 1;
        const expectedState = 4;
        const action = {
            type: 'DECREMENT_UNREAD_MESSAGES_INDICATOR',
            contactId: contactId
        };
        const map = unreadMessagesIndicator(new Map([ [ contactId, 5 ] ]), action);
        expect(map.get(contactId)).toEqual(expectedState);
    });
});
