// @flow
import React from 'react';
import {shallow} from 'enzyme';

import { Conversation } from '../lib/conversation';

import ConversationView from './ConversationView';

test('ConversationView', () => {
  it('should render text if no conversation', () => {
    const noConversation = {};
    const conversationView = shallow(<ConversationView conversation={noConversation} />);

    expect(conversationView.text()).toEqual('No conversation selected');
  });

  it('should render header', () => {
    const conversation: Conversation = {
      id: 'test',
      state: 'open',
      contact: { name: 'Test' }
    };
    const conversationView = shallow(<ConversationView conversation={conversation} />);

    expect(conversationView.find('header').length).toEqual(1);
  })
})
