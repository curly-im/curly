import React from 'react';

import ConversationHeader from './ConversationHeader';
import Messages from './Messages';
import MessageInput from './MessageInput';

import '../styles/ConversationView.css';

function renderView(conversation, messages, onSendMessage) {
    if (!conversation || !conversation.id) return (<div>No conversation selected</div>);

    const { contact } = conversation;

    return (
        <section className="conversation-section">
          <ConversationHeader contact={contact} />
          <Messages messages={messages} contact={contact} />
          <MessageInput onSendMessage={onSendMessage} />
        </section>
    );
}

export default function ConversationView({ conversation, messages, onSendMessage }) {
    return renderView(conversation, messages, onSendMessage);
}
