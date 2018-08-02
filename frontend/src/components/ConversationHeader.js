import React from 'react';

import '../styles/ConversationHeader.css';

export default function ConversationHeader({ contact }) {
    return (
        <header className="conversation-header">
          <span className="user-name">{contact.name}</span>
        </header>
    );
};
