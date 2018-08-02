import React from 'react';

import Message from '../styles/Message.css';

export default function Messages({ messages=[], contact={} }) {
    if (!messages.length) return (<div className="messages">No messages yet</div>);

    const items = messages.map((message, index) => (
        <Message message={message} contact={contact} key={index} />
    ));

    return (
        <div className="messages">
          {items}
        </div>
    );
}
