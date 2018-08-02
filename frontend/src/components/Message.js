import React from 'react';

import '../styles/Message.css';

export default function Message({ message, contact }) {
    const messageTypeClass = message.incoming ? 'incoming' : 'outgoing';
    const className = `message ${messageTypeClass}`;

    return (
        <div className={className}>
          <span className="sender-name">
            <i>({messageTypeClass}) {contact.name}</i>
          </span>
          <div>
            {message.content}
          </div>
        </div>
    );
}
