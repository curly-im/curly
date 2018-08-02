import messagesReducer from './messages';

test('Messages Reducer', () => {
    it('should return the initial state', () => {
        const initialState = messagesReducer(undefined, {});

        expect(Array.isArray(initialState)).toBe(true);
    });

    it('should add new item on incoming message', () => {
        const incomingMessage = {
            sender: 'test',
            message: 'Test'
        };

        const onlyOneMessage = messagesReducer({}, {
            type: 'MESSAGE',
            sender: incomingMessage.sender,
            message: incomingMessage.message
        });

        expect(onlyOneMessage.length).toBe(1);
        expect(onlyOneMessage[0].sender).toEqual(incomingMessage.sender);
        expect(onlyOneMessage[0].message[0]).toEqual(incomingMessage.message);
    });

    it('should push new message if earlier messages present', () => {
        const incomingMessage = {
            sender: 'test',
            message: 'Test'
        };

        const earlierMessage = {
            sender: 'earlier',
            message: 'message'
        };

        const state = messagesReducer({}, {
            type: 'MESSAGE',
            ...earlierMessage
        });

        const twoMessages = messagesReducer(state, {
            type: 'MESSAGE',
            ...incomingMessage
        });

        expect(twoMessages.length).toBe(1);
        expect(twoMessages[0].sender).toEqual(incomingMessage.sender);
        expect(onlyOneMessage[0].message[1]).toEqual(incomingMessage.message);
    });
});
