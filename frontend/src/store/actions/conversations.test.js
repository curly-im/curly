// @flow
import { addConversation, setCurrentConversation } from './index';

import type Conversation from '../../lib/conversation';

test('conversations', () => {
  it('should add conversation', () => {
    const newConversation: Conversation = {
      id: 'test1',
      state: 'open',
      contact: { name: 'Test' }
    };
    const expectedAction = {
      type: 'ADD_CONVERSATION',
      conversation: newConversation
    }

    expect(addConversation(newConversation).toEqual(expectedAction));
  });

  it('should set current conversation', () => {
    const currentConversation: Conversation = {
      id: 'test1',
      state: 'open',
      contact: { name: 'Test' }
    };
    const expectedAction = {
      type: 'SET_CURRENT_CONVERSATION',
      conversation: currentConversation
    }

    expect(setCurrentConversation(currentConversation).toEqual(expectedAction));
  });
})