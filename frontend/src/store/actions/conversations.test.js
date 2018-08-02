import { addConversation, setCurrentConversation } from './index';

test('conversations', () => {
    it('should add conversation', () => {
        const newConversation = {
            id: 'test1',
            state: 'open',
            contact: { name: 'Test' }
        };
        const expectedAction = {
            type: 'ADD_CONVERSATION',
            conversation: newConversation
        };

        expect(addConversation(newConversation).toEqual(expectedAction));
    });

    it('should set current conversation', () => {
        const currentConversation = {
            id: 'test1',
            state: 'open',
            contact: { name: 'Test' }
        };
        const expectedAction = {
            type: 'SET_CURRENT_CONVERSATION',
            conversation: currentConversation
        };

        expect(setCurrentConversation(currentConversation).toEqual(expectedAction));
    });
});
